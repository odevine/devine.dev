import { formatHex, Lch } from "culori";
import { createScientificPalettes } from "Logic";
import { ColorBlock } from "Components";

export const Home = () => {
    const baseColor: Lch = {
        l: 101,
        c: 100,
        h: 0,
        mode: "lch"
    };

    const palettes = createScientificPalettes(baseColor);
    console.log("  ~ file: Home.tsx:14 ~ Home ~ palettes:", palettes);
    const triadicHex = palettes.triadic.map((colorLCH) => formatHex(colorLCH));

    return (
        <div>
            Hello dev
            <div>
                Base Color:
                <ColorBlock key={formatHex(baseColor)} color={formatHex(baseColor)}>
                    {formatHex(baseColor)}
                </ColorBlock>
            </div>
            <br />
            <div>
                {triadicHex.map(color => <ColorBlock key={color} color={color}>
                    {color}
                </ColorBlock>)}
            </div>
        </div>
    );
};
