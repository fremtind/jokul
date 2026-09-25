import clsx from "clsx";
import type { SearchButtonProps } from "./types.js";

export const SearchButton = (props: SearchButtonProps) => {
    const { className, type = "button", label = "Søk", ...rest } = props;

    return (
        <button
            className={clsx(
                "jkl-button jkl-button--ghost jkl-search-submit",
                className,
            )}
            data-jkl-tracked="SearchButton"
            type={type}
            {...rest}
        >
            {label}
        </button>
    );
};
