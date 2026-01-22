import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Card } from "../../card/index.js";
import { ImageCard } from "../../card/stories/Card.stories.js";
import { Carousel } from "../Carousel.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Carousel",
    component: Carousel,
    args: {
        scrollSnapAlign: "center",
        scrollSnapType: "mandatory",
        controls: "both",
        hideScrollbar: false,
        children: [1, 2, 3, 4, 5].map((i) => (
            <Card
                {...ImageCard.args}
                variant="high"
                style={{ maxWidth: "unset" }}
                key={i}
            />
        )),
    },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Carousel: Story = {};
