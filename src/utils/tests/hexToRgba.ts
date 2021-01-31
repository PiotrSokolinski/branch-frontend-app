/* eslint-disable no-restricted-syntax */
import hexToRgba from "../hexToRgba";

type Colors = {
  [key: string]: string;
  red: string;
  maroon: string;
  yellow: string;
  purple: string;
  green: string;
};

type Opacities = {
  [key: string]: number;
  red: number;
  maroon: number;
  yellow: number;
  purple: number;
  green: number;
};

describe("hexToRgba", () => {
  const hexColors: Colors = {
    red: "#BE312A",
    maroon: "#800000",
    yellow: "#FFFF00",
    purple: "#67246F",
    green: "#229954",
  };

  const rgbaColors: Colors = {
    red: "rgba(190, 49, 42, 1)",
    maroon: "rgba(128, 0, 0, 1)",
    yellow: "rgba(255, 255, 0, 1)",
    purple: "rgba(103, 36, 111, 1)",
    green: "rgba(34, 153, 84, 1)",
  };

  it("Should return rgba color from hex color", () => {
    for (const [key, value] of Object.entries(hexColors)) {
      const rgbaColor = hexToRgba(value);
      expect(rgbaColor).toEqual(rgbaColors[key]);
    }
  });

  it("Should return rgba color from hex color with opacity", () => {
    const opacities: Opacities = {
      red: 0.5,
      maroon: 0.3,
      yellow: 0.1,
      purple: 0.9,
      green: 1,
    };
    const rgbaColorsWithOpacity: Colors = {
      red: `rgba(190, 49, 42, ${opacities.red})`,
      maroon: `rgba(128, 0, 0, ${opacities.maroon})`,
      yellow: `rgba(255, 255, 0, ${opacities.yellow})`,
      purple: `rgba(103, 36, 111, ${opacities.purple})`,
      green: `rgba(34, 153, 84, ${opacities.green})`,
    };
    for (const [key, value] of Object.entries(hexColors)) {
      const rgbaColor = hexToRgba(value, opacities[key]);
      expect(rgbaColor).toEqual(rgbaColorsWithOpacity[key]);
    }
  });

  it("Should return rgba color from hex color with opacity 1 when passed opacity is wrong", () => {
    const opacities: Opacities = {
      red: 1.4,
      maroon: 31,
      yellow: -103,
      purple: -0.1,
      green: 11,
    };
    for (const [key, value] of Object.entries(hexColors)) {
      const rgbaColor = hexToRgba(value, opacities[key]);
      expect(rgbaColor).toEqual(rgbaColors[key]);
    }
  });
});
