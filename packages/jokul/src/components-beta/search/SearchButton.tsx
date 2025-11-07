import type { SearchButtonProps } from "./types.js";

export const SearchButton = (props: SearchButtonProps) => {
    const { className, type = "button", label = "Søk", ...rest } = props;

    return (
        <button
            className="jkl-button jkl-button--ghost jkl-search-submit"
            type={type}
            {...rest}
        >
            {label}
        </button>
    );
};
