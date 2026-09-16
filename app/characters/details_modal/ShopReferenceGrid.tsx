import { ShopItemReference } from '@/app/characters/_types/characters';
import {ShopReferenceCard} from './ShopReferenceCard'

export function ShopReferenceGrid({header, items} :{header:string, items:ShopItemReference[]}){

    return(
        <div className="flex flex-col p-3 bg-slate-900/60 border border-slate-800 rounded-xl">

            {/*Header*/}
            <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{header}</span>
                <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded">
                    {items.length} {items.length === 1 ? "SHOP" : "SHOPS"}
                </span>
            </div>

            {/*Items List*/}
            <div className="flex flex-col gap-1">
                {items.map((item, index) =>{
                    return(
                        <ShopReferenceCard
                            key={`${item.shop}-${index}`}
                            shopName={item.shop}
                            currency={item.currency}
                            price={item.price}
                        />
                    )
                }
            )}
            </div>
        </div>

    )
}