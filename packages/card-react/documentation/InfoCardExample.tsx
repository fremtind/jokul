import { ExampleComponentProps } from "doc-utils";
import React from "react";

import { InfoCard } from "../src/InfoCard";
import { SpacingStep } from "../src/types";
import carThumbnail from "./img/car-thumbnail.jpg";
import car400 from "./img/car-400.jpg";
import car800 from "./img/car-800.jpg";
import car1200 from "./img/car-1200.jpg";
import car1500 from "./img/car-1500.jpg";
import "./info-card-example.scss";

const imageProps = {
    src: car400,
    srcSet: `${car400} 400w, ${car800} 800w, ${car1200} 1200w, ${car1500} 1500w`,
    placeholder: carThumbnail,
    alt: "En person bak rattet på en bil, sett over skulderen på personen som kjører",
};

export const InfoCardExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const image = boolValues?.["Image"] ? imageProps : undefined;
    const padding = (choiceValues?.["Padding"] as "m" | "l" | "xl") || "l";
    const topPadding =
        choiceValues?.["Top Padding"] === "auto" ? undefined : (choiceValues?.["Top Padding"] as SpacingStep);
    const bottomPadding =
        choiceValues?.["Bottom Padding"] === "auto" ? undefined : (choiceValues?.["Bottom Padding"] as SpacingStep);

    return (
        <InfoCard
            image={image}
            padding={padding}
            topPadding={topPadding}
            bottomPadding={bottomPadding}
            className="example-info-card"
        >
            <p className="jkl-heading-1">Samle forsikringer –&nbsp;få&nbsp;rabatt!</p>
            <p className="jkl-body jkl-spacing-m--top">Har du tre eller flere forsikringer får du samlerabatt</p>
        </InfoCard>
    );
};
