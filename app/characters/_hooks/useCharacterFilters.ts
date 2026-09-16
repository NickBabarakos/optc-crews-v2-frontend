'use client';

import { filterParsers, modeParser } from "@/app/characters/_params/characterSearchParams";
import { characterPageFilters, SearchField } from "@/app/characters/_types/filters";
import { useQueryState, useQueryStates } from "nuqs";
import { useCallback, useMemo } from "react";


export function useCharacterFilters(){
    const [filtersState, setFiltersState] = useQueryStates(filterParsers);
    const [mode] = useQueryState('mode', modeParser);

    const filters: characterPageFilters = useMemo(() => ({
        ...filtersState,
        searchBy: filtersState.searchBy as SearchField[],
        mode,
    }), [filtersState, mode]);


    //2. Write/Actions 
    const updateFilter = useCallback((key: string, values: string[]) => {
        setFiltersState({
            [key]: values.length > 0 ? values : null
        });
    }, [setFiltersState]);

    const updateSort = useCallback((val: string) => {
        setFiltersState({ 
            sorting: val ? val : null 
        });
    }, [setFiltersState]);

    const clearAllFilters = useCallback(() => {
        setFiltersState({
            search: null,
            searchBy: null,
            types: null,
            classes: null,
            categories: null,
            tags: null,
            costs: null,
            stars: null,
            sorting: null,
        });
    }, [setFiltersState]);

    return{
        filters,
        updateFilter,
        updateSort,
        clearAllFilters,
    };

}