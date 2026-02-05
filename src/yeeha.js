// input: integer
export function yee_ha(num) {
    let result = "";

    if (num % 3 === 0 && num % 7 === 0) {
        result = "Yee Ha";
    } else if (num % 3 === 0) {
        result = "Yee";
    } else if (num % 7 === 0) {
        result = "Ha";
    } else {
        result = "Nada";
    };

    return result;
};

if (import.meta.main) {
    console.log(`21 returns ${yee_ha(21)}`);
};