'use client';

import CharactersToolbar from "./_components/CharactersToolbar";
import CharacterGrid from "./_components/CharacterGrid";
import useFilteredCharacters from "@/app/characters/_hooks/useFilteredCharacters"; 
import { CharacterDetailsModal } from "@/app/characters/details_modal/CharacterDetailsModal";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { characterIdParser, showLLBParser } from "@/app/characters/_params/characterSearchParams";

function CharactersContent() {
    const { data, stats, isLoading, context } = useFilteredCharacters();

    //Nuqs Query States
    const [showLLB] = useQueryState('showLLB', showLLBParser);
    const [, setCharacterId] = useQueryState('character', characterIdParser);


    const [isMounted, setIsMounted] = useState(false);
        useEffect(() => {
            setIsMounted(true);
    }, []);

    const handleSelectCharacter = useCallback((id: number) => {
        setCharacterId(id);
    }, [setCharacterId]);

    return (
        <div className="flex flex-col min-h-full">
            <div className="sticky top-0 z-10 bg-slate-950/95 border-b border-slate-800 px-4 py-2">
                <CharactersToolbar stats={stats} />
            </div>

            <div className="p-4">
                {isLoading || !isMounted ? (
                    <div className="flex justify-center items-center h-64 text-slate-500 italic">
                        Loading database...
                    </div>
                ) : data.length > 0 ? (
                    <CharacterGrid 
                        data={data} 
                        context={context} 
                        showLLB={showLLB} 
                        onSelectCharacter={handleSelectCharacter} 
                    />
                ) : (
                    <div className="flex justify-center items-center h-64 text-slate-500">
                        No characters found with these filters.
                    </div>
                )}
            </div>

            <CharacterDetailsModal />
        </div>
    );
}

export default function Characters() {
  return (
    <Suspense fallback={<div className="p-10 text-white">Loading characters...</div>}>
      <CharactersContent />
    </Suspense>
  );
}