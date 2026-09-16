import { COPIES_FOR_LEVEL } from "@/app/characters/_constants/filters";
import { useCollectionStore } from "@/store/useCollectionStore";

export function useCharacterLLB(id: number){
    const addCopies = useCollectionStore((state) => state.addCopies);
    const removeCopies = useCollectionStore((state)=> state.removeCopies);
    const charData = useCollectionStore((state)=> state.collection[id]);

    if (!charData) return {isOwned: false as const};

    const copies = charData.copies;

    //
    const currentTier = [...COPIES_FOR_LEVEL].reverse().find((t)=> copies >= t.copies);
    const level = currentTier?.level || 99;

    const isMaxLevel = level === 150 || copies >= 10;
    const canAdd = copies < 10;
    const canRemove = copies >1;

    const percentage = Math.min(Math.max(((copies-1)/9)*100,0), 100);

    return{
        isOwned: true as const,
        copies,
        level,
        isMaxLevel,
        canAdd,
        canRemove,
        percentage,
        increment: ()=> addCopies(id),
        decrement: ()=> removeCopies(id)
    };
}