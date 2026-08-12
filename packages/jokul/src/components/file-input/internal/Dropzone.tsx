import clsx from "clsx";
import React, { forwardRef, useState, type DragEventHandler } from "react";
import type { WithChildren } from "../../../utilities/types.js";

interface DropzoneProps extends WithChildren {
    onFiles: (files: File[]) => void;
    className?: string;
}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(
    ({ children, className, onFiles, ...rest }, ref) => {
        const [isDragging, setIsDragging] = useState(false);

        const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
            event.preventDefault();
            setIsDragging(false);

            const files = Array.from(event.dataTransfer.files);

            if (files.length > 0) {
                onFiles(files);
            }
        };

        return (
            <div
                {...rest}
                ref={ref}
                className={clsx(
                    "jkl-file-input__dropzone",
                    {
                        "jkl-file-input__dropzone--enter": isDragging,
                    },
                    className,
                )}
                onDragEnter={(event) => {
                    event.preventDefault();
                    setIsDragging(true);
                }}
                onDragOver={(event) => {
                    event.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={(event) => {
                    event.preventDefault();
                    setIsDragging(false);
                }}
                onDrop={handleDrop}
            >
                {children}
            </div>
        );
    },
);

Dropzone.displayName = "Dropzone";
