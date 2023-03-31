export interface FileUploadValidation {
    type: "TOO_BIG" | "WRONG_FORMAT";
    message: string;
}

export interface FileUploadState {
    file: File;
    validation?: FileUploadValidation;
    isUploading: boolean;
}
