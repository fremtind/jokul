import React, { FC } from "react";
import {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { File } from "../src";

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
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {files.map((file) => (
                    <li key={file.name}>
                        <File
                            fileName={file.name}
                            fileType={file.type}
                            fileSize={file.size}
                            path={file.publicPath}
                        />
                    </li>
                ))}
            </ul>
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
    <p className="jkl-heading-4">Vedlegg til saken</p>
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {files.map((file) => (
            <li key={file.name}>
                <File fileName={file.name} fileType={file.type} fileSize={file.size} path={file.publicPath} />
            </li>
        ))}
    </ul>
);
`;
