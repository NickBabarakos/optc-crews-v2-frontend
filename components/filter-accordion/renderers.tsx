import { SELECT_THEMES, SelectThemeColor } from "@/components/filter-accordion/themes/select-themes";
import { StarIcon } from "@/components/ui/icons";
import Image from "next/image";



//1. Text Renderer 
export function TextItem({option}: {option: string | number}){
    return <span>{option}</span>
}

//2. Stars Renderer
interface StarItemProps{
    option: string | number;
    isSelected: boolean;
    color?: SelectThemeColor;
}

export function StarItem({ option, isSelected, color = "base" }: StarItemProps) {
    const val = String(option);
    const starCount = parseInt(val, 10) || 0;
    const hasPlus = val.includes("+");

    const starTheme = SELECT_THEMES[color]?.stars ?? SELECT_THEMES.base.stars;

    const starColorClass = isSelected
        ? starTheme?.starSelected
        : starTheme?.starUnselected;
    
    const plusColorClass = isSelected
        ? starTheme?.plusSelected
        : starTheme?.plusUnselected;

    return (
        <div className="flex items-center justify-center gap-0.5">
            {Array.from({ length: starCount }).map((_, i) => (
                <StarIcon
                    key={i}
                    className={`w-3 h-3 transition-colors duration-150 ${starColorClass}`}
                />
            ))}
            {hasPlus && (
                <span
                    className={`text-[12px] font-bold ml-0.5 transition-colors duration-150 ${plusColorClass}`}
                >+</span>
            )}
        </div>
    );
}

//3. Icon Renderer
interface IconItemProp{
    option: string | number;
    iconSize?: number;
}

export function IconItem({option, iconSize=33}: IconItemProp){
    const val = String(option).toLowerCase();

    return (
        <Image
            src={`/filter-icons/${val}.png`}
            alt={val}
            width={iconSize}
            height={iconSize}
            className="object-contain"
            priority
        />
    );
}

//4. Sort Renderer
interface SortItemProps{
    option: string | number;
    isSelected: boolean;
    direction?: "asc" | "desc" | null;
}

export function SortItem({option, isSelected, direction}: SortItemProps){
    return(
        <div className="relative flex items-center justify-center w-full">
            <span className="text-center">{option}</span>

            <span className="absolute right-0 w-3 text-center text-[9px]">
                {isSelected && direction === "asc" && "▲"}
                {isSelected && direction === "desc" && "▼"}
            </span>
        </div>
    )
}