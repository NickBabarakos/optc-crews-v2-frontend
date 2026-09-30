import { MultiSelectVariant } from "@/components/filter-accordion/types";


export interface VariantConfig{
    container: string;
    button: string;
    item: string;
    selected: string;
    unselected: string;
    renderer: "text" | "stars" | "icon" | "sort";
    iconSize?: number;
}

export const MULTI_SELECT_CONFIGS: Record<MultiSelectVariant, VariantConfig> ={
    //1. Text Variant 
    text: {
        renderer: "text",
        container: "flex flex-col gap-1.5 max-h-64 overflow-y-auto pr-2 custom-scrollbar",
        button: "w-full cursor-pointer transition-all duration-200",
        item: "w-full px-3 py-2.5 text-[10px] font-bold rounded-lg border uppercase tracking-widest transition-all text-center",
        selected: "",
        unselected: "",
    },

    //2. Stars Variant 
    stars: {
        renderer: "stars",
        container: "grid grid-cols-2 gap-2",
        button: "w-full cursor-pointer transition-all duration-200",
        item: "w-full px-2 py-2 rounded-lg border transition-all flex justify-center items-center",
        selected: "",
        unselected: "",
    },

    //3. Types Variant
    types: {
        renderer: "icon",
        iconSize: 40,
        container: "grid grid-cols-5 gap-2",
        button: "cursor-pointer transition-all duration-200",
        item: "relative rounded-full transition-all duration-300",
        selected: "drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] brightness-110",
        unselected: "grayscale-60 opacity-60 hover:grayscale-0 hover:opacity-100",
    },

    //4. Classes Variant
    classes: {
        renderer: "icon",
        iconSize: 35,
        container: "grid grid-cols-5 gap-2",
        button: "cursor-pointer transition-all duration-200",
        item: "relative rounded-full transition-all duration-300",
        selected: "drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] brightness-110",
        unselected: "grayscale-60 opacity-60 hover:grayscale-0 hover:opacity-100",
    },
}
