import { slope } from "../src/slope.js";

describe("slope of a line", function () {
    it("calculates positive slope", function () {
        expect(slope(0, 0, 2, 2)).toBe(1);
    });

    it("calculates negative slope", function () {
        expect(slope(0, 2, 2, 0)).toBe(-1);
    });

    it("calculates zero slope", function () {
        expect(slope(0, 3, 4, 3)).toBe(0);
    });
});