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

const useLegacyId = (id: string, options = defaultOptions): string => {
    const elementId = options.generateSuffix ? `${id}-${nanoid(8)}` : id;
    const [elId] = React.useState(elementId);
    return elId;
};

const useModernId = (id: string, options = defaultOptions): string => {
    const reactId = useReactId();
    const elementId = options.generateSuffix ? `${id}-${reactId}` : id;
    const [elId] = React.useState(elementId);
    return elId;
};

export const useId = typeof useReactId !== "undefined" ? useModernId : useLegacyId;
