import colorMetadataDarkJson from "../../tokens/metadata/color.metadata.dark.json" with {
    type: "json",
};
import colorMetadataLightJson from "../../tokens/metadata/color.metadata.light.json" with {
    type: "json",
};

/**
 * Fargemetadata (luminance, lightness og chroma per fargerolle) for lyst
 * og mørkt tema. JSON-filene bakes inn i bygget, slik at modulen ikke er
 * avhengig av filsystemet eller av at JSON kan importeres der den kjøres.
 */
export const colorMetadataLight = colorMetadataLightJson.color;
export const colorMetadataDark = colorMetadataDarkJson.color;
