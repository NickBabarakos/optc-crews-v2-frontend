"use client";

import InteractiveCharacter from "@/components/interactive-character/InteractiveCharacter";
import { getImageSource } from "@/utils/getImageSource";
import { CharacterSummary } from "@/app/characters/_types/characters";
import { BatchCharacterSelectorProps } from "@/app/banners/_types";


export default function BatchCharacterSelector({characterIds,characterMap,selectedIds,onToggle,}: BatchCharacterSelectorProps) {
    if (characterIds.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-slate-950/30 border border-slate-800/60 rounded-2xl">
            {characterIds.map((id) => {
                const char = characterMap.get(id);
                if (!char) return null;

                const isSelected = selectedIds.includes(id);

                return (
                    <div
                        key={id}
                        onClick={() => onToggle(id)}
                        className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer transition-transform duration-200 hover:scale-105"
                    >
                        <InteractiveCharacter
                            id={char.id}
                            name={char.name}
                            category={char.category}
                            src={getImageSource(char.imageUrl)}
                            context="viewOnly"
                            showLLB={false}
                        />

                        {/* Μόνο το frame μπαίνει/βγαίνει */}
                        {isSelected && (
                            <img
                                src="/selected-frame.png"
                                alt="Selected frame"
                                className="absolute inset-0 z-30 pointer-events-none w-full h-full object-contain"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}