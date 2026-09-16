import { InfoCardProps } from "@/app/characters/_types/details-modal";



export function InfoCard({title, children, orientation="vertical", titleColor="text-slate-400", className="", dividerColor=""}:InfoCardProps){

    const baseBoxStyles = "bg-slate-950/40 border border-slate-800/80 rounded-xl shadow-inner";

    if(orientation === "horizontal"){
        return(
            <div className={`flex items-center gap-4 px-4 py-2 min-h-13 ${baseBoxStyles} ${className}`}>

                {/*Title*/}
                <span className={`text-[10px] font-bold uppercase tracking-widest shrink-0 ${titleColor}`}>{title}</span>

                {/*Divider*/}
                <div className={`w-px h-5 bg-slate-800 shrink-0 ${dividerColor}`}/>

                {/*Content*/}
                <div className="flex-1 flex items-center min-w-0">
                    {children}
                </div>
            </div>
        );
    }

    //Vertical Orientation (Default)
    return(
        <div className={`flex flex-col gap-1.5 sm:px-4 sm:py-2.5 ${baseBoxStyles} ${className}`}>

            {/*Title*/}
            <span className={`text-[10px] font-bold uppercase tracking-widest ${titleColor}`}>{title}</span>

            {/*Content*/}
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}