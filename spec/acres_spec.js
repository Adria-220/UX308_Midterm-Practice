import { sqftToAcres } from "../src/acres.js";

describe("square feet to acres", function () {
    it("converts 43560 sq ft to 1 acre", function () {
        expect(sqftToAcres(43560)).toBeCloseTo(1);
    });

    it("converts 87120 sq ft to 2 acres", function () {
        expect(sqftToAcres(87120)).toBeCloseTo(2);
    });

    it("converts 21780 sq ft to 0.5 acres", function () {
        expect(sqftToAcres(21780)).toBeCloseTo(0.5);
    });
});