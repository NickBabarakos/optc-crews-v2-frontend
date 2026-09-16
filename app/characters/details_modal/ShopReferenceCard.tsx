import { ShopReferenceCardProps } from "@/app/characters/_types/details-modal";
import { formatShopName } from "@/utils/string-manipulation";

export function ShopReferenceCard({shopName, currency, price}: ShopReferenceCardProps){

    return(
        <div className="flex items-center justify-between h-9 px-3 rounded-lg bg-slate-950/40 border border-slate-800/50 hover:bg-slate-800/40 hover:border-slate-700/80 transition-all group">

            {/*Shop Name*/}
            <div className="flex items-center gap-2 min-w-0">
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide truncate group-hover:text-white transition-colors">
                    {formatShopName(shopName)}
                </span>
            </div>

            {/*Price & Currency*/}
            <div className="flex items-center gap-2 shrink-0 ml-3">
                <span className="text-xs font-black text-amber-400 font-mono tracking-tight group-hover:text-amber-300 transition-colors">{price.toLocaleString()}</span>
                <div className="relative w-5 h-5 flex items-center justify-center">
                    <img
                        src={`/game-currency/${currency}.png`}
                        alt={currency}
                        width={18}
                        height={18}
                        loading="eager"
                        decoding="async"
                        className="w-4.5 h-4.5 object-contain drop-shadow"
                    />
                </div>

            </div>
        </div>
    )
}