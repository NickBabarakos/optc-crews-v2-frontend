'use client';

import { filterParsers, modeParser, showLLBParser } from "@/app/characters/_params/characterSearchParams";
import { CharacterMode } from "@/components/interactive-character/types";
import { useQueryState } from "nuqs";
import { useTransition } from "react";

const MODES = [
    { label: 'NM', context: 'normal', param: 'normal' },
    { label: 'RB', context: 'rainbow', param: 'rainbow' },
    { label: 'CP', context: 'copies', param: 'copies' },
    { label: 'L+', context: 'limitBreakPlus', param: 'limitBreakPlus' },
    { label: 'R+', context: 'rumbleLimitBreakPlus', param: 'rumbleLimitBreakPlus' },
] as const;

export function useCharacterToolbarState(){
    const [isPending, startTransition] = useTransition();

    //Nuqs states
    const [mode, setMode] = useQueryState('mode', modeParser);
    const [showLLB, setShowLLB] = useQueryState('showLLB', showLLBParser);
    const [search, setSearch] = useQueryState('search', filterParsers.search);

    //Calculating active mode
    const currentModeIndex = MODES.findIndex(m => m.param === mode);
    const activeMode = currentModeIndex !== -1 ? MODES[currentModeIndex] : MODES[0];

    //Handlers
    const cycleMode = () => {
        const nextIndex = (currentModeIndex + 1) % MODES.length;
        const nextMode = MODES[nextIndex].param;
        setMode(nextMode === 'normal' ? null : nextMode);
    };

    const toggleLLB = () => {
        setShowLLB((prev) => (prev ? null : true));
    };

    const handleSearch = (input: string) => {
        startTransition(() => {
            setSearch(input.trim() ? input.trim() : null);
        });
    };



    return{
        activeMode,
        showLLB,
        initialSearch: search,
        isPending,
        cycleMode,
        toggleLLB,
        handleSearch
    };
}