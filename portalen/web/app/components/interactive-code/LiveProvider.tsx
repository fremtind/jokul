import * as jokul from "@fremtind/jokul";
import React, { type FC } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
    LiveProvider as ReactLiveProvider,
    type LiveProviderProps as ReactLiveProviderProps,
} from "react-live";
import { columns, rows } from "./tableData";

const scope = {
    ...jokul,
    ReactDOM,
    useForm,
    tableData: { rows, columns },
};

const transformInlineCode = (code: string) => {
    return `<React.Fragment>${code}</React.Fragment>`;
};

const transformNoInlineCode = (code: string) => {
    return `
  const Wrapper = () => {
    ${code}
  };
  render(<Wrapper />);
  `;
};

export interface LiveProviderProps extends Omit<ReactLiveProviderProps, "ref"> {
    code: string;
}

export const LiveProvider: FC<LiveProviderProps> = ({
    code,
    noInline,
    transformCode,
    ...rest
}) => {
    return (
        <ReactLiveProvider
            code={code}
            scope={scope}
            transformCode={
                transformCode || noInline
                    ? transformNoInlineCode
                    : transformInlineCode
            }
            noInline={noInline}
            {...rest}
        />
    );
};
