// inputs: x1, y1, x2, y2
export function slope(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    let slp = rise / run;

    return slp;
};

if (import.meta.main) {
    console.log(`Slope is ${slope(0, 0, 2, 2)}`);
};