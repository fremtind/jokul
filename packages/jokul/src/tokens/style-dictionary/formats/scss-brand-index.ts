import type { Format } from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";

/**
 * Format som genererer en `_index.scss`-fil for en brand-katalog.
 */
const scssBrandIndexFormat: Format = {
    name: "scss/brand-index",
    format: async ({ file }) => {
        return `${await fileHeader({ file })}@forward "color-scheme";
@forward "fonts";
`;
    },
};

export default scssBrandIndexFormat;
