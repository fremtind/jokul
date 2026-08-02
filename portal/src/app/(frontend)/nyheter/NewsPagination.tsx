"use client";

import { Pagination } from "@fremtind/jokul/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
    currentPage: number;
    numberOfPages: number;
};

export function NewsPagination({ currentPage, numberOfPages }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <Pagination
            aria-label="Sidenavigasjon for nyheter"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            onPageChange={(toPage) => {
                const params = new URLSearchParams(searchParams.toString());
                params.set("page", String(toPage));
                router.push(`${pathname}?${params.toString()}`, {
                    scroll: false,
                });
            }}
        />
    );
}
