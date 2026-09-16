interface Props{
    title: string;
    color: string;
}

export default function CategoryIndicator ({title, color}: Props){
    return(
        <div className="w-full mb-6">
            <div className="flex items-center gap-3 mb-2">
                <div 
                    className="h-6 w-1 rounded-full" 
                    style={{ backgroundColor: color}}/>
                
                <h2 className="text-xl font-bold uppercase tracking-wider text-white leading-none">{title}</h2>
            </div>
            <div className="h-[px] w-full opacity-20 bg-white"/>
        </div>


    )
}