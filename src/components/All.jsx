import { View, Text } from "react-native";
import { sqftToAcres } from "./src/acres";

export default function Acres() {
  return (
    <View>
      <Text>
        43560 sq ft = {sqftToAcres(43560)} acres
        </Text>
      <Text>
        87120 sq ft = {sqftToAcres(87120)} acres
        </Text>
      <Text>
        21780 sq ft = {sqftToAcres(21780)} acres
        </Text>
    </View>
  );
};

import { View, Text } from "react-native";
import { mowingTime } from "./src/lawn";

export default function Lawn() {
  return (
    <View>
      <Text>
        10 x 10 @ 5 m²/min = {mowingTime(10, 10, 5)} minutes
        </Text>
      <Text>
        20 x 15 @ 10 m²/min = {mowingTime(20, 15, 10)} minutes
        </Text>
      <Text>
        50 x 40 @ 20 m²/min = {mowingTime(50, 40, 20)} minutes
        </Text>
    </View>
  );
};

import { View, Text } from "react-native";
import { airQuality } from "./src/airquality";

export default function AirQuality() {
  return (
    <View>
      <Text>
        25 AQI → {airQuality(25)}
        </Text>
      <Text>
        75 AQI → {airQuality(75)}
        </Text>
      <Text>
        125 AQI → {airQuality(125)}
        </Text>
      <Text>
        175 AQI → {airQuality(175)}
        </Text>
      <Text>
        250 AQI → {airQuality(250)}
        </Text>
      <Text>
        350 AQI → {airQuality(350)}
        </Text>
    </View>
  );
};

import { View, Text } from "react-native";
import { yee_ha } from "./src/yeeha";

export default function YeeHa() {
  return (
    <View>
      <Text>
        9 → {yee_ha(9)}
        </Text>
      <Text>
        14 → {yee_ha(14)}
        </Text>
      <Text>
        21 → {yee_ha(21)}
        </Text>
      <Text>
        10 → {yee_ha(10)}
        </Text>
    </View>
  );
};

import { View, Text } from "react-native";
import { slope } from "./src/slope";

export default function Slope() {
  return (
    <View>
      <Text>
        Slope (0,0) → (2,2): {slope(0, 0, 2, 2)}
        </Text>
      <Text>
        Slope (0,2) → (2,0): {slope(0, 2, 2, 0)}
        </Text>
      <Text>
        Slope (0,3) → (4,3): {slope(0, 3, 4, 3)}
        </Text>
    </View>
  );
};