export interface AccordionTheme {
    border: string;
    borderOpenActive: string,
    header: string;
    headerOpen: string;
    headerActive: string;
    content: string;
    contentIsActive: string;
}

export const ACCORDION_THEMES ={
  base: {
    border: "ring-slate-300 border-slate-300",
    borderOpenActive: "",
    header: "bg-[#102A78] text-slate-300 hover:bg-[#2563EB] hover:text-slate-50",
    headerOpen: "bg-[#2563EB] text-[#FFFFFF]",
    headerActive: "bg-[#B91C1C] text-[#FFFFFF]",
    content: "bg-[#020616] text-slate-200",
    contentActive: "bg-red-900 text-white",
  },
} as const;


export type AccordionThemeColor = keyof typeof ACCORDION_THEMES; 