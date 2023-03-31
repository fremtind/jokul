export interface FileValidation {
    type: "TOO_BIG" | "WRONG_FORMAT";
    message: string;
}

export interface FileState {
    file: File;
    validation?: FileValidation;
    isUploading: boolean;
}
