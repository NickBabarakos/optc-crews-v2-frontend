"use client"
import {useEffect, useState} from "react";
import CustomStepRateBox from "./CustomStepRateBox";
import ChancesResultBox from "./ChancesResultBox";
import { buildCustomCharacterGroup } from "@/app/banners/_utils/banner-chances-utils";
import { CharacterGroup, CustomChancesModeProps } from "@/app/banners/_types";
import { useBatchCompletionCalculator } from "@/app/banners/_hooks/useBatchCompletionCalculator";


export default function CustomChancesMode({banner, stepConfigs}: CustomChancesModeProps){
    const [stepRates, setStepRates] = useState<Record<number, { normal: string; last: string }>>(() => {
        const initial: Record<number, { normal: string; last: string }> = {};
        banner.steps.forEach((_, idx) => {
            initial[idx] = { normal: "", last: "" };
        });
        return initial;
    });
    const [activeGroups, setActiveGroups] = useState<CharacterGroup[]>([]);

    const results = useBatchCompletionCalculator(stepConfigs, activeGroups);

    const handleRateChange = (index: number, field: 'normal' | 'last', value: string) => {
        setStepRates(prev => ({
            ...prev,
            [index]: {...prev[index], [field]: value}
        }));

        if(activeGroups.length >0) setActiveGroups([]);
    };

    const isReady =
        Object.keys(stepRates).length > 0 &&
        Object.values(stepRates).every((r) => r.normal.trim() !== "" && r.last.trim() !== "");

    const triggerCalculate = () => {
        if (!isReady) return;

        const customGroup = buildCustomCharacterGroup(banner.steps.length, stepRates);
        setActiveGroups([customGroup]);
    };

    return(
        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
                {banner.steps.map((step, index) => (
                <CustomStepRateBox 
                    key={index}
                    stepType={step.stepType}
                    stepNumbers={step.stepNumbers} 
                    normalRate={stepRates[index]?.normal ?? ""}
                    lastRate={stepRates[index]?.last ?? ""}
                    onNormalChange={(val) => handleRateChange(index, "normal", val)}
                    onLastChange={(val) => handleRateChange(index, "last", val)}
                />
            ))}
            </div>

            <button 
                disabled={!isReady}
                onClick={triggerCalculate}
                className={`h-14 w-full text-white font-[1000] text-lg uppercase rounded-2xl transition-all 
                                        ${!isReady 
                                        ? 'bg-[#D78E11]/40 cursor-not-allowed text-white/50' 
                                        : 'bg-[#D78E11] hover:bg-[#E59C2E] active:scale-[0.98]'
                                        }`}
            >
                {isReady ? "Calculate Custom Probabilities" : "Fill All Rates To Calculate"}
            </button>

            {activeGroups.length >0 && <ChancesResultBox results={results}/>}
        </div>       
    );
}