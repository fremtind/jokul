import clsx from "clsx";
import React, { type ComponentProps, type FC, useId } from "react";
import { formatBytes } from "../../utilities/index.js";
import { Button } from "../button/index.js";
import { useFileInputContext } from "../file-input/internal/fileInputContext.js";
import { TrashCanIcon } from "../icon/index.js";
import { SupportLabel } from "../input-group/index.js";
import { Link } from "../link/index.js";
import type { FileProps } from "./types.js";

export const File: FC<FileProps & ComponentProps<"div">> = (props) => {
    const {
        children,
        className,
        fileName,
        fileType,
        fileSize,
        path,
        file,
        state,
        errorLabel = "Feil",
        onRemove,
        variant = "list",
        ...rest
    } = props;

    const id = `jkl-file-preview-${useId()}`;
    const supportId = `${id}-support`;

    const context = useFileInputContext();

    const imageSrc =
        fileType.startsWith("image/") &&
        (file ? URL.createObjectURL(file) : path);

    const fileComponent = (
        <div
            id={id}
            className={clsx(className, "jkl-file", `jkl-file--${variant}`)}
            data-state={state}
            {...rest}
        >
            <div className={"jkl-file__content"}>
                <div
                    className="jkl-file__content__thumbnail"
                    data-filetype={fileType}
                >
                    <img src={imageSrc || undefined} alt="" />
                </div>
                {path ? (
                    <p className="jkl-file__content__name">
                        <Link href={path}>
                            {fileName}{" "}
                            <span className="jkl-file__content__name__size">
                                ({formatBytes(fileSize)})
                            </span>
                        </Link>
                    </p>
                ) : (
                    <p className="jkl-file__content__name">
                        {fileName}{" "}
                        <span className="jkl-file__content__name__size">
                            ({formatBytes(fileSize)})
                        </span>
                    </p>
                )}
                {onRemove && (
                    <Button
                        variant={"ghost"}
                        className="jkl-file__content__button"
                        onClick={onRemove}
                        title={`Fjern ${fileName}`}
                        icon={<TrashCanIcon />}
                    />
                )}
            </div>

            {state === "error" && errorLabel && (
                <SupportLabel
                    className="jkl-file__support-label"
                    id={supportId}
                    label={errorLabel}
                    labelType={"error"}
                />
            )}
        </div>
    );

    return context ? <li>{fileComponent}</li> : fileComponent;
};
