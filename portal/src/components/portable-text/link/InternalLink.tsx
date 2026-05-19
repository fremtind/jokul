"use client";

import { OverviewThumbnail } from "@/components/overview/thumbnail";
import type { ComponentBySlugQueryResult } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Link } from "@fremtind/jokul/link";
import clsx from "clsx";
import type { PortableTextMarkComponentProps } from "next-sanity";
import NextLink from "next/link";
import { useRef } from "react";
import { createPortal } from "react-dom";

import overview from "../../overview/overview.module.scss";
import style from "./component-page-link.module.scss";

type InternalLinkArticle = {
    _type:
        | "jokul_component"
        | "jokul_blog_post"
        | "jokul_fundamentals"
        | "jokul_release_notes"
        | "jokul_temaside";
    name: string | null;
    short_description: string | null;
    slug: string | null;
    image: NonNullable<ComponentBySlugQueryResult>["image"] | null;
    imageDark: NonNullable<ComponentBySlugQueryResult>["imageDark"] | null;
};

type LinkProps = PortableTextMarkComponentProps<{
    _type: "jokul_internal_link";
    article: InternalLinkArticle;
}>;

const ARTICLE_TYPE_TO_PATH: Record<InternalLinkArticle["_type"], string> = {
    jokul_component: "/komponenter",
    jokul_blog_post: "/blog",
    jokul_fundamentals: "/fundamenter",
    jokul_release_notes: "/release-notes",
    jokul_temaside: "/tema",
};

export const InternalLink = ({ value, children }: LinkProps) => {
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

    if (!value?.article) return null;

    const { _type, image, imageDark, name, short_description, slug } =
        value.article;
    const href = `${ARTICLE_TYPE_TO_PATH[_type]}/${slug}`;

    return (
        <>
            <Link
                ref={linkRef}
                // @ts-ignore
                style={{ anchorName: `--${slug}-trigger` }}
                id={`${slug}-trigger`}
                as={NextLink}
                href={href}
                onFocus={openPopover}
                onMouseEnter={openPopover}
                onBlur={closePopover}
                onMouseLeave={closePopover}
            >
                {children}
            </Link>
            {createPortal(
                <Card
                    as="div"
                    padding="m"
                    className={clsx(
                        overview.card,
                        style.componentPageLinkPopover,
                    )}
                    ref={popoverRef}
                    id={`${slug}-popover`}
                    // @ts-ignore
                    popover="auto"
                    // @ts-ignore
                    style={{ positionAnchor: `--${slug}-trigger` }}
                    onMouseEnter={cancelClose}
                    onFocus={cancelClose}
                    onMouseLeave={closePopover}
                    onBlur={closePopover}
                >
                    <p className={overview.name}>{name}</p>
                    {short_description && (
                        <p className={overview.description}>
                            {short_description}
                        </p>
                    )}
                    <OverviewThumbnail
                        darkImage={imageDark}
                        lightImage={image}
                    />
                </Card>,
                // Vi rendrer popoveren rett i body for å unngå å legge
                // et div-element inne i et p-element (som ikke er lov)
                document.body,
            )}
        </>
    );
};
