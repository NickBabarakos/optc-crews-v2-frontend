export interface ToolbarTheme{
    container: string;
}

export const TOOLBAR_THEMES ={
    base: {
        container: "bg-slate-900 backdrop-blur-md border border-white/10 shadow-lg",
    },
    characters: {
        container: "bg-slate-900/80 backdrop-blur-md border border-red-500/20 shadow-[0_4px_20px_-4px_rgba(255, 61, 57, 0.15)]"
    },
} as const;

export type ToolbarVariant = keyof typeof TOOLBAR_THEMES;