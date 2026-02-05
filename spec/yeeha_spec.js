import { yee_ha } from "../src/yeeha.js";

describe("yee ha function", function () {
    it("returns Yee", function () {
        expect(yee_ha(9)).toBe("Yee");
    });

    it("returns Ha", function () {
        expect(yee_ha(14)).toBe("Ha");
    });

    it("returns Yee Ha", function () {
        expect(yee_ha(21)).toBe("Yee Ha");
    });

    it("returns Nada", function () {
        expect(yee_ha(10)).toBe("Nada");
    });
});