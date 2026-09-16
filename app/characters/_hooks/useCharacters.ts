'use client'
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "@/services/characters";
import { CharacterSummary } from "@/app/characters/_types/characters";

export default function useCharacters(){
    const { data = [], isLoading, isError, error} = useQuery<CharacterSummary[], Error>({
        queryKey: ['characters'],
        queryFn: getCharacters,
        staleTime: 1000*60*60*24,
        gcTime: 1000*60*60*24,
        enabled: typeof window!=='undefined',
    })


    return {data, isLoading, isError, error};
    
}