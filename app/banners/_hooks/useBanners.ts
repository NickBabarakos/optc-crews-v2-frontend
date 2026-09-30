'use client'
import {useQuery} from "@tanstack/react-query";
import {getBanners} from "@/services/banners";
import { BannersQueryResult, BannersResponse } from "@/app/banners/_types";

export default function useBanners(){
    return useQuery<BannersResponse, Error, BannersQueryResult>({
        queryKey: ['banners'],
        queryFn: getBanners,
        enabled: typeof window!=='undefined',
        select: (data) => {
            const rawBanners = data?.banners || [];
            const now = new Date();

            //1. Sorting: Newer first
            const sorted = [...rawBanners].sort((a,b)=>
                new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
            );

            //2. Filtering
            const active = sorted.filter(b=> 
                new Date(b.startDate) <= now && new Date(b.endDate) > now 
            );

            const upcoming = sorted.filter(b => 
                new Date(b.startDate) > now 
            );

            return {
                all: sorted,
                active,
                upcoming
            };
        }
    });
}