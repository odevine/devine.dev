import { Lch } from "culori";

export interface IPaletteSteps {
    [key: string]: number[];
}

export interface IScientificPalette {
    [key: string]: Lch[];
}