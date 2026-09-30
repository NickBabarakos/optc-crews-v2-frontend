import { CharacterGroup, NewCharactersIds, StepConfig, Steps } from "@/app/banners/_types";

/**
 * Transforms the banner steps to an StepConfig array for the probability calculator
 */
export function buildStepConfig(steps: Steps[]):StepConfig[]{
    if (!steps || !Array.isArray(steps)) return [];
    return steps.map((step, index)=> ({
        stepId: index,
        numbers: step.stepNumbers,
    })); 
}

/**
 * Extracts all the IDs (Legends & Rare Recruits) from the new batch
 */
export function extractBatchCharacterIds(newCharacterIds?: NewCharactersIds | null): number[]{
    if (!newCharacterIds) return [];
    const legends = newCharacterIds.newLegendsIds ?? [];
    const rrs = newCharacterIds.newRareRecruitsIds ?? [];
    return [...legends, ...rrs];
}

/**
 * Creates the CharacterGroups for the NewBatchMode with safe searching of the rate groups.
 * @param steps 
 * @param selectedIds 
 * @returns 
 */
export function buildBatchCharacterGroups(steps: Steps[], selectedIds: number[]): CharacterGroup[]{
    if (!steps || steps.length === 0 || selectedIds.length === 0) return [];

    const stepWithRates = steps.find((s) => s.characterRates && s.characterRates.length > 0);
    if (!stepWithRates) return [];

    const baseGroups = stepWithRates.characterRates;
    const groups: CharacterGroup[] = [];

    baseGroups.forEach((baseGroup, groupIndex) => {

        const selectedInGroup = baseGroup.ids.filter((id) => selectedIds.includes(id));
        if (selectedInGroup.length === 0) return;

        groups.push({
            characterCount: selectedInGroup.length,
            requiredCount: selectedInGroup.length,
            rates: steps.map((step, stepIndex) => {
                const stepRateEntry = 
                    step.characterRates?.find((cr)=> cr.ids.some((id) => baseGroup.ids.includes(id))) 
                        ?? step.characterRates?.[groupIndex];

                    return{
                        stepId: stepIndex,
                        rates: stepRateEntry
                            ? [stepRateEntry.chances[0] ?? 0, stepRateEntry.chances[1] ?? 0]
                            : [0, 0],
                    };
            }),
        });
    });

    return groups;
}

/**
 * Creates the CharacterGroup for CustomChancesMode based on the input rates
 * @param stepCount 
 * @param stepRates 
 * @returns 
 */
export function buildCustomCharacterGroup(stepCount: number, stepRates: Record<number, {normal: string; last: string}>):CharacterGroup{
    return{
        characterCount: 1,
        requiredCount: 1,
        rates: Array.from({length: stepCount}, (_, index) => {
            const current = stepRates[index];
            const normal = current ? parseFloat(current.normal) || 0 : 0;
            const last = current ? parseFloat(current.last) || 0 : 0;

            return{
                stepId: index,
                rates: [normal, last],
            };
        }),
    };
}