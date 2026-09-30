'use client';

import { BannerStepViewMode, Gifts, Steps } from "@/app/banners/_types";
import { buildCompactStepGroups, buildGiftMap, flattenBannerSteps } from "@/app/banners/_utils/banner-steps-utils";
import { useMemo, useState } from "react";



export function useBannerSteps(steps?: Steps[], gifts?: Gifts[], initialViewMode: BannerStepViewMode = 'COMPACT'){
    const [viewMode, setViewMode] = useState<BannerStepViewMode>(initialViewMode);

    //All step calculations. Change when steps and gifts change
    const {allFlattenedSteps, compactGroups} = useMemo(() => {
        if (!steps || steps.length === 0){
            return {
                allFlattenedSteps: [],
                compactGroups: []
            };
        }

        const giftMap = buildGiftMap(gifts);
        const flattened = flattenBannerSteps(steps, giftMap);
        const compact = buildCompactStepGroups(flattened);

        return{
            allFlattenedSteps: flattened,
            compactGroups: compact
        };
    }, [steps, gifts]);

    return {
        viewMode,
        setViewMode,
        allFlattenedSteps,
        compactGroups,
        hasSteps: allFlattenedSteps.length > 0
    };
}