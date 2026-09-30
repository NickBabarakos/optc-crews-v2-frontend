import { CalculationResult, CharacterGroup, StepConfig } from '@/app/banners/_types';
import { getAtLeastKSuccessChance } from '@/utils/probability';
import { useMemo } from 'react';


export const useBatchCompletionCalculator = (steps: StepConfig[], characterGroups: CharacterGroup[]): CalculationResult[] => {
    return useMemo(() => {
        // Αν δεν υπάρχουν steps ή δεν έχει επιλεγεί κανένα group χαρακτήρων
        if (steps.length === 0 || characterGroups.length === 0) {
            return [];
        }

        const results: CalculationResult[] = [];

        // [1]: Δημιουργία χάρτη { stepNumber => stepId } για O(1) αναζήτηση
        const stepMap = new Map<number, number>();
        let maxStep = 0;
        steps.forEach(s => {
            s.numbers.forEach(n => {
                stepMap.set(n, s.stepId);
                if (n > maxStep) maxStep = n;
            });
        });

        if (maxStep === 0) return [];

        // [2]: Προϋπολογισμός πιθανοτήτων αποτυχίας ανά step type για κάθε group
        const precalculatedFailures = characterGroups.map(group => {
            const failureMap = new Map<number, number>();
            group.rates.forEach(r => {
                const [normal = 0, last = 0] = r.rates;
                const probFailNormal = Math.pow(Math.max(0, 1 - normal / 100), 10);
                const probFailLast = Math.max(0, 1 - last / 100);
                failureMap.set(r.stepId, probFailNormal * probFailLast);
            });
            return failureMap;
        });

        // [3]: Accumulator αποτυχίας ανά group (ξεκινάει από 1.0 = 100% failure)
        const groupFailureAccumulators = characterGroups.map(() => 1.0);

        // [4]: Υπολογισμός αθροιστικής πιθανότητας ανά step
        for (let i = 1; i <= maxStep; i++) {
            const currentStepId = stepMap.get(i);

            let totalBatchSuccessChance = 1.0;

            for (let g=0; g< characterGroups.length; g++){
                const group = characterGroups[g];

                if(currentStepId !== undefined){
                    const stepFailureChance = precalculatedFailures[g].get(currentStepId);
                    if (stepFailureChance != undefined) groupFailureAccumulators[g] *= stepFailureChance;
                }

                const rawSuccess = 1- groupFailureAccumulators[g];
                const individualSuccessChance = Math.min(1, Math.max(0, rawSuccess));

                let allInGroupSuccessChance: number;
                if (group.requiredCount <= 0) allInGroupSuccessChance = 1.0;
                else if (group.characterCount === group.requiredCount){
                    allInGroupSuccessChance = group.requiredCount === 1
                        ? individualSuccessChance
                        : Math.pow(individualSuccessChance, group.requiredCount);
                } else{
                    allInGroupSuccessChance = getAtLeastKSuccessChance(
                        individualSuccessChance,
                        group.characterCount,
                        group.requiredCount
                    );
                }
                totalBatchSuccessChance *= allInGroupSuccessChance;
            }

            results.push({
                step: i,
                chance: Number((totalBatchSuccessChance *100).toFixed(3))
            });
        }

        return results;
    }, [steps, characterGroups]);
};