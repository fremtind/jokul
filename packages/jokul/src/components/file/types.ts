import type {MouseEvent} from "react";

export type FileProps = {
    fileName: string;
    fileType: string;
    fileSize: number;
    path?: string;
    errorLabel?: string;
    state?: "error" | "loading";
    variant?: "list" | "card";
    file?: File;
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
};
