import { NavCard } from "@fremtind/jkl-card-react";
import { NavLink } from "@remix-run/react";
import { type AllSection } from "payload/generated-types";
import React, { type FC } from "react";
import { getLinkId, getPagePathFromId } from "../navigation/utils";
import { useMainMenu } from "~/utils";

type LCLSection = AllSection["sections"][number] & {
    blockType: "link-card-list-section";
};
type Links = LCLSection["links"];

export const LinkCardList: FC<{ links: Links }> = ({ links }) => {
    const mainMenu = useMainMenu();

    if (!links || links.length === 0) {
        return null;
    }

    return (
        <div className="jkl-spacing-40--top nav-card-container">
            {links &&
                links.map(({ id, title, description, link }) => {
                    const href =
                        link.type === "custom"
                            ? link.url
                            : getPagePathFromId(mainMenu, getLinkId(link));

                    if (!href) {
                        return null;
                    }

                    return (
                        <NavCard
                            key={id}
                            title={title}
                            description={description || ""}
                            component={NavLink}
                            to={href}
                            target={link.newTab ? "_blank" : undefined}
                            rel={
                                link.newTab ? "noreferrer noopener" : undefined
                            }
                        />
                    );
                })}
        </div>
    );
};
