import { ChanceTheme } from "@/app/banners/_types";

export function getChanceTheme(chance: number): ChanceTheme{

    if(chance >= 100){
        return {
            cardBg: "bg-red-950/40",
            cardBorder: "border-red-500/70",
            badgeBg: "bg-red-500/25",
            badgeText: "text-red-200",
            valueText: "text-white font-black",

            heroBg: "bg-red-950/30",
            heroBorder: "border-red-500/60",
            heroGlow: "shadow-[0_0_35px_rgba(239,68,68,0.2)]",
            heroText: "text-red-400",
        };
    }

    if(chance >= 91){
        return {
            cardBg: "bg-rose-950/35",
            cardBorder: "border-rose-500/50",
            badgeBg: "bg-rose-500/20",
            badgeText: "text-rose-200",
            valueText: "text-white font-black",

            heroBg: "bg-rose-950/25",
            heroBorder: "border-rose-500/50",
            heroGlow: "shadow-[0_0_30px_rgba(244,63,94,0.15)]",
            heroText: "text-rose-400",
        };
    }

    if (chance >= 61) {
        return {
            cardBg: "bg-orange-950/30",
            cardBorder: "border-orange-500/40",
            badgeBg: "bg-orange-500/20",
            badgeText: "text-orange-200",
            valueText: "text-white font-black",

            heroBg: "bg-orange-950/20",
            heroBorder: "border-orange-500/40",
            heroGlow: "shadow-[0_0_30px_rgba(249,115,22,0.15)]",
            heroText: "text-orange-400",
        };
    }

    if (chance >= 31) {
        return {
            cardBg: "bg-amber-950/25",
            cardBorder: "border-amber-500/35",
            badgeBg: "bg-amber-500/20",
            badgeText: "text-amber-200",
            valueText: "text-white font-black",

            heroBg: "bg-amber-950/20",
            heroBorder: "border-amber-500/35",
            heroGlow: "shadow-[0_0_25px_rgba(245,158,11,0.12)]",
            heroText: "text-amber-400",
        };
    }

    return {
        cardBg: "bg-slate-950/40",
        cardBorder: "border-slate-800/80",
        badgeBg: "bg-slate-800/70",
        badgeText: "text-slate-300",
        valueText: "text-white/90 font-bold",

        heroBg: "bg-slate-950/40",
        heroBorder: "border-slate-800/80",
        heroGlow: "shadow-inner",
        heroText: "text-slate-200",
    };
}