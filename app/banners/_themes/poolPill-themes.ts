export const PILL_THEMES = {
    red: {
        container: "bg-red-900 border-white",
        label: "text-amber-100",
        value: "text-white",
    },
    gold: {
        container: "bg-yellow-600/80 border-white",
        label: "text-amber-100",
        value: "text-white",
    },
} as const;

export type PillThemeColor = keyof typeof PILL_THEMES;