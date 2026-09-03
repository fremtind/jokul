import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Image } from "../Image.js";
import type { ImageProps } from "../types.js";
import dog400 from "./assets/dog-400.jpg";
import dog800 from "./assets/dog-800.jpg";
import dog1200 from "./assets/dog-1200.jpg";
import dog1920 from "./assets/dog-1920.jpg";
import thumbnail from "./assets/thumbnail.jpg";
import "../styles/_index.scss";
import "./styles.scss";

export default {
    title: "Komponenter/Image",
    component: Image,
    args: {
        src: dog400,
        srcSet: `${dog400} 400w, ${dog800} 800w, ${dog1200} 1200w, ${dog1920} 1920w`,
        placeholder: thumbnail,
    },
    argTypes: {
        className: {
            control: "radio",
            options: ["fluid", "static"],
        },
    },
} satisfies Meta<typeof Image>;

export const Fluid: StoryObj<ImageProps> = {
    args: {
        className: "fluid",
    },
    render: (props) => {
        return (
            <div style={{ width: "50vw", height: "auto" }}>
                <Image {...props} />
            </div>
        );
    },
};

export const Static: StoryObj<ImageProps> = {
    args: {
        className: "static",
    },
    render: (props) => {
        return (
            <div style={{ width: "50vw", height: "auto" }}>
                <Image {...props} />
            </div>
        );
    },
};
