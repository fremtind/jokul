import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { SpacingStep } from "../src/types";

import { NavCard, InfoBlock } from "../src/NavCard";
import type { NavCardProps } from "../src/NavCard";
import grassThumbnail from "./img/grass-thumbnail.jpg";
import grass400 from "./img/grass-400.jpg";
import grass800 from "./img/grass-800.jpg";

const imageProps = {
    src: grass400,
    srcSet: `${grass400} 400w, ${grass800} 800w`,
    placeholder: grassThumbnail,
    alt: "Nærbilde av strå, med en åker i bakgrunnen",
};

export const NavCardExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const image = boolValues?.["Image"] ? imageProps : undefined;
    const tag = boolValues?.["Tag"] ? ({ type: "success", text: "Behandles" } as NavCardProps["tag"]) : undefined;
    const description = boolValues?.["Description"] ? "Balder" : undefined;
    const padding = (choiceValues?.["Padding"] as "m" | "l" | "xl") || "l";
    const topPadding =
        choiceValues?.["Top Padding"] === "auto" ? undefined : (choiceValues?.["Top Padding"] as SpacingStep);

    return (
        <NavCard
            padding={padding}
            topPadding={topPadding}
            id="nav-card"
            href="#nav-card"
            image={image}
            title="Behandlings- og Veterinærutgifter"
            description={description}
            tag={tag}
        >
            {boolValues?.["Ekstra info"] && (
                <InfoBlock>
                    Skadedato
                    <br />
                    01.12.2021
                </InfoBlock>
            )}
        </NavCard>
    );
};

export const navCardExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const image = boolValues?.["Image"] ? '\n    image="wheat.jpg"' : "";
    const tag = boolValues?.["Tag"] ? '\n    tag={{ type: "success", text: "Behandles" }}' : "";
    const description = boolValues?.["Description"] ? '\n    description="Balder"' : "";
    const padding = choiceValues?.["Padding"] || "l";
    const topPadding =
        choiceValues?.["Top Padding"] === "auto" ? "" : `\n    topPadding="${choiceValues?.["Top Padding"]}"`;
    const children = !boolValues?.["Ekstra info"]
        ? "/>"
        : `>
    <InfoBlock>
        Skadedato
        <br />
        01.12.2021
    </InfoBlock>
</NavCard>
`;

    return `<NavCard
    padding="${padding}"${topPadding}
    href="#"
    title="Behandlings- og Veterinærutgifter"${description}${tag}${image}
${children}`;
};
