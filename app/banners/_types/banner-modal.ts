import { BannerDetails } from "./banner-api";

// ==========================================
// BANNER MODAL SHELL & TABS
// ==========================================

export type BannerMode = 'RECRUITABLE' | 'INFO' | 'STEPS' | 'CHANCES';

export interface UseBannerModalReturn {
    isOpen: boolean;
    banner: BannerDetails | null;
    bannerId: number | null;
    isLoading: boolean;
    isError: boolean;
    closeModal: () => void;
    openModal: (id: number) => void;
}

export interface BannerBodyProps {
    mode: BannerMode;
    banner?: BannerDetails | null;
    showCopies: boolean;
}