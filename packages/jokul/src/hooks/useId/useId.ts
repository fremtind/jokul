import React from "react";

export interface UseIdOptions {
    /** @default true */
    generateSuffix?: boolean;
}

const useReactId = React.useId;

const defaultOptions: UseIdOptions = {
    generateSuffix: true,
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

/**
 * Hook som genererer en unik ID.
 * @param id En valgfri eksisterende ID som kan brukes som prefix.
 * @param options Objekt med innstillinger, dersom du angir et prefix.
 * @deprecated Bruk useId fra "react" pakka i stedet
 */
export const useId = useModernId;
