import type { Meta, StoryObj } from "@storybook/nextjs";
import { useEffect, useState } from "react";
import { File } from "../../file/index.js";
import FileStories from "../../file/stories/File.stories.js";
import { Flex } from "../../flex/index.js";
import { ProgressBar as ProgressBarComponent } from "../ProgressBar.js";

import "../../file/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/ProgressBar",
    component: ProgressBarComponent,
    args: {
        "aria-valuenow": 10,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        title: "Fremdrift",
        style: {
            width: "100%",
            minWidth: "50cqi",
        },
    },
} satisfies Meta<typeof ProgressBarComponent>;

export default meta;

type Story = StoryObj<typeof ProgressBarComponent>;

export const ProgressBar: Story = {};

export const FileUploading: Story = {
    args: {
        "aria-valuenow": 0,
        "aria-valuemin": 0,
        "aria-valuemax": 5,
        "aria-valuetext": "[antall] filer lastet opp",
    },
    render: (args) => {
        const [value, setValue] = useState(args["aria-valuenow"]);

        useEffect(() => {
            const timeout = setTimeout(() => setValue(value + 1), 1500);

            return () => clearTimeout(timeout);
        }, [value]);

        return (
            <>
                <h2>Filer</h2>
                <Flex
                    as="ul"
                    style={{ listStyle: "none", padding: 0 }}
                    direction="column"
                    gap="xs"
                >
                    {[1, 2, 3, 4, 5].map((file, i) => (
                        <li key={file}>
                            <File
                                {...FileStories.args}
                                state={value >= i + 1 ? undefined : "loading"}
                            />
                        </li>
                    ))}
                </Flex>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        placeItems: "center",
                        gap: "1em",
                    }}
                >
                    {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
                    <p role="status" aria-live="assertive">
                        {/* @ts-ignore */}
                        {value >= args["aria-valuemax"]
                            ? "Filer lastet opp"
                            : "Laster opp filer"}
                    </p>
                    <ProgressBarComponent
                        {...args}
                        aria-valuenow={value}
                        aria-valuetext={`${value} fil${value > 1 ? "er" : ""} lastet opp`}
                    />
                </div>
            </>
        );
    },
};
