export interface SelectTheme{
    selected: string;
    unselected: string;
    stars?: {
        starSelected: string;
        starUnselected: string;
        plusSelected: string;
        plusUnselected: string;
    };
}

export const SELECT_THEMES = {
    base: {
        // Colors for the Button/Item 
        selected: "bg-[#E13D39] text-white border-slate-100 shadow-md",
        unselected: "bg-[#0b132b] text-slate-300 border-slate-700/50 hover:bg-[#1c2541] hover:text-white",
        
        // Colors for the StarItem
        stars: {
            starSelected: "text-white",
            starUnselected: "text-[#C7A355]",
            plusSelected: "text-white",
            plusUnselected: "text-[#C7A355]",
        },
    },
} as const satisfies Record<string, SelectTheme>;

export type SelectThemeColor = keyof typeof SELECT_THEMES;