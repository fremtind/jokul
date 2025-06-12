import clsx from "clsx";
import React, {type ComponentProps, type FC, type MouseEvent, useId,} from "react";
import {Icon, TrashCanIcon} from "../../components/icon/index.js";
import {SupportLabel} from "../../components/input-group/SupportLabel.js";
import {formatBytes} from "../../utilities/index.js";
import {Button} from "../button/index.js";
import {Link} from "../link/index.js";
import {Thumbnail} from "./internal/Thumbnail.js";
import {useFileInputContext} from "./internal/fileInputContext.js";
import type {FileState, FileStyles} from "./types.js";

export type FileProps = {
    fileName: string;
    fileType: string;
    fileSize: number;
    path?: string;
    file?: File;
    state?: FileState;
    supportLabel?: string;
    /*
     * @deprecated bruk state
     * */
    supportLabelType?: "help" | "error" | "warning" | "success";
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
    style?: FileStyles;
};

export const File: FC<FileProps & ComponentProps<"div">> = (props) => {
    const {
        children,
        className,
        fileName,
        fileType,
        fileSize,
        path,
        file,
        supportLabel,
        supportLabelType,
        state,
        onRemove,
        style = "list",
        ...rest
    } = props;

    const id = `jkl-file-preview-${useId()}`;
    const supportId = `${id}-support`;

    const context = useFileInputContext();

    const hasError = supportLabelType === "error" || state === "error";
    const isLoading =
        state === "downloading" || state === "uploading" || state === "loading";

    console.log(file);

    const fileComponent = (
        <div
            id={id}
            className={clsx(className, `jkl-file--${style}--${state}`)}
            {...rest}
        >
            <div className="jkl-file__content">
                <Thumbnail
                    fileName={fileName}
                    fileType={fileType}
                    file={file}
                    path={path}
                >
                    {children}
                </Thumbnail>
                <p className="jkl-file__name">
                    <Link
                        href={path}
                        title={`Last ned ${fileName}`}
                        aria-label={`Last ned ${fileName}`}
                        download={fileName}
                    >
                        <span className="jkl-file__size">
                            {fileName} ({formatBytes(fileSize)})
                        </span>
                    </Link>
                </p>
                {/*<p className="jkl-file__description">{formatBytes(fileSize)}</p>*/}
                {isLoading && (
                    <Button
                        variant={"ghost"}
                        className="jkl-file__button"
                        title={`Laster ${fileName}`}
                        icon={<Icon>progress_activity</Icon>}
                        disabled
                    />
                )}
                {!isLoading && onRemove && (
                    <Button
                        variant={"ghost"}
                        className="jkl-file__button"
                        onClick={onRemove}
                        title={`Slett ${fileName}`}
                        icon={<TrashCanIcon/>}
                    />
                )}
                {!isLoading && !onRemove && (
                    <Button
                        variant={"ghost"}
                        className="jkl-file__button"
                        onClick={() => window.open(path)}
                        title={`Slett ${fileName}`}
                        icon={<Icon>download</Icon>}
                    />
                )}
            </div>
            {supportLabel && hasError && (
                <SupportLabel
                    className="jkl-file__support-label"
                    id={supportId}
                    label={supportLabel || "Feil"}
                    labelType={"error"}
                />
            )}
        </div>
    );

    return context ? <li>{fileComponent}</li> : fileComponent;
};
