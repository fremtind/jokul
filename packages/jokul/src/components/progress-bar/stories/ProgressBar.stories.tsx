import type { Meta, StoryObj } from "@storybook/nextjs";
import { useEffect, useState } from "react";
import SelectStories from "../../../components-beta/select/stories/select.stories.js";
import { Button } from "../../button/index.js";
import { Card } from "../../card/index.js";
import { File } from "../../file/index.js";
import FileStories from "../../file/stories/File.stories.js";
import { Flex } from "../../flex/index.js";
import { BETA_Select } from "../../select/index.js";
import { TextInput } from "../../text-input/index.js";
import TextInputStories, {
    Datovelger,
} from "../../text-input/stories/TextInput.stories.js";
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
    name: "Progress Bar ved filopplasting ",
    args: {
        "aria-valuenow": 0,
        "aria-valuemin": 0,
        "aria-valuemax": 5,
        "aria-valuetext": "[antall] filer lastet opp",
    },
    render: (args) => {
        const [uploading, setUploading] = useState(false);
        const [filesUploaded, setFilesUploaded] = useState(
            args["aria-valuemax"] || -1,
        );

        // biome-ignore lint/correctness/useExhaustiveDependencies: Value bør ikke endres bare fordi arg endres
        useEffect(() => {
            if (filesUploaded === args["aria-valuemax"]) {
                return;
            }
            setTimeout(() => setFilesUploaded(filesUploaded + 1), 1500);
        }, [filesUploaded]);

        const handleUpload = () => {
            setUploading(true);
            setFilesUploaded(0);
        };

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
                                state={
                                    uploading && filesUploaded <= i
                                        ? "loading"
                                        : undefined
                                }
                            />
                        </li>
                    ))}
                </Flex>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 300px)",
                        placeItems: "center",
                        gap: "1em",
                    }}
                >
                    <ProgressBarComponent
                        {...args}
                        aria-valuenow={filesUploaded}
                        aria-valuetext={`${filesUploaded} fil${filesUploaded > 1 ? "er" : ""} lastet opp`}
                        style={{ gridColumn: "1 / -1" }}
                    />
                    <div style={{ display: "grid", width: "100%" }}>
                        <input
                            type="file"
                            disabled
                            style={{
                                opacity: "0",
                                gridArea: "1/1",
                                zIndex: 1,
                                width: "100%",
                            }}
                        />
                        <Button
                            disabled
                            style={{
                                gridArea: "1/1",
                                zIndex: 0,
                                width: "100%",
                            }}
                        >
                            Velg filer
                        </Button>
                    </div>

                    <Button
                        onClick={handleUpload}
                        loader={{
                            // @ts-ignore
                            showLoader: uploading,
                            textDescription: "Laster opp filer",
                        }}
                        style={{ width: "100%" }}
                    >
                        Last opp
                    </Button>
                </div>
            </>
        );
    },
};

export const Flow: Story = {
    name: "Progress Bar i skjemaflyt",
    args: {
        "aria-valuenow": 1,
        "aria-valuemin": 1,
        "aria-valuemax": 4,
        "aria-valuetext": "[antall] steg: [navn på steget]",
    },
    render: (args) => {
        const [value, setValue] = useState(args["aria-valuenow"]);

        const currentsteg = () => {
            switch (value) {
                case 1:
                    return (
                        <p className="jkl-heading-2">
                            Klikk "neste steg" for å starte saken
                        </p>
                    );
                case 2:
                    // @ts-ignore
                    return <>{Datovelger.render()}</>;
                case 3:
                    return <TextInput {...TextInputStories.args} />;
                default:
                    return (
                        <BETA_Select label={undefined} {...SelectStories.args}>
                            {SelectStories.args?.children}
                        </BETA_Select>
                    );
            }
        };

        return (
            <Card
                as="form"
                padding="xl"
                variant="outlined"
                style={{
                    minHeight: "50cqb",
                    display: "grid",
                    gridTemplateRows: "auto auto 1fr auto",
                    alignItems: "end",
                    gap: "2ex",
                }}
            >
                <ProgressBarComponent {...args} aria-valuenow={value} />
                <h2 className="jkl-heading-5">
                    Mobilskade (steg {value} av {args["aria-valuemax"]})
                </h2>
                {currentsteg()}
                <footer
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, min-content)",
                        justifyContent: "space-between",
                    }}
                >
                    {value !== 1 ? (
                        <Button
                            variant="secondary"
                            onClick={() => {
                                if (value !== args["aria-valuemin"]) {
                                    setValue(value - 1);
                                }
                            }}
                            type="button"
                            disabled={value === 0}
                        >
                            Forrige
                        </Button>
                    ) : (
                        ""
                    )}
                    <Button
                        variant="primary"
                        onClick={() => {
                            if (value !== args["aria-valuemax"]) {
                                setValue(value + 1);
                            }
                        }}
                        type="button"
                        style={{ gridColumn: 2 }}
                    >
                        {value === args["aria-valuemax"] ? "Fullfør" : "Neste"}
                    </Button>
                </footer>
            </Card>
        );
    },
};
