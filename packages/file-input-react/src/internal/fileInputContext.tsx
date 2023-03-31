import { WithChildren } from "@fremtind/jkl-core";
import React, { createContext, useContext } from "react";
import { FileState } from "../types";

type FileInputContext = {
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
    maxSizeBytes?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>, files: FileState[]) => void;
    files: FileState[];
    setFiles: React.Dispatch<React.SetStateAction<FileState[]>>;
};

const fileInputContext = createContext<FileInputContext>({
    accept: undefined,
    maxSizeBytes: undefined,
    onChange: () => undefined,
    files: [],
    setFiles: (prev) => prev,
});

export const useFileInputContext = (): FileInputContext => useContext(fileInputContext);

export interface FileInputContextProviderProps extends WithChildren {
    context: FileInputContext;
}

export const FileInputContextProvider: React.FC<FileInputContextProviderProps> = ({ context, children }) => (
    <fileInputContext.Provider value={context}>{children}</fileInputContext.Provider>
);
