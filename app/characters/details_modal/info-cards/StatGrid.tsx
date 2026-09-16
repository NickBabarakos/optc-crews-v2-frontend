import { StatItem } from "@/app/characters/_types/details-modal";

export function StatGrid({items, className=""}: {items: StatItem[], className?: string}){

    return(
        <div className={`grid grid-flow-col auto-cols-fr bg-slate-950/30 border border-slate-800 rounded-xl divide-x divide-slate-800 ${className}`}>

            {items.map((item) => (
                <div key={item.label} className="flex flex-col items-center justify-center py-2.5 px-3">
                    <span className={`text-[12px] font-bold uppercase tracking-wider ${item.color || "text-slate-400"}`}>
                        {item.label}
                    </span>
                    <span className="text-base font-black text-white tabular-nums">
                        {typeof item.value === "number" ? item.value.toLocaleString() : item.value}
                    </span>
                </div>
            ))}
        </div>
    );
}