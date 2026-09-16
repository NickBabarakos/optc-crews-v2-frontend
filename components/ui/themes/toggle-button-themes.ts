export interface ToggleButtonTheme{
    inactive: string;
    active: string;
}

export const TOGGLE_BUTTON_THEMES ={
    base:{
        inactive: "border-slate-800 bg-slate-900/90 text-slate-400 hover:border-slate-600 hover:bg-slate-800 hover:text-slate-200",
        active: "border-red-500/80 bg-red-950/60 text-white shadow-[0_0_15px_rgba(239,68,68,0.25)] ring-1 ring-red-500/50",
    }
} as const;

export type ToggleButtonColor = keyof typeof TOGGLE_BUTTON_THEMES; 