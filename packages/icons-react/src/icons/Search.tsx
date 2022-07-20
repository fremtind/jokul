import React, { FC } from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const Search: FC<IconProps> = ({ className, variant, ...rest }) => (
    <IconFactory
        {...rest}
        className={className}
        variant={variant}
        innerSvg={
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 9.07422C2 5.20823 5.13401 2.07422 9 2.07422C12.866 2.07422 16 5.20823 16 9.07422C16 12.9402 12.866 16.0742 9 16.0742C5.13401 16.0742 2 12.9402 2 9.07422ZM9 1.07422C4.58172 1.07422 1 4.65594 1 9.07422C1 13.4925 4.58172 17.0742 9 17.0742C10.9927 17.0742 12.8152 16.3457 14.2157 15.1404L19.003 19.9278L19.7101 19.2207L14.9317 14.4423C16.217 13.0228 17 11.14 17 9.07422C17 4.65594 13.4183 1.07422 9 1.07422Z"
                fill="currentColor"
            />
        }
    />
);

Search.displayName = "Search";
