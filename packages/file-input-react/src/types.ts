export interface FileInputFileValidation {
    type: "TOO_LARGE" | "WRONG_TYPE";
    message: string;
}

export type FileInputFileState =
    | "SELECTED"
    | "UPLOADING"
    | "UPLOAD_ERROR"
    | "UPLOAD_SUCCESS";

export interface FileInputFile {
    file: File;
    validation?: FileInputFileValidation;
    state: FileInputFileState;
    uploadProgress: number;
}
