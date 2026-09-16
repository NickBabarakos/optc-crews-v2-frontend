'use client'
import React, { useState } from "react"

interface SearchBarProps{
    handleSearch: (input:string) => void,
    buttonClassName: string,
    inputClassName: string,
    buttonName: string,
    buttonStyle?: React.CSSProperties;
    placeholder: string,
    initialValue: string
}

export default function SearchBar({handleSearch, buttonClassName, inputClassName, buttonName, buttonStyle,placeholder="", initialValue=""} : SearchBarProps){
    const [input, setInput] = useState(initialValue);

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            handleSearch(input)
        }

    }

    return(
        <div className="flex items-stretch w-full rounded-lg border-slate-700 bg-slate-900 focus-within:border-red-500 transition-all overflow-hidden">
            <input
                type="text"
                placeholder={placeholder}
                className={`flex-1 bg-transparent px-4 py-2 text-sm outline-none ${inputClassName}`}
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            
            <button
                onClick={() => {handleSearch(input)}}
                style={buttonStyle}
                className={`px-6 py-2 transition-colors border-l border-slate-700 ${buttonClassName}`}
            >{buttonName}</button>
        </div>
    );
};