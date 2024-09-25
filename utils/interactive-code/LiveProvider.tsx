import React, { FC } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { LiveProvider as ReactLiveProvider, type LiveProviderProps as ReactLiveProviderProps } from "react-live";
import * as alpacca from "../../packages/jokul/src";
import { columns, rows } from "./tableData";

const scope = {
    ...alpacca,
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

export type LiveProviderProps = Omit<ReactLiveProviderProps, "ref"> & {
    code: string;
};

export const LiveProvider: FC<LiveProviderProps> = ({ code, noInline, transformCode, ...rest }) => {
    return (
        <ReactLiveProvider
            code={code}
            scope={{ ...scope }}
            transformCode={transformCode || noInline ? transformNoInlineCode : transformInlineCode}
            noInline={noInline}
            {...rest}
        />
    );
};
