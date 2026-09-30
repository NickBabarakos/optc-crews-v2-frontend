'use client';

import {useEffect, useMemo, useState} from "react";
import BaseModal from "../../../components/modals/BaseModal"; 
import { ChancesIcon, StepsIcon, InfoIcon, PosterIcon } from "@/components/ui/icons";
import useBannerModal from "@/app/banners/_hooks/useBannerModal";
import RecruitableCategoryGroup from "@/app/banners/banner_modal/RecruitableCategoryGroup";
import BannerSteps from "@/app/banners/banner_modal/BannerSteps";
import BannerInfoMode from "@/app/banners/banner_modal/BannerInfoMode";
import ToggleButton from "@/components/ui/ToggleButton";
import useCharacters from "@/app/characters/_hooks/useCharacters";
import { CharacterSummary } from "@/app/characters/_types/characters";
import BannerChancesView from "@/app/banners/banner_chance_mode/BannerChancesView";
import { BannerDetails, BannerMode } from "@/app/banners/_types";


export default function BannerModal(){
    const {isOpen, banner, closeModal, isLoading} = useBannerModal();
    const [mode, setMode] = useState<BannerMode>('RECRUITABLE');
    const [showCopies, setShowCopies] = useState(false);

    //View reset when opening/closing a banner
    useEffect(()=> {
        if(!isOpen){
            setMode('RECRUITABLE');
            setShowCopies(false);
        }
    }, [isOpen]);


    if(!isOpen) return null;

    const handleModeChange = (newMode: BannerMode) => {
        if (mode === newMode) setMode('RECRUITABLE'); //If you re-press a button, turns to default
        else setMode(newMode);
    }

    const modeTitles: Record<BannerMode, string> = {
        RECRUITABLE: "Recruitable Characters",
        INFO: "Sugo Fest Information",
        STEPS: "Steps",
        CHANCES: "New Batch Chances"
    };

    const BannerHeader = (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-text-300 leading-tight uppercase">
                {modeTitles[mode]}
            </h2>

            <div className="flex items-center gap-2">
                {mode === 'RECRUITABLE' && (
                <ToggleButton 
                    isActive={showCopies}
                    onClick={()=> setShowCopies(!showCopies)}
                    aria-label="Toggle collection copies view"
                >
                    <PosterIcon className="w-5 h-5"/>
                </ToggleButton>
                )}

                <ToggleButton 
                    variant="icon"
                    isActive={mode === 'INFO'}
                    onClick={()=> handleModeChange('INFO')}
                    aria-label="View Sugo-Fest Information"
                >
                    <InfoIcon className="w-5 h-5" />
                </ToggleButton>

                <ToggleButton 
                    variant="icon"
                    isActive={mode === 'STEPS'}
                    onClick={()=> handleModeChange('STEPS')}
                    aria-label="View Banner Steps"
                >
                    <StepsIcon className="w-5 h-5" />
                </ToggleButton>

                <ToggleButton 
                    variant="icon"
                    isActive={mode === 'CHANCES'}
                    onClick={()=> handleModeChange('CHANCES')}
                    aria-label="View Pull Chances"
                >
                    <ChancesIcon className="w-5 h-5"/>
                </ToggleButton>
            </div>
        </div>
    );

    return(
        <BaseModal
            isOpen={isOpen}
            onClose={closeModal}
            header={BannerHeader}
            wrapperStyles="w-full max-w-7xl h-[90vh]"
        >
            {isLoading ? (
                <div className="p-20 text-center text-slate-400">Loading Banner Details...</div>
            ):(
                <BannerBody mode={mode} banner={banner} showCopies={showCopies}/>
            )}

        </BaseModal>
    );
}


function BannerBody({mode, banner, showCopies}:{mode:BannerMode, banner?: BannerDetails | null, showCopies: boolean}){
    const {data: allCharacters, isLoading: isCharsLoading} = useCharacters();

    //One time calculation of the map for all tabs
    const characterMap = useMemo(() => {
        const map = new Map<number, CharacterSummary>();
        if (!allCharacters) return map;
        allCharacters.forEach((char) => map.set(Number(char.id), char));
        return map;
    }, [allCharacters]);

    if (!banner) return null;

    if(isCharsLoading){
        return <div className="p-20 text-center text-slate-400">Loading Characters...</div>;
    }

    return(
        <div className="p-1 sm:p-4">
            {mode === 'RECRUITABLE' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {banner.recruitableChars && banner.recruitableChars.length > 0 ? (
                    banner.recruitableChars.map((group, index) => (
                        <RecruitableCategoryGroup
                            key={`${group.category}-${index}`}
                            group={group}
                            characterMap={characterMap}
                            showCopies = {showCopies}
                        />
                   ))
            ):(
                <div className="text-center text-slate-500 py-12">No recruitable data available for this banner</div>
            )}
                </div>
            )}
            {mode === 'INFO' && (
                <BannerInfoMode bannerType={banner.bannerType} />
            )}
            {mode === 'STEPS' && (
                    <BannerSteps 
                        steps={banner.steps} 
                        gifts={banner.gifts} 
                    />
            )}
            {mode === 'CHANCES' && (
                <BannerChancesView banner={banner} characterMap={characterMap} />
            )} 
        </div>
    );
}