// inputs: width (m), length (m), square metres per minute
export function mowingTime(width, length, rate) {
    let minutes = 0;
    let area = width * length;

    minutes = area / rate;

    return minutes;
};

if (import.meta.main) {
    console.log(`Time to mow lawn: ${mowingTime(10, 10, 5)} minutes`);
};