import {
    Label,
    type LabelProps,
    SupportLabel,
    type SupportLabelProps,
    type WithChildren,
    type Density,
    type DataTestAutoId,
} from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import React, { ReactNode } from "react";

export interface InputProps {
    density?: Density;
    "aria-describedby"?: string;
    id?: string;
}

export interface InputGroupProps extends WithChildren, DataTestAutoId {
    id?: string;
    density?: Density;
    label: ReactNode;
    errorLabel?: string;
    helpLabel?: string;
    labelProps?: Pick<LabelProps, "className" | "srOnly" | "variant">;
    supportLabelProps?: Pick<SupportLabelProps, "className" | "srOnly">;
}

export const InputGroup = (props: InputGroupProps) => {
    const { children, density, errorLabel, helpLabel, label, labelProps, supportLabelProps, id, ...rest } = props;

    const uid = useId(id || "jkl-input", { generateSuffix: !id });
    const supportId = useId("jkl-support-label");
    const hasSupportText = helpLabel || errorLabel;
    const describedBy = hasSupportText ? supportId : undefined;

    const renderInput = () => {
        const input = React.Children.toArray(props.children)[0];

        if (!React.isValidElement<InputProps>(input)) return;

        return React.cloneElement<InputProps>(input, {
            "aria-describedby": describedBy,
            id: uid,
        });
    };

    return (
        <div className="jkl-input-group" data-density={density} {...rest}>
            <Label standAlone htmlFor={uid} srOnly={false} {...labelProps}>
                {label}
            </Label>
            {renderInput()}
            <SupportLabel id={supportId} errorLabel={errorLabel} helpLabel={helpLabel} {...supportLabelProps} />
        </div>
    );
};
