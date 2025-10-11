import React from "react";
import type { CSSProperties } from "react";
import { Card } from "../../../../components/card/Card.jsx";
import { CardImage } from "../../../../components/card/CardImage.jsx";
import { Flex } from "../../../../components/flex/Flex.jsx";

const breadcrumb = "/images/breadcrumb.png";
const button = "/images/button.png";
const card = "/images/card.png";
const checkbox = "/images/checkbox.png";
const chip = "/images/chip.png";
const combobox = "/images/combobox.png";
const datepicker = "/images/datepicker.png";
const descriptionList = "/images/descriptionList.png";
const expander = "/images/expander.png";
const placeholder = "/images/placeholder.svg";

export const exampleComponents = [
    {
        title: "Autosuggest",
        image: placeholder,
    },
    {
        title: "Breadcrumb",
        image: breadcrumb,
    },
    {
        title: "Button",
        image: button,
    },
    {
        title: "Card",
        image: card,
    },
    {
        title: "Checkbox",
        image: checkbox,
    },
    {
        title: "Chip",
        image: chip,
    },
    {
        title: "Combobox",
        image: combobox,
    },
    {
        title: "CookieConsent",
        image: placeholder,
    },
    {
        title: "Countdown",
        image: placeholder,
    },
    {
        title: "Datepicker",
        image: datepicker,
    },
    {
        title: "DescriptionList",
        image: descriptionList,
    },
    {
        title: "Expander",
        image: expander,
    },
];

const ExampleComponent = ({
    title,
    image,
}: { title: string; image: string }) => (
    <Flex direction="column" gap={16}>
        <Card
            padding="l"
            style={{ "--image-aspect-ratio": 1.5 } as CSSProperties}
        >
            <CardImage src={image} alt={title} placement="full" />
        </Card>
        <p className="jkl-heading-4">{title}</p>
    </Flex>
);

export const mappedExampleComponents = Object.fromEntries(
    exampleComponents.map((item, index) => [
        index + 1,
        exampleComponents
            .slice(0, index + 1)
            .map((item) => <ExampleComponent key={item.title} {...item} />),
    ]),
);
