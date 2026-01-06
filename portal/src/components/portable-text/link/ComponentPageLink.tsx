"use client";

import { ComponentThumbnail } from "@/components/component-card/ComponentThumbnail";
import type { ComponentBySlugQueryResult } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Link } from "@fremtind/jokul/link";
import type { SanityImageObject } from "@sanity/image-url";
import clsx from "clsx";
import type { PortableTextMarkComponentProps } from "next-sanity";
import NextLink from "next/link";
import { useId, useRef } from "react";
import { createPortal } from "react-dom";

import componentCard from "../../component-card/component-card.module.scss";
import style from "./component-page-link.module.scss";

type LinkProps = PortableTextMarkComponentProps<{
    _type: "componentPageLink";
    component: NonNullable<ComponentBySlugQueryResult>;
}>;

export const ComponentPageLink = ({ value, children }: LinkProps) => {
    const id = useId();
    const popoverRef = useRef<HTMLDivElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);

    let openTimeout: NodeJS.Timeout;
    let closeTimeout: NodeJS.Timeout;

    const openPopover = () => {
        openTimeout = setTimeout(
            // @ts-ignore Joda, source finnes: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/showPopover#source
            () => popoverRef.current?.showPopover({ source: linkRef.current }),
            150,
        );
    };

    const closePopover = () => {
        clearTimeout(openTimeout);
        closeTimeout = setTimeout(() => popoverRef.current?.hidePopover(), 250);
    };

    const cancelClose = () => {
        clearTimeout(closeTimeout);
    };

    if (!value?.component) return null;

    const slug = value.component.slug || "#";
    const { image, imageDark, name, short_description } = value.component;

    return (
        <>
            <Link
                ref={linkRef}
                // @ts-ignore
                style={{ anchorName: `--${slug}-${id}-trigger` }}
                id={`${slug}-${id}-trigger`}
                as={NextLink}
                href={slug}
                onFocus={openPopover}
                onMouseEnter={openPopover}
                onBlur={closePopover}
                onMouseLeave={closePopover}
            >
                {value.component.name || children}
            </Link>
            {createPortal(
                <Card
                    as="div"
                    padding="m"
                    className={clsx(
                        componentCard.componentCard,
                        style.componentPageLinkPopover,
                    )}
                    ref={popoverRef}
                    id={`${slug}-${id}-popover`}
                    // @ts-ignore
                    popover="auto"
                    // @ts-ignore
                    style={{ positionAnchor: `--${slug}-${id}-trigger` }}
                    onMouseEnter={cancelClose}
                    onFocus={cancelClose}
                    onMouseLeave={closePopover}
                    onBlur={closePopover}
                >
                    <p className={componentCard.name}>{name}</p>
                    <p className={componentCard.description}>
                        {short_description}
                    </p>
                    <ComponentThumbnail
                        darkImage={imageDark as SanityImageObject}
                        lightImage={image as SanityImageObject}
                    />
                </Card>,
                // Vi rendrer popoveren rett i body for å unngå å legge
                // et div-element inne i et p-element (som ikke er lov)
                document.body,
            )}
        </>
    );
};
