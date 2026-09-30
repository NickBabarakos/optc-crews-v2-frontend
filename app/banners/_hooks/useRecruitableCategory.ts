import { RecruitableChars } from "@/app/banners/_types";
import { CharacterSummary } from "@/app/characters/_types/characters";
import { CollectionState } from "@/components/interactive-character/types";
import { useCollectionStore } from "@/store/useCollectionStore";
import { useCallback, useMemo } from "react";


export function useRecruitableCategory(group:RecruitableChars, characterMap: Map<number, CharacterSummary>){

    const {boostedCharacters, normalCharacters, allIds, totalCount, hasUnits} = useMemo(()=> {
        const boostedIds = group.rateBoosted || [];
        const normalIds = group.ids || [];

        const boosted = boostedIds 
            .map((id) => characterMap.get(Number(id)))
            .filter((c): c is CharacterSummary => Boolean(c));

        const normal = normalIds 
            .map((id) => characterMap.get(Number(id)))
            .filter((c): c is CharacterSummary => Boolean(c));

        const resolvedIds = [...boosted, ...normal].map((c) => Number(c.id));

        return{
            boostedCharacters: boosted,
            normalCharacters: normal,
            allIds: resolvedIds,
            totalCount: resolvedIds.length,
            hasUnits: resolvedIds.length>0
        };
    }, [group, characterMap]);

    const countSelector = useCallback(
        (state: CollectionState) => {
            let count = 0;
            for (let i = 0; i < allIds.length; i++) {
                if (state.collection[allIds[i]]) count++;
            }
            return count;
    },[allIds]);

    const ownedCount = useCollectionStore(countSelector);
    const isComplete = totalCount > 0 && ownedCount === totalCount;

    return{
        boostedCharacters,
        normalCharacters,
        ownedCount,
        totalCount,
        isComplete,
        hasUnits
    };
}