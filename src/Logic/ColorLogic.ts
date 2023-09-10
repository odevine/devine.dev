import { Lch } from "culori";

import { IScientificPalette, IPaletteSteps } from "Models";

function adjustHue(val: number) {
    if (val < 0) val += Math.ceil(-val / 360) * 360;
  
    return val % 360;
  }

export const createScientificPalettes = (baseColor: Lch): IScientificPalette => {
    const targetHueSteps: IPaletteSteps = {
        analogous: [0, 30, 60],
        triadic: [0, 120, 240],
        tetradic: [0, 90, 180, 270],
        complementary: [0, 180],
        splitComplementary: [0, 150, 210]
    };

    const palettes: IScientificPalette = {};

    for (const type of Object.keys(targetHueSteps)) {
        palettes[type] = targetHueSteps[type].map((step) => {
            return {
                l: baseColor.l,
                c: baseColor.c,
                h: adjustHue((baseColor.h ?? 0) + step),
                mode: "lch",
            }
        });
    }
    return palettes;
};
