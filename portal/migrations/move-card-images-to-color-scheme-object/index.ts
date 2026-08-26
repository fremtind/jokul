import { at, defineMigration, setIfMissing, unset } from "sanity/migrate";

export default defineMigration({
    title: "Move card images to color scheme object",
    documentTypes: ["jokul_component", "jokul_fundamentals", "jokul_monster"],
    filter: "defined(image) || defined(imageDark)",
    migrate: {
        document(document) {
            const lightImage = document.image;
            const darkImage = document.imageDark;

            return [
                at(
                    "cardImages",
                    setIfMissing({
                        _type: "colorSchemeImages",
                        ...(lightImage ? { light: lightImage } : {}),
                        ...(darkImage ? { dark: darkImage } : {}),
                    }),
                ),
                ...(lightImage
                    ? [at("cardImages.light", setIfMissing(lightImage))]
                    : []),
                ...(darkImage
                    ? [at("cardImages.dark", setIfMissing(darkImage))]
                    : []),
                at("image", unset()),
                at("imageDark", unset()),
            ];
        },
    },
});
