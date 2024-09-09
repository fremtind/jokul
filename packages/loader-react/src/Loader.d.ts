import { AriaRole } from "react";
export type LoaderVariant = "small" | "medium" | "large";
export interface LoaderProps {
    variant?: LoaderVariant;
    textDescription: string;
    className?: string;
    dataTestAutoId?: string;
    role?: AriaRole;
    inline?: boolean;
    /**
     * Antall millisekunder komponenten vil vente før den rendrer
     * @default 0
     */
    delay?: number;
}
export declare const Loader: ({
    delay,
    variant,
    textDescription,
    className,
    dataTestAutoId,
    inline,
    ...rest
}: LoaderProps) => JSX.Element | null;
