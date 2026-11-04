import { ErrorPage } from "@/components/error-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vi finner ikke siden",
};

export default function NotFound() {
    return <ErrorPage status={404} />;
}
