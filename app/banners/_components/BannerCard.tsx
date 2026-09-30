import { formatLocalTime, getTimeLeft } from "@/utils/date-utils";
import useBannerTimer from "@/app/banners/_hooks/useBannerTimer";
import { BANNER_THEMES } from "@/app/banners/_themes/bannerCard-themes";
import { BannerCardProps } from "@/app/banners/_types";

export function BannerCard({imageUrl,title,startTime,endTime,bannerType,onClick,}: BannerCardProps) {
    const { now, isActive, targetDate, label, percentage } = useBannerTimer(startTime, endTime);
    const theme = BANNER_THEMES[bannerType] || BANNER_THEMES.Default;

    return (
        <div
            onClick={onClick}
            className={`group relative flex flex-col w-full max-w-90 cursor-pointer select-none rounded-xl border-2 overflow-hidden bg-[#090b10] transition-all duration-300 hover:-translate-y-1 ${theme.border}`}
        >
            {/* Banner Image */}
            <div 
                className="relative w-full aspect-851/586 shrink-0 overflow-hidden bg-black/40 border-b border-white/10"
            >
                <img 
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Title Section*/}
            <div className={`h-13 px-3 flex items-center justify-center text-center bg-linear-to-r ${theme.title}`}>
                <h3 className="text-[12px] font-black uppercase line-clamp-2 leading-tight tracking-wide drop-shadow">
                    {title}
                </h3>
            </div>

            {/* Bottom Bar*/}
            <div className={`flex h-9 items-stretch border-t-2 ${theme.bottomBar}`}>
                {/* Status Label */}
                <div className={`flex items-center justify-center px-2.5 min-w-19 border-r ${theme.labelBox}`}>
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider ${theme.labelText}`}>
                        {label}
                    </span>
                </div>

                {/* Progress Track & Timer */}
                <div className={`relative flex-1 flex items-center justify-center overflow-hidden px-2 ${theme.progressTrack}`}>
                    {isActive && (
                        <div
                            className={`absolute left-0 top-0 bottom-0 transition-all duration-700 ease-linear ${theme.progressBar}`}
                            style={{ width: `${percentage}%` }}
                        />
                    )}

                    <div className="relative z-10 flex items-center gap-2 font-mono">
                        <span className={`text-[11px] font-black tracking-tight ${theme.timeText}`}>
                            {getTimeLeft(targetDate, now)}
                        </span>
                        <span className="text-white/30 text-[10px]">•</span>
                        <span className={`text-[10px] font-semibold opacity-90 ${theme.timeText}`}>
                            ({formatLocalTime(targetDate)})
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}