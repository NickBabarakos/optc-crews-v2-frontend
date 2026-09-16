import { StarIcon } from "@/components/ui/icons";
import { getRarityStyles } from "@/utils/ui-styles-helper";


export default function RenderStars({stars}: {stars:string}){
    const num = parseInt(stars);
    const hasPlus = stars.includes('+');
    if (isNaN(num)) return null;

    const styles = getRarityStyles(stars);

    return(
        <div className="flex items-center justify-center gap-0.5">
                {[...Array(num)].map((_,i) => (
                    <StarIcon 
                        key={i} 
                        className={`w-3 h-3 ${styles.text} drop-shadow-sm`}
                    />
                ))}
                {hasPlus &&  <span className={`text-[10px] font-black ml-0.5 ${styles.text} leading -none self-center mt-0.5`}>+</span>}
            </div>
        );

}

