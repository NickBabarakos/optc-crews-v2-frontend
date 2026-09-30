import PoolPill from "@/app/banners/_components/PoolPill";
import { BannerStepBoxProps } from "@/app/banners/_types";
import { getImageSource } from "@/utils/getImageSource";
import { memo } from "react";

function BannerStepBoxComponent({stepType, gift, legendCount, rrCount, children, showGiftSection=true}: BannerStepBoxProps){
    const hasRR = typeof rrCount === "number" && rrCount >0;
    const hasLegend = typeof legendCount === "number" && legendCount > 0;
    return(
        <div className="bg-[#1f0b01] uppercase tracking-tight flex flex-col h-full">

            {/* Step Label Image Section*/}
            <div className="px-3 border-b border-[#854508] bg-linear-to-b from-[#cf8e24] to-[#b27116] flex items-center justify-start h-14 shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                <img 
                    src={getImageSource(stepType, 'stepLabel')}
                    alt={stepType}
                    width={420}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="max-h-9 w-auto object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.55)]"
                />
            </div>
            

            {/* Secondary Gift Section (Softer Amber-Gold) */}
            {showGiftSection && (
            <div className="px-3 border-b border-[#381A01] bg-linear-to-b from-[#cf8e24] to-[#AB5D13] h-11 shrink-0 flex items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                {gift && (
                    <img 
                        src={getImageSource(gift, 'stepLabel')}
                        alt={gift}
                        width={420}
                        height={48}
                        loading="lazy"
                        decoding="async"
                        className="max-h-8 w-auto object-contain drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]"
                    />
                )}
            </div>
            )}

            {/* Inputs Section or Pools Section(Default) */}
            {children ? (
                <div className="border-t border-[#4a1f05] bg-linear-to-b from-[#210c02] via-[#180701] to-[#120500] p-2.5">
                    {children}
                </div> 
            ) : ( 
                <div className="flex items-stretch h-10 shrink-0 border-t border-[#4a1f05]">
                    {/* POOLS Label */}
                    <div className="w-14 md:w-24 shrink-0 flex items-center justify-center bg-linear-to-b from-[#3a1703] to-[#240d02] border-r-2 border-[#b87c1e] px-1 md:px-2 text-[9px] md:text-[10px] font-bold text-[#f5c690] text-center uppercase tracking-wider">
                        POOLS
                    </div>

                    {/* Pills Container */}
                    <div className="flex-1 px-2.5 flex items-center gap-2 overflow-hidden bg-linear-to-b from-[#210c02] via-[#180701] to-[#120500]">
                        {/* Legend Pool Pill */}
                        {hasLegend && (
                            <PoolPill
                                label="Legends"
                                value={legendCount}
                                color="red"
                            />
                        )}

                        {hasRR && (
                            <PoolPill
                                label="RR"
                                value={rrCount}
                                color="gold"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(BannerStepBoxComponent);