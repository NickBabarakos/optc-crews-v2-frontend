'use client';

import { useStoreHydrated } from "@/store/useStoreHydrated";

export interface PanelItem {
    label: string;
    value: number;
    labelClassName?: string;
    valueClassName?: string;
}

interface ResultPanelProps {
    items: PanelItem[];
    extraStyles?: string;
}

export default function ResultPanel({ items, extraStyles = '' }: ResultPanelProps) {
    const isHydrated = useStoreHydrated();

    return (
        <div className={`flex items-center bg-slate-900/90 border border-slate-800 rounded-lg py-1.5 shadow-lg backdrop-blur-md h-10 ${extraStyles}`}>
            {items.map((item, index) => (
                <div 
                    key={item.label}
                    className={`flex flex-col items-center px-4 
                            ${index !== items.length - 1 ? 'border-r border-slate-700' : ''}`}
                >
                    <span className={`text-[9px] font-bold text-slate-500 uppercase tracking-tighter ${item.labelClassName}`}>
                        {item.label}
                    </span>
                    <span className={`text-sm font-black leading-tight tabular-nums ${item.valueClassName}`}>
                        {isHydrated ? item.value : '-'}
                    </span>
                </div>
            ))}
        </div>
    );
}