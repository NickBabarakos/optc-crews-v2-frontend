import { SelectTheme, SelectThemeColor } from "@/components/filter-accordion/themes/select-themes";

export type MultiSelectVariant = "text" | "stars" | "types" | "classes";

export interface MultiSelectProps{
    variant: MultiSelectVariant;
    options: (string | number)[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    color?: SelectThemeColor;
}