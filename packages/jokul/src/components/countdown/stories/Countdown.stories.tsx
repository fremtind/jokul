import type { Meta, StoryObj } from "@storybook/nextjs";
import { Countdown as CountdownComponent } from "../Countdown.js";
import "../styles/_index.scss";
import React, { type FC, useState } from "react";
import type { WithChildren } from "../../../core/types.js";
import { PrimaryButton } from "../../button/Button.js";
import { Flex } from "../../flex/Flex.js";

const meta = {
    title: "Komponenter/Countdown",
    component: CountdownComponent,
} satisfies Meta<typeof CountdownComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper: FC<WithChildren> = ({ children }) => {
    const [key, setKey] = useState(0);

    return (
        <Flex style={{ width: 500 }} direction="column" gap="m">
            <div key={key}>{children}</div>
            <PrimaryButton
                onClick={() => setKey(Date.now())}
                style={{ width: 200 }}
            >
                Restart
            </PrimaryButton>
        </Flex>
    );
};

export const Countdown: Story = {
    args: {
        from: 5000,
    },
    decorators: (Story) => (
        <Wrapper>
            <Story />
        </Wrapper>
    ),
};
