
import { Evolution } from "@/app/characters/_types/characters";

//--------------------------
// Interactive Characters
//-------------------------
export interface InteractiveCharacterProps{
    id: number;
    name: string;
    category: string;
    src: string;
    context: CharacterMode; 
    size?: number;
    showLLB: boolean;
    evolution?: Evolution;
    onSelect?: (id: number) => void;
}

export interface useCharacterInteractionsProps{
    id: number;
    category: string;
    context: CharacterMode;
    evolution?: Evolution;
    onSelect?: (id: number) => void;
}


export interface CharacterOverlaysProps{
    context: CharacterMode;
    copies: number;
    size?: number;
    isRainbowed: boolean;
    showLLB?: boolean;
    limitBreakPlus?: boolean;
    rumbleBadgeSrc?: string;
}

export interface OwnedCharacter{
    id: number;
    category: string;
    rainbowed: boolean;
    copies: number;
    limitBreakPlus: boolean;
    rumbleLimitBreakPlus: boolean;
}

export interface CollectionState{
    collection: Record<number, OwnedCharacter>;
    
    toggleCharacter: (char: OwnedCharacter) => void;
    toggleRainbow: (id: number) => void;
    toggleLimitBreakPlus: (id: number) => void;
    toggleRumbleLimitBreakPlus: (id: number) => void;
    addCopies: (id: number) => void;
    removeCopies: (id: number) => void;
}

//---------------------------------
//Types
//---------------------------------
export type CharacterMode = 
    | 'normal'
    | 'copies'
    | 'rainbow'
    | 'limitBreakPlus'
    | 'rumbleLimitBreakPlus'
    | 'viewOnly';

