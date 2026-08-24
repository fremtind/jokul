"use client";

import { trackEvent } from "@/utils/tracking/mixpanel";
import { Events } from "@/utils/tracking/types";
import { Link } from "@fremtind/jokul/link";

type FooterLinkProps = {
    href: string;
    text: string;
};

export const FooterLink = ({ href, text }: FooterLinkProps) => {
    if (!text) {
        return null;
    }

    return (
        <Link
            href={href}
            onClick={() => {
                trackEvent(Events.CLICK, {
                    element: "footer",
                    type: "footer link",
                });
            }}
        >
            {text}
        </Link>
    );
};
