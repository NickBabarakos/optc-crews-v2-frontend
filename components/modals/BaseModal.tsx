"use client"
import { createPortal } from "react-dom";
import {ReactNode, useEffect, useState } from "react"
import { XCloseButton } from "../ui/icons"

const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

interface BaseModalProps {
    header?: ReactNode;
    children: ReactNode;
    wrapperStyles?: string;
    title?: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function BaseModal({header,children, wrapperStyles, title, isOpen, onClose}:BaseModalProps){
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[]);

    useEffect(()=> {
        if (!isOpen) return;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        }

        window.addEventListener('keydown', handleKeyDown)

        return ()=> {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
         };
    },[isOpen, onClose]);

    if(!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity" 
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={title ?? "Details Modal"}
                className={`relative min-w-0 max-h-[90vh] bg-slate-900 border border-slate-700/80 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-xl flex flex-col overflow-hidden ${wrapperStyles}`}
                onClick={(e)=> e.stopPropagation()}
            >
                {/*Header*/}
                <div className="flex items-start sm:items-center justify-between px-4 py-3 sm:px-8 sm:py-5 border-b border-slate-800/80 bg-slate-900/50 shrink-0">
                    <div className="flex-1 min-w-0">
                        {!header ? (
                            <h2 className="text-xl font-bold text-slate-100 tracking-wide uppercase truncate">
                                {title}
                            </h2>
                        ) : header}
                    </div>

                    <button 
                        aria-label="Close modal"
                        className="ml-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200 cursor-pointer shrink-0"
                        onClick={onClose}
                    >
                        <XCloseButton className="w-6 h-6"/>
                    </button>
                </div>

                {/*Body*/}
                <div className="px-3 py-4 sm:px-8 sm:py-6 overflow-y-auto custom-scrollbar flex-1 text-slate-200">
                    {!children ?(<span className="text-slate-500 italic">No Data</span>) : children}
                </div>
            
            </div>
        </div>,
        document.body
        )
}