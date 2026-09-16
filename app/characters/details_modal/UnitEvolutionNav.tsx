import { NavButtonProps, UnitEvolutionNavProps } from "@/app/characters/_types/details-modal";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import { getImageSource } from "@/utils/getImageSource";



export function UnitEvolutionNav({ preId, superEvolution, onNavigate}: UnitEvolutionNavProps) {

    const superId = superEvolution?.id;
    const evolvers = superEvolution?.evolvers || [];

    if (!preId && !superId) return null;

    return (
        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* 1. Pre-Evolution (Left) */}
            <div className="flex-1 w-full sm:w-auto flex justify-start">
                {preId && (
                    <NavButton
                        id={preId}
                        label="Pre-Evolution"
                        onClick={() => onNavigate(preId)}
                    />
                )}
            </div>

            {/* 2. Evolvers Card (Center) */}
            {evolvers.length > 0 && (
                <div className="flex flex-col items-center justify-center px-4 py-2.5 bg-slate-950/40 border border-slate-800/80 rounded-xl h-22">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                        Evolvers
                    </span>
                    <div className="flex items-center gap-2">
                        {evolvers.map((evolver, idx) => (
                            <div
                                key={`${evolver}-${idx}`}
                                className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-lg border border-slate-700/60 bg-slate-950 overflow-hidden hover:border-gold-500/60 hover:scale-105 transition-all cursor-pointer shadow-sm"
                                title={evolver}
                            >
                                <img
                                    src={getImageSource(evolver, 'evolverIcon')}
                                    alt={evolver}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 3. Super Evolution (Right) */}
            <div className="flex-1 w-full sm:w-auto flex justify-end">
                {superId && (
                    <NavButton
                        id={superId}
                        label="Super Evolution"
                        isRight
                        onClick={() => onNavigate(superId)}
                    />
                )}
            </div>

        </div>
    );
}

function NavButton({ id, label, isRight, onClick }: NavButtonProps) {
    const paddedId = String(id).padStart(4, "0");
    const imageUrl = getImageSource(`unit_icons/${paddedId}`, 'unitIcon');

    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center px-5 py-2.5 bg-slate-950/40 border border-slate-800/80 rounded-xl hover:border-gold-500/50 hover:bg-slate-800/80 transition-all cursor-pointer group h-22 min-w-42"
        >
            {/* 1. Label στο κέντρο */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 text-center">
                {label}
            </span>

            {/* 2. Περιεχόμενο στο κέντρο */}
            <div className={`flex items-center justify-center gap-3 w-full ${isRight ? "flex-row-reverse" : "flex-row"}`}>
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-lg border border-slate-700 bg-slate-950 overflow-hidden group-hover:border-gold-500/50 group-hover:scale-105 transition-all shadow-sm">
                    <img
                        src={imageUrl}
                        alt={`Unit ${id}`}
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                    />
                </div>

                <div className={`flex items-center gap-1.5 text-sm font-black text-white ${isRight ? "flex-row-reverse" : ""}`}>
                    {isRight ? (
                        <ArrowRightIcon className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                    ) : (
                        <ArrowLeftIcon className="w-4 h-4 text-gold-500 group-hover:-translate-x-1 transition-transform" />
                    )}
                    <span className="font-mono tracking-tight">#{id}</span>
                </div>
            </div>
        </button>
    );
}



