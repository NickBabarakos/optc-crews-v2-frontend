import { TOGGLE_BUTTON_THEMES, ToggleButtonColor } from "@/components/ui/themes/toggle-button-themes";
import React, { ReactNode } from "react";

interface ToggleButtonProps{
    variant?: "text" | "icon";
    color?: ToggleButtonColor;
    isActive: boolean;
    onClick: ()=> void;
    disabled?: boolean;
    children: ReactNode;
}

export default function ToggleButton({variant="text", color="base", isActive, onClick, disabled=false, children}:ToggleButtonProps){
    const theme =TOGGLE_BUTTON_THEMES[color];

    const sizeStyles = 
        variant === "icon"
        ? "h-10 w-10 p-0"
        : "h-10 min-w-10 px-3 font-bold text-[12px] uppercase tracking-wider";

    const stateColorStyles = isActive ? theme.active : theme.inactive;

    

    return(
        <button 
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`
                inline-flex items-center justify-center shrink-0 
                rounded-xl border shadow-md cursor-pointer select-none 
                transition-all duration-200 ease-in-out 
                disabled:opacity-40 disabled:cursor-not-allowed 
                ${sizeStyles} ${stateColorStyles}
            `}
        >
            {children}  
        </button>
    );
}