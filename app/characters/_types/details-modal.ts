import { CharacterSummary, SuperEvolutionDetails } from "@/app/characters/_types/characters";

export type UnitForm = 'Char1' | 'Char2' | 'Combined';

export interface CharacterDetailsHeaderProps{
    title: string;
    id: number;
    imageUrl: string;
    unitType: string;
    activeForm: UnitForm;
}

export interface CharacterDetailsBodyProps{
    char: CharacterSummary;
    activeForm: UnitForm;
    setActiveForm: (form: UnitForm) => void;
    onNavigate: (id: number) => void;
    filterByTag?: (tag:string) => void;
} 


export interface UnitInfoGirdProps{
    char: CharacterSummary;
    form: UnitForm;
    filterByTag?: (tag:string) => void;
}

export interface StatItem{
    label: string;
    value: string | number;
    color?: string;
}

export interface ShopReferenceCardProps{
    shopName: string;
    currency: string;
    price: number;
}


//Info Cards
export interface InfoCardProps{
    title: string;
    children: React.ReactNode;
    orientation?: "vertical" | "horizontal";
    titleColor?: string;
    className?: string;
    dividerColor?: string;
}

export interface CategoryCardProps{
    category: string;
    stars: string;
    className?: string;
}

export interface TagsCardProps{
    tags: string[];
    onTagClick?: (tag: string) => void;
    className?: string;
}

export interface UnitIdentityRowProps{
    types: string[];
    classes: string[];
    stars: string;
    cost: number;
}

//Evolution Nav
export interface UnitEvolutionNavProps{
    preId?: number;
    superEvolution?: SuperEvolutionDetails;
    onNavigate: (id: number) => void;
}

export interface NavButtonProps{
    id: number;
    label: string;
    isRight?: boolean;
    onClick: ()=> void;
}