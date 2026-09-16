export interface LLBTheme{
    fill: string;
    border:string;
    text: string;
    badge: string;
    label: string;
}


export const LLB_THEMES: Record<number, LLBTheme> ={
  150: {
    fill: "bg-gradient-to-r from-red-600/50 via-rose-600/40 to-red-500/60",
    border: "border-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.25)]",
    text: "text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]",
    badge: "text-red-300 bg-red-950/80 border-red-500/40",
    label: "text-red-100 drop-shadow-sm",
  },
  130: {
    fill: "bg-gradient-to-r from-rose-500/35 to-red-500/30",
    border: "border-rose-500/50",
    text: "text-rose-400",
    badge: "text-rose-300 bg-rose-950/60 border-rose-500/30",
    label: "text-rose-200/90",
  },
  120: {
    fill: "bg-gradient-to-r from-orange-500/30 to-amber-500/25",
    border: "border-orange-500/40",
    text: "text-orange-400",
    badge: "text-orange-300 bg-orange-950/60 border-orange-500/30",
    label: "text-orange-200/85",
  },
  110: {
    fill: "bg-gradient-to-r from-yellow-500/30 via-amber-500/25 to-yellow-400/20",
    border: "border-yellow-500/50",
    text: "text-yellow-300",
    badge: "text-yellow-200 bg-yellow-950/70 border-yellow-500/40",
    label: "text-yellow-100/85",
  },
  105: {
    fill: "bg-gradient-to-r from-amber-500/25 to-yellow-500/20",
    border: "border-amber-500/40",
    text: "text-amber-400",
    badge: "text-amber-300 bg-amber-950/60 border-amber-500/30",
    label: "text-amber-200/80"
  },
  99: {
    fill: "bg-slate-800/20",
    border: "border-slate-800",
    text: "text-slate-300",
    badge: "text-slate-400 bg-slate-900 border-slate-700/50",
    label: "text-slate-400",
  },
}

export function getLLBTheme(level:number): LLBTheme{
    if (level >=150) return LLB_THEMES[150];
    if (level >=130) return LLB_THEMES[130];
    if (level >=120) return LLB_THEMES[120];
    if (level >=110) return LLB_THEMES[110];
    if (level >=105) return LLB_THEMES[105];
    return LLB_THEMES[99];

}