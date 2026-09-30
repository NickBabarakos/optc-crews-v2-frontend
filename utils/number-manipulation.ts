export type StepRangeItem = 
    | { type: 'single'; value: number}
    | { type: 'range'; start: number; end: number };


/**
 * Transforms a number to the corresponding sprite tokens files.
 * 
 * @param num - number that needs transformation
 * @returns An array with the spite assets (eg ['2', '5th'])
 */
export function getOrdinalTokens(num: number): string[]{
    const s = String(num);
    if (s.length === 0) return [];

    const lastDigit = s[s.length - 1];
    const prefixDigits = s.slice(0,-1).split("");
    const lastTwo = Math.abs(num)%100;

    let suffixToken: string;

    if (lastTwo === 11) suffixToken = "1th";
    else if (lastTwo === 12) suffixToken = "2th";
    else if (lastTwo == 13) suffixToken = "3th";
    else{
        switch(lastDigit){
            case "1": suffixToken = "1st"; break;
            case "2": suffixToken = "2nd"; break;
            case "3": suffixToken = "3rd"; break;
            default: suffixToken = `${lastDigit}th`; break;
        }
    }

    return [...prefixDigits, suffixToken];
}


/**
 * Makes ranges of 3+ numbers that are in a row.
 * Example: [2, 3, 4, 8, 13] -> [{type:'range', start:2, end:4}, {type:'single', value:8}, ...]
 * @param numbers - array with step numbers
 * @returns - array with single values and ranges
 */
export function formatStepRanges(numbers: number[]): StepRangeItem[]{
    if (!numbers || numbers.length === 0) return [];

    const sorted = [...numbers].sort((a,b)=> a-b);
    const tokens: StepRangeItem[] = [];

    let i =0;
    while (i < sorted.length){
        let j = i;
        while (j+1 < sorted.length && sorted[j+1] === sorted[j] + 1) j++;
        const runLength = j-i+1;

        //If we have 3 or more in a row, we make them a range (e.g 2-5)
        if(runLength >= 3){
            tokens.push({type: 'range', start: sorted[i], end: sorted[j]});
            i = j+1;
        }else{
            tokens.push({ type: 'single', value: sorted[i]});
            i++;
        }
    }

    return tokens;
}

export function getAccessibleOrdinalLabel(value: number): string{
    const lastTwo = Math.abs(value) % 100;
    const lastDigit = value % 10;
    let suffix = 'th';

    if (lastTwo < 11 || lastTwo > 13){
        if (lastDigit === 1) suffix = 'st';
        else if (lastDigit === 2) suffix = 'nd';
        else if (lastDigit === 3) suffix = 'rd';
    }

    return `${value}${suffix} Step`;
}