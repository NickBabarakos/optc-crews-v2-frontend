import { CharacterSummary } from "@/app/characters/_types/characters";
import { RecruitableChars } from "./banner-api";

// ==========================================
// RECRUITABLE CHARACTERS TAB
// ==========================================

export interface RecruitableCategoryGroupProps {
    group: RecruitableChars;
    characterMap: Map<number, CharacterSummary>;
    showCopies: boolean;
}

export interface RecruitableUnitProps {
    character: CharacterSummary;
    isBoosted?: boolean;
    showCopies?: boolean;
}

export interface UseRecruitableCategoryReturn {
    boostedCharacters: CharacterSummary[];
    normalCharacters: CharacterSummary[];
    ownedCount: number;
    totalCount: number;
    isComplete: boolean;
    hasUnits: boolean;
}