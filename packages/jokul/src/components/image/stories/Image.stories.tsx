import type { Meta, StoryObj } from "@storybook/nextjs";
import { Image } from "../Image.js";
import type { ImageProps } from "../types.js";
import "../styles/_index.scss";
import "./styles.scss";

const dog400 = "/images/dog-400.jpg";
const dog800 = "/images/dog-800.jpg";
const dog1200 = "/images/dog-1200.jpg";
const dog1920 = "/images/dog-1920.jpg";
const thumbnail = "/images/thumbnail.jpg";

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
