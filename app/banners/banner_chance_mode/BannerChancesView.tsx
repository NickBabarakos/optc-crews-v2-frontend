"use client";

import { useState, useMemo } from "react";
import { ViewToggle } from "@/components/ui/ViewToggle";
import NewBatchMode from "./NewBatchMode";
import CustomChancesMode from "./CustomChancesMode";
import { buildStepConfig } from "@/app/banners/_utils/banner-chances-utils";
import { BannerChancesViewProps, ChancesViewMode, StepConfig } from "@/app/banners/_types";


export default function BannerChancesView({ banner, characterMap }: BannerChancesViewProps) {
    const [viewMode, setViewMode] = useState<ChancesViewMode>("New Batch");

    const stepConfigs: StepConfig[] = useMemo(() => {
        return buildStepConfig(banner.steps);
    }, [banner.steps]);

    return (
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <ViewToggle
                options={["New Batch", "Custom"]}
                activeOption={viewMode}
                onClick={(val) => setViewMode(val as ChancesViewMode)}
            />
            <div className="bg-slate-950/20 border border-slate-800/60 rounded-2xl p-6 md:p-8 shadow-inner">
                {viewMode === "New Batch" ? (
                    <NewBatchMode key={banner.id} banner={banner} stepConfigs={stepConfigs} characterMap={characterMap} />
                ) : (
                    <CustomChancesMode key={banner.id} banner={banner} stepConfigs={stepConfigs} />
                )}
            </div>
        </div>
    );
}