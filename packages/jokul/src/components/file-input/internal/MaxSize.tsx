import React, { type ComponentPropsWithoutRef, type FC } from "react";
import { formatBytes } from "../../../utilities/formatters/bytes/formatBytes.js";
import { useFileInputContext } from "./fileInputContext.js";

type Props = Omit<ComponentPropsWithoutRef<"div">, "id"> & {
    id: string;
};

export const MaxSize: FC<Props> = ({ id }) => {
    const context = useFileInputContext();
    if (!context) {
        return <p>MaxSize must be placed inside a FileInputContextProvider.</p>;
    }
    const { maxSizeBytes } = context;

    if (typeof maxSizeBytes === "undefined") {
        return false;
    }

    return (
        <div id={id} className="jkl-file-input__max-size-text">
            Maks {formatBytes(maxSizeBytes)} per fil
        </div>
    );
};
