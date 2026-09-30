import { BannerInfoModeProps } from "@/app/banners/_types/banner-info";
import { BANNER_INFO_MAP, VERDICT_MAP } from "@/app/banners/_utils/banner-info-data";

export default function BannerInfoMode({ bannerType }: BannerInfoModeProps){
    const info = BANNER_INFO_MAP[bannerType as keyof typeof BANNER_INFO_MAP];

    if (!info) return null;

    const verdict = VERDICT_MAP[info.verdict];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/*Banner Type Information Card */}
            <div className="bg-slate-950/20 border border-slate-800/60 rounded-2xl overflow-hidden shadow-inner flex flex-col">
                <div className="bg-slate-800/40 border-b border-slate-800/60 px-5 py-3">
                    <h3 className="text-xs font-black text-white uppercase tracking-widest">
                        Banner Type: <span className="text-amber-500">{info.title}</span>
                    </h3>
                </div>
                <div className="p-5">
                    <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed">
                        {info.description}
                    </p>
                </div>
            </div>

            {/*2. Recommendation Card */}
            <div className="bg-slate-950/20 border border-slate-800/60 rounded-2xl overflow-hidden shadow-inner flex flex-col border-l-4 border-l-slate-700">
                <div className="bg-slate-800/40 border-b border-slate-800/60 px-5 py-3 flex items-center justify-between">
                    <h3 className="text-xs font-black text-white uppercase tracking-widest">
                        Should You Pull?
                    </h3>
                    <div className={`text-[10px] font-black px-3 py-1 rounded-md border ${verdict.bg} ${verdict.color} ${verdict.border} tracking-tighter`}>
                        {verdict.label}
                    </div>
                </div>
                <div className="p-5">
                    <div className="space-y-4">
                        <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed font-medium italic">
                            &quot;{info.analysis}&quot;
                        </p>

                        <div className="pt-4 border-t border-slate-800/40">
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                                Community Recommendation
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}