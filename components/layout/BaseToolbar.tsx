import { TOOLBAR_THEMES, ToolbarVariant } from "@/components/layout/themes/toolbar-themes";
import { ReactNode } from "react";


interface BaseToolbarProps{
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
    variant?: ToolbarVariant;
}


export default function BaseToolbar({left, center, right, variant="base"}:BaseToolbarProps){
    const theme = TOOLBAR_THEMES[variant];

    return(
        <div className={`
                relative z-40 w-full rounded-xl p-2.5 md:px-4 md:py-2.5 
                flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 
                transition-colors duration-200 
                ${theme.container}
            `}
        >
            {left && (
                <div className="w-full sm:flex-1 min-w-0 flex items-center justify-start">{left}</div>
            )}

            {center && (
                <div className="w-full sm:w-auto flex items-center justify-center">{center}</div>
            )}

            {right && (
                <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0">{right}</div> 
            )}
        </div>
    );
}