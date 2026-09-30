import { PILL_THEMES, PillThemeColor } from "@/app/banners/_themes/poolPill-themes";
import { PoolPillProps } from "@/app/banners/_types";

export default function PoolPill({ label, value, color = "red" }: PoolPillProps) {
    const theme = PILL_THEMES[color];

    return (
        <div className={`flex items-center border rounded-full px-2 py-0.5 ${theme.container}`}>
            <span className={`text-[10px] font-bold mr-1 uppercase ${theme.label}`}>
                {label}:
            </span>
            <span className={`text-[10px] font-black ${theme.value}`}>
                {value}
            </span>
        </div>
    );
}
