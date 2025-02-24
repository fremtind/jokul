import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { InfoMessage as MessageComponent } from "../Message.js";
import { MessageProps } from "../types.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Message",
    component: MessageComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    decorators: [
        (Story, context) => {
            const [dismissed, setDismissed] = useState(false);

            return Story({
                ...context,
                args: {
                    ...(context.args as MessageProps),
                    dismissed,
                    dismissAction: {
                        handleDismiss: () => {
                            action("handleDismissed")();
                            setDismissed(true);
                            setTimeout(() => setDismissed(false), 2600);
                        },
                        buttonTitle: "Merk som lest",
                    },
                },
            });
        },
    ],
} satisfies Meta<typeof MessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// const baseArgs = {
//     dismissed: false,
//     dismissAction: {
//         handleDismiss: action("handleDismissed"),
//         buttonTitle: "Merk som lest",
//     },
// };

export const InfoMessage: Story = {
    args: {
        children: "Hei, jeg er en melding av typen Info",
        title: "Info",
    },
};
