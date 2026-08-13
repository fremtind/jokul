import clsx from "clsx";
import { type ComponentProps, type FC, useId } from "react";
import { formatBytes } from "../../utilities/index.js";
import { Button } from "../button/index.js";
import { Flex } from "../flex/index.js";
import { TrashCanIcon } from "../icon/index.js";
import { SupportLabel } from "../input-group/index.js";
import { Link } from "../link/index.js";
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
        errorLabel = "Feil",
        onRemove,
        variant = "list",
        ...rest
    } = props;

    const id = `jkl-file-preview-${useId()}`;
    const supportId = `${id}-support`;

    const imageSrc =
        fileType.startsWith("image/") &&
        (file ? URL.createObjectURL(file) : path);

    return (
        <div
            id={id}
            className={clsx(className, "jkl-file", `jkl-file--${variant}`)}
            data-state={state}
            {...rest}
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
                            <Link href={path}>
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
                            icon={<TrashCanIcon />}
                        />
                    )}
                </Flex>
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
};
