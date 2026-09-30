/**
 * Calculates the number of combinations (n choose r).
 * It determines how many different ways we can select r itmes from a total set of n items, where the order selection doesn't matter.
 * 
 * @param n: Total number of available items (eg, total new characters in a group).
 * @param r: Number of items to be selected (eg, how many of them the user wants to pull). 
 */
 export const nCr = (n: number, r: number): number => {
    //1. Boundary Check: If we ask for more items than available or a negative amount, there are 0 possible combinations.
    if(r < 0 || r > n) return 0;        

    //2. Base Caes: There is exactly 1 way to select nothing (r=0) or to select every single item (r=n)
    if (r === 0 || r === n) return 1;   

    //3. Symmetry Property: The number of ways to choose r items is the same as choosing which n-r items to leave out 
    // (eg, 10C8 is the same as 10C2). We use the smaller value to minimize the number of iterations in the loop 
    if (r > n/2) r = n- r;              
    let res = 1;                        

    //4. Iterative calculation: We multiply and divide at each step to calculate the combination. We avoid using factorials (n!) 
    //because they grow to large for JS Number type (overlow), leading to infinity.
    for (let i =1; i <=r; i++){         
        //Formula: (n * (n-1)*...*(n-r+1) / (1*2*...*r) )
        res = res*(n-i + 1)/i;         
    }
    return res;
};


/**
 * Calculates the probability of obtaining at least k specific items out of n available items, given the probability p of pulling
 * specific item.
 * 
 * This uses the Binomial Distribution formula:
 * P(X >= k) = Sum from i=k to n of [ nCi * p^i * (1-p)^(n-1) ]
 * 
 * @param p : The probability of pulling one specific character (e.g, 0.01 for 1%) 
 * @param n : The total number of new characters available in this group (e.g., 4 new legends)
 * @param k : The minumum number of unique characters the user wants to pull (e.g. at least 2)
 */

export const getAtLeastKSuccessChance = (p: number, n: number, k: number): number => {

    //If user wants 0 or fewer, the probability is 100% (1.0)
    if (k<=0) return 1;

    //If the user wants more than what is available, the probability is 0% (0.0)
    if (k>n) return 0;


    let totalProb = 0;

    //We sum the probabilities of getting exactly i characters, for every i from k to n
    //Example: To get "at least 2 out of 4", we sum the chances of getting exactly 2, exactly 3, exactly 4.
    for(let i =k; i <= n; i++){
        //Binomial Probability Formula:
        // nCr(n,i) -> Number of ways to pick i items out of n
        // Math.pow(p,i) -> Probability of success happening exactly i times
        // Math.pow(1-p, n-1) -> Probability of failure happening the remaining (n-i) times 
        totalProb += nCr(n,i)*Math.pow(p,i)*Math.pow(1-p, n-i);
    }
    return totalProb;
};