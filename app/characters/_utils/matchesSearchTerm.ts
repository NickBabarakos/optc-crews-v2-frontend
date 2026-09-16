import { Family } from "@/app/characters/_types/characters";
import { SearchField } from "@/app/characters/_types/filters";

export function matchesSearchTerm(name: string, id: number, family: Family, searchBy: SearchField[], searchTerm: string): boolean {
    if (!searchTerm) return true;

    const term = searchTerm?.trim().toLowerCase();
    if(!term) return true; 

    const checkAll = searchBy.length === 0;
    const checkId = checkAll || searchBy.includes('id');
    const checkName = checkAll || searchBy.includes('name');
    const checkFamily = checkAll || searchBy.includes('family');

    //Id check 
    if(checkId){
        const cleanIdStr = term.replace(/^#/, '').trim();
        if (/^\d+$/.test(cleanIdStr)) {
            if (id === Number(cleanIdStr)) return true;
        }
    }
    
    //Name check (substring match)
    if (checkName && name?.toLowerCase().includes(term)) return true;
    
    //Family check (substring match)
    if (checkFamily && family) {
        const familyMatch = 
            family.form1?.some(f => f?.toLowerCase().includes(term)) ||
            family.form2?.some(f => f?.toLowerCase().includes(term));
        
        if (familyMatch) return true;
    }

    return false;
}