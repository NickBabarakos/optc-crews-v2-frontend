export function ViewToggle({options, activeOption, onClick}: {options?:string[], activeOption:string, onClick: (val:any)=> void}){


    return(
        <div className="flex gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 w-fit mx-auto">
            {options?.map((val)=>(
                <button 
                    key={val}
                    onClick={()=> onClick(val)}
                    className={`px-6 py-1.5 rounded-lg text-xs font-bold uppercase transition-all
                        ${activeOption === val 
                            ? 'bg-slate-800 text-gold-400 shadow-inner' 
                            : 'text-text-500 hover:text-text-200'}`}
                >{val}</button>
            ))}
        </div>
    )
    
}