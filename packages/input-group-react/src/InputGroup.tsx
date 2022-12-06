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
import cn from "classnames";
import React, { type ReactNode } from "react";

export interface InputProps {
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
    id?: string;
}

export interface InputGroupProps extends WithOptionalChildren, DataTestAutoId {
    className?: string;
    "data-testid"?: string;
    density?: Density;
    errorLabel?: ReactNode;
    helpLabel?: ReactNode;
    id?: string;
    inline?: boolean;
    label: ReactNode;
    labelProps?: Pick<LabelProps, "className" | "srOnly" | "variant">;
    supportLabelProps?: Pick<SupportLabelProps, "className" | "srOnly">;
    render?: (props: InputProps) => JSX.Element;
}

export const InputGroup = (props: InputGroupProps) => {
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
            className={cn(className, "jkl-input-group", {
                "jkl-input-group--inline": inline,
            })}
            data-density={density}
            {...rest}
        >
            <Label standAlone htmlFor={uid} srOnly={inline} {...labelProps}>
                {label}
            </Label>
            {renderInput()}
            <SupportLabel
                id={supportId}
                errorLabel={errorLabel}
                helpLabel={helpLabel}
                srOnly={inline}
                {...supportLabelProps}
            />
        </div>
    );
};
