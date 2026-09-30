// ==========================================
// BANNER GRID & CARD
// ==========================================

export type BannerType =
    | 'Super'
    | 'EOM'
    | 'Anniversary'
    | 'Treasure'
    | 'Kizuna'
    | 'Support'
    | 'Aurora'
    | 'Rumble'
    | 'Feast'
    | (string & {});

export interface BannerSummary {
    id: number;
    title: string;
    bannerType: BannerType;
    imageUrl: string;
    startDate: string;
    endDate: string;
}

export interface BannerCardProps {
    id: number;
    imageUrl: string;
    title: string;
    startTime: string;
    endTime: string;
    bannerType: BannerType;
    onClick: () => void;
}

export interface BannerCardTheme {
    border: string;
    title: string;
    bottomBar: string;
    labelBox: string;
    labelText: string;
    progressTrack: string;
    progressBar: string;
    timeText: string;
}

export interface BannerTimerReturn {
    now: Date;
    isActive: boolean;
    targetDate: Date;
    label: string;
    percentage: number;
}