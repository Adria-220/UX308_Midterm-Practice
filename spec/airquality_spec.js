import { airQuality } from "../src/airquality.js";

describe("air quality index", function () {
    it("returns Good", function () {
        expect(airQuality(25)).toBe("Good");
    });

    it("returns Moderate", function () {
        expect(airQuality(75)).toBe("Moderate");
    });

    it("returns Unhealthy for Sensitive Groups", function () {
        expect(airQuality(125)).toBe("Unhealthy for Sensitive Groups");
    });

    it("returns Unhealthy", function () {
        expect(airQuality(175)).toBe("Unhealthy");
    });

    it("returns Very Unhealthy", function () {
        expect(airQuality(250)).toBe("Very Unhealthy");
    });

    it("returns Hazardous", function () {
        expect(airQuality(350)).toBe("Hazardous");
    });
});