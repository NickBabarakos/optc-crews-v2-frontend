import { CharacterSummary } from "@/app/characters/_types/characters";
import { CharacterMode } from "@/components/interactive-character/types";
import { PanelItem } from "@/components/ui/ResultPanel";
//---------------------------------
// Interfaces
//---------------------------------
export interface characterPageFilters{
    search:string;
    searchBy: SearchField[];
    types:string[];
    classes: string[];
    categories: string[];
    tags: string[];
    costs: string[];
    stars: string[];
    mode: CharacterMode;
    sorting: string;
}

export interface MatchesFiltersProps{
    char: CharacterSummary,
    filters: characterPageFilters,
    typeFilters: string[],
    unitTypeFilters: string[]
}

export interface ModeResult {
    data: CharacterSummary[];
    stats: PanelItem[];
}


//----------------------------------
// Types
//----------------------------------
export type SearchField = 'id' | 'name' | 'family';


