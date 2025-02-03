import { FC } from "react";
import { CodeExampleSelect, OptionGroups } from "./CodeExampleSelect";

type Props = {
    path: string;
    optionGroups: OptionGroups;
};

export const CodeExampleInput: FC<Props> = ({ path, optionGroups }) => {
    return (
        <CodeExampleSelect
            optionGroups={JSON.stringify(optionGroups)}
            path={path}
        />
    );
};

export default CodeExampleInput;
