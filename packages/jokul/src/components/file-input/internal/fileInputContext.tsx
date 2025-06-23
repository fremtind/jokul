import React, {createContext, useContext} from "react";
import type {WithChildren} from "../../../core/types.js";
import type {UploadedFile} from "../types.js";

type FileInputContext = {
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
    maxSizeBytes?: number;
    files: UploadedFile[];
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.DragEvent<HTMLDivElement>,
        files: UploadedFile[],
    ) => void;
};

const fileInputContext = createContext<FileInputContext | null>(null);

export const useFileInputContext = (): FileInputContext | null =>
    useContext(fileInputContext);

export interface FileInputContextProviderProps extends WithChildren {
    context: FileInputContext;
}

export const FileInputContextProvider: React.FC<
    FileInputContextProviderProps
> = ({ context, children }) => (
    <fileInputContext.Provider value={context}>
        {children}
    </fileInputContext.Provider>
);
