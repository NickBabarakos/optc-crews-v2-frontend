'use client'
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { characterIdParser, filterParsers } from "@/app/characters/_params/characterSearchParams";
import useCharacters from "@/app/characters/_hooks/useCharacters";

export default function useCharacterDetailsModal(){
    const {data: allCharacters, isLoading: isLoadingSummary} = useCharacters();

    //
    const [charId, setCharId] = useQueryState('character', characterIdParser);
    const [, setTags] = useQueryState('tags', filterParsers.tags);

    //
    const charSummary = useMemo(() => {
        if (!charId) return null;
        return allCharacters?.find(c => c.id === charId) || null;
    }, [allCharacters, charId]);

    //Handlers
    const closeModal = useCallback(() => {
        setCharId(null);
    }, [setCharId]);

    const navigateToCharacter = useCallback((newId: number) => {
        setCharId(newId);
    }, [setCharId]);

    const filterByTag = useCallback((tag: string) => {
        setTags([tag]);
        setCharId(null);
    }, [setTags, setCharId]);


    return{
        data: charSummary,
        isLoading: isLoadingSummary,
        isOpen: !!charId,
        closeModal,
        navigateToCharacter,
        filterByTag,
    }

}