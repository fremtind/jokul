import {
    Label,
    type LabelProps,
    SupportLabel,
    type SupportLabelProps,
    type WithOptionalChildren,
    type Density,
    type DataTestAutoId,
} from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import { Tooltip, type TooltipProps } from "@fremtind/jkl-tooltip-react";
import cn from "classnames";
import React, { forwardRef, type CSSProperties, type ReactNode } from "react";

export interface InputProps {
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
    id?: string;
}

export interface InputGroupProps extends WithOptionalChildren, DataTestAutoId {
    id?: string;
    className?: string;
    "data-testid"?: string;
    density?: Density;
    errorLabel?: ReactNode;
    helpLabel?: ReactNode;
    inline?: boolean;
    label: ReactNode;
    labelProps?: Omit<LabelProps, "children" | "density">;
    supportLabelProps?: Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel" | "density">;
    tooltipProps?: TooltipProps;
    style?: CSSProperties;
    render?: (props: InputProps) => JSX.Element;
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
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
        tooltipProps,
        id,
        ...rest
    } = props;

    const uid = useId(id || "jkl-input", { generateSuffix: !id });
    const supportId = useId("jkl-support-label");
    const hasSupportText = helpLabel || errorLabel;
    const describedBy = hasSupportText ? supportId : undefined;

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
            className={cn(className, "jkl-input-group", {
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
                style={{ whiteSpace: tooltipProps ? "nowrap" : undefined, ...labelProps?.style }}
                density={density}
            >
                {!tooltipProps && label}
                {tooltipProps && (
                    <>
                        <span style={{ whiteSpace: "normal" }}>{label}</span>
                        {`\u00A0`}
                        {tooltipProps && <Tooltip {...tooltipProps} />}
                    </>
                )}
            </Label>
            {renderInput()}
            <SupportLabel
                srOnly={inline}
                {...supportLabelProps}
                errorLabel={errorLabel}
                helpLabel={helpLabel}
                id={supportId}
                density={density}
            />
        </div>
    );
});

InputGroup.displayName = "InputGroup";
