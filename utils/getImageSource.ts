import { UnitForm } from "@/app/characters/_types/details-modal";

export type ImageType = 'unitIcon' | 'evolverIcon' | 'stepLabel';

interface ImageOptions {
    unitType?: string;
    form?: UnitForm;
}

const CDN_BASE_URL = 'https://optc-crews-assets.pages.dev';

export function getImageSource(path: string, type: ImageType = 'unitIcon', options?: ImageOptions): string {
    if (type === 'evolverIcon') return `${CDN_BASE_URL}//evolvers_icons/${path}.webp`;
    if (type === 'stepLabel') return  `${CDN_BASE_URL}/step_labels/${path}.webp`;

    let resolvedPath = path;

    if (options?.unitType === 'VS') {
        resolvedPath = options.form === 'Char2' ? `${path}-2` : `${path}-1`;
    } else if (options?.unitType === 'Dual') {
        if (options.form === 'Char1') resolvedPath = `${path}-1`;
        else if (options.form === 'Char2') resolvedPath = `${path}-2`;
    }

    return `${CDN_BASE_URL}/${resolvedPath}.webp`;
}