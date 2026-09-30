import { formatStepRanges, getAccessibleOrdinalLabel, getOrdinalTokens } from "@/utils/number-manipulation";
import { memo } from "react";

interface GameNumberProps {
    value: number | string | number[];
    ordinal?: boolean;
    heightClass?: string; 
    className?: string;
}

const SYMBOL_MAP: Record<string, string> = {
    ',': ',',
    '-': '-',
};

function renderImageSequence(text: string, heightClass: string){
    return text.split("").map((char, idx) => {
        const token = SYMBOL_MAP[char] ?? char;
        return(
            <img 
                key={`${token}-${idx}`}
                src={`/digits/stepup_times_m/${token}.png`} 
                alt=""
                aria-hidden="true"
                draggable={false}
                loading="lazy"
                decoding="async"
                className={`${heightClass} w-auto object-contain select-none`}
            />
        );
    });
}


function GameNumberComponent({value, ordinal=false, heightClass="h-7 md:h-9", className=""}: GameNumberProps){

    //1. Oridnal View (eg "1st", "25th")
    if (ordinal && typeof value === 'number'){
        const tokens = getOrdinalTokens(value);

        return(
            <div 
                role="text"
                aria-label={getAccessibleOrdinalLabel(value)}
                className={`inline-flex items-center select-none shrink-0 ${className}`}
            >
                {tokens.map((token, idx) => (
                    <img 
                        key={`${token}-${idx}`}
                        src={`/digits/stepup_times_m/${token}.png`}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                        className={`${heightClass} w-auto object-contain drop-shadow`}
                    />
                ))}
            </div>
        );
    }

    //2. Compact Tanges View (e.g. "1-3, 5, 8")
    if (Array.isArray(value)){
        const groups = formatStepRanges(value);
        const accessibleLabel  = `Step: ${groups.map(g => g.type === 'range' ? `${g.start} to ${g.end}` : g.value).join(', ')}`;

        return(
            <div 
                role="text"
                aria-label={accessibleLabel}
                className={`inline-flex items-center flex-wrap gap-y-1 select-none ${className}`}
            >
                {groups.map((item, idx)=> {
                    const isLast = idx === groups.length - 1;
                    const sequenceText = item.type === 'single' ? String(item.value) : `${item.start}-${item.end}`;

                    return(
                        <span key={idx} className="inline-flex items-center whitespace-nowrap shrink-0">
                            {renderImageSequence(sequenceText, heightClass)}

                            {!isLast && (
                                <span className="mr-0.5 inline-flex items-center">
                                    {renderImageSequence(',', heightClass)}
                                </span>
                            )}
                        </span>
                    );
                })}
            </div>  
        );
    }


    //3. Fallback View (single number / raw string)
    return(
        <div 
            role="text"
            aria-label={String(value)}
            className={`inline-flex items-center select-none shrink-0 ${className}`}
        >
            {renderImageSequence(String(value), heightClass)}
        </div>
    );
}

export default memo(GameNumberComponent);