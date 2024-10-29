import { type Media } from "@org/cms";
import React, { type ComponentProps, type FC } from "react";
import { Fragment } from "react";
import { Image } from "./Image";
import { Lightbox } from "./Lightbox";
import { Video } from "./Video";
import { useTheme } from "~/utils/useTheme";

export interface MediaViewerProps {
    src: Media;
    srcDark?: Media;
    className?: string;
    /**
     * Angi om du vil ha mulighet for å forstørre bildet/videoen i en lightbox.
     * @default false
     */
    withLightBox?: boolean;
    imageProps?: Partial<Omit<ComponentProps<typeof Image>, "src">>;
    videoProps?: Partial<Omit<ComponentProps<typeof Video>, "src" | "onlyPlayOnHover">>;
}

/**
 * Komponent for å vise bilder og videoer fra Media-collection i CMSet, med
 * mulighet for å klikke for å forstørre i en lightbox.
 */
export const MediaViewer: FC<MediaViewerProps> = ({ src, srcDark, withLightBox = false, imageProps, videoProps }) => {
    const prefersColorScheme = useTheme();
    const source = prefersColorScheme === "light" ? src : srcDark || src;
    const isVideo = source.mimeType && source.mimeType.startsWith("video");

    if (!source.url) {
        return null;
    }

    const Wrapper = withLightBox ? Lightbox : Fragment;
    const wrapperProps = withLightBox
        ? {
              aspectRatio: source.aspectRatio || `${source.width || 16} / ${source.height || 9}`,
          }
        : {};

    return (
        <Wrapper {...wrapperProps}>
            {isVideo ? (
                <Video src={source} loop autoPlay onlyPlayOnHover={withLightBox} {...videoProps} />
            ) : (
                <Image src={source} {...imageProps} />
            )}
        </Wrapper>
    );
};
