'use client';

import { CharacterSummary } from "@/app/characters/_types/characters";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useMemo, useRef, useState } from "react";


interface UseVirtualGridProps{
    data: CharacterSummary[];
}

const GAP = 12;

export function useVirtualGrid({data}: UseVirtualGridProps){
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);
    const [dimensions, setDimensions] = useState(getInitialDimensions);
    const { columns, itemSize } = dimensions;


    //Get safely the scroll element after the client mount 
    useEffect(() => {
        const el = document.getElementById('main-scroll-container');
        if (el) setScrollElement(el);
    }, []);

    //2. ResizeObserver: calculates columns 
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateGridDimensions = (width: number) => {
            if (width === 0) return;

            const isMobile = width < 640;
            const targetSize = isMobile ? 80 : 115;
            const calculatedColumns = Math.max(1, Math.floor((width + GAP) / (targetSize + GAP)));

            setDimensions((prev) => {
                if (prev.columns === calculatedColumns && prev.itemSize === targetSize) {
                    return prev;
                }
                return { columns: calculatedColumns, itemSize: targetSize };
            });
        };

        updateGridDimensions(container.clientWidth);

        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (!entry) return;
            updateGridDimensions(entry.contentRect.width);
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    //3. Chunking
    const rows = useMemo(() => {
        if (!data || data.length === 0) return [];
        const result: CharacterSummary[][] = [];
        for (let i = 0; i < data.length; i += columns) {
            result.push(data.slice(i, i + columns));
        }
        return result;
    }, [data, columns]);

    //4. Tanstack Visualizer
    const rowVirtualizer = useVirtualizer({
        count: rows.length,
        getScrollElement: () => scrollElement,
        estimateSize: () => itemSize + GAP,
        overscan: 2,
    });

    return{
        containerRef,
        rows,
        rowVirtualizer,
        columns,
        itemSize,
        gap: GAP,
    }
}

//Helper for safe initial calculation
function getInitialDimensions() {
    if (typeof window === 'undefined') return { columns: 4, itemSize: 115 };
    const width = window.innerWidth;
    const isMobile = width < 640;
    const targetSize = isMobile ? 80 : 115;
    const calculatedColumns = Math.max(1, Math.floor((width + GAP) / (targetSize + GAP)));
    return { columns: calculatedColumns, itemSize: targetSize };
}