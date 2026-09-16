'use client'
import { useMemo } from "react"
import { useCollectionStore } from "@/store/useCollectionStore"
import { sortCharacters } from "@/app/characters/_utils/sorting"
import { PanelItem } from "@/components/ui/ResultPanel";
import { filterCharacters } from "@/app/characters/_utils/filterCharacters";
import { resolveCharacterStats } from "@/app/characters/_utils/resolveCharacterStats";
import { useCharacterFilters } from "@/app/characters/_hooks/useCharacterFilters";
import useCharacters from "@/app/characters/_hooks/useCharacters";


export default function useFilteredCharacters() {
    const { data: allCharacters, isLoading } = useCharacters();
    const { filters } = useCharacterFilters();
    const collection = useCollectionStore((state) => state.collection);

    
    // 1. Base Filter (URL Params)
    const filtered = useMemo(() => {
        if(!allCharacters) return [];
        return  filterCharacters(allCharacters, filters);
    },[allCharacters, filters]);

    const isCollectionSort = useMemo(() => {
        const field = filters.sorting?.split(':')[0];
        return field === 'level' || field === 'lbPlus' || field === 'rumbleLbPlus';
    }, [filters.sorting]);

    //Base Sorting
    const sorted = useMemo(() => {
        if (!filtered.length) return [];
        return sortCharacters(filtered, filters.sorting, collection);
    }, [filtered, filters.sorting, isCollectionSort ? collection : null]);

    //Stats & Data Resolution
    const result = useMemo(() => {
        if (!sorted.length && !allCharacters) {
            return {
                data: [],
                stats: [] as PanelItem[],
            };
        }
        return resolveCharacterStats(sorted, filters.mode, collection);
    }, [sorted, filters.mode, collection]);


    return {
        ...result,
        context: filters.mode,
        isLoading,
    };
}