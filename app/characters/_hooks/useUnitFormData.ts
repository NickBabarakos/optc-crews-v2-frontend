import { CharacterSummary } from "@/app/characters/_types/characters";
import { UnitForm } from "@/app/characters/_types/details-modal";
import { getCharacterForms } from "@/app/characters/_utils/getCharacterForms";
import { useMemo } from "react";

export interface UnitStatItem{
    label: string;
    value: number;
    color: string;
}

export interface UnitFormData{
    types: string[];
    classes: string[];
    potentials: string[];
    tags: string[];
    stats: UnitStatItem[];
}

export function useUnitFormData(char: CharacterSummary, form: UnitForm): UnitFormData{
    return useMemo(()=>{
        const forms = getCharacterForms(char);

        const selected = forms.find(f => f.formKey === form) || forms[0];

        const stats: UnitStatItem[]=[
            { label: "HP", value: char.maxHP, color: "text-emerald-400" },
            { label: "ATK", value: char.maxATK, color: "text-rose-400" },
            { label: "RCV", value: char.maxRCV, color: "text-amber-400" },            
        ];

        return{
            types: selected.types,
            classes: selected.classes,
            potentials: selected.potentials  || [],
            tags: selected.tags,
            stats
        };
    }, [char, form]);
}