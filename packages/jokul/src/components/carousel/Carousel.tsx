import clsx from "clsx";
import React, { cloneElement } from "react";
import type { CarouselProps } from "./types.js";

export const Carousel = ({
    className,
    children,
    scrollSnapAlign = "center",
    scrollSnapType = "mandatory",
    controls = "both",
    hideScrollbar = false,
    ...rest
}: CarouselProps) => {
    return (
        <ul
            className={clsx("jkl-carousel", className)}
            data-snap-align={scrollSnapAlign}
            data-snap-type={scrollSnapType}
            data-controls={controls}
            data-scrollbar={!hideScrollbar}
            {...rest}
        >
            {Array.isArray(children)
                ? children.map((item, index) =>
                      cloneElement(<li key={index}>{item}</li>, {
                          className: "jkl-carousel-item",
                      }),
                  )
                : cloneElement(<li>{children}</li>, {
                      className: "jkl-carousel-item",
                  })}
        </ul>
    );
};
