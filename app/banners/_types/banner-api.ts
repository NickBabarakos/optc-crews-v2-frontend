//=======================================
// BANNER API & DTOs
//=======================================

export interface CharacterRate {
    ids: number[];
    chances: number[];
}

export interface Gifts {
    item: string;
    steps: number[];
}

export interface Steps {
    stepNumbers: number[];
    stepType: string;
    legendPoolCount: number;
    rareRecruitPoolCount: number | null;
    characterRates: CharacterRate[];
}

export interface RecruitableChars {
    category: string;
    ids: number[];
    rateBoosted: number[] | null;
}

export interface NewCharactersIds {
    newLegendsIds: number[] | null;
    newRareRecruitsIds: number[] | null;
}

export interface NewCharacterCount {
    newLegendCount: number;
    newRareRecruitCount: number;
}

export interface BannerDetails {
    id: number;
    title: string;
    bannerType: string;
    imageUrl: string;
    startDate: string; // ISO DateTimeOffset
    endDate: string;   // ISO DateTimeOffset
    exclusiveChance: number;
    newCharactersIds: NewCharactersIds;
    newCharacterCount: NewCharacterCount;
    recruitableChars: RecruitableChars[];
    steps: Steps[];
    gifts: Gifts[];
}

export interface BannersResponse {
    banners: BannerDetails[];
}

export interface BannersQueryResult {
    all: BannerDetails[];
    active: BannerDetails[];
    upcoming: BannerDetails[];
}