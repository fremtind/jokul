import clsx from "clsx";
import React, { forwardRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import { Label } from "./Label.js";
import { SupportLabel } from "./SupportLabel.js";
import type { InputGroupProps, InputProps } from "./types.js";

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
    (props, ref) => {
        const {
            className,
            children,
            errorLabel,
            helpLabel,
            inline,
            label,
            labelProps,
            render,
            supportLabelProps,
            description,
            tooltip,
            id,
            ...rest
        } = props;

        const uid = useId(id || "jkl-input", { generateSuffix: !id });
        const supportId = useId("jkl-support-label");

        const hasTooltip = !!tooltip;

        const supportText = errorLabel || helpLabel;
        const supportTextType = errorLabel
            ? "error"
            : helpLabel
              ? "help"
              : undefined;

        const describedBy = supportText ? supportId : undefined;

        const inputProps: InputProps = {
            "aria-describedby": describedBy,
            "aria-invalid": errorLabel ? true : undefined,
            id: uid,
        };

        const renderInput = render
            ? () => render(inputProps)
            : () => {
                  const input = React.Children.toArray(props.children)[0];

                  if (!React.isValidElement<InputProps>(input)) return;

                  return React.cloneElement<InputProps>(input, {
                      ...inputProps,
                      ...input.props,
                  });
              };

        return (
            <div
                ref={ref}
                className={clsx(className, "jkl-input-group", {
                    "jkl-input-group--inline": inline,
                })}
                {...rest}
            >
                <Label
                    standAlone
                    htmlFor={uid}
                    srOnly={inline}
                    {...labelProps}
                    style={{
                        whiteSpace: hasTooltip ? "nowrap" : undefined,
                        ...labelProps?.style,
                    }}
                >
                    {hasTooltip ? (
                        <>
                            <span style={{ whiteSpace: "normal" }}>
                                {label}
                            </span>
                            {"\u00A0"}
                            {tooltip}
                        </>
                    ) : (
                        label
                    )}
                </Label>
                {description && (
                    <p className="jkl-input-group-description">{description}</p>
                )}
                {renderInput()}
                <SupportLabel
                    srOnly={inline}
                    {...supportLabelProps}
                    label={supportText}
                    labelType={supportTextType}
                    id={supportId}
                />
            </div>
        );
    },
);

InputGroup.displayName = "InputGroup";
