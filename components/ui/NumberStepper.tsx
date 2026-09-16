interface NumberStepperProps{
    onIncrement: ()=> void;
    onDecrement: ()=> void;
    canIncrement: boolean;
    canDecrement: boolean;
    className?: string;
}

export function NumberStepper({onIncrement, onDecrement, canIncrement, canDecrement, className=""}: NumberStepperProps){
    return(
        <div className={`flex items-center bg-slate-950/90 border border-slate-800/80 rounded-lg p-0.5 shadow-inner ${className}`}>
            <button
                type="button"
                disabled={!canDecrement}
                onClick={onDecrement}
                className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-sm font-bold active:scale-95"
                aria-label="Decrease"
            >-</button>

            <div className="w-px h-4 bg-slate-800 shrink-0"/>

            <button 
                type="button"
                disabled={!canIncrement}
                onClick={onIncrement}
                className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-sm font-bold active:scale-95"
                aria-label="Increase"
            >+</button>
        </div>
    );
}