import React, { useEffect } from "react";
import {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/polymorphism/polymorphism.js";
import { ChevronLeftIcon, ChevronRightIcon } from "../icon/index.js";
import { IconButton } from "../icon-button/IconButton.js";
import { PageButton } from "./PageButton.js";

export type PaginationProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            currentPage: number;
            numberOfPages: number;
            onPageChange: (toPage: number, fromPage: number) => void;
            /**
             * Dersom du ønsker å ha custom labels kan du sende inn disse. "next" og "previous"
             * brukes som hint til skjermlesere for ikon-knappene til Neste/Forrige side
             * @default { previous: "Forrige side", next: "Neste side" }
             */
            labels?: {
                previous: string;
                next: string;
            };
        }
    >;

export type PaginationComponent = <
    ElementType extends React.ElementType = "nav",
>(
    props: PaginationProps<ElementType>,
) => React.ReactElement | null;

export const Pagination = React.forwardRef(function Pagination<
    ElementType extends React.ElementType = "nav",
>(
    {
        onPageChange,
        currentPage,
        numberOfPages,
        labels = {
            previous: "Forrige side",
            next: "Neste side",
        },
        as,
        ...rest
    }: PaginationProps<ElementType>,
    ref?: PolymorphicRef<ElementType>,
) {
    useEffect(() => {
        if (currentPage < 1) {
            console.error(
                "[Pagination]: currentPage prop should be set to a value larger than 0",
            );
        }
        if (currentPage > numberOfPages) {
            console.error(
                "[Pagination]: currentPage prop should not be set to a value larger than numberOfPages",
            );
        }
    }, [currentPage, numberOfPages]);

    const Component = as || "nav";

    if (numberOfPages <= 7) {
        return (
            <Component ref={ref} {...rest} className="jkl-pagination">
                <IconButton
                    className="jkl-pagination-button"
                    title={labels.previous}
                    onClick={() => onPageChange(currentPage - 1, currentPage)}
                    aria-disabled={currentPage === 1}
                    tabIndex={currentPage === 1 ? -1 : 0}
                >
                    <ChevronLeftIcon />
                </IconButton>
                <ol className="jkl-pagination__pages">
                    {Array.from({ length: numberOfPages }).map((_, index) => {
                        const page = index + 1;
                        return (
                            <PageButton
                                key={index}
                                isActive={currentPage === page}
                                number={page}
                                total={numberOfPages}
                                onClick={() => onPageChange(page, currentPage)}
                            />
                        );
                    })}
                </ol>
                <IconButton
                    className="jkl-pagination-button"
                    title={labels.next}
                    onClick={() => onPageChange(currentPage + 1, currentPage)}
                    aria-disabled={currentPage === numberOfPages}
                    tabIndex={currentPage === numberOfPages ? -1 : 0}
                >
                    <ChevronRightIcon />
                </IconButton>
            </Component>
        );
    }

    const showStartEllipsis = currentPage > 4;
    const showEndEllipsis = currentPage < numberOfPages - 3;

    const startEllipsis = Math.min(
        Math.max(currentPage - 2, 2),
        numberOfPages - 5,
    );
    const centerPageNumberStart = Math.min(
        startEllipsis + 1,
        numberOfPages - 4,
    );
    const centerPageNumber = Math.min(
        centerPageNumberStart + 1,
        numberOfPages - 3,
    );
    const centerPageNumberEnd = Math.min(
        centerPageNumberStart + 2,
        numberOfPages - 2,
    );
    const endEllipsis = Math.min(centerPageNumberStart + 3, numberOfPages - 1);

    return (
        <Component ref={ref} {...rest} className="jkl-pagination">
            <IconButton
                className="jkl-pagination-button"
                title={labels.previous}
                onClick={() => onPageChange(currentPage - 1, currentPage)}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : 0}
            >
                <ChevronLeftIcon />
            </IconButton>
            <ol className="jkl-pagination__pages">
                <PageButton
                    isActive={currentPage === 1}
                    number={1}
                    total={numberOfPages}
                    onClick={() => onPageChange(1, currentPage)}
                />
                {showStartEllipsis ? (
                    <span
                        aria-hidden
                        className="jkl-pagination-button--elipsis"
                    >
                        {"..."}
                    </span>
                ) : (
                    <PageButton
                        isActive={currentPage === startEllipsis}
                        number={startEllipsis}
                        total={numberOfPages}
                        onClick={() => onPageChange(startEllipsis, currentPage)}
                    />
                )}
                <PageButton
                    isActive={currentPage === centerPageNumberStart}
                    number={centerPageNumberStart}
                    total={numberOfPages}
                    onClick={() =>
                        onPageChange(centerPageNumberStart, currentPage)
                    }
                />
                <PageButton
                    isActive={currentPage === centerPageNumber}
                    number={centerPageNumber}
                    total={numberOfPages}
                    onClick={() => onPageChange(centerPageNumber, currentPage)}
                />
                <PageButton
                    isActive={currentPage === centerPageNumberEnd}
                    number={centerPageNumberEnd}
                    total={numberOfPages}
                    onClick={() =>
                        onPageChange(centerPageNumberEnd, currentPage)
                    }
                />
                {showEndEllipsis ? (
                    <span
                        aria-hidden
                        className="jkl-pagination-button--elipsis"
                    >
                        {"..."}
                    </span>
                ) : (
                    <PageButton
                        isActive={currentPage === endEllipsis}
                        number={endEllipsis}
                        total={numberOfPages}
                        onClick={() => onPageChange(endEllipsis, currentPage)}
                    />
                )}
                <PageButton
                    isActive={currentPage === numberOfPages}
                    number={numberOfPages}
                    total={numberOfPages}
                    onClick={() => onPageChange(numberOfPages, currentPage)}
                />
            </ol>
            <IconButton
                className="jkl-pagination-button"
                title={labels.next}
                onClick={() => onPageChange(currentPage + 1, currentPage)}
                aria-disabled={currentPage === numberOfPages}
                tabIndex={currentPage === numberOfPages ? -1 : 0}
            >
                <ChevronRightIcon />
            </IconButton>
        </Component>
    );
}) as PaginationComponent;
