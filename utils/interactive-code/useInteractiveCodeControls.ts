import { useCallback, useMemo } from "react";
import { type ValuePair } from "../../packages/jokul/src/utilities";
import type { BoolProp, ChoiceProp, CodeGenerator } from ".";

type Knobs = {
    label: string;
    type: string;
    boolOptions?: {
        trueValue: string;
        falseValue: string;
    };
    choiceOptions?: {
        label: string;
        value: string;
        id?: string;
    }[];
    defaultValue: number;
    id?: string;
}[];

function isValuePair(value: string | ValuePair): value is ValuePair {
    return typeof (value as ValuePair).value !== "undefined";
}

const KNOB_REGEX = /(choice|bool)Knob\("([^"]*)"\)/g;

export const useInteractiveCodeControls = (code: string, knobs: Knobs) => {
    const generateReplaceFunction = useCallback(
        (values: Parameters<CodeGenerator>[0]) =>
            (_: string, type: string, name: string): string => {
                const knob = knobs?.find((knob) => knob.label === name);
                const { boolValues, choiceValues } = values;

                if (!knob) return "";

                if (type === "bool" && knob.boolOptions) {
                    const active = boolValues[name];

                    return active ? knob.boolOptions.trueValue : knob.boolOptions.falseValue;
                } else if (type === "choice") {
                    const value = choiceValues[name];

                    return isValuePair(value) ? `"${value.value}"` : `"${value}"`;
                } else {
                    return "";
                }
            },
        [knobs],
    );

    const generator: CodeGenerator = useCallback(
        (values) => {
            const replaceFunction = generateReplaceFunction(values);
            return code.replaceAll(KNOB_REGEX, replaceFunction);
        },
        [generateReplaceFunction, code],
    );

    const boolProps: BoolProp[] = useMemo(
        () =>
            (knobs ?? [])
                .filter((knob) => knob.type === "bool")
                .map((knob) => ({ prop: knob.label, defaultValue: !!knob.defaultValue })),
        [knobs],
    );
    const choiceProps: ChoiceProp[] = useMemo(
        () =>
            (knobs ?? [])
                .filter((knob) => knob.type === "choice")
                .map((knob) => ({
                    name: knob.label,
                    values: knob.choiceOptions || [],
                    defaultValue: knob.defaultValue,
                })),
        [knobs],
    );

    return {
        boolProps,
        choiceProps,
        generator,
    };
};
