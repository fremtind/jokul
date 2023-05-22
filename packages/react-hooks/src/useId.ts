import { nanoid } from "nanoid";
import React from "react";

export interface UseIdOptions {
    /** @default true */
    generateSuffix?: boolean;
}

const useReactId = React.useId;

const defaultOptions: UseIdOptions = {
    generateSuffix: true,
};

const useLegacyId = (id?: string, options = defaultOptions): string => {
    const uid = nanoid(8);
    let elementId: string | undefined = id;
    if (id && options.generateSuffix) {
        elementId = `${id}-${uid}`;
    }
    const [elId] = React.useState(elementId || uid);
    return elId;
};

const useModernId = (id?: string, options = defaultOptions): string => {
    const uid = useReactId();
    let elementId: string | undefined = id;
    if (id && options.generateSuffix) {
        elementId = `${id}-${uid}`;
    }
    const [elId] = React.useState(elementId || uid);
    return elId;
};

export const useId = typeof useReactId !== "undefined" ? useModernId : useLegacyId;
