import { SearchField } from "@/app/characters/_types/filters";
import { CharacterMode } from "@/components/interactive-character/types";
import { parseAsArrayOf, parseAsBoolean, parseAsInteger, parseAsString, parseAsStringEnum } from "nuqs";



const VALID_MODES: CharacterMode[] = [
    'normal',
    'rainbow',
    'copies',
    'limitBreakPlus',
    'rumbleLimitBreakPlus'
];

const defaultOptions = {shallow: true, scroll: false};

//Parsers for all Filters
export const filterParsers = {
    search: parseAsString.withDefault('').withOptions(defaultOptions),
    searchBy: parseAsArrayOf(parseAsString, ',').withDefault([] as SearchField[]).withOptions(defaultOptions),
    types: parseAsArrayOf(parseAsString, ',').withDefault([]).withOptions(defaultOptions),
    classes: parseAsArrayOf(parseAsString, ',').withDefault([]).withOptions(defaultOptions),
    categories: parseAsArrayOf(parseAsString, ',').withDefault([]).withOptions(defaultOptions),
    tags: parseAsArrayOf(parseAsString, ',').withDefault([]).withOptions(defaultOptions),
    costs: parseAsArrayOf(parseAsString, ',').withDefault([]).withOptions(defaultOptions),
    stars: parseAsArrayOf(parseAsString, ',').withDefault([]).withOptions(defaultOptions),
    sorting: parseAsString.withDefault('').withOptions(defaultOptions),
};

//Parsers for Toolbar & Display State
export const modeParser = parseAsStringEnum<CharacterMode>(VALID_MODES)
    .withDefault('normal')
    .withOptions(defaultOptions);

export const showLLBParser = parseAsBoolean
    .withDefault(false)
    .withOptions(defaultOptions);

//Parser for Modal details
export const characterIdParser = parseAsInteger.withOptions(defaultOptions);