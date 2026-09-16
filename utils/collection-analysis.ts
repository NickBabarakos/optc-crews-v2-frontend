import { CharacterSummary } from "@/app/characters/_types/characters";
import { COPIES_FOR_LEVEL, LLB_STYLES } from "@/app/characters/_constants/filters";
import { OwnedCharacter } from "@/components/interactive-character/types";

// --- OWNED & RAINBOW ---
export function getOwnedUnits(characters: CharacterSummary[], collection: Record<number, OwnedCharacter>): CharacterSummary[] {
    return characters.filter(char => !!collection[char.id]);
}

export function getOwnedCount(characters: CharacterSummary[], collection: Record<number, OwnedCharacter>): number {
    return characters.reduce((acc, char) => collection[char.id] ? acc + 1 : acc, 0);
}

export function getRainbowCount(characters: CharacterSummary[], collection: Record<number, OwnedCharacter>): number {
    return characters.reduce((acc, char) => collection[char.id]?.rainbowed ? acc + 1 : acc, 0);
}

// --- LIMIT BREAK PLUS (LB+) ---
export function getLBPlusUnits(characters: CharacterSummary[], collection: Record<number, OwnedCharacter>): CharacterSummary[] {
    return characters.filter(char => !!collection[char.id] && char.hasLimitBreakPlus);
}

export function getOwnedLBPlusEligibleUnits(characters: CharacterSummary[], collection: Record<number, OwnedCharacter>):CharacterSummary[]{
    return characters.filter(
        (char) => collection[char.id] && char.hasLimitBreakPlus
    );
}

export function getLBPlusMaxedCount(characters: CharacterSummary[], collection: Record<number, OwnedCharacter>): number {
    return characters.reduce((acc, char) => collection[char.id]?.limitBreakPlus ? acc + 1 : acc, 0);
}

// --- RUMBLE LIMIT BREAK PLUS (RLB+) ---
export function getRumbleLBPlusUnits(characters: CharacterSummary[], collection: Record<number, OwnedCharacter>): CharacterSummary[] {
    return characters.filter(char => !!collection[char.id] && char.hasRumbleLimitBreakPlus);
}

export function getRumbleLBPlusMaxedCount(characters: CharacterSummary[], collection: Record<number, OwnedCharacter>): number {
    return characters.reduce((acc, char) => collection[char.id]?.rumbleLimitBreakPlus ? acc + 1 : acc, 0);
}


// --- LLB CONFIGURATION ---
export function configureLLB(copies: number) {
    const level = COPIES_FOR_LEVEL
        .filter(item => copies >= item.copies)
        .pop()?.level;
    
    let levelLabel; 

    if (level === 99 || level === 150) {
        levelLabel = 'MAX';
    } else {
        levelLabel = level?.toString();
    }

    const levelLabelStyles = LLB_STYLES.find(c => level === c.level)?.style;

    return { levelLabel, levelLabelStyles };
}

