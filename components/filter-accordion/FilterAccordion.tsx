import { ReactNode, useState } from "react";
import {ACCORDION_THEMES, AccordionThemeColor} from "./themes/accordion-themes";

interface FilterAccordionProps{
    name: string;
    children: ReactNode;
    isActive: boolean;
    color?: AccordionThemeColor;
}

export default function FilterAccordion({name, children, isActive, color="base"} : FilterAccordionProps){
    const  [isOpen, setIsOpen] = useState(false);
    const theme = ACCORDION_THEMES[color];

    const headerColorClass = isActive
        ? theme.headerActive
        : isOpen
        ? theme.headerOpen
        : theme.header;
    
    const contentColorClass = isActive? theme.contentActive: theme.content;


    return(
        //Layout Wrapper 
        <div className={`ring-2 mb-3 overflow-hidden rounded-2xl transition-all duration-300 ${theme.border} ${headerColorClass}`}>

            {/*Layout Header + Header Colors*/}
            <button
                type="button" 
                onClick={()=> setIsOpen((prev) => !prev)}
                className={`flex w-full cursor-pointer items-center justify-between p-4 text-[12px] font-extrabold uppercase 
                            tracking-widest transition-all duration-200 ${headerColorClass} `}
            >
                <span>{name}</span>
                <span className={`text-[12px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {isOpen && (
                <div className={`p-4 border-t-2 ${theme.border} ${contentColorClass}`}>
                    {children}
                </div>
            )}
        </div>
    )
}