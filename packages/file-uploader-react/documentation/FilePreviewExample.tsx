import React, { FC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { FileUploaderPreview, FileUploaderPreviewList, FileUploaderPreviewListItem } from "../src";

export const filePreviewExampleKnobs: ExampleKnobsProps = {};

export const FilePreviewExample: FC<ExampleComponentProps> = () => {
    type File = {
        name: string;
        type: string;
        size: number;
        publicPath: string;
    };

    const files: File[] = [
        {
            name: "icon.png",
            type: "image/png",
            size: 12_128,
            publicPath: "/assets/icon.png",
        },
    ];

    return (
        <div>
            <p className="jkl-heading-4">Vedlegg til saken</p>
            <FileUploaderPreviewList>
                {files.map((file) => (
                    <FileUploaderPreviewListItem key={file.name}>
                        <FileUploaderPreview
                            fileName={file.name}
                            fileType={file.type}
                            fileSize={file.size}
                            path={file.publicPath}
                        />
                    </FileUploaderPreviewListItem>
                ))}
            </FileUploaderPreviewList>
        </div>
    );
};

export default FilePreviewExample;

export const filePreviewExampleCode: CodeExample = () => `
type File = {
    name: string;
    type: string;
    size: number;
    publicPath: string;
};

const files: File[] = [
    {
        name: "icon.png",
        type: "image/png",
        size: 12_128,
        publicPath: "/assets/icon.png",
    },
];

return (
    <FileUploaderPreviewList>
        {files.map((file) => (
            <FileUploaderPreviewListItem key={file.name}>
                <FileUploaderPreview
                    fileName={file.name}
                    fileType={file.type}
                    fileSize={file.size}
                    path={file.publicPath}
                />
            </FileUploaderPreviewListItem>
        ))}
    </FileUploaderPreviewList>
);
`;
