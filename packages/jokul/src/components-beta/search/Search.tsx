import clsx from "clsx";
import type React from "react";
import { forwardRef, useRef } from "react";
import { InputGroup } from "../../components/input-group/index.js";
import { SearchButton } from "./SearchButton.js";
import type { SearchInputProps } from "./types.js";

export const Search = forwardRef<HTMLInputElement, SearchInputProps>(
    function Search(props, forwardedRef): React.JSX.Element {
        const {
            label = "Søk",
            className,
            density,
            errorLabel,
            helpLabel,
            labelProps = { srOnly: true },
            supportLabelProps,
            tooltip,
            description,
            name = "q",
            placeholder = "Søk",
            spellCheck = false,
            icon = "search",
            children,
            value,
            ...rest
        } = props;

        const inputGroupProps = {
            label,
            density,
            errorLabel,
            helpLabel,
            labelProps,
            supportLabelProps,
            tooltip,
            description,
        };

        const internalRef = useRef<HTMLInputElement | null>(null);

        const ref = (instance: HTMLInputElement | null) => {
            internalRef.current = instance;
            if (forwardedRef) {
                if (typeof forwardedRef === "function") {
                    forwardedRef(instance);
                } else {
                    forwardedRef.current = instance;
                }
            }
        };

        const handleClick = () => {
            if (internalRef.current) {
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                    window.HTMLInputElement.prototype,
                    "value",
                )?.set;
                nativeInputValueSetter?.call(internalRef.current, "");
                const event = new Event("change", { bubbles: true });
                internalRef.current.dispatchEvent(event);
                internalRef.current.focus();
            }
        };

        return (
            <div className={clsx("jkl-search--beta", className)}>
                <InputGroup
                    {...inputGroupProps}
                    label={label}
                    data-testid="jkl-select--beta"
                    render={(inputProps) => (
                        <div className="input-wrapper" data-icon={icon}>
                            <input
                                ref={ref}
                                type="search"
                                name={name}
                                placeholder={placeholder}
                                spellCheck={spellCheck}
                                {...inputProps}
                                {...rest}
                            />
                            <button
                                className="clear-button"
                                type="button"
                                onClick={handleClick}
                            >
                                <span className="jkl-sr-only">
                                    Tilbakestill søkefeltet
                                </span>
                            </button>
                        </div>
                    )}
                />
                {children}
            </div>
        );
    },
) as ReturnType<typeof forwardRef<HTMLInputElement, SearchInputProps>> & {
    Button: typeof SearchButton;
};

Search.Button = SearchButton;
