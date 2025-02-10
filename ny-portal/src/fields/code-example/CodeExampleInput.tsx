import { FC } from "react";
import { Select, OptionGroups } from "../Select";

type Props = {
    path: string;
    optionGroups: OptionGroups;
};

export const CodeExampleInput: FC<Props> = ({ path, optionGroups }) => {
    return (
        <Select
            optionGroups={JSON.stringify(optionGroups)}
            path={path}
            label="Velg kodeeksempel"
        />
    );
};

export default CodeExampleInput;
