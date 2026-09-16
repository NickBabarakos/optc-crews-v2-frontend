import { SortItem } from "@/components/filter-accordion/renderers";
import { SELECT_THEMES, SelectThemeColor } from "@/components/filter-accordion/themes/select-themes";
import { getNextSortState } from "@/components/filter-accordion/utils";

interface SortOption{
    label: string;
    value: string;
}

interface SortSelectProps{
    options: SortOption[];
    selectedValue: string;
    onChange: (newValue:string) => void;
    color?: SelectThemeColor;
}


export default function SortSelect({options, selectedValue, onChange, color="base"}: SortSelectProps){
    const [currentField, currentDir] = selectedValue.split(':');
    const theme = SELECT_THEMES[color] ?? SELECT_THEMES.base;


    return(
         <div className="flex flex-col gap-1.5 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {options.map((option) => {
                const isSelected = currentField === option.value;

                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange(getNextSortState(selectedValue, option.value))}
                        className="w-full cursor-pointer transition-all duration-200"
                    >
                        <div
                            className={`w-full px-3 py-2.5 text-[10px] font-bold rounded-lg border uppercase tracking-widest transition-all ${
                                isSelected ? theme.selected : theme.unselected
                            }`}
                        >
                            <SortItem
                                option={option.label}
                                isSelected={isSelected}
                                direction={isSelected ? (currentDir as "asc" | "desc"): null}
                            />
                        </div>
                    </button>
                );
            })}
        </div>
    );
}



