'use client';

import BannerStepBox from '@/app/banners/banner_modal/BannerStepBox';
import { ViewToggle } from '@/components/ui/ViewToggle';
import { useBannerSteps } from '@/app/banners/_hooks/useBannerSteps';
import GameNumber from '@/components/common/GameNumber';
import { BannerStepsProps, CompactStepGroup, FlattenedStep } from '@/app/banners/_types';

export default function BannerSteps({steps, gifts}: BannerStepsProps){
    const {viewMode, setViewMode, allFlattenedSteps, compactGroups, hasSteps} = useBannerSteps(steps, gifts);

    if(!hasSteps){
        return(
            <div role="status" className="p-12 text-center text-gray-400 font-medium">
                No steps information available for this banner
            </div>
        );
    }

    return(
        <div className="space-y-4">

            {/* View Mode Toggle */}
            <ViewToggle
                options={['LIST', 'COMPACT']}
                activeOption={viewMode}
                onClick={setViewMode}
            />

            <div className="grid md:grid-cols-2 gap-3" role="region" aria-label="Banner Steps">
                {viewMode === 'LIST' 
                    ? allFlattenedSteps.map((step) => (
                        <StepListCard key={step.stepNumber} step={step} />
                    ))
                    : compactGroups.map((group)=> (
                        <StepCompactCard
                            key={group.numbers.join('-')}
                            group={group}
                        />
                    ))
                }

            </div>
        </div>
    );
}

function StepListCard({step}:{step:FlattenedStep}){
    return(
        <div className="flex items-stretch h-full border-2 border-[#b87c1e] rounded-lg overflow-hidden shadow-lg shadow-black/50">
            
            {/*Left Column: Big Step Number*/}
            <div className="flex flex-col items-center justify-center bg-linear-to-b from-[#4a1f05] to-[#2b1002] border-r-2 border-[#b87c1e] px-1.5 md:px-3 w-16 min-w-16 md:w-24 md:min-w-24 shrink-0 text-center select-none">
                <GameNumber
                    value={step.stepNumber}
                    ordinal={true}
                    heightClass="h-7 md:h-8"
                />
            </div>

            {/*Right Column: Step Box Information*/}
            <div className="flex-1 min-w-0">
                <BannerStepBox
                    stepType={step.stepType}
                    legendCount={step.legendPoolCount}
                    rrCount={step.rareRecruitPoolCount}
                    gift={step.gift}
                />
            </div>
        </div>
    );
}

function StepCompactCard({group}: {group: CompactStepGroup}){
    return(
        <div className="flex flex-col h-full border-2 border-[#b87c1e] rounded-lg overflow-hidden shadow-lg shadow-black/50">

            {/*Top Bar: Compact Step Numbers */}
            <div className="bg-linear-to-r from-[#4a1f05] to-[#2b1002] px-2.5 py-1.5 border-b-2 border-[#b87c1e] flex items-center flex-wrap min-h-7 select-none">
                <GameNumber
                    value={group.numbers}
                    heightClass="h-3 md: h-4"
                />
            </div>

            {/*Bottom Content: Step Box Information*/}
            <div className="flex-1 min-w-0">
                <BannerStepBox
                    stepType={group.info.stepType}
                    legendCount={group.info.legendPoolCount}
                    rrCount={group.info.rareRecruitPoolCount}
                    gift={group.info.gift}
                />
            </div>
        </div>
    );
}