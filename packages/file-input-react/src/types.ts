export interface FileInputFileValidation {
    type: "TOO_BIG" | "WRONG_FORMAT";
    message: string;
}

export type FileInputFileState = "SELECTED" | "UPLOADING" | "UPLOAD_ERROR";

export interface FileInputFile {
    file: File;
    validation?: FileInputFileValidation;
    state: FileInputFileState;
}
