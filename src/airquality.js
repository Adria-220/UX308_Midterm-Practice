// input: AQI number
export function airQuality(aqi) {
    let quality = "";

    if (aqi <= 50) {
        quality = "Good";
    } else if (aqi <= 100) {
        quality = "Moderate";
    } else if (aqi <= 150) {
        quality = "Unhealthy for Sensitive Groups";
    } else if (aqi <= 200) {
        quality = "Unhealthy";
    } else if (aqi <= 300) {
        quality = "Very Unhealthy";
    } else {
        quality = "Hazardous";
    };

    return quality;
};

if (import.meta.main) {
    console.log(`AQI 125 is ${airQuality(125)}`);
};