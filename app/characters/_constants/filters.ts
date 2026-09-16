export const CHARACTER_TYPES = ["STR", "DEX", "QCK", "PSY", "INT", "VS", "DUAL"];
export const CHARACTER_CLASSES = ["Fighter", "Shooter", "Slasher", "Striker", "FreeSpirit", "Cerebral", "Powerhouse", "Driven"];
export const CHARACTER_CATEGORY = ["Super Sugo-Fest Only", "Anniversary", "Pirate Rumble Sugo-Fest Only", "Treasure Sugo-Fest Only", "Pirate Alliance Kizuna Clash Sugo-Fest Only", "Exchange Only", "Sugo Rare", "Treasure Map Rare Recruit", "Treasure Map Limited Character", "Kizuna Clash Limited Character", "Rumble Rare Recruit", "Support Character", "Support Only Character", "Grand Feast Character", "Rare Recruit", "Alternative Artwork"]; //Other Rare Recruits = Rare Recruit
export const CHARACTER_STARS = ["4", "4+", "5", "5+", "6", "6+"];
export const CHARACTER_TAGS= [
    "A.O. Pirates", "Akazaya Nine", "Alabasta Arc", "Alabasta Kingdom", "Alvida Pirates", "Amazon Lily Arc", "Ancient Giant", "Ancient Zoan-type / Devil Fruit User", "Animal Kingdom Pirates", "Arlong Pirates",
    "Bandits", "Baratie", "Barto Club", "Beautiful Pirates", "Big Mom Pirates", "Blackbeard Pirates", "Bluejam Pirates", "Bonney Pirates", "Buggy Pirates", "Buggy's Delivery", 
    "CP0", "CP8", "CP9", "Caribou Pirates", "Celestial Dragon", "Child", "Cross Guild", "Davy Back Fight Arc", "Donquixote Pirates", "Drake Pirates", "Dressrosa Arc", "Drum Kingdom", 
    "East Blue Arc", "Egghead Arc", "Elbaph Arc", "Elegia Kingdom", "Enies Lobby Arc", "Evil Black Drum Kingdom",  "Fallen Monk Pirates", "Firetank Pirates", "Fish-Man", "Fish-Man Island Arc", "Five Elders", "Flying Pirates", 
    "Former / Baroque Works", "Former / Navy", "Former / Roger Pirates", "Former / Royalty", "Former / Seven Warlords of the Sea", "Former / Whitebeard Pirates",
    "Four Emperors", "Foxy Pirates", "Galley-La Company", "Germa 66", "Giant", "Giant Pirate Crew", "Golden Lion Pirates", "Gran Tesoro", "Great Prison Impel Down Arc", 
    "Happosui Army", "Hawkins Pirates", "Heart Pirates", "Holy Knights", "Homies", "Impel Down", "Impostor Straw Hat Pirates", "Jaya", "Kamabakka Queendom", "Kami's Army", "Kid Pirates", "Kozuki Clan", "Krieg Pirates", "Kuja Pirates", "Kurozumi Clan", 
    "Land of Wano Arc", "Lead Performer", "Logia-Type / Devil Fruit User", "Longarm Tribe", "Marineford Paramount War Arc", "Merfolk", "Mink", "Mokomo Dukedom", "Mythical Zoan-type / Devil Fruit User", 
    "Navy Admiral", "Navy Fleet Admiral", "Navy Vice Admiral", "Neo Marines", "New Fish-Man Pirates", "New Giant Pirate Crew", "Ohara", "On-Air Pirates", "Paramythia-type / Devil Fruit User", "Punk Hazard Arc", 
    "Red-Haired Pirates", "Reverie Arc", "Revolutionary Army", "Rocks Pirates", "Rolling Pirates", "Rumbar Pirates", "Ryugu Kingdom",
    "SWORD", "Sabaody Archipelago Arc", "Scientist", "Seraphim", "Shandian Warrior", "Skypiea Arc", "Spade Pirates", "Straw Hat Pirates", "Sun Pirates", "Supernova", "Sweet 3 General",
    "Thriller Bark Arc", "Thriller Bark Pirates", "Tobi Roppo", "Tontatta", "Tontatta Kingdom", "Usopp Pirates", "Vegapunk", 
    "Water Seven Arc", "Whole Cake Island Arc", "Windmill Village", "World Economic Journal", "World Government", "World Pirates", "Worst Generation", "Zoan-type / Devil Fruit User", "Zou Arc"
];
export const SEARCH_TERMS = ["id", "name", "family"];
export const CHARACTER_COST = [1, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 25, 26, 27, 28, 29, 30, 40, 50, 54, 55, 60, 65, 70, 99];
export const SORT_OPTIONS=[
        {label: "ID", value: "id"},
        {label: 'Name', value: 'name'},
        {label: 'Rarity', value: 'rarity' },
        {label: 'ATK', value: 'atk' },
        {label: 'HP', value: 'hp' },
        {label: 'RCV', value: 'rcv' },
        {label: 'Cost', value: 'cost' },
        {label: 'Level', value: 'level'},
        {label: 'LB+', value: 'lbPlus'},
        {label: 'Rumble LB+', value: 'rumbleLbPlus'}
];
export const COPIES_FOR_LEVEL=[
    {copies: 1, level: 99},
    {copies: 2, level: 105},
    {copies: 3, level: 110},
    {copies: 5, level: 120},
    {copies: 7, level: 130},
    {copies: 10, level: 150}
];
export const LLB_STYLES =[
    {level: 99, style: 'text-yellow-300'},
    {level: 105, style: 'text-red-500'},
    {level: 110, style: 'text-red-500'},
    {level: 120, style: 'text-red-500'},
    {level: 130, style: 'text-red-500'},
    {level: 150, style: 'text-red-600 font-extrabold'}
];
export const FORMS = [
    {unitType: 'Dual', forms:['Char1', 'Char2', 'Combined']},
    {unitType: 'VS', forms: ['Char1', 'Char2']}
];
export const RARITY_WEIGHTS: Record<string, number> ={
    '4':1,
    '4+':2,
    '5':3,
    '5+':4,
    '6':5,
    '6+':6
};

export const FILTER_SECTIONS = [
    { id: "searchBy", name: "Search By", variant: "text", options: SEARCH_TERMS },
    { id: "types", name: "Type", variant: "types", options: CHARACTER_TYPES },
    { id: "classes", name: "Class", variant: "classes", options: CHARACTER_CLASSES },
    { id: "stars", name: "Rarity", variant: "stars", options: CHARACTER_STARS },
    { id: "categories", name: "Category", variant: "text", options: CHARACTER_CATEGORY },
    { id: "tags", name: "Tags", variant: "text", options: CHARACTER_TAGS },
    { id: "costs", name: "Cost", variant: "text", options: CHARACTER_COST },
] as const;


