import { CharacterForm, CharacterSummary } from "@/app/characters/_types/characters";

const formsCache = new WeakMap<CharacterSummary, CharacterForm[]>();

export function getCharacterForms(char: CharacterSummary): CharacterForm[] {
    if (!char) return [];

    //Cache Hit: return the reference
    const cached = formsCache.get(char);
    if (cached) return cached;

    //Cache Miss: Calculation for the first time
    const rawTypes = char.type || [];
    const rawClasses = char.classes || [];
    const rawPotentials = char.potentialAbilities || [];
    const form1Tags = char.tags?.form1 || [];
    const form2Tags = char.tags?.form2 || [];
    const form1Family = char.family?.form1 || [];
    const form2Family = char.family?.form2 || [];
    
    //Form1 
    const forms: CharacterForm[] =[
        {
            formKey: 'Char1',
            types: rawTypes[0] ? [rawTypes[0]] : [],
            classes: rawClasses.slice(0,2),
            tags: form1Tags,
            families: form1Family,
            potentials: char.unitType === 'VS' && rawPotentials.length === 4
                ? [rawPotentials[0], rawPotentials[1], rawPotentials[2]].filter(Boolean)
                : rawPotentials,
        }
    ];

    //Form2 (Dual & VS)
    if(char.unitType === 'VS' || char.unitType === 'Dual'){
        forms.push({
            formKey: 'Char2',
            types: rawTypes[1] ? [rawTypes[1]] : (rawTypes[0] ? [rawTypes[0]] : []),
            classes: rawClasses.slice(2,4),
            tags: form2Tags.length > 0 ? form2Tags : [],
            families: form2Family,
            potentials: char.unitType === 'VS' && rawPotentials.length === 4
                ? [rawPotentials[0], rawPotentials[1], rawPotentials[3]].filter(Boolean)
                : rawPotentials,
        });
    }

    //Form3 (Combined State/ Dual only)
    if(char.unitType === 'Dual' && rawClasses.length > 4){
        forms.push({
            formKey: 'Combined',
            types: Array.from(new Set(rawTypes)),
            classes: rawClasses.slice(4,6),
            tags: Array.from(new Set([...form1Tags, ...form2Tags])),
            families: Array.from(new Set([...form1Family, ...form2Family])),
            potentials: rawPotentials,
        });
    }

    formsCache.set(char, forms);

    return forms;

}