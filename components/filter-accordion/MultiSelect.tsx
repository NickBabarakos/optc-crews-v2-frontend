import { MULTI_SELECT_CONFIGS } from "@/components/filter-accordion/select-config";
import { IconItem, StarItem, TextItem } from "@/components/filter-accordion/renderers";
import { MultiSelectProps } from "@/components/filter-accordion/types";
import { toggleMultiSelectValue } from "@/components/filter-accordion/utils";
import { SELECT_THEMES } from "@/components/filter-accordion/themes/select-themes";


export default function MultiSelect({variant, options, selectedValues, onChange, color="base"}: MultiSelectProps){
    const config = MULTI_SELECT_CONFIGS[variant];
    const theme = SELECT_THEMES[color] ?? SELECT_THEMES.base;

    const handleToggle = (option: string | number) => {
        const newValues = toggleMultiSelectValue(selectedValues, option);
        onChange(newValues);
    };

    const renderOptionContent = (option: string | number, isSelected: boolean)=> {
        switch(config.renderer){
            case "stars":
                return <StarItem option={option} isSelected={isSelected} color={color}/>;
            case "icon":
                return <IconItem option={option} iconSize={config.iconSize}/>;
            case "text":
            default:
                return <TextItem option={option} />; 
        }
    };

    const isIconVariant = config.renderer === "icon";

return (
        <div className={config.container}>
            {options.map((option) => {
                const val = String(option);
                const isSelected = selectedValues.includes(val);
                const stateClass = isIconVariant
                    ? (isSelected ? config.selected : config.unselected)
                    : (isSelected ? theme.selected : theme.unselected);

                return (
                    <button
                        key={val}
                        type="button"
                        onClick={() => handleToggle(option)}
                        className={config.button}
                    >
                        <div
                            className={`${config.item} ${stateClass}`}
                        >
                            {renderOptionContent(option, isSelected)}
                        </div>
                    </button>
                );
            })}
        </div>
    );
}