//------------------------------
// Character Object from Backend

import { UnitForm } from "@/app/characters/_types/details-modal";
import { CharacterMode } from "@/components/interactive-character/types";

//------------------------------
export interface CharacterSummary {
    id: number;
    unitType: string;
    name: string;
    imageUrl: string;
    category: string;
    type: string[];
    classes: string[];
    stars: string;
    cost: number;
    maxHP: number;
    maxATK: number;
    maxRCV: number;

    potentialAbilities?: string[];
    hasLimitBreakPlus: boolean;
    hasRumbleLimitBreakPlus: boolean;
    unitItems?: ShopItemReference[];
    skullItems?: ShopItemReference[];

    family: Family;
    tags: Tags;
    evolution?: Evolution; 
}

export interface SuperEvolutionDetails{
    id: number;
    evolvers: string[];
}

export interface Evolution{
    preEvolutionId?: number;
    superEvolution?: SuperEvolutionDetails;
}

export interface Family {
    form1: string[];
    form2?: string[];
}

export interface Tags{
    form1: string[];
    form2?: string[];
}

export interface ShopItemReference{
    shop: string;
    price: number;
    currency: string;
}

export interface CharacterForm{
    formKey: UnitForm;
    types: string[];
    classes: string[];
    tags: string[];
    families: string[];
    potentials?: string[];
}

export interface CharacterGridProps{
    data: CharacterSummary[];
    context: CharacterMode;
    showLLB: boolean;
    onSelectCharacter: (id: number) => void;
}
