"use client";

import { useState, useMemo, useEffect } from "react";
import { CharacterSummary } from "@/app/characters/_types/characters";
import BatchCharacterSelector from "./BatchCharacterSelector";
import ChancesResultBox from "./ChancesResultBox";
import { buildBatchCharacterGroups, extractBatchCharacterIds } from "@/app/banners/_utils/banner-chances-utils";
import { CharacterGroup, NewBatchModeProps } from "@/app/banners/_types";
import { useBatchCompletionCalculator } from "@/app/banners/_hooks/useBatchCompletionCalculator";


export default function NewBatchMode({ banner, stepConfigs, characterMap }: NewBatchModeProps) {
    
    // 1. Collecting all the new batch character ids
    const batchCharacterIds = useMemo(() => {
        return extractBatchCharacterIds(banner.newCharactersIds);
    }, [banner.newCharactersIds]);

    // 2. State for all selected ids (default: all selected)
    const [selectedIds, setSelectedIds] = useState<number[]>(batchCharacterIds);
    const [activeGroups, setActiveGroups] = useState<CharacterGroup[]>([]);


    // 3. Chance calculation
    const results = useBatchCompletionCalculator(stepConfigs, activeGroups);

    const hasRates = useMemo(() => {
        return banner.steps.some(
            (step) => step.characterRates && step.characterRates.length > 0
        );
    }, [banner.steps]);

    // Select Character Toggle
    const handleToggle = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
        );
        // Clean results when the selection changes
        setActiveGroups([]);
    };

    // Calculation
    const handleCalculate = () => {
        if (selectedIds.length === 0 || banner.steps.length === 0) return;

        const groups = buildBatchCharacterGroups(banner.steps, selectedIds);
        setActiveGroups(groups);
    };

    if (!hasRates) {
        return (
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center shadow-xl">
                <div className="space-y-2">
                    <h3 className="text-slate-200 font-bold text-lg">Rates not available yet</h3>
                    <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                        Wait for the banners to drop for the rates to be available.
                    </p>
                </div>
            </div>
        );
    }

    const isButtonDisabled = selectedIds.length === 0;

    return (
        <div className="space-y-6">
            <div className="bg-slate-950/20 border border-slate-800/60 rounded-2xl p-6 md:p-8 shadow-inner space-y-6">
                <div className="space-y-1 text-center md:text-left">
                    <h3 className="text-base font-black text-white uppercase tracking-[0.12em]">
                        Select Targets
                    </h3>
                    <p className="text-[13px] text-slate-400 leading-relaxed">
                        Click on the characters you aim to pull. The calculator will determine the chances of pulling all of them.
                    </p>
                </div>

                {/* Character Selector Grid */}
                <BatchCharacterSelector
                    characterIds={batchCharacterIds}
                    characterMap={characterMap}
                    selectedIds={selectedIds}
                    onToggle={handleToggle}
                />

                {/* Calculate Button */}
                <button
                    onClick={handleCalculate}
                    disabled={isButtonDisabled}
                    className={`h-14 w-full text-white font-[1000] text-lg uppercase rounded-2xl transition-all ${
                        isButtonDisabled
                            ? "bg-[#D78E11]/40 cursor-not-allowed text-white/50"
                            : "bg-[#D78E11] hover:bg-[#E59C2E] active:scale-[0.98]"
                    }`}
                >
                    {isButtonDisabled ? "Select at least 1 character" : "Calculate"}
                </button>
            </div>

            {/* Results Box */}
            {activeGroups.length > 0 && <ChancesResultBox results={results} />}
        </div>
    );
}