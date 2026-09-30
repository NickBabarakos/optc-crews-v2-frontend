import { RecruitableUnitProps } from "@/app/banners/_types";
import { InteractiveCharacter } from "@/components/interactive-character/InteractiveCharacter";
import {SolidArrowUpIcon } from "@/components/ui/icons";
import { getImageSource } from "@/utils/getImageSource";
import { memo } from "react";



function RecruitableUnitComponent({character, isBoosted=false, showCopies=false}:RecruitableUnitProps){
    return(
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <InteractiveCharacter
                {...character}
                src={getImageSource(character.imageUrl, 'unitIcon')}
                context={showCopies ? 'copies' : 'normal'}
                showLLB={false}
            />

            {isBoosted && (
                <>
                    <div className="absolute inset-0 pointer-events-none z-20  
                                    border-[3px] border-cyan-400  
                                    animate-pulse 
                                    shadow-[0_0_15px_rgba(34,211,238,0.8),inset_0_0_8px_rgba(34,211,238,0.6)]"
                    />
                    <div className="absolute -top-1.5 -right-0.5 z-30 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <SolidArrowUpIcon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.8)]" />
                    </div>
                </>
            )}
        </div>
    );
}

export const RecruitableUnit = memo(RecruitableUnitComponent);
export default RecruitableUnit;