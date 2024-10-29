import { NavLink } from "@fremtind/jkl-core";
import { formatDate } from "payload/dist/admin/utilities/formatDate";
import React, { type FC } from "react";
import { useEffect, useRef, useState } from "react";
import { type PageSectionProps } from "./types";
import { assertSectionIs } from "./types";
import { Image, MediaViewer } from "~/components/media";

export const ScrollSection: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs("scroll", pageSection);

    const { type } = pageSection;

    const containersRef = useRef<Array<Element | null>>([]);
    const [fadeInIndex, setFadeInIndex] = useState(-1);

    useEffect(() => {
        const handleIntersect: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const containerIndex = containersRef.current.indexOf(
                        entry.target,
                    );
                    if (containerIndex !== -1) {
                        setFadeInIndex(containerIndex);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        });

        containersRef.current.forEach((container) => {
            if (container) {
                observer.observe(container);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="jkl-portal-scroll-section">
            {type.map((value, index) => (
                <div
                    className="jkl-portal-scroll-section__container"
                    ref={(el) => (containersRef.current[index] = el)}
                    key={index}
                >
                    <div className="jkl-portal-scroll-section__left jkl-body">
                        <div className="jkl-portal-scroll-section__tag">
                            {value.tagLabel}
                        </div>

                        <NavLink
                            href={`/blogg/${value.slug}`}
                            active={false}
                            back={false}
                        >
                            {value.title}
                        </NavLink>
                        <div className="jkl-portal-scroll-section__ingress">
                            {typeof value.ingress === "string"
                                ? value.ingress
                                : null}
                        </div>
                        <div className="jkl-portal-scroll-section__author">
                            {formatDate(value.date || "", "yyyy.MM.dd")}
                            ,&nbsp;
                            {value.author}
                        </div>
                    </div>
                    <div
                        className={`jkl-portal-scroll-section__right${
                            index === fadeInIndex ? " fade-in-active" : ""
                        }`}
                    >
                        <div className="jkl-portal-scroll-section__right__media-container">
                            {value.image && typeof value.image !== "string" && (
                                <MediaViewer withLightBox src={value.image} />
                            )}
                            {value.image && typeof value.image === "string" && (
                                <Image src={value.image} width="100%" />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
