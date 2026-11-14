"use client";

import { ErrorPageShell } from "@/components/error-page";
import { useEffect } from "react";
import "./base.scss";

interface Props {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: Props) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <ErrorPageShell status={500} onRetry={reset} digest={error.digest} />
    );
}
