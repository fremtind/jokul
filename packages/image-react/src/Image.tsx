import React, { FC } from "react";
import classNames from "classnames";
import { useProgressiveImg } from "@fremtind/jkl-react-hooks";

export interface Props {
    defaultSize: string;
    isSmallDevice: boolean;
    alt: string;
    objectPosition?: string;
    thumbnail?: string;
    largeSize?: string;
    className?: string;
    /** @deprecated */
    inverted?: boolean;
    backgroundColor?: string;
}

export const Image: FC<Props> = ({
    thumbnail,
    defaultSize,
    objectPosition = "initial",
    largeSize,
    alt,
    isSmallDevice,
    className = "",
    inverted = false,
    backgroundColor,
}) => {
    const { src, isBlurred } = useProgressiveImg({
        lowQualitySrc: thumbnail ?? "",
        highQualitySrc: largeSize && !isSmallDevice ? largeSize : defaultSize,
    });
    return (
        <div className={className}>
            <picture className={classNames("jkl-image__container", { "jkl-image--inverted": inverted })}>
                <img
                    data-testid="jkl-image-blurred"
                    style={{ objectPosition, backgroundColor }}
                    alt=""
                    src={thumbnail}
                    className={classNames("jkl-image", "jkl-image__blur-container", {
                        "jkl-image__blur-container--blur": isBlurred,
                        "jkl-image__blur-container--blur-out": !isBlurred,
                        "jkl-image__blur-container--no-thumbnail": !thumbnail,
                    })}
                />
                <img
                    data-testid="jkl-image"
                    style={{ objectPosition, backgroundColor }}
                    src={src}
                    alt={alt}
                    className={classNames("jkl-image", {
                        "jkl-image--empty": src === "",
                    })}
                />
            </picture>
        </div>
    );
};
