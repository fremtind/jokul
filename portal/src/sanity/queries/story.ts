import { defineQuery } from "next-sanity";

export const storiessQuery = defineQuery(`*[_type == "jokul_storybookStory"]{
    storyName,
    storyId,
    storyDescription,
} | order(name)`);
