import { ReactNode } from "react";
import { Steps } from "./banner-api";

// ==========================================
// BANNER STEPS & POOLS TAB
// ==========================================

export type BannerStepViewMode = 'LIST' | 'COMPACT';

export interface FlattenedStep extends Steps {
    stepNumber: number;
    gift?: string;
}

export interface CompactStepGroup {
    info: FlattenedStep;
    numbers: number[];
}

export interface BannerStepsProps {
    steps?: Steps[];
    gifts?: { item: string; steps: number[] }[];
}

export interface BannerStepBoxProps {
    stepType: string;
    legendCount?: number;
    rrCount?: number | null;
    gift?: string;
    children?: ReactNode;
    showGiftSection?: boolean;
}

export interface UseBannerStepsReturn {
    viewMode: BannerStepViewMode;
    setViewMode: (mode: BannerStepViewMode) => void;
    allFlattenedSteps: FlattenedStep[];
    compactGroups: CompactStepGroup[];
    hasSteps: boolean;
}

export type PillThemeColor = 'red' | 'gold';

export interface PillTheme {
    container: string;
    label: string;
    value: string;
}

export interface PoolPillProps {
    label: string;
    value: number | string;
    color?: PillThemeColor;
}