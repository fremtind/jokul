import { type WithOptionalChildren } from "@fremtind/jkl-core";
import { NavLink } from "@remix-run/react";
import React, { type FC } from "react";
import { getPagePathFromId } from "../../components/navigation/utils";
import { RichText } from "../../components/rich-text";
import { type PageSectionProps } from "./types";
import { assertSectionIs } from "./types";
import { useMainMenu } from "~/utils";

type CTASection = PageSectionProps["pageSection"] & {
    blockType: "call-to-action";
};
type Action = NonNullable<CTASection["actions"]>[number];

const ActionButton: FC<Action> = ({ link, type }) => {
    const { type: linkType, reference, url, label = "", newTab } = link;
    const mainMenu = useMainMenu();

    if (linkType === "reference") {
        const to = getPagePathFromId(mainMenu, reference?.value as string);

        return (
            <NavLink className={`jkl-button jkl-button--${type}`} to={`/${to}`}>
                {label}
            </NavLink>
        );
    } else if (linkType === "custom" && url) {
        return (
            <a
                className={`jkl-button jkl-button--${type}`}
                href={url}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noreferrer noopener" : undefined}
            >
                {label}
            </a>
        );
    } else {
        return null;
    }
};

const CTARenderer: FC<WithOptionalChildren> = ({ children }) => (
    <h2 className="jkl-portal-cta-block__text">{children}</h2>
);

export const CallToAction: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs("call-to-action", pageSection);

    const { heroText, actions } = pageSection;

    return (
        <div className="jkl-portal-cta-block">
            <RichText content={heroText} fallbackRenderer={CTARenderer} />
            <div className="jkl-portal-cta-block__actions">
                {actions &&
                    actions.map((action) => {
                        return <ActionButton key={action.id} {...action} />;
                    })}
            </div>
        </div>
    );
};
