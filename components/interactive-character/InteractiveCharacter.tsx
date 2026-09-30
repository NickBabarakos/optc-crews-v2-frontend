'use client';

import CharacterOverlays from './CharacterOverlays';
import { memo } from 'react';
import { useCharacterInteractions } from '@/components/interactive-character/useCharacterInteractions';
import { InteractiveCharacterProps } from '@/components/interactive-character/types';


//Style Reference Cache
const sizeStyleCache = new Map<number, React.CSSProperties>();

function InteractiveCharacterComponent({id, name, category, src, context, size, showLLB, evolution, onSelect}: InteractiveCharacterProps){
    const {isOwned, isRainbowed, copies, limitBreakPlus, rumbleBadgeSrc, canBeSuperEvolved, handleLeftClick, handleRightClick} = useCharacterInteractions({id, category, context, evolution, onSelect});

    const getContainerClasses = () => {
        if (isOwned) return 'grayscale-0';
        if(canBeSuperEvolved) return 'bg-blue-500';
        return 'bg-slate-900/50';
    }

    const getImageClasses = () => {
        if(isOwned){
            return 'opacity-100'
        }
        if(canBeSuperEvolved){
            return 'grayscale brightness-45 mix-blend-luminosity opacity-50';
        }

        return 'grayscale opacity-40 hover:opacity-70';
    };

    return(
        <div
            onClick={handleLeftClick}
            onContextMenu={handleRightClick}
            style={size ? getSizeStyle(size) : undefined}
            className={`relative cursor-pointer overflow-hidden shrink-0 select-none ${ size ? '' : "w-full h-full"} ${getContainerClasses()}`}
    >
            <img
                src={src}
                alt={name}
                width={size ?? 112}
                height={size ?? 112}
                loading="lazy"
                decoding="async"
                className={`object-cover w-full h-full transition-opacity duration-150 ${getImageClasses()}`}
            />


            
            {isOwned && (
                <CharacterOverlays 
                    context={context} 
                    copies={copies || 0} 
                    size={size}
                    isRainbowed={isRainbowed} 
                    showLLB={showLLB}
                    limitBreakPlus={limitBreakPlus}
                    rumbleBadgeSrc={rumbleBadgeSrc}
                />
            )}
        </div>
    );
}

function getSizeStyle(size: number): React.CSSProperties{
    let style = sizeStyleCache.get(size);
    if (!style){
        style = {width: `${size}px`, height: `${size}px`};
        sizeStyleCache.set(size, style);
    }

    return style;
}

export const InteractiveCharacter = memo(InteractiveCharacterComponent);
export default InteractiveCharacter; 

