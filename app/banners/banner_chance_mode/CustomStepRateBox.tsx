"use client";

import { CustomStepRateBoxProps } from "@/app/banners/_types";
import RateInput from "@/app/banners/banner_chance_mode/RateInput";
import BannerStepBox from "@/app/banners/banner_modal/BannerStepBox";
import GameNumber from "@/components/common/GameNumber";


export default function CustomStepRateBox({stepType,stepNumbers,normalRate,lastRate,onNormalChange,onLastChange,}
: CustomStepRateBoxProps) {

    return (
        <div className="flex flex-col h-full border-2 border-[#b87c1e] rounded-lg overflow-hidden shadow-lg shadow-black/50">
            
            {/* 1. Header - Step Numbers */}
            <div className="bg-linear-to-r from-[#4a1f05] to-[#2b1002] px-2.5 py-1.5 border-b-2 border-[#b87c1e] flex items-center flex-wrap min-h-7 select-none">
                <GameNumber
                    value={stepNumbers}
                    heightClass="h-3 md:h-4"
                />
            </div>

            <div className="flex-1 min-w-0">
                <BannerStepBox stepType={stepType} showGiftSection={false}>
                    <div className="grid grid-cols-2 gap-3 items-center">
                        <RateInput 
                            label="Posters 1-10"
                            value={normalRate}
                            onChange={onNormalChange}
                            variant="amber"
                        />

                        <RateInput
                            label="11th Poster"
                            value={lastRate}
                            onChange={onLastChange}
                            variant="red"
                        />
                    </div>
                </BannerStepBox>
            </div>
        </div>
    );
}