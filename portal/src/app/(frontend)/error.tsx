"use client";

import { ErrorPage } from "@/components/error-page";
import { useEffect } from "react";

interface Props {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function FrontendError({ error, reset }: Props) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return <ErrorPage status={500} onRetry={reset} digest={error.digest} />;
}
