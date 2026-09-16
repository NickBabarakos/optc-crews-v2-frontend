
export const getRarityStyles = (stars: string) => {
    const isPlus = stars.includes('+');
    const num = parseInt(stars);

    switch(num){
        case 6:
            return isPlus 
                ? { text: 'text-violet-500', bg: 'bg-violet-500/10', border: 'border-violet-500/30', solidBg: 'bg-violet-500' }
                : { text: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30', solidBg: 'bg-red-500' };
        case 5:
            return isPlus 
                ? { text: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/30', solidBg: 'bg-sky-400' }
                : { text: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30', solidBg: 'bg-yellow-400' };
        case 4:
            return isPlus 
                ? { text: 'text-slate-500', bg: 'bg-slate-500/10', border: 'border-slate-500/30', solidBg: 'bg-slate-600' }
                : { text: 'text-slate-300', bg: 'bg-slate-300/10', border: 'border-slate-300/30', solidBg: 'bg-slate-400' };
        default:
            return { text: 'text-text-400', bg: 'bg-slate-800/10', border: 'border-slate-800/30', solidBg: 'bg-slate-700' };

    }   
}