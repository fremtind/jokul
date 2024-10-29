import { type Density } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@fremtind/jkl-icons-react";
import { useId } from "@fremtind/jkl-react-hooks";
import { NativeSelect } from "@fremtind/jkl-select-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import cn from "classnames";
import React, {
    forwardRef,
    useCallback,
    useState,
    type MouseEventHandler,
    type ChangeEventHandler,
    type FC,
} from "react";
import { useTableContext } from "./tableContext";

export interface TablePaginationProps {
    className?: string;
    id?: string;
    density?: Density;
    /**
     * @default 0
     */
    activePage?: number;
    /**
     * Null eller negativt tall tolkes som "vis alle".
     */
    rowsPerPage: number;
    rowsPerPageItems: Array<number | { label: string; value: number }>;
    totalNumberOfRows: number;
    /**
     * Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
     * Du kan også sende inn en custom label hvis du ønsker det, ellers bruke
     * true for default label
     * @default false
     */
    withGoToPage?: boolean | { gotoLabel: string };
    onChange: (
        e: React.SyntheticEvent,
        toPage: number,
        fromPage: number,
    ) => void;
    onChangeRowsPerPage: ChangeEventHandler<HTMLSelectElement>;
    /**
     * Dersom du ønsker å ha custom labels kan du sende inn disse. "rowsPerPage"
     * vises alltid på skjerm mens "next" og "previous" brukes som hint til
     * skjermlesere for ikon-knappene til Neste/Forrige side
     * @default { rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }
     */
    labels?: {
        rowsPerPage: string;
        previous: string;
        next: string;
    };
}

function clamp(min: number, num: number, max: number): number {
    if (num < min) {
        return min;
    } else if (num > max) {
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
                    e.currentTarget.dataset["number"] as string,
                );
                onChange(e, toPage, currentPage);
                setCurrentPage(toPage);
                setPagePickerValue(String(toPage + 1));
            },
            [onChange, setCurrentPage, currentPage],
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
            [
                onChange,
                setPagePickerValue,
                setCurrentPage,
                currentPage,
                numberOfPages,
            ],
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
            [onChange, setCurrentPage, currentPage],
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
            [onChange, setCurrentPage, numberOfPages, currentPage],
        );

        return (
            <div
                className={cn("jkl-table-pagination", className)}
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
                            className={cn("jkl-table-pagination__page", {
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
        className={cn("jkl-table-pagination__page", {
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
