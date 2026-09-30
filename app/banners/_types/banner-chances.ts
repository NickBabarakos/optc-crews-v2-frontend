import { BannerDetails } from "./banner-api";
import { CharacterSummary } from "@/app/characters/_types/characters";

// ==========================================
// BANNER CHANCES CALCULATOR TAB
// ==========================================

export type ChancesViewMode = 'New Batch' | 'Custom';

export interface StepConfig {
    stepId: number;
    numbers: number[];
}

export interface CharacterGroup {
    characterCount: number;
    requiredCount: number;
    rates: {
        stepId: number;
        rates: number[]; // [Posters1-10, Poster11]
    }[];
}

export interface CalculationResult {
    step: number;
    chance: number;
}

export type StepRatesRecord = Record<number, { normal: string; last: string }>;

export interface BannerChancesViewProps {
    banner: BannerDetails;
    characterMap: Map<number, CharacterSummary>;
}

export interface NewBatchModeProps {
    banner: BannerDetails;
    stepConfigs: StepConfig[];
    characterMap: Map<number, CharacterSummary>;
}

export interface CustomChancesModeProps {
    banner: BannerDetails;
    stepConfigs: StepConfig[];
}

export interface CustomStepRateBoxProps {
    stepType: string;
    stepNumbers: number[];
    normalRate: string;
    lastRate: string;
    onNormalChange: (val: string) => void;
    onLastChange: (val: string) => void;
}

export interface RateInputProps {
    label: string;
    value: string;
    onChange: (val: string) => void;
    variant?: 'amber' | 'red';
}

export interface BatchCharacterSelectorProps {
    characterIds: number[];
    characterMap: Map<number, CharacterSummary>;
    selectedIds: number[];
    onToggle: (id: number) => void;
}

export interface ChancesResultBoxProps {
    results: CalculationResult[] | null;
}

export interface ChanceTheme {
    cardBg: string;
    cardBorder: string;
    badgeBg: string;
    badgeText: string;
    valueText: string;
    heroBg: string;
    heroBorder: string;
    heroGlow: string;
    heroText: string;
}