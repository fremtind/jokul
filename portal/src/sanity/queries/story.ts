import { defineQuery } from "next-sanity";

export const examplesQuery = defineQuery(`*[_type == "jokul_example"]{
    title,
    id,
    description,
    height,
    inert,
} | order(name)`);
