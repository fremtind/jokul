import type {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Link} from "../Link.js";
import "../styles/_index.scss";
import {Flex} from "../../flex/index.js";

const meta: Meta = {
    title: "Komponenter/Link",
    component: Link,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        href: {
            control: "text",
            defaultValue: "https://www.fremtind.no",
        },
    },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const LinkStory: Story = {
    name: "Link",
    args: {
        children: "Lenke",
        external: false,
        as: "a",
        target: "#",
        href: "https://www.fremtind.no",
    },
    render: (props) => (
        // Setter style.cursor til pointer fordi Storybook overskriver default styles.
        <Link style={{ cursor: "pointer" }} {...props} as={props.as || "a"} />
    ),
};

export const LinkInParagraphStory: Story = {
    name: "Mønster: Lenke i avsnitt",
    args: {
        href: "https://www.fremtind.no",
    },
    render: (args) => (
        // Setter style.cursor til pointer fordi Storybook overskriver default styles.
        <p style={{maxWidth: "45ch"}}>
            Vi bruker lenker for å lede brukeren til{" "}
            <Link {...args} external={false} style={{cursor: "pointer"}}>
                andre nettsider
            </Link>
            , eller til andre steder på samme nettside.{" "}
            <Link
                {...args}
                external={true}
                target={"_blank"}
                style={{cursor: "pointer"}}
            >
                Lenker til eksterne nettsider
            </Link>{" "}
            markeres med en pil opp og til høyre etter lenketeksten.
        </p>
    ),
};

export const LinkInOtherStory: Story = {
    name: "Mønster: Lenke i andre tekststiler",
    args: {
        children: "lenke",
        external: false,
        as: "a",
        target: "#",
        href: "https://www.fremtind.no",
    },
    render: (args) => (
        // Setter style.cursor til pointer fordi Storybook overskriver default styles.
        <Flex direction={"column"} style={{gap: "1.5lh"}}>
            <h1 className={"jkl-title"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i titler
            </h1>

            <h2 className={"jkl-title-small"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i små titler
            </h2>

            <hr style={{width: "100%", opacity: "0.1"}}/>

            <h2 className={"jkl-heading-1"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i overskrifter
            </h2>

            <h2 className={"jkl-heading-2"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i overskrifter
            </h2>

            <h3 className={"jkl-heading-3"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i overskrifter
            </h3>

            <h4 className={"jkl-heading-4"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i overskrifter
            </h4>

            <h5 className={"jkl-heading-5"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i overskrifter
            </h5>

            <hr style={{width: "100%", opacity: "0.1"}}/>

            <p className={"jkl-body"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i avsnitt
            </p>

            <small className={"jkl-small"} style={{maxWidth: "55ch"}}>
                Du står fritt til å bruke{" "}
                <Link {...args} style={{cursor: "pointer"}}/> i små avsnitt
            </small>
        </Flex>
    ),
};
