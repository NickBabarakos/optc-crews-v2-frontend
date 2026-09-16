import { CharacterSummary } from "@/app/characters/_types/characters";
import { characterPageFilters } from "@/app/characters/_types/filters";
import { matchesFilters } from "@/app/characters/_utils/matchesFilters";


export function filterCharacters(allCharacters: CharacterSummary[], filters: characterPageFilters):CharacterSummary[]{
    const hasSearch = Boolean(filters.search && filters.search.trim() !== "");
    const hasTypes = filters.types.length > 0;
    const hasClasses = filters.classes.length > 0;
    const hasCategories = filters.categories.length > 0;
    const hasTags = filters.tags.length > 0;
    const hasCosts = filters.costs.length > 0;
    const hasStars = filters.stars.length > 0;

    //Global Short-Circuit
    if(!hasSearch && !hasTypes && !hasClasses && !hasCategories && !hasTags && !hasCosts && !hasStars) return allCharacters;

    //Seperation only if types filter is selected
    const typeFilters = hasTypes 
        ? filters.types.filter(t => t !== 'VS' && t !== 'DUAL') 
        : [];
    const unitTypeFilters = hasTypes 
        ? filters.types.filter(t => t === 'VS' || t === 'DUAL') 
        : [];

    return allCharacters.filter((char) => 
        matchesFilters({char, filters, typeFilters, unitTypeFilters})
    );
}