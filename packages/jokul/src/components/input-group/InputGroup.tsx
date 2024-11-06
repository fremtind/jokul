import clsx from "clsx";
import React, { forwardRef, type CSSProperties, type ReactNode } from "react";
import {
    DataTestAutoId,
    Density,
    WithOptionalChildren,
} from "../../core/types.js";
import { useId } from "../../hooks/useId/useId.js";
import { Label, LabelProps } from "./Label.js";
import { SupportLabel, SupportLabelProps } from "./SupportLabel.js";

export interface InputProps {
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
    id?: string;
}

export type InputGroupProps = WithOptionalChildren &
    DataTestAutoId & {
        id?: string;
        className?: string;
        "data-testid"?: string;
        density?: Density;
        errorLabel?: ReactNode;
        helpLabel?: ReactNode;
        inline?: boolean;
        label: ReactNode;
        labelProps?: Omit<LabelProps, "children" | "density">;
        supportLabelProps?: Omit<
            SupportLabelProps,
            "id" | "errorLabel" | "helpLabel" | "density"
        >;
        tooltip?: ReactNode;
        style?: CSSProperties;
        render?: (props: InputProps) => JSX.Element;
    };

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
    (props, ref) => {
        const {
            className,
            children,
            density,
            errorLabel,
            helpLabel,
            inline,
            label,
            labelProps,
            render,
            supportLabelProps,
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
            "aria-invalid": Boolean(errorLabel) ? true : undefined,
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
                data-density={density}
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
                    density={density}
                >
                    {hasTooltip ? (
                        <>
                            <span style={{ whiteSpace: "normal" }}>
                                {label}
                            </span>
                            {`\u00A0`}
                            {tooltip}
                        </>
                    ) : (
                        label
                    )}
                </Label>
                {renderInput()}
                <SupportLabel
                    srOnly={inline}
                    {...supportLabelProps}
                    label={supportText}
                    labelType={supportTextType}
                    id={supportId}
                    density={density}
                />
            </div>
        );
    },
);

InputGroup.displayName = "InputGroup";
