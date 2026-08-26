type ImageUrls = {
    light: string;
    dark: string;
};

export function resolveImageUrls(
    lightImageUrl: string | undefined,
    darkImageUrl: string | undefined,
    fallback: ImageUrls,
): ImageUrls {
    return {
        light: lightImageUrl ?? darkImageUrl ?? fallback.light,
        dark: darkImageUrl ?? lightImageUrl ?? fallback.dark,
    };
}
