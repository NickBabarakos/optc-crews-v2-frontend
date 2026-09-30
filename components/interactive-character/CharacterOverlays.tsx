import { configureLLB } from "@/utils/collection-analysis"
import { CharacterOverlaysProps } from "@/components/interactive-character/types";
import { memo } from "react";



function CharacterOverlaysComponent({context, copies, size, isRainbowed, showLLB, limitBreakPlus, rumbleBadgeSrc}:CharacterOverlaysProps){
    const  {levelLabel, levelLabelStyles} = configureLLB(copies);

    const isNormalOrExtendedMode = context === 'normal' || context === 'rainbow' || context === 'viewOnly';

    const shouldShowLimitBreakPlus = limitBreakPlus && ( 
        context === 'limitBreakPlus' || (isNormalOrExtendedMode && showLLB)
    );


    return(
        <>
            {/* Rainvow Cover */}
            {isRainbowed && (
            <img 
                src="/rainbow-cover.png" 
                alt="rainbow case"
                width={size ?? 112}
                height={size ?? 112}
                loading ="eager"
                decoding ="async"
                className="absolute inset-0 z-20 object-cover pointer-events-none animate-rainbow-pulse"
            /> 
            )}

            {/*2. Copies Context Overlay*/}
            {context === 'copies' && copies > 0 && (
                <div className="absolute inset-0 z-50 grid place-items-center pointer-events-none select-none">
                    <span className={`
                        ${size ? (size === 80 ? 'text-3xl translate-y-0.5' : 'text-4xl translate-y-0.75') : 'text-2xl sm:text-3xl translate-y-0.5'}
                        font-black text-white leading-none
                        drop-shadow-[0_2px_8px_rgba(0,0,0,1)]
                        [-webkit-text-stroke:1.5px_black]
                        tracking-tighter 
                    `}>
                        {copies}
                    </span>
                </div>
            )}

            {/*3. LimitBreakPlus Badge*/}
            {shouldShowLimitBreakPlus && (
                <div className="absolute top-0.5 right-0 z-30 pointer-events-none select-none">
                    <img
                        src="/lb+badge.png"
                        alt="Limit Break Plus Badge"
                        width={37}
                        height={37}
                        loading="eager"
                        decoding="async"
                        className={`${size ? 'w-9.25 h-9.25' : 'w-6 h-6 sm:w-8 sm:h-8'} object-contain`}
                    />
                </div>
            )}

            {/*4. RumbleLimitBreakPlus Badge*/}
            {context === 'rumbleLimitBreakPlus' && rumbleBadgeSrc && (
                <div className="absolute top-1/2 -translate-y-1/2 right-0 z-30 pointer-events-none select-none">
                    <img
                        src={rumbleBadgeSrc}
                        alt="Rumble Limit Break Plus Badge"
                        width={28}
                        height={28}
                        loading="eager"
                        decoding="async"
                        className={`${size ? 'w-7 h-7' : 'w-5 h-5 sm:w-6 sm:h-6'} object-contain`}
                    />
                </div>
            )}

            {/*5. LLB Level Indicator*/}
            {showLLB && context !== "copies" && (
                <div className="absolute bottom-0.5 right-1 z-30 pointer-events-none select-none">
                    <div className="flex items-baseline gap-0 font-black italic uppercase [paint-order:stroke_fill] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        <span className={`${size ? 'text-[11px]' : 'text-[9px] sm:text-[11px]'} 
                                        text-white [-webkit-text-stroke:3px_black]`}>Lv.</span>
                        <span className={`${size ? 'text-[17px]' : 'text-[13px] sm:text-[17px]'} 
                                          ${levelLabelStyles} [-webkit-text-stroke:3px_black]`}>{levelLabel}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export const CharacterOverlays = memo(CharacterOverlaysComponent);
export default CharacterOverlays;