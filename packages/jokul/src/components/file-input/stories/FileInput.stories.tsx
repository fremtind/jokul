import type { Meta, StoryObj } from "@storybook/nextjs";
import { type ChangeEvent, type ComponentProps, useRef, useState } from "react";
import { File as FilePreview } from "../../file/index.js";
import { Flex } from "../../flex/index.js";
import { FileInput } from "../FileInput.js";

type FileInputExampleProps = ComponentProps<typeof FileInput>;

const FileInputExample = ({ onChange, ...props }: FileInputExampleProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<globalThis.File[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFiles(Array.from(event.currentTarget.files ?? []));
        onChange?.(event);
    };

    const handleRemove = (fileToRemove: globalThis.File) => {
        const remainingFiles = files.filter((file) => file !== fileToRemove);
        const input = inputRef.current;

        if (!input) return;

        const dataTransfer = new DataTransfer();
        for (const file of remainingFiles) {
            dataTransfer.items.add(file);
        }
        input.files = dataTransfer.files;
        input.dispatchEvent(new Event("change", { bubbles: true }));
    };

    return (
        <Flex direction="column" gap="m">
            <FileInput {...props} ref={inputRef} onChange={handleChange} />

            {files.length > 0 && (
                <Flex
                    as="ul"
                    direction="column"
                    gap="xs"
                    style={{ margin: 0, padding: 0, listStyle: "none" }}
                >
                    {files.map((file) => (
                        <li
                            key={`${file.name}-${file.size}-${file.lastModified}`}
                        >
                            <FilePreview
                                file={file}
                                fileName={file.name}
                                fileType={file.type}
                                fileSize={file.size}
                                onRemove={() => handleRemove(file)}
                            />
                        </li>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

const meta = {
    title: "Komponenter/File Input",
    component: FileInput,
    argTypes: {
        "data-testautoid": { table: { disable: true } },
        id: { control: "text" },
        className: { control: "text" },
        "data-testid": { table: { disable: true } },
        "data-size": {
            control: "select",
            options: ["small", "medium", "large"],
        },
        errorLabel: { control: "text" },
        helpLabel: { control: "text" },
        disabled: { control: "boolean" },
        inline: { control: "boolean" },
        label: { control: "text" },
        description: { control: "text" },
        tooltip: { control: false },
    },
    args: {
        label: "Last opp kvittering",
        description: "JPG, PNG eller PDF",
        buttonText: "Velg fil",
        accept: "image/jpeg,image/png,application/pdf",
        multiple: false,
        disabled: false,
    },
    decorators: (Story) => (
        <div style={{ maxWidth: "32rem" }}>
            <Story />
        </div>
    ),
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LastOppKvittering: Story = {
    name: "Last opp kvittering",
    render: (args) => <FileInputExample {...args} />,
};

export const DokumentasjonTilSkadesak: Story = {
    name: "Dokumentasjon til skadesak",
    args: {
        variant: "dropzone",
        label: "Last opp dokumentasjon til skadesaken",
        description:
            "Bilder av skaden, kvitteringer eller takst (JPG, PNG eller PDF)",
        buttonText: "Velg filer",
        multiple: true,
    },
    render: (args) => <FileInputExample {...args} />,
};
