import { BannerType } from "./banner-grid";

// ==========================================
// BANNER INFO & COMMUNITY VERDICT TAB
// ==========================================

export type VerdictType = 'hard skip' | 'medal pulls' | 'worth it but';

export interface BannerTypeDetails {
    title: string;
    description: string;
    verdict: VerdictType;
    analysis: string;
}

export interface VerdictStyle {
    label: string;
    color: string;
    bg: string;
    border: string;
}

export interface BannerInfoModeProps {
    bannerType: BannerType;
}