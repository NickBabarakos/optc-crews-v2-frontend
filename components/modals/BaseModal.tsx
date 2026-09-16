"use client"
import { createPortal } from "react-dom";
import {ReactNode, useEffect, useState } from "react"
import { XCloseButton } from "../ui/icons"
import {BASE_MODAL_STYLES} from "../../styles/modal-styles/base-modal-styles";

const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

interface BaseModalProps{
    header?: ReactNode,
    children: ReactNode,
    wrapperStyles?: string,
    title?: string,
    isOpen: boolean,
    onClose: ()=> void;

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
        <div className={BASE_MODAL_STYLES.overlay} 
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={title ?? "Details Modal"} 
                className={cn(BASE_MODAL_STYLES.wrapper, wrapperStyles)} 
                onClick={(e)=> e.stopPropagation()}
            >
                {/*Header*/}
                <div className={BASE_MODAL_STYLES.header}>
                    <div className={BASE_MODAL_STYLES.titleWrapper}>
                        {!header ? (
                            <h2 className={BASE_MODAL_STYLES.titleText}>
                                {title}
                            </h2>
                        ) : header}
                    </div>

                    <button 
                        aria-label="Close modal"
                        className={BASE_MODAL_STYLES.closeButton}
                        onClick={onClose}
                    >
                        <XCloseButton className={BASE_MODAL_STYLES.closeIcon}/>
                    </button>
                </div>

                {/*Body*/}
                <div className={BASE_MODAL_STYLES.body}>
                    {!children ?(<span className={BASE_MODAL_STYLES.emptyText}>No Data</span>) : children}
                </div>
            
            </div>
        </div>,
        document.body
        )
}