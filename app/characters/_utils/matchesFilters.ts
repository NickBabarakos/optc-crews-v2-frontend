import { MatchesFiltersProps } from "@/app/characters/_types/filters";
import { getCharacterForms } from "@/app/characters/_utils/getCharacterForms";

export function matchesFilters({ char, filters, typeFilters, unitTypeFilters }: MatchesFiltersProps): boolean {
    // 1. Global Checks (Category, Stars, Cost)
    if (filters.categories.length > 0 && !filters.categories.includes(char.category)) return false;
    if (filters.stars.length > 0 && !filters.stars.includes(char.stars)) return false;
    if (filters.costs.length > 0 && !filters.costs.includes(char.cost.toString())) return false;

    // 2. UnitType Check (VS, DUAL)
    if (unitTypeFilters.length > 0) {
        const charUnitType = char.unitType?.toUpperCase();
        if (!unitTypeFilters.includes(charUnitType)) return false;
    }

    const searchTerm = filters.search?.trim().toLowerCase() || "";

    // 3. Search Fields Resolution
    const checkAll = filters.searchBy.length === 0;
    const checkId = checkAll || filters.searchBy.includes('id');
    const checkName = checkAll || filters.searchBy.includes('name');
    const checkFamily = checkAll || filters.searchBy.includes('family');

    let matchesId = false;
    let matchesName = false;

    if (searchTerm) {
        matchesId = Boolean(checkId && searchTerm.replace(/^#/, '') === char.id.toString());
        matchesName = Boolean(checkName && char.name?.toLowerCase().includes(searchTerm));

        const hasAnyFamilyMatch = checkFamily && Boolean(
            char.family && (
                char.family.form1?.some(f => f?.toLowerCase().includes(searchTerm)) ||
                char.family.form2?.some(f => f?.toLowerCase().includes(searchTerm))
            )
        );

        if (!matchesId && !matchesName && !hasAnyFamilyMatch) {
            return false;
        }
    }

    //--------------------------------------------
    // Level 2: Form-level Short-Circuit Bypass
    //--------------------------------------------
    const hasTypeFilters = typeFilters.length > 0;
    const hasClassFilters = filters.classes.length > 0;
    const hasTagFilters = filters.tags.length > 0;

    //
    const needsFormSearch = Boolean(searchTerm && checkFamily && !matchesId && !matchesName);

    if(!hasTypeFilters && !hasClassFilters && !hasTagFilters && !needsFormSearch) return true;
    

    // 4. Form-based Checks (Type, Class, Tags, Family)
    const forms = getCharacterForms(char);

    return forms.some(form => {
        const matchesType = !hasTypeFilters || form.types.some(t => typeFilters.includes(t));
        const matchesClass = !hasClassFilters || filters.classes.some(c => form.classes.includes(c));
        const matchesTags = !hasTagFilters || filters.tags.some(t => form.tags.includes(t));

        let matchesSearch = true;
        if (needsFormSearch) {
            matchesSearch = form.families.some(f => f?.toLowerCase().includes(searchTerm));
        }

        return matchesType && matchesClass && matchesTags && matchesSearch;
    });
}