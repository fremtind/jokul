import { useState } from "react";
import { nanoid } from "nanoid";

export const useId = (id: string) => {
    const [elId] = useState(`${id}-${nanoid(8)}`);

    return elId;
};
