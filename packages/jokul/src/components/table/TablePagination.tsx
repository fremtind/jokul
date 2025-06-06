import clsx from "clsx";
import React, {
    forwardRef,
    useCallback,
    useState,
    type ChangeEventHandler,
    type FC,
    type MouseEventHandler,
} from "react";
import { useId } from "../../hooks/useId/useId.js";
import { IconButton } from "../icon-button/IconButton.js";
import { ChevronLeftIcon } from "../icon/icons/ChevronLeftIcon.js";
import { ChevronRightIcon } from "../icon/icons/ChevronRightIcon.js";
import { NativeSelect } from "../select/NativeSelect.js";
import { TextInput } from "../text-input/TextInput.js";
import { useTableContext } from "./tableContext.js";
import type { TablePaginationProps } from "./types.js";

function clamp(min: number, num: number, max: number): number {
    if (num < min) {
        return min;
    }

    if (num > max) {
        return max;
    }

    return num;
}

export const TablePagination = forwardRef<HTMLDivElement, TablePaginationProps>(
    (props, ref) => {
        const {
            activePage = 0,
            totalNumberOfRows,
            rowsPerPage,
            rowsPerPageItems,
            className,
            density,
            id: idProp,
            withGoToPage = false,
            onChange,
            onChangeRowsPerPage,
            labels = {
                rowsPerPage: "Rader per side",
                previous: "Forrige",
                next: "Neste",
            },
            ...rest
        } = props;

        const id = useId(idProp || "jkl-table-pagination", {
            generateSuffix: !idProp,
        });
        const { density: contextDensity } = useTableContext();

        const showAll = rowsPerPage <= 0;
        const numberOfPages = showAll
            ? 1
            : Math.ceil(totalNumberOfRows / rowsPerPage);

        const [currentPage, setCurrentPage] = useState(
            clamp(0, activePage, numberOfPages - 1),
        );

        const onPageClick: MouseEventHandler<HTMLButtonElement> = useCallback(
            (e) => {
                const toPage = Number.parseInt(
                    e.currentTarget.dataset.number as string,
                );
                onChange(e, toPage, currentPage);
                setCurrentPage(toPage);
                setPagePickerValue(String(toPage + 1));
            },
            [onChange, currentPage],
        );

        const [pagePickerValue, setPagePickerValue] = useState(
            String(currentPage + 1),
        );
        const onPageChange: ChangeEventHandler<HTMLInputElement> = useCallback(
            (e) => {
                setPagePickerValue(e.target.value);
                try {
                    const toPage = Number.parseInt(e.target.value) - 1;
                    if (Number.isNaN(toPage)) {
                        return;
                    }

                    if (toPage >= 0 && toPage < numberOfPages) {
                        onChange(e, toPage, currentPage);
                        setCurrentPage(toPage);
                    }
                } catch {
                    return;
                }
            },
            [onChange, currentPage, numberOfPages],
        );

        const onPrevious: MouseEventHandler<HTMLButtonElement> = useCallback(
            (e) => {
                if (currentPage === 0) {
                    // TODO: skal dette være en no-op i stedet?
                    onChange(e, currentPage, currentPage);
                    return;
                }
                const toPage = currentPage - 1;
                onChange(e, toPage, currentPage);
                setCurrentPage(toPage);
                setPagePickerValue(String(toPage + 1));
            },
            [onChange, currentPage],
        );

        const onNext: MouseEventHandler<HTMLButtonElement> = useCallback(
            (e) => {
                if (currentPage === numberOfPages - 1) {
                    // TODO: skal dette være en no-op i stedet?
                    onChange(e, currentPage, currentPage);
                    return;
                }
                const toPage = currentPage + 1;
                onChange(e, toPage, currentPage);
                setCurrentPage(toPage);
                setPagePickerValue(String(toPage + 1));
            },
            [onChange, numberOfPages, currentPage],
        );

        return (
            <div
                className={clsx("jkl-table-pagination", className)}
                {...rest}
                id={id}
                data-density={density || contextDensity}
                ref={ref}
            >
                <div className="jkl-table-pagination__left">
                    <div className="jkl-table-pagination__picker jkl-table-pagination__picker--rows">
                        <span
                            className="jkl-table-pagination__picker-label"
                            aria-hidden="true"
                        >
                            {labels.rowsPerPage}:
                        </span>
                        <NativeSelect
                            className="jkl-table-pagination__picker-input"
                            label={labels.rowsPerPage}
                            labelProps={{ srOnly: true }}
                            name={`${id}-rows-per-page`}
                            items={rowsPerPageItems.map((i) =>
                                typeof i === "number"
                                    ? String(i)
                                    : {
                                          label: i.label,
                                          value: String(i.value),
                                      },
                            )}
                            value={String(rowsPerPage)}
                            onChange={onChangeRowsPerPage}
                            width="min(8rem, 100%)"
                            inline
                        />
                    </div>
                </div>
                <div className="jkl-table-pagination__right">
                    {numberOfPages !== 1 && (
                        <nav className="jkl-table-pagination__nav">
                            {withGoToPage && (
                                <div className="jkl-table-pagination__picker jkl-table-pagination__picker--page">
                                    <span
                                        className="jkl-table-pagination__picker-label"
                                        aria-hidden="true"
                                    >
                                        {typeof withGoToPage === "object"
                                            ? withGoToPage.gotoLabel
                                            : "Gå til side"}
                                        :
                                    </span>
                                    {/* onChange først ved enter/submit */}
                                    <TextInput
                                        className="jkl-table-pagination__picker-input"
                                        label={
                                            typeof withGoToPage === "object"
                                                ? withGoToPage.gotoLabel
                                                : "Gå til side"
                                        }
                                        labelProps={{ srOnly: true }}
                                        name={`${id}-go-to-page`}
                                        value={pagePickerValue}
                                        width="min(4rem, 100%)"
                                        onChange={onPageChange}
                                        aria-invalid={
                                            pagePickerValue &&
                                            pagePickerValue !==
                                                String(currentPage + 1)
                                                ? "true"
                                                : undefined
                                        }
                                    />
                                </div>
                            )}
                            <ul>
                                <li>
                                    <IconButton
                                        className="jkl-table-pagination__previous"
                                        title={labels.previous}
                                        onClick={onPrevious}
                                    >
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </li>
                                <PaginationPages
                                    id={id}
                                    activePage={activePage}
                                    numberOfPages={numberOfPages}
                                    onPageClick={onPageClick}
                                />
                                <li>
                                    <IconButton
                                        className="jkl-table-pagination__next"
                                        title={labels.next}
                                        onClick={onNext}
                                    >
                                        <ChevronRightIcon />
                                    </IconButton>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        );
    },
);

const PaginationPages: FC<{
    id: string;
    activePage: number;
    numberOfPages: number;
    onPageClick: MouseEventHandler;
}> = ({ id, activePage, numberOfPages, onPageClick }) => {
    if (numberOfPages <= 7) {
        return (
            <>
                {Array.from({ length: numberOfPages }).map((_, i) => (
                    <li key={`${id}-page-${i}`}>
                        <button
                            className={clsx("jkl-table-pagination__page", {
                                "jkl-table-pagination__page--active":
                                    activePage === i,
                            })}
                            type="button"
                            data-number={i}
                            onClick={onPageClick}
                        >
                            {i + 1}
                        </button>
                    </li>
                ))}
            </>
        );
    }

    const showStartEllipsis = activePage > 3 && numberOfPages > 7;
    const showEndEllipsis = activePage < numberOfPages - 4 && numberOfPages > 7;

    const startEllipsis = Math.min(
        Math.max(activePage - 2, 1),
        numberOfPages - 6,
    );
    const centerPageNumberStart = Math.min(
        startEllipsis + 1,
        numberOfPages - 5,
    );
    const centerPageNumber = Math.min(
        centerPageNumberStart + 1,
        numberOfPages - 4,
    );
    const centerPageNumberEnd = Math.min(
        centerPageNumberStart + 2,
        numberOfPages - 3,
    );
    const endEllipsis = Math.min(centerPageNumberStart + 3, numberOfPages - 2);

    return (
        <>
            <li>
                <PaginationPageButton
                    isActive={activePage === 0}
                    number={0}
                    onClick={onPageClick}
                />
            </li>
            <li>
                {showStartEllipsis ? (
                    <span
                        className="jkl-table-pagination__ellipsis"
                        aria-hidden
                    >
                        {"..."}
                    </span>
                ) : (
                    <PaginationPageButton
                        isActive={activePage === startEllipsis}
                        number={startEllipsis}
                        onClick={onPageClick}
                    />
                )}
            </li>
            <li>
                <PaginationPageButton
                    isActive={activePage === centerPageNumberStart}
                    number={centerPageNumberStart}
                    onClick={onPageClick}
                />
            </li>
            <li>
                <PaginationPageButton
                    isActive={activePage === centerPageNumber}
                    number={centerPageNumber}
                    onClick={onPageClick}
                />
            </li>
            <li>
                <PaginationPageButton
                    isActive={activePage === centerPageNumberEnd}
                    number={centerPageNumberEnd}
                    onClick={onPageClick}
                />
            </li>
            <li>
                {showEndEllipsis ? (
                    <span
                        className="jkl-table-pagination__ellipsis"
                        aria-hidden
                    >
                        {"..."}
                    </span>
                ) : (
                    <PaginationPageButton
                        isActive={activePage === endEllipsis}
                        number={endEllipsis}
                        onClick={onPageClick}
                    />
                )}
            </li>
            <li>
                <PaginationPageButton
                    isActive={activePage === numberOfPages - 1}
                    number={numberOfPages - 1}
                    onClick={onPageClick}
                />
            </li>
        </>
    );
};

const PaginationPageButton: FC<{
    isActive: boolean;
    number: number;
    onClick: MouseEventHandler;
}> = ({ isActive, number, onClick, ...rest }) => (
    <button
        className={clsx("jkl-table-pagination__page", {
            "jkl-table-pagination__page--active": isActive,
        })}
        type="button"
        data-number={number}
        onClick={onClick}
        {...rest}
    >
        {number + 1}
    </button>
);

TablePagination.displayName = "TablePagination";
