import { ExampleComponentProps } from "doc-utils/index.js";
import React from "react";
import { InfoBlock, NavCard, NavCardProps } from "../../NavCard.js";
import { mixedPadding } from "./cardExampleProps.js";
import grass400 from "/img/grass-400.jpg";
import grass800 from "/img/grass-800.jpg";
import grassThumbnail from "/img/grass-thumbnail.jpg";

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
    const paddingChoice = (choiceValues?.["Padding"] as "0" | "16" | "24" | "40" | "blandet") || "24";
    const padding = paddingChoice === "blandet" ? mixedPadding : paddingChoice;
    const external = boolValues?.["Ekstern lenke"] ? true : undefined;

    return (
        <NavCard
            padding={padding}
            id="nav-card"
            href="#nav-card"
            image={image}
            title="Behandlings- og Veterinærutgifter"
            description={description}
            tag={tag}
            external={external}
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
