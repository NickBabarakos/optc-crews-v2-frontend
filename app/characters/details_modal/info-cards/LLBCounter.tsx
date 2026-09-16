'use client';

import { useCharacterLLB } from "@/app/characters/_hooks/useCharacterLLB";
import { getLLBTheme } from "@/components/ui/themes/llb-themes";
import { NumberStepper } from "@/components/ui/NumberStepper";
import { useStoreHydrated } from "@/store/useStoreHydrated";


export default function LLBCounter({ id, className = "" }: { id: number; className?: string }) {
  const isHydrated = useStoreHydrated();
  const llb = useCharacterLLB(id);

  // If localStorage is not loaded, showing a safe neutral state
  if (!isHydrated) {
    return (
      <div className={`flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border border-slate-800 rounded-xl min-h-14 animate-pulse ${className}`}>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Level Limit Break</span>
        <span className="text-xs font-semibold text-slate-600">Loading...</span>
      </div>
    );
  }

  if (!llb.isOwned) {
    return (
      <div className={`flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border border-slate-800 rounded-xl min-h-14 ${className}`}>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Level Limit Break</span>
        <span className="text-xs font-semibold text-slate-500">Not Owned</span>
      </div>
    );
  }

  const theme = getLLBTheme(llb.level);

  return (
    <div className={`relative overflow-hidden flex items-center justify-between px-4 py-2 bg-slate-900/60 border rounded-xl min-h-14 transition-all duration-500 ${theme.border} ${className}`}>

      {/*Progress Bar Layer*/}
      <div className={`absolute inset-y-0 left-0 transition-all duration-500 ease-out pointer-events-none ${theme.fill}`} style={{ width: `${llb.percentage}%` }}/>

      {/*Text & Level Info*/}
      <div className="relative z-10 flex flex-col justify-center shrink-0">
        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${theme.label}`}>Level Limit Break</span>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={`text-sm font-black font-mono tracking-wide transition-colors duration-300 ${theme.text}`}>LVL {llb.level}</span>
          {llb.isMaxLevel && (
            <span className="text-[10px] font-black uppercase px-1.5 py-0.2 bg-red-500 text-white rounded shadow-sm animate-pulse">MAX</span>
          )}
        </div>
      </div>

      {/*Controls*/}
      <div className="relative z-10 flex items-center gap-2.5">
        <div className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border transition-colors ${theme.badge}`}>
          {llb.isMaxLevel ? "10/10" : `${llb.copies}/10`}
        </div>
        <NumberStepper
          onIncrement={llb.increment}
          onDecrement={llb.decrement}
          canIncrement={llb.canAdd}
          canDecrement={llb.canRemove}
        />
      </div>
    </div>
  );
}