'use client';

import useBanners from "./useBanners";
import { useCallback, useEffect, useMemo } from "react";
import { parseAsInteger, useQueryState } from "nuqs";

export default function useBannerModal(){

    //Reads/Writes ?bannerId=... as a number
    const [bannerId, setBannerId] = useQueryState(
        'bannerId',
        parseAsInteger.withOptions({shallow: true, scroll: false})
    );

    const {data, isLoading, isError } = useBanners();

    //Search for the banner from data.all
    const selectedBanner = useMemo(()=> {
        if (bannerId === null || !data?.all) return null;
        return data.all.find((b) => b.id === bannerId) ?? null;
    }, [data, bannerId]);

    //If bannerId doesn't match a banner, clean url 
    useEffect(()=>{
        if (!isLoading && bannerId !== null && selectedBanner === null){
            setBannerId(null);
        }
    }, [isLoading, bannerId, selectedBanner, setBannerId]);


    const openModal = useCallback((id: number)=>{
        setBannerId(id);
    }, [setBannerId]);

    const closeModal = useCallback(()=> {
        setBannerId(null);
    }, [setBannerId]);



    return {
        isOpen: bannerId !== null && (isLoading || selectedBanner !== null),
        banner: selectedBanner,
        bannerId,
        isLoading,
        isError,
        closeModal,
        openModal
    };
}