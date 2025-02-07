import { FC } from "react";
import { Select, OptionGroups } from "../Select";

type Props = {
    path: string;
    optionGroups: OptionGroups;
};

export const PropDocumentationInput: FC<Props> = ({ path, optionGroups }) => {
    return (
        <Select
            optionGroups={JSON.stringify(optionGroups)}
            path={path}
            label="Velg komponentmappe"
        />
    );
};

export default PropDocumentationInput;
