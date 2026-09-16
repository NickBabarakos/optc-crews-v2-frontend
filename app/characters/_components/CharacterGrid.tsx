'use client';

import { CharacterGridProps } from "@/app/characters/_types/characters";
import InteractiveCharacter from "@/components/interactive-character/InteractiveCharacter";
import { memo } from "react";
import { getImageSource } from "@/utils/getImageSource";
import { useVirtualGrid } from "@/app/characters/_hooks/useVirtualGrid";

function CharacterGridComponent({ data, context, showLLB, onSelectCharacter }: CharacterGridProps) {
    const { containerRef, rows, rowVirtualizer, itemSize, gap } = useVirtualGrid({ data });

    return (
        <div ref={containerRef} className="w-full">
            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const rowItems = rows[virtualRow.index];
                    if (!rowItems) return null;

                    return (
                        <div
                            key={virtualRow.key}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: `${itemSize}px`,
                                transform: `translateY(${virtualRow.start}px)`,
                                willChange: 'transform',
                                contain: 'strict',
                                gap: `${gap}px`,
                            }}
                            className="flex justify-center items-center"
                        >
                            {rowItems.map((char) => (
                                <InteractiveCharacter 
                                    key={char.id}
                                    id={char.id}
                                    name={char.name}
                                    category={char.category}
                                    src={getImageSource(char.imageUrl, 'unitIcon')}
                                    context={context}
                                    showLLB={showLLB}
                                    size={itemSize}
                                    evolution={char.evolution}
                                    onSelect={onSelectCharacter}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export const CharacterGrid = memo(CharacterGridComponent);
export default CharacterGrid;