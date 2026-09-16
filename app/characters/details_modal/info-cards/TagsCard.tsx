import { TagsCardProps } from "@/app/characters/_types/details-modal";
import { getTagStyle } from "@/app/characters/_utils/getTagStyle";
import { InfoCard } from "@/app/characters/details_modal/info-cards/InfoCard";


export function TagsCard({tags, onTagClick, className=""}:TagsCardProps){

    return(
        <InfoCard title="Tags" className={className}>
            <div className="flex flex-wrap gap-1.5">
                {tags.length > 0 ? (
                    
                    tags.map((tag, idx) =>{
                        const tagStyle = getTagStyle(tag);

                        return(
                            <button 
                                key={`${tag}-${idx}`}
                                type="button"
                                onClick={()=> onTagClick?.(tag)}
                                className={`px-2.5 py-0.5 text-[11px] font-bold rounded-md uppercase tracking-tight border transition-all cursor-pointer shadow-sm active:scale-95 ${tagStyle}`}
                                title={`Filter by ${tag}`}
                            >{tag}</button>
                        );
                    })
                ):(
                    <span className="text-xs text-slate-500 font-medium">No Tags</span>
                )}
            </div>
        </InfoCard>
    );
}