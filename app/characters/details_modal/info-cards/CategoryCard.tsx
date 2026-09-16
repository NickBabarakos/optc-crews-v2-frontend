import { CategoryCardProps } from "@/app/characters/_types/details-modal";
import { InfoCard } from "@/app/characters/details_modal/info-cards/InfoCard";
import { getRarityStyles } from "@/utils/ui-styles-helper";




export function CategoryCard({category, stars, className=""}:CategoryCardProps){
    const styles = getRarityStyles(stars);

    return(
        <InfoCard title="Category" className={className}>
            <span className={`text-[13px] font-black uppercase tracking-wider leading-snug ${styles.text}`}>{category}</span>
        </InfoCard>
    );
}