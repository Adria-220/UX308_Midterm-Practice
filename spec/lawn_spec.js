import { mowingTime } from "../src/lawn.js";

describe("lawn mowing time", function () {
    it("calculates time for small lawn", function () {
        expect(mowingTime(10, 10, 5)).toBe(20);
    });

    it("calculates time for medium lawn", function () {
        expect(mowingTime(20, 15, 10)).toBe(30);
    });

    it("calculates time for large lawn", function () {
        expect(mowingTime(50, 40, 20)).toBe(100);
    });
});