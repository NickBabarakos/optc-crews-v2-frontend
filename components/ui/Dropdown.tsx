"use client";

import { ChevronIcon } from "@/components/ui/icons";
import { useEffect, useRef, useState } from "react";

interface DropdownProps{
    value: number | string;
    options: (number | string)[];
    onChange: (value: string) => void;
    disabled?: boolean;
    containerClassName?: string; 
    triggerClassName?: string;   
    valueClassName?: string;    
    listClassName?: string;      
    optionClassName?: string;
}

export default function Dropdown({value, options, onChange, disabled, containerClassName, triggerClassName, valueClassName, listClassName, optionClassName}: DropdownProps ){
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=> document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelecet = (option: number | string) => {
        onChange(option.toString());
        setIsOpen(false);
    };

    return(
        <div ref={dropdownRef} className={`relative ${containerClassName} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
            <button
                type="button"
                disabled={disabled}
                onClick={()=> setIsOpen(!isOpen)}
                className={`flex items-center justify-between w-full h-full px-4 transition-all duration-200 ${triggerClassName}`}
            >
                <span className={`flex-1 text-center font-black ${valueClassName}`}>
                    {value}
                </span>
                <ChevronIcon
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
            </button>

            {isOpen && (
                <ul className={`absolute z-50 w-full mt-2 py-1 shadow-2xl max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 duration-150 ${listClassName}`}>
                    {options.map((option) => (
                        <li key={option}>
                            <button 
                                type="button"
                                onClick={()=> { onChange(option.toString()); setIsOpen(false); }}
                                className={`w-full px-4 py-3 text-center font-bold transition-colors ${optionClassName} ${option === value ? 'bg-white/5' : ''}`}
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        
    );
}