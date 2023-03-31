import { WithChildren } from "@fremtind/jkl-core";
import React, { createContext, useContext } from "react";
import { FileUploadState } from "../types";

type FileUploaderContext = {
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
    maxSizeBytes?: number;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
        files: FileUploadState[],
    ) => void;
    files: FileUploadState[];
    setFiles: React.Dispatch<React.SetStateAction<FileUploadState[]>>;
};

const fileUploaderContext = createContext<FileUploaderContext>({
    accept: undefined,
    maxSizeBytes: undefined,
    onChange: () => undefined,
    files: [],
    setFiles: (prev) => prev,
});

export const useFileUploaderContext = (): FileUploaderContext => useContext(fileUploaderContext);

export interface FileUploaderContextProviderProps extends WithChildren {
    context: FileUploaderContext;
}

export const FileUploaderContextProvider: React.FC<FileUploaderContextProviderProps> = ({ context, children }) => (
    <fileUploaderContext.Provider value={context}>{children}</fileUploaderContext.Provider>
);
