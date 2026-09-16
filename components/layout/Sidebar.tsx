'use client'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react';
import HomeSidebarContent from '../sidebar/HomeSidebarContent'
import CharacterSidebarContent from '@/app/characters/_components/CharacterSidebarContent'
import ShopsSidebarContent from '@/app/shops/[slug]/ShopsSidebarContent';

export default function Sidebar(){
    const pathname = usePathname();

    const renderContent = () => {
        if(pathname === '/' || pathname.startsWith('/banners')) return <HomeSidebarContent/>
        
        if(pathname.startsWith('/characters')) {
            return (
                <Suspense fallback={<div className="p-4 text-slate-500 text-xs">Loading filters...</div>}>
                    <CharacterSidebarContent/>
                </Suspense>
            );
        }

        if(pathname.startsWith('/shops')) {
            return (
                <Suspense fallback={<div className="p-4 text-slate-500 text-xs">Loading shops...</div>}>
                    <ShopsSidebarContent/>
                </Suspense>
            );
        }

        return <div className="text-gray-500 p-4">Select a page...</div>;
    };

    return(
        <nav className="w-full min-h-full flex flex-col custom-scrollbar">
            {renderContent()}
        </nav>
    )
}