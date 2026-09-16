import React, {useCallback, useMemo} from 'react';
import { useCollectionStore} from '@/store/useCollectionStore';
import { useCharacterInteractionsProps } from '@/components/interactive-character/types';


export function useCharacterInteractions({id, category, context, evolution, onSelect}: useCharacterInteractionsProps){
    const preEvoId = evolution?.preEvolutionId ?? -1;

    const charData = useCollectionStore((state) => state.collection[id]);
    const isPreEvoOwned = useCollectionStore((state) => 
        preEvoId !== -1 ? !!state.collection[preEvoId] : false
    );

    const isOwned = !!charData;
    const isRainbowed = charData?.rainbowed || false;
    const copies = charData?.copies || 0;
    const limitBreakPlus = charData?.limitBreakPlus || false;
    const rumbleLimitBreakPlus = charData?.rumbleLimitBreakPlus || false;

    const canBeSuperEvolved = !isOwned && preEvoId !== -1 && isPreEvoOwned;

    const rumbleBadgeSrc = getRumbleBadgeSrc(rumbleLimitBreakPlus, copies);

    //-------------------------------------------------------------------------
    // RIGHT CLICK HANDLER
    //-------------------------------------------------------------------------
    const handleRightClick = useCallback((e: React.MouseEvent)=> {
        e.preventDefault();

        if (context === 'viewOnly') return;

        const store = useCollectionStore.getState();

        if (context === 'copies'){
            if (isOwned) store.removeCopies(id);
            return;
        }

        store.toggleCharacter({
            id,
            category,
            copies: 1,
            rainbowed: false,
            limitBreakPlus: false,
            rumbleLimitBreakPlus: false
        });
    }, [context, isOwned, id, category]);

    //--------------------------------------------------------------------------
    // LEFT CLICK HANDLER
    //--------------------------------------------------------------------------
    const handleLeftClick = useCallback(() => {

        if (context === 'viewOnly') return;

        const store = useCollectionStore.getState();

        switch (context){
            case 'normal': {
                onSelect?.(id);
                break;
            }
            case 'copies': {
                if (isOwned){
                    store.addCopies(id)
                } else {
                    store.toggleCharacter({
                        id, category, copies:1, rainbowed:false, limitBreakPlus: false, rumbleLimitBreakPlus: false
                    });
                }
                break;
            }
            case 'rainbow':{
                if (isOwned) store.toggleRainbow(id);
                break;
            }
            case 'limitBreakPlus': {
                if (isOwned) store.toggleLimitBreakPlus(id);
                break;
            }
            case 'rumbleLimitBreakPlus': {
                if (isOwned) store.toggleRumbleLimitBreakPlus(id);
                break;
            }
        }
    }, [context, isOwned, id, category, onSelect]);

    return{
        isOwned,
        isRainbowed,
        copies,
        limitBreakPlus,
        rumbleLimitBreakPlus,
        rumbleBadgeSrc,
        canBeSuperEvolved,
        handleLeftClick,
        handleRightClick
    };
}


function getRumbleBadgeSrc(rumbleLimitBreakPlus: boolean, copies: number): string {
    if (!rumbleLimitBreakPlus && copies <= 4) return '/rlb+badge1.png';
    if (!rumbleLimitBreakPlus && copies >= 5 && copies <= 10) return '/rlb+badge2.png';
    if (rumbleLimitBreakPlus && copies >= 5 && copies <= 10) return '/rlb+badge3.png';
    return rumbleLimitBreakPlus ? '/rlb+badge3.png' : '/rlb+badge1.png';
}