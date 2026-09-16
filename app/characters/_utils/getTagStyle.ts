export const GREEN_TAGS: string[] = [
    "Celestial Dragon",
    "Ancient Giant",
    "Five Elders",
    "Four Emperors",
    "Navy Fleet Admiral",
    "Navy Admiral",
    "Worst Generation",
    "Navy Vice Admiral",
    "Former / Warlords of the Sea",
    "Supernova",
    "Cross Guild",
    "Lead Performer",
    "Tobi Roppo",
    "Vegapunk",
    "Seraphim",
    "Scientist", "Sweet 3 General", "Mink", "Homies", "Fish-Man", "Former / Royalty", "Tontatta", "Giant", "Merfolk", 
    "Longarm Tribe", "Shandian Warrior", "Child"
]

export function getTagStyle(tag: string): string{

    const base = "text-white font-medium border border-amber-600/80 hover:border-amber-300 shadow-sm transition-all duration-150";

    const hasStandaloneArc = /\bArc\b/i.test(tag);
    if (hasStandaloneArc) return `${base} bg-sky-950 hover:bg-sky-900`;

    if(tag.includes("Devil Fruit User")) return  `${base} bg-purple-950 hover:bg-purple-900`;

    if (GREEN_TAGS.includes(tag)) return `${base} bg-emerald-950 hover:bg-emerald-900`;

    return `${base} bg-amber-950 hover:bg-amber-900`
}