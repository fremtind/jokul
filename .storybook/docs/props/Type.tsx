import type { FC } from "react";
import type { StrictInputType } from "storybook/internal/types";

type Props = {
    details: StrictInputType;
};

export const Type: FC<Props> = ({ details }) => {
    if (details.options) {
        return `'${details.options.join("' | '")}'`;
    } else if (details.type?.name === "other") {
        return details.type?.value;
    }
    return details.type?.name;
};
