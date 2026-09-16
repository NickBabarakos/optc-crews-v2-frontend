'use client'

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import React, { useState } from "react";


export default function ClientLayout({children}:{children: React.ReactNode}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <>
            {/*Mobile Overlay (Blur)*/}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-overlay backdrop-blur-sm z-overlay md:hidden"
                    onClick={()=> setIsSidebarOpen(false)}
                />
            )}

            {/*Sidebar Container*/}
            <aside className={`
                fixed inset-y-0 left-0 z-sidebar w-sidebar h-full flex flex-col
                transform transition-transform duration-300 ease-in-out
                md:relative md:translate-x-0 shrink-0 overflow-y-auto no-scrollbar
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <Sidebar/>
            </aside>

            {/*Main Container*/}
            <main className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
                <Navbar onMenuClick={()=> setIsSidebarOpen(true)}/>

                <div id="main-scroll-container" className="flex-1 overflow-y-auto no-scrollbar relative">
                    {children}
                </div>
            </main>
        
        </>
    )
}