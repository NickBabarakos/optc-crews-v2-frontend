import {LABEL_COLOR_CONFIG} from "@/constants/label-colors";

export const formatCharId = (id: number | string):string => {
    return String(id).padStart(4, '0');
}

//Removes spaces and replaces them with '-' and turns string to lowercase. eg: 'Free Spirit' => 'free-spirit'
export const formatIconName = (text: string): string => {
    return text.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
};

//Removes '_' and add space. Eg. 'RAYLEIGH_SHOP' => 'RAYLEIGH SHOP'
export const formatShopName = (text: string): string =>{
    return text.replace(/_/g, ' ').trim();
}

//String Coloring- gets a string and returns it's color
export const getLabelColor = (label:string): string => {
    if(!label) return "text-white";

    const normalizedLabel = label.trim().toUpperCase();
    const foundConfig = LABEL_COLOR_CONFIG.find(config =>
        config.labels.some(l => l.toUpperCase() === normalizedLabel)
    );

    return foundConfig? foundConfig.color : "text-white";
}