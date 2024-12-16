import { Block } from "payload/types";
import { link } from "../fields/link";

// Denne blokken er definert for å enklere kunne hente ut typen til lenker
export const Link: Block = {
    slug: "link",
    fields: [link({})],
};
