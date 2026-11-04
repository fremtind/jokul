import {
    ERROR_PAGE_CONTENT,
    ErrorPage,
    isErrorStatusCode,
} from "@/components/error-page";
import { NavLink } from "@fremtind/jokul/nav-link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ status: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const status = Number((await params).status);

    return {
        title: isErrorStatusCode(status)
            ? `${status} – ${ERROR_PAGE_CONTENT[status].title}`
            : "Feilside",
    };
}

export default async function ErrorPagePreview({ params }: Props) {
    if (process.env.NODE_ENV !== "development") {
        notFound();
    }

    const status = Number((await params).status);

    if (!isErrorStatusCode(status)) {
        notFound();
    }

    return (
        <>
            <NavLink href="/feilsider" back>
                Feilsider
            </NavLink>
            <ErrorPage status={status} />
        </>
    );
}
