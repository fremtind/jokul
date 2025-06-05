export interface FileInputFileValidation {
    type: "TOO_LARGE" | "WRONG_TYPE";
    message: string;
}

export type FileState =
    | "uploading"
    | "error"
    | "success"
    | "loading"
    | "downloading";

export interface FileInputFile {
    file: File;
    validation?: FileInputFileValidation;
    state: FileState;
    uploadProgress: number;
}

export type FileStyles = "list" | "card";
