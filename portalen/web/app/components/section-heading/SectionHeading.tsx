import { LinkIcon, type WithChildren } from "@fremtind/jokul";
import { Link } from "@remix-run/react";
import React, { type FC } from "react";
import { useEffect, useRef, useState } from "react";

export const SectionHeading: FC<WithChildren> = ({ children }) => {
    const [link, setLink] = useState<string | undefined>(undefined);

    const heading = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setLink(heading.current?.id);
    }, []);

    return (
        <h2 className="jkl-portal-section-heading" ref={heading}>
            {children}

            {link && (
                <Link to={`#${link}`} aria-hidden>
                    <LinkIcon />
                </Link>
            )}
        </h2>
    );
};
