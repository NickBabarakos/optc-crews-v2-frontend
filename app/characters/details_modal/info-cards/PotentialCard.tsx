import { InfoCard } from "@/app/characters/details_modal/info-cards/InfoCard";

export function PotentialCard({potentials, className=""}:{potentials:string[], className?:string}){

    return(
        <InfoCard title="Potentials" orientation="horizontal" className={className}>
            <div className="flex items-center gap-2.5 flex-wrap">
                {potentials.length > 0 ? (
                    potentials.map((pot, idx) => (
                        <div 
                            key={`${pot}-${idx}`}
                            className="relative w-8 h-8 shrink-0 transition-transform cursor-pointer"
                            title={pot}
                        > 
                            <img 
                                src={`/potential-abilities/${pot}.png`}
                                alt={pot}
                                className="w-full h-full object-contain drop-shadow"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    ))
                ):(
                    <span className="text-sm text-slate-500 font-medium">None</span>
                )}
            </div>
        </InfoCard>

    );
}