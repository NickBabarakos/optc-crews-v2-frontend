// Adds-Removes a value from the Selected Values array
export function toggleMultiSelectValue(currentValues: string[], targetValue: string|number):string[]{
    const val = String(targetValue);

    if (currentValues.includes(val)) return currentValues.filter((item) => item !== val);

    return [...currentValues, val];
}


/**
 * Handles the round switching of sorting: field:asc -> field:desc -> ""(default) 
 */
export const getNextSortState = (currentValue:string, targetField: string): string => {
    const [field, direction] = currentValue.split(':');

    if(field !== targetField){
        return `${targetField}:asc`;
    }

    if(direction === 'asc'){
        return `${targetField}:desc`;
    }

    return "";
};