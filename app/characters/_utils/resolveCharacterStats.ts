import { CharacterSummary } from "@/app/characters/_types/characters";
import { ModeResult } from "@/app/characters/_types/filters";
import { CharacterMode, OwnedCharacter } from "@/components/interactive-character/types";
import { 
    getOwnedCount, 
    getOwnedUnits, 
    getRainbowCount, 
    getLBPlusUnits, 
    getLBPlusMaxedCount, 
    getRumbleLBPlusUnits, 
    getRumbleLBPlusMaxedCount,
    getOwnedLBPlusEligibleUnits
} from "@/utils/collection-analysis";


export function resolveCharacterStats(sortedCharacters: CharacterSummary[],mode: CharacterMode,collection: Record<number, OwnedCharacter>): ModeResult {
    switch (mode) {
        case 'rainbow': {
            const eligibleUnits = getOwnedLBPlusEligibleUnits(sortedCharacters, collection);
            const rainbowedCount = getRainbowCount(eligibleUnits, collection);

            return {
                data: eligibleUnits,
                stats: [
                    {
                        label: 'Rainbowed',
                        value: rainbowedCount,
                        valueClassName: 'text-cyan-400'
                    },
                    {
                        label: 'Owned',
                        value: eligibleUnits.length,
                        valueClassName: 'text-gold-400'
                    }
                ]
            };
        }

        case 'limitBreakPlus': {
            const lbUnits = getLBPlusUnits(sortedCharacters, collection);
            const lbMaxedCount = getLBPlusMaxedCount(lbUnits, collection);

            return {
                data: lbUnits,
                stats: [
                    {
                        label: 'LB+',
                        value: lbMaxedCount,
                        valueClassName: 'text-purple-400'
                    },
                    {
                        label: 'Owned',
                        value: lbUnits.length,
                        valueClassName: 'text-gold-400'
                    }
                ]
            };
        }

        case 'rumbleLimitBreakPlus': {
            const rlbUnits = getRumbleLBPlusUnits(sortedCharacters, collection);
            const rlbMaxedCount = getRumbleLBPlusMaxedCount(rlbUnits, collection);

            return {
                data: rlbUnits,
                stats: [
                    {
                        label: 'RLB+',
                        value: rlbMaxedCount,
                        valueClassName: 'text-amber-400'
                    },
                    {
                        label: 'Owned',
                        value: rlbUnits.length,
                        valueClassName: 'text-gold-400'
                    }
                ]
            };
        }

        case 'copies':
        case 'normal':
        default: {
            const ownedCount = getOwnedCount(sortedCharacters, collection);

            return {
                data: sortedCharacters,
                stats: [
                    {
                        label: 'Owned',
                        value: ownedCount,
                        valueClassName: 'text-gold-400'
                    },
                    {
                        label: 'Found',
                        value: sortedCharacters.length,
                        valueClassName: 'text-red-500'
                    }
                ]
            };
        }
    }
}