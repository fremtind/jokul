import { useState } from "react";
import { nanoid } from "nanoid";

export interface UseIdOptions {
    generateSuffix?: boolean;
}

const defaultOptions: UseIdOptions = {
    generateSuffix: true,
};

export const useId = (id: string, options = defaultOptions): string => {
    const elementId = options.generateSuffix ? `${id}-${nanoid(8)}` : id;
    const [elId] = useState(elementId);
    return elId;
};
