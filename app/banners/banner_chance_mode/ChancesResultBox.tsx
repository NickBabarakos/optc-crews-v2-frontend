"use client";

import { getChanceTheme } from "@/app/banners/_themes/chances-result-box-themes";
import { CalculationResult, ChancesResultBoxProps } from "@/app/banners/_types";
import { useMemo } from "react";



export default function ChancesResultBox({ results }: ChancesResultBoxProps){
    if (!results || results.length === 0) return null;
    const finalResult = results[results.length -1];
    const heroTheme = getChanceTheme(finalResult.chance);

    return(
         <div className="mt-8 space-y-6 animate-in fade-in duration-500">
            
            {/* Summary Hero Section */}
            <div className={`
                    border rounded-2xl p-6 text-center transition-all duration-500
                    ${heroTheme.heroBg} ${heroTheme.heroBorder} ${heroTheme.heroGlow}
                `}>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1.5">Total Probability of Success</p>

                <div className="flex flex-col items-center justify-center">
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${heroTheme.heroText}`}>
                        {finalResult.chance}%
                    </h2>
                    <p className="text-slate-400 text-sm mt-2">
                        After <span className="text-white font-bold">{results.length} steps</span>, you have a{" "}
                        <span className="text-white font-bold">{finalResult.chance}%</span> chance of obtaining your selected targets
                    </p>
                </div>
            </div>

            {/* Grid of Results */}
            <div className="space-y-4">
                <h3 className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] px-1">
                    Accumulated Probability per Step:
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2.5">
                    {results.map((r) => (
                        <StepChanceCard key={r.step} step={r.step} chance={r.chance} />
                    ))}
                </div>
            </div>
        </div>
    );
}


function StepChanceCard({step, chance}: CalculationResult){
    const theme = useMemo(()=> getChanceTheme(chance), [chance]);
    const isMilestone = step % 5 === 0;

    return(
        <div 
            className={`
                relative flex flex-col items-center justify-center py-2.5 px-2 rounded-xl border transition-all duration-200
                ${theme.cardBg} ${theme.cardBorder}
                ${isMilestone ? "ring-1 ring-white/20 shadow-md" : ""}
                hover:brightness-110
                `}
            >
                {/*Step Badge*/}
                <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md mb-1 ${theme.badgeBg} ${theme.badgeText}`}>
                    STEP {step}
                </span>

                {/*Percentage*/}
                <span className={`text-sm tracking-tight ${theme.valueText}`}>
                    {chance}%
                </span>
            </div>
    );
}