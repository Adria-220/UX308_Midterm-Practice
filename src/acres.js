// input: square feet
export function sqftToAcres(sqft) {
    let acres = 0;

    acres = sqft / 43560;

    return acres;
};

if (import.meta.main) {
    console.log(`43560 sq ft is ${sqftToAcres(43560)} acres`);
};