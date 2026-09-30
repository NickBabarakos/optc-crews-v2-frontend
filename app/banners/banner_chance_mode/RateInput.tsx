import { RateInputProps } from "@/app/banners/_types";

export default function RateInput({label, value, onChange, variant="amber"}: RateInputProps){
    const isRed = variant === "red";
    const labelColor = isRed ? "text-[#fca5a5]" : "text-[#f5c690]";
    const textColor = isRed ? "text-[#ef4444]" : "text-[#fbbf24]";
    const focusBorder = isRed ? "focus:border-[#ef4444]" : "focus:border-[#cf8e24]";
    const placeholderColor = isRed ? "placeholder:text-red-950/50" : "placeholder:text-amber-900/50";

    const noArrows = "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

    return(
        <div className="flex flex-col gap-1">
            <label className={`text-[10px] font-black tracking-wider uppercase ${labelColor}`}>{label}</label>
            <div className="relative">
                <input
                    type="number"
                    inputMode="decimal"
                    step="0.001"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e)=> onChange(e.target.value)}
                    placeholder="0.000"
                    className={`h-9 w-full bg-[#0d0401] border border-[#854508] ${focusBorder} rounded-md px-2 ${textColor} ${placeholderColor} text-sm font-bold outline-none transition-all text-center ${noArrows}`}
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#854508] font-bold text-[10px]">%</span>
            </div>
        </div>
    );
}