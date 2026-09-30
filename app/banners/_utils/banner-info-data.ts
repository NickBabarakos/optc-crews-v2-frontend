import { BannerType } from "@/app/banners/_types/banner-grid";

export type VerdictType = 'hard skip' | 'medal pulls' | 'worth it but';

export interface BannerTypeDetails {
    title: string;
    description: string;
    verdict: VerdictType;
    analysis: string;
}

export const BANNER_INFO_MAP: Record<BannerType, BannerTypeDetails> = {
    Super: {
        title: "Super Sugo-Fest",
        description: "Available during major celebrations. We usually have these banners during the May Anniversary, New Year’s, and another one toward the end of summer or early fall. These are the only banners that feature Super Sugo-Fest characters (who are usually the best in the game).",
        verdict: 'worth it but',
        analysis: "Super Sugo banners usually consist of multiple parts, with several characters making their debut within a short period of time, so there’s a chance you won’t be able to draw all the new characters from every part. On the bright side, Super Sugo celebrations, come with plenty of gifts, and you’ll get many more gems than you usually do. During May’s Anniversary and New Year celebrations, the rule of thumb is to consult more experienced members of the community so they can tell you which banners to target. Since the number of confirmed parts and your own box may require a bit of strategizing to get the most value of your gems. "
    },
    EOM: {
        title: "End of Month Sugo-Fest",
        description: "At the end of each month, an “eom” (end of month) banner highlights the new boosted units for the various events of the coming month. The characters featured in these banners, known as “generic” legends, allow you to earn more turtles on your PKA runs, increase your multiplier in Assault Rumble, and give you more rewards in Co-Op. In addition to these rewards, these units receive Special Charge and an ATK Boost in most of the month’s events.",
        verdict: 'hard skip',
        analysis: "EOM banners are the worst banners in the game in terms of the recruitable characters they offer, and they also have very poor drop rates for acquiring new legends. Furthermore, the characters from these banners become available in Aurora Banners and through Ticket rewards after 2–3 months, making them relatively easy to obtain. Also a few months later, they typically appear in the pools of the other banners. Therefore, it’s recommended that you don’t do a single multi on any of them."
    },
    Anniversary: {
        title: "Anniversary Sugo-Fest",
        description: "Available during the game’s 3 Anniversary Celebrations: Half Anniversary (November-December), Global Anniversary (February-March) and Anniversary (May-June). In these banners, you can pull Anniversary Sugo-Fest characters, which are usually pretty good.",
        verdict: 'worth it but',
        analysis: "Anniversary banners have a weaker character pool than Super-Sugo banners (which feature both Anniversary and Super Sugo-Fest characters), and the characters that debut in them are usually inferior to those in Super Sugo-Fest banners. With these factors in mind, many F2P players usually do a few medal pulls on them and save their gems for Super Sugo Celebrations. However, just like Super Sugo-Fest banners, Anniversary Sugo-Fest banners are accompanied by campaigns offering gifts, and their characters might be worth a few pulls. So, it’s a good idea to talk to experienced community members to see if a new Anniversary character is worth it, so you can decide how many gems to spend."
    },
    Treasure: {
        title: "Treasure Sugo-Fest",
        description: "This banner becomes available five days before the Treasure Map event. Each month, the new Treasure Sugo Rare character and the Treasure Rare Recruits make their debut in this banner. These characters are designed to make it significantly easier to deal with the gimmicks of the Treasure Map event in which they debuted. Additionally, they increase your Treasure Points Multiplier (making it easier to climb the rankings), each adds 2 extra drops, and they provide additional perks on the map (100% success rate on cards and an extra Card Slot). ",
        verdict: 'medal pulls',
        analysis: "Treasure Sugo Rare and Treasure Rare Recruits can be useful in many events, but that doesn’t justify wasting a lot of gems. The safest approach for a F2P is to save up so they have 180 medals available when Part 1 becomes available and do the 4 first steps there. The 4th step of Part1 guarantees one of the 3 new characters. If you’re lucky, you might even get an extra character from the new batch. It’s a cheap solution that will save you gems and help you a lot during the event. "
    },
    Kizuna: {
        title: "",
        description: "",
        verdict: 'medal pulls',
        analysis: ""
    },
    Support: {
        title: "",
        description: "",
        verdict: 'medal pulls',
        analysis: ""
    },
    Aurora: {
        title: "",
        description: "",
        verdict: 'worth it but',
        analysis: ""
    },
    Rumble: {
        title: "",
        description: "",
        verdict: 'medal pulls',
        analysis: ""
    },
    Feast: {
        title: "",
        description: "",
        verdict: 'worth it but',
        analysis: ""
    }
}


export const VERDICT_MAP: Record<VerdictType, { label: string; color: string; bg: string; border: string }> = {
    'hard skip': {
        label: "HARD SKIP",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
    },
    'medal pulls': {
        label: "MEDAL PULLS",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    'worth it but': {
        label: "WORTH IT, BUT...",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20"
    }
};