import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { NavCard, InfoBlock } from "../src/NavCard";
import type { NavCardProps } from "../src/NavCard";
import { mixedPadding } from "./cardExampleProps";
import grass400 from "./img/grass-400.jpg";
import grass800 from "./img/grass-800.jpg";
import grassThumbnail from "./img/grass-thumbnail.jpg";

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
    const paddingChoice = (choiceValues?.["Padding"] as "m" | "l" | "xl" | "blandet") || "l";
    const padding = paddingChoice === "blandet" ? mixedPadding : paddingChoice;

    return (
        <NavCard
            padding={padding}
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
    const paddingChoice = choiceValues?.["Padding"] || "l";
    const padding =
        paddingChoice === "blandet"
            ? `{{
        top: "2xl",
        right: "xl",
        bottom: "m",
        left: "l",
    }}`
            : `"${paddingChoice}"`;
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
    padding=${padding}
    href="#"
    title="Behandlings- og Veterinærutgifter"${description}${tag}${image}
${children}`;
};
