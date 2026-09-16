
interface ProgressBarProps{
    current: number,
    max: number,
    color: string,
    extraStyles?: string,
    unit?: string,
    showNumber?: boolean
}
export default function ProgressBar({current, max, color, extraStyles, unit, showNumber}: ProgressBarProps){
    const percentage = max > 0 ? Math.min((current/max)*100,100) : 100;
    

    return(
        <div className={`relative w-full h-4 bg-slate-900 rounded-full border border-slate-700 overflow-hidden ${extraStyles}`}>

            <div 
                className={`h-full ${color} transition-all duration-500 ease-out`}
                style={{ width: `${percentage}%`}}
            />

            {showNumber && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[10px] font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none">
                        {current}/{max} {unit}
                    </span>
                </div>
            )}

        </div>
    );

}