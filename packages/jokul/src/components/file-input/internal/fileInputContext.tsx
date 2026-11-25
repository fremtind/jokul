import { createContext, useContext } from "react";
import type { FileProps } from "../../file/types.js";

type FileInputContext = {
    fileVariant: NonNullable<FileProps["variant"]>;
};

/** Lar `File` vite at den ligger i en `FileInput`, og hvilken visning den skal bruke */
export const FileInputContext = createContext<FileInputContext | null>(null);

export const useFileInputContext = (): FileInputContext | null =>
    useContext(FileInputContext);
