import clsx from "clsx";
import {
    type ComponentProps,
    type FC,
    useEffect,
    useId,
    useState,
} from "react";
import { formatBytes } from "../../utilities/index.js";
import { Button } from "../button/index.js";
import { useFileInputContext } from "../file-input/internal/fileInputContext.js";
import { Flex } from "../flex/index.js";
import { TrashCanIcon } from "../icon/index.js";
import { SupportLabel } from "../input-group/index.js";
import { Link } from "../link/index.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { ProgressBar } from "../progress-bar/index.js";
import { getExtraTrackingAttributes } from "../types.js";
import { Text } from "../typography/index.js";
import type { FileProps } from "./types.js";

export const File: FC<FileProps & ComponentProps<"div">> = (props) => {
    const {
        children: _,
        hideThumbnail,
        className,
        fileName,
        fileType,
        fileSize,
        path,
        file,
        state,
        uploadProgress,
        errorLabel = "Feil",
        onRemove,
        variant: variantProp,
        trackingProps,
        ...rest
    } = props;

    const id = `jkl-file-preview-${useId()}`;
    const supportId = `${id}-support`;
    const describedBy = state === "error" && errorLabel ? supportId : undefined;

    const context = useFileInputContext();
    const variant = variantProp ?? context?.fileVariant ?? "list";

    const isImage = fileType.startsWith("image/");
    const [objectUrl, setObjectUrl] = useState<string>();

    useEffect(() => {
        if (!file || !isImage || hideThumbnail) {
            return;
        }
        const url = URL.createObjectURL(file);
        setObjectUrl(url);
        return () => {
            URL.revokeObjectURL(url);
            setObjectUrl(undefined);
        };
    }, [file, isImage, hideThumbnail]);

    const imageSrc = isImage && (file ? objectUrl : path);

    const fileComponent = (
        <div
            id={id}
            className={clsx(className, "jkl-file", `jkl-file--${variant}`)}
            data-state={state}
            {...rest}
            data-track-component-name={COMPONENT_NAMES.File}
            data-track-id={trackingProps?.id ?? fileName}
            data-track-label={fileName}
            data-track-state={state}
            data-track-variant={variant}
            data-track-file-size={fileSize}
            {...getExtraTrackingAttributes(trackingProps?.extra, rest)}
        >
            <Flex
                gap="8"
                direction={variant === "card" ? "column" : "row"}
                alignItems={variant === "card" ? "start" : "center"}
                className={"jkl-file__content"}
            >
                {!hideThumbnail && (
                    <div
                        className="jkl-file__thumbnail"
                        data-filetype={fileType}
                    >
                        {imageSrc && <img src={imageSrc} alt="" />}
                    </div>
                )}
                <Flex
                    gap="8"
                    alignItems="center"
                    justifyContent="space-between"
                    className="jkl-file__info"
                >
                    {path ? (
                        <Text size="s" className="jkl-file__name">
                            <Link href={path} aria-describedby={describedBy}>
                                {fileName}{" "}
                                <span className="jkl-file__size">
                                    ({formatBytes(fileSize)})
                                </span>
                            </Link>
                        </Text>
                    ) : (
                        <Text size="s" className="jkl-file__name">
                            {fileName}{" "}
                            <span className="jkl-file__size">
                                ({formatBytes(fileSize)})
                            </span>
                        </Text>
                    )}
                    {onRemove && (
                        <Button
                            variant={"ghost"}
                            className="jkl-file__button"
                            onClick={onRemove}
                            title={`Fjern ${fileName}`}
                            aria-label={`Fjern ${fileName}`}
                            aria-describedby={describedBy}
                            icon={<TrashCanIcon />}
                        />
                    )}
                </Flex>
                {state === "loading" && (
                    <ProgressBar
                        className="jkl-file__progress"
                        title={`Laster opp ${fileName}`}
                        aria-valuenow={
                            uploadProgress === undefined
                                ? undefined
                                : Math.round(uploadProgress)
                        }
                    />
                )}
            </Flex>

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
