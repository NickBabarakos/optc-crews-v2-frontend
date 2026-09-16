import { CharacterSummary } from "@/app/characters/_types/characters";
import { RARITY_WEIGHTS } from "@/app/characters/_constants/filters";
import { OwnedCharacter } from "@/components/interactive-character/types";


export function sortCharacters(filteredCharacters:CharacterSummary[], sorting:string, collection: Record<number, OwnedCharacter>):CharacterSummary[]{

    //1. Default Sorting if there is no param (ID ASC)
    if(!sorting) return [...filteredCharacters].sort((a,b) => a.id - b.id);

    const [sortField, sortDir] = sorting.split(':');
    const multiplier = sortDir === 'desc'? -1 : 1;
    const sorted = [...filteredCharacters];

    const collator = sortField === 'name' ? new Intl.Collator(undefined, {sensitivity: 'base', numeric: true}): null;

   sorted.sort((a, b) => {
        let comparison = 0;

        switch (sortField) {
            case 'id':
                comparison = a.id - b.id;
                break;

            case 'level': {
                const levelA = collection[a.id]?.copies || 0;
                const levelB = collection[b.id]?.copies || 0;
                comparison = levelA - levelB;
                break;
            }
                
            case 'name':
                comparison = collator ? collator.compare(a.name, b.name) : a.name.localeCompare(b.name);
                break;
                    
            case 'rarity': {
                const weightA = RARITY_WEIGHTS[a.stars] || 0;
                const weightB = RARITY_WEIGHTS[b.stars] || 0;
                comparison = weightA - weightB;
                break;
            }
                    
            case 'atk':
                comparison = (a.maxATK || 0) - (b.maxATK || 0);
                break;
                    
            case 'hp':
                comparison = (a.maxHP || 0) - (b.maxHP || 0);
                break;
                    
            case 'rcv':
                comparison = (a.maxRCV || 0) - (b.maxRCV || 0);
                break;
                    
            case 'cost':
                comparison = (a.cost || 0) - (b.cost || 0);
                break;

            case 'lbPlus': {
                const lbWeightA = collection[a.id]?.limitBreakPlus ? 1 : 0;
                const lbWeightB = collection[b.id]?.limitBreakPlus ? 1 : 0;
                comparison = lbWeightA - lbWeightB;
                break;
            }

            case 'rumbleLbPlus': {
                const rlbWeightA = collection[a.id]?.rumbleLimitBreakPlus ? 1 : 0;
                const rlbWeightB = collection[b.id]?.rumbleLimitBreakPlus ? 1 : 0;
                comparison = rlbWeightA - rlbWeightB;
                break;
            }
                    
            default:
                comparison = 0;
        }

        // Αν υπάρχει διαφορά στο κύριο κριτήριο, επιστρέφουμε το αποτέλεσμα με τη σωστή κατεύθυνση (ASC/DESC)
        if (comparison !== 0) {
            return comparison * multiplier;
        }

        // Tie-breaker: Σε περίπτωση απόλυτης ισοβαθμίας, ταξινομούμε πάντα με βάση το ID σε αύξουσα σειρά (ASC)
        return a.id - b.id;

    });

    return sorted;
}