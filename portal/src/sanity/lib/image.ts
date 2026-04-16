import type { SanityImageCrop, SanityImageHotspot } from "@/sanity/types";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageObject } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export type SanityImageLike = {
    _type: "image";
    asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
} | null;

function isSanityImageLike(
    source: unknown,
): source is NonNullable<SanityImageLike> {
    return (
        typeof source === "object" &&
        source !== null &&
        "_type" in source &&
        (source as { _type?: string })._type === "image" &&
        "asset" in source
    );
}

export function getSanityImageUrl(
    source: SanityImageLike | undefined,
): string | undefined {
    if (!isSanityImageLike(source)) return undefined;
    if (!source.asset || !("_ref" in source.asset)) return undefined;
    return builder.image(source as SanityImageObject).url();
}

export function getSanityImageUrlBuilder(source: SanityImageObject) {
    return builder.image(source);
}
