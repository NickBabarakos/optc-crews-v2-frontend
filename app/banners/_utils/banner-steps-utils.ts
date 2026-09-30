import { CompactStepGroup, FlattenedStep, Gifts, Steps } from "@/app/banners/_types";



/**
 * Creates a lookup map (stepNumber -> giftItem) for O(1) gift search per step
 * @param gifts - The list of the gifts of the banner
 * @returns - A record where the key is the stepNumber and the value is the name of the object
 */
export function buildGiftMap(gifts?: Gifts[]): Record<number, string>{
    const map: Record<number, string> = {};
    if (!gifts || !Array.isArray(gifts)) return map;

    for(const gift of gifts){
        if(Array.isArray(gift.steps)){
            for (const stepNum of gift.steps){
                map[stepNum] = gift.item;
            }
        }
    }

    return map;
}


/**
 * Creates a safe composite grouping key for Compact View
 * Uses a delimiter('::') for avoiding character conficts.
 */
function getStepGroupKey(step: FlattenedStep): string{
    return[
        step.stepType.trim(),
        step.legendPoolCount,
        step.rareRecruitPoolCount ?? 'null',
        step.gift ?? 'none'
    ].join('::');
}

/**
 * Transforms the grouped steps from the db to onedimentional sotted list based on stepNumber.
 * Also connects the gifts to their step numbers.
 * 
 * @param steps - The steps as we are getting them from the API
 * @param giftMap - The gift lookup map
 * @returns - Sorted FlattenedStep list
 */
export function flattenBannerSteps(steps?: Steps[], giftMap: Record<number, string> ={}): FlattenedStep[]{
    if (!steps || !Array.isArray(steps) || steps.length === 0) return [];

    const flattened: FlattenedStep[] = steps.flatMap((group) => {
        const numbers = group.stepNumbers || [];
        return numbers.map((stepNumber) => ({
            ...group,
            stepNumber,
            gift: giftMap[stepNumber],
        }));
    });

    return flattened.sort((a,b)=> a.stepNumber - b.stepNumber);
}

/**
 * Groups the steps that have the same attributes (stepType, pools, gift) to compact groups (CompactStepGroups),
 * sorted based on the first step they appear. 
 * @param flattenedSteps 
 * @returns 
 */
export function buildCompactStepGroups(flattenedSteps: FlattenedStep[]): CompactStepGroup[]{
    if (!flattenedSteps || flattenedSteps.length === 0) return [];

    const groupsMap = new Map<string, CompactStepGroup>();

    for (const step of flattenedSteps){
        const key = getStepGroupKey(step);
        const existingGroup = groupsMap.get(key);

        if(existingGroup) existingGroup.numbers.push(step.stepNumber);
        else {
            groupsMap.set(key, {
                info:step,
                numbers: [step.stepNumber]
            });
        }
    }

    //Sorting of the numbers inside every group and sorting groups based on the min stepNumber
    return Array.from(groupsMap.values())
        .map((group) => ({
            ...group,
            numbers: group.numbers.sort((a,b) => a-b),
        }))
        .sort((a,b) => a.numbers[0] - b.numbers[0]);
}