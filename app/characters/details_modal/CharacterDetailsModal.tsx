'use client';

import useCharacterDetailsModal from "@/app/characters/_hooks/useCharacterDetailsModal"
import BaseModal from "@/components/modals/BaseModal"
import { FORMS } from "@/app/characters/_constants/filters"
import {UnitInfoGrid} from "./UnitInfoGrid"
import { UnitEvolutionNav } from "@/app/characters/details_modal/UnitEvolutionNav";
import { CharacterDetailsBodyProps, CharacterDetailsHeaderProps, UnitForm } from "@/app/characters/_types/details-modal";
import { useState } from "react";
import { getImageSource } from "@/utils/getImageSource";
import { ViewToggle } from "@/components/ui/ViewToggle";


export function CharacterDetailsModal(){
    const {data, isLoading, closeModal, isOpen, navigateToCharacter, filterByTag} = useCharacterDetailsModal();

    const [selectedForm, setSelectedForm] = useState<UnitForm>('Char1');
    const [formCharId, setFormCharId] = useState<number|null>(null);
    const activeForm = (data && formCharId === data.id) ? selectedForm : 'Char1';

    const handleFormChange = (form: UnitForm) =>{
        if (!data) return;
        setFormCharId(data.id);
        setSelectedForm(form);
    }

    const modalHeader = data ? (
        <CharacterDetailsModalHeader
            title={data.name}
            id={data.id}
            imageUrl={data.imageUrl}
            unitType={data.unitType}
            activeForm={activeForm}
        />
    ) : undefined;

    return(
        <BaseModal
            isOpen={isOpen}
            onClose={closeModal}
            header={modalHeader}
            wrapperStyles="max-w-4xl w-[95%] h-[85vh] md:h-[700px]"
        >
            {isLoading? (
                <div className="flex justify-center p-10">Loading...</div>
            ): data  ? (
                <CharacterDetailsModalBody
                    char={data}
                    activeForm={activeForm}
                    setActiveForm={handleFormChange}
                    onNavigate={navigateToCharacter}
                    filterByTag={filterByTag}
                />
            ): null}
        </BaseModal>

    )
}

export function CharacterDetailsModalHeader({title, id, imageUrl, unitType, activeForm}:CharacterDetailsHeaderProps){
    const fullImageUrl = getImageSource(imageUrl, 'unitIcon', { unitType, form: activeForm });


    return(
        <div className="flex items-center gap-5">
            {/*Left Section: Image + Id*/}
            <div className="flex flex-col items-center gap-2 shrink-0">
                {/*Image Container*/}
                <div className="relative w-20 h-20 shrink-0 border-2 border-slate-700/50 rounded-lg overflow-hidden shadow-lg bg-slate-950 flex items-center justify-center">
                    <img 
                        src={fullImageUrl}
                        alt={title}
                        width={112}
                        height={112}
                        loading="eager"
                        decoding="async"
                        className="object-cover"
                    />
                </div>
                {/*ID Label*/}
                <span className="text-[11px] font-black text-text-400 tracking-wider bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shadow-sm uppercase">#{id}</span>
            </div>

            {/*Title*/}
            <div className="flex-1 min-w-0 hidden md:block">
                <h2 className="text-xl lg:text-2xl font-black text-text-100 leading-tight uppercase tracking-tighter line-clamp-2">{title}</h2>
            </div>
    </div>
    )
}


export function CharacterDetailsModalBody({char, activeForm, setActiveForm, onNavigate, filterByTag}:CharacterDetailsBodyProps){
    const formsList = FORMS.find(f => f.unitType === char.unitType)?.forms;

    return(
        <div className="flex flex-col h-full py-1 min-h-0">

            <div className="flex-1 space-y-6">
                {char.unitType !== 'Solo' && (
                    <ViewToggle 
                        options={formsList}
                        activeOption={activeForm}
                        onClick={setActiveForm}
                    />
                )}

                {/*Το Grid με τα δεδομένα */}
                <UnitInfoGrid char={char} form={activeForm} filterByTag={filterByTag}/>
            </div>
                    
            <div className="mt-auto pt-6">
                <UnitEvolutionNav
                    preId={char.evolution?.preEvolutionId}
                    superEvolution={char.evolution?.superEvolution}
                    onNavigate={onNavigate}
                />
</div>
        </div>
    );
}




