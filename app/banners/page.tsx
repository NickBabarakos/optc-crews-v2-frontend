'use client';

import { BannerCard } from "@/app/banners/_components/BannerCard";
import BannerModal from "@/app/banners/banner_modal/BannerModalBase";
import CategoryIndicator from "@/components/common/CategoryIndicator";
import useBannerModal from "@/app/banners/_hooks/useBannerModal";
import useBanners from "@/app/banners/_hooks/useBanners";
import { Suspense } from "react";


function BannersContent(){
    const {data, isLoading, error} = useBanners();
    const {openModal} = useBannerModal();

    if (isLoading) return <div className="p-10 text-white">Loading banners...</div>;
    if(error) return <div className="p-10 text-red-500">{error.message}</div>;
    const activeBanners = data?.active || [];
    const upcomingBanners = data?.upcoming || [];
    const totalCount = data?.all.length || 0;

    return(
        <div className="container mx-auto p-6 space-y-12">
            
            {/*Upcoming Section*/}
            {upcomingBanners.length > 0 && (
                <section>
                    <CategoryIndicator title="Upcoming Banners" color="#64748b"/>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 opacity-70">
                        {upcomingBanners.map((banner)=> (
                            <BannerCard
                                key={banner.id}
                                id={banner.id}
                                title={banner.title}
                                imageUrl={banner.imageUrl}
                                startTime={banner.startDate}
                                endTime={banner.endDate}
                                bannerType={banner.bannerType}
                                onClick={()=> openModal(banner.id)}
                            />
                        ))}

                    </div>
                </section>
            )}

            {/*Active Banners Section*/}
            {activeBanners.length >0 && (
                <section>
                    <CategoryIndicator title="Active Banners" color="#a855f7"/>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
                        {activeBanners.map((banner)=> (
                            <BannerCard
                                key={banner.id}
                                id={banner.id}
                                title={banner.title}
                                imageUrl={banner.imageUrl}
                                startTime={banner.startDate}
                                endTime={banner.endDate}
                                bannerType={banner.bannerType}
                                onClick={()=> openModal(banner.id)}
                            />
                        ))}

                    </div>
                </section>
            )}

            {totalCount === 0 && (
                <div className="text-center text-gray-500 py-20">
                        No banners currently available.
                </div>
            )}

            {/*Modal*/}
            <BannerModal/>

        </div>
    )
}

export default function Banners(){
    return(
        <Suspense fallback={<div className="p-10 text-white">Loading banners...</div>}>
            <BannersContent/>
        </Suspense>
    );
}