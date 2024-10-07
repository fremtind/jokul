import React from "react";
import { NavCard, InfoBlock } from "../../NavCard";

export const knobs = [
    {
        type: "bool",
        label: "Image",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "bool",
        label: "Tag",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "bool",
        label: "Description",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "bool",
        label: "Ekstra info",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "bool",
        label: "Ekstra lenke",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "choice",
        label: "Padding",
        choiceOptions: ["0", "16", "24", "40", "blandet"],
        defaultValue: 2,
    },
];

export const NavCardExample = () => {
    /* -- EXAMPLE CODE START -- */
    const imageProps = {
        src: "/img/grass-400.jpg",
        srcSet: `/img/grass-400.jpg 400w, /img/grass-800.jpg 800w`,
        placeholder: "/img/grass-thumbnail.jpg",
        alt: "Nærbilde av strå, med en åker i bakgrunnen",
    };

    const image = boolKnob("Image") ? imageProps : undefined;
    const tag = boolKnob("Tag") ? { type: "success", text: "Behandles" } : undefined;
    const description = boolKnob("Description") ? "Balder" : undefined;
    const paddingChoice = choiceKnob("Padding");
    const external = boolKnob("Ekstra lenke") ? true : undefined;
    const padding =
        paddingChoice === "blandet"
            ? {
                  top: "64",
                  right: "40",
                  bottom: "16",
                  left: "24",
              }
            : paddingChoice;

    return (
        <div className="flex">
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
                {boolKnob("Ekstra info") && (
                    <InfoBlock>
                        Skadedato
                        <br />
                        01.12.2021
                    </InfoBlock>
                )}
            </NavCard>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
