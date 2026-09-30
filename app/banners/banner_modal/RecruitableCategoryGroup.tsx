import { useRecruitableCategory } from "@/app/banners/_hooks/useRecruitableCategory";
import RecruitableUnit from "@/app/banners/_components/RecruitableUnit";
import { memo } from "react";
import { RecruitableCategoryGroupProps } from "@/app/banners/_types";



function RecruitableCategoryGroupComponent({group, characterMap, showCopies}: RecruitableCategoryGroupProps){
    const {boostedCharacters, normalCharacters, ownedCount, totalCount, isComplete, hasUnits} = useRecruitableCategory(group, characterMap);

    if(!hasUnits) return null;

    return(
        <div className="flex flex-col mb-8 last:mb-0 border border-slate-800 rounded-xl overflow-hidden bg-slate-900/20 shadow-md">

            {/*Header Box */}
            <div className="flex items-center justify-between px-3.5 py-2 sm:px-4 gap-2 bg-linear-to-r from-slate-800 to-slate-900 border-b border-white/10">
                <h3 className="text-xs sm:text-sm font-bold tracking-wide uppercase text-slate-200 min-w-0 leading-snug">
                    {group.category}
                </h3>

                <div className="flex items-center shrink-0">
                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border whitespace-nowrap transition-colors ${
                        isComplete
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : 'bg-slate-700/50 text-slate-300 border-white/5'
                    }`}>
                        {ownedCount} <span className="opacity-40 mx-0.5">/</span> {totalCount}
                    </span>
                </div>
            </div>

            {/*Characters Grid*/}
            <div className="p-3 bg-slate-950/20">
                <div className="grid grid-cols-[repeat(auto-fill,64px)] sm:grid-cols-[repeat(auto-fill,80px)] gap-1.5 justify-center">

                    {/*Rare-Boosted Units*/}
                    {boostedCharacters.map((char)=> (
                        <RecruitableUnit
                            key={`boosted-${char.id}`}
                            character={char}
                            isBoosted={true}
                            showCopies={showCopies}
                        />
                    ))}

                    {/*Normal Units*/}
                    {normalCharacters.map((char) => (
                        <RecruitableUnit
                            key={`normal-${char.id}`}
                            character={char}
                            isBoosted={false}
                            showCopies={showCopies}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export const RecruitableCategoryGroup = memo(RecruitableCategoryGroupComponent);
export default RecruitableCategoryGroup;