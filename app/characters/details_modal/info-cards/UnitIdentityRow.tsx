import { UnitIdentityRowProps } from "@/app/characters/_types/details-modal";
import RenderStars from "@/components/ui/RenderStars";
import { formatIconName } from "@/utils/string-manipulation";

export function UnitIdentityRow({types, classes, stars, cost}: UnitIdentityRowProps){
    return(
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-950/40 border border-slate-800/80 rounded-xl shadow-inner">

            {/*Group 1: Types & Classes*/}
            <div className="flex items-center gap-4">
                {/*Types*/}
                <div className="flex items-center gap-1.5 shrink-0">
                    {types.map((type, idx) => (
                        <img
                            key={`type-${type}-${idx}`}
                            src={`/filter-icons/${type.toLowerCase()}.png`}
                            alt={type}
                            className="w-7 h-7 object-contain drop-shadow"
                        />
                    ))}
                </div>

                {/*Vertical Dividier*/}
                <div className="w-px h-5 bg-slate-700/60 shrink-0"/>

                {/*Classes*/}
                <div className="flex items-center gap-1.5 shrink-0">
                    {classes.map((cls, idx) => (
                        <img
                            key={`class-${cls}-${idx}`}
                            src={`/filter-icons/${cls.toLowerCase()}.png`}
                            alt={cls}
                            className="w-7 h-7 object-contain drop-shadow"
                        /> 
                    ))}
                </div>
            </div>

            {/*Mobile Horizontal Devider*/}
            <div className="h-px bg-slate-800/80 sm:hidden"/>

            {/*Group 2: Cost & Stars */}
            <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">

                {/*Cost*/}
                <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Cost
                    </span>
                    <span className="text-base font-black text-white font-mono">
                        {cost}
                    </span>
                </div>

                {/*Vertical Divider (Desktop Only)*/}
                <div className="hidden sm:block w-px h-5 bg-slate-700/60 shrink-0"/>

                {/*Stars*/}
                <div className="flex items-center">
                    <RenderStars stars={stars}/>
                </div>
            </div>
        </div>
    );
}