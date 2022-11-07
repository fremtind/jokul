import { unicode } from "@fremtind/jkl-constants-util";
import { ExampleComponentProps } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { InfoCard } from "../src/InfoCard";
import { mixedPadding } from "./cardExampleProps";
import car1200 from "./img/car-1200.jpg";
import car1500 from "./img/car-1500.jpg";
import car400 from "./img/car-400.jpg";
import car800 from "./img/car-800.jpg";
import carThumbnail from "./img/car-thumbnail.jpg";
import "./info-card-example.scss";

const imageProps = {
    src: car400,
    srcSet: `${car400} 400w, ${car800} 800w, ${car1200} 1200w, ${car1500} 1500w`,
    placeholder: carThumbnail,
    alt: "En person bak rattet på en bil, sett over skulderen på personen som kjører",
};

export const InfoCardExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const image = boolValues?.["Image"] ? imageProps : undefined;
    const title = boolValues?.["Title"] ? `Samle forsikringer –${unicode.nbsp}få${unicode.nbsp}rabatt` : undefined;
    const paddingChoice = (choiceValues?.["Padding"] as "m" | "l" | "xl" | "blandet") || "l";
    const padding = paddingChoice === "blandet" ? mixedPadding : paddingChoice;

    return (
        <InfoCard title={title} image={image} padding={padding} className="example-info-card">
            <p className="jkl-body">Har du tre eller flere forsikringer får du samlerabatt</p>
        </InfoCard>
    );
};

export const infoCardExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const image = boolValues?.["Image"] ? '\n    image="car.jpg"' : "";
    const title = boolValues?.["Title"] ? "title=`Samle forsikringer –${unicode.nbsp}få${unicode.nbsp}rabatt`" : "";
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

    return `<InfoCard
    padding=${padding}
    ${title}${image}
>
    <p className="jkl-body">Har du tre eller flere forsikringer får du samlerabatt</p>
</InfoCard>`;
};
