export interface FileValidation {
    type: "TOO_LARGE" | "WRONG_TYPE";
    message: string;
}

export type FileStates = undefined | "error" | "loading";

export interface FileCard {
    file: File;
    validation?: FileValidation;
    state: FileStates;
    uploadProgress: number;
}
