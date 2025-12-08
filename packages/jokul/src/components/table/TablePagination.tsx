import clsx from "clsx";
import {
    type ChangeEventHandler,
    forwardRef,
    useCallback,
    useEffect,
    useId,
    useState,
} from "react";
import { Pagination } from "../pagination/Pagination.js";
import { NativeSelect } from "../select/NativeSelect.js";
import { TextInput } from "../text-input/TextInput.js";
import { useTableContext } from "./tableContext.js";
import type { TablePaginationProps } from "./types.js";

export const TablePagination = forwardRef<HTMLDivElement, TablePaginationProps>(
    (props, ref) => {
        const {
            activePage = 1,
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

        const id = idProp || `jkl-table-pagination-${useId()}`;

        const { density: contextDensity } = useTableContext();

        const showAll = rowsPerPage <= 0;
        const numberOfPages = showAll
            ? 1
            : Math.ceil(totalNumberOfRows / rowsPerPage);

        const [pageInputValue, setPageInputValue] = useState(
            String(activePage),
        );
        const [isUserTyping, setIsUserTyping] = useState(false);

        useEffect(() => {
            setPageInputValue(String(activePage));
            setIsUserTyping(false);
        }, [activePage]);

        const handlePageInputChange: ChangeEventHandler<HTMLInputElement> =
            useCallback(
                (e) => {
                    setPageInputValue(e.target.value);
                    setIsUserTyping(true);

                    try {
                        const enteredPageNumber = Number.parseInt(
                            e.target.value,
                        );

                        if (Number.isNaN(enteredPageNumber)) {
                            return;
                        }

                        if (
                            enteredPageNumber >= 1 &&
                            enteredPageNumber <= numberOfPages
                        ) {
                            onChange(enteredPageNumber, activePage);
                        }
                    } catch {
                        return;
                    }
                },
                [onChange, activePage, numberOfPages],
            );

        const parsedPageNumber = Number.parseInt(pageInputValue);
        const isInputInvalid =
            isUserTyping &&
            pageInputValue &&
            (Number.isNaN(parsedPageNumber) ||
                parsedPageNumber < 1 ||
                parsedPageNumber > numberOfPages);

        return (
            <div
                className={clsx("jkl-table-pagination", className)}
                {...rest}
                id={id}
                data-density={density || contextDensity}
                ref={ref}
            >
                <div className="jkl-table-pagination__page-size">
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
                <span className="jkl-table-pagination__total-rows">
                    Treff: {totalNumberOfRows}
                </span>
                <div className="jkl-table-pagination__navigation">
                    {withGoToPage && numberOfPages !== 1 && (
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
                                value={pageInputValue}
                                width="min(4rem, 100%)"
                                onChange={handlePageInputChange}
                                aria-invalid={
                                    isInputInvalid ? "true" : undefined
                                }
                            />
                        </div>
                    )}
                    {numberOfPages !== 1 && (
                        <Pagination
                            currentPage={activePage}
                            numberOfPages={numberOfPages}
                            onPageChange={(newPage) => {
                                const validPage = Math.max(
                                    1,
                                    Math.min(newPage, numberOfPages),
                                );

                                setPageInputValue(String(validPage));
                                setIsUserTyping(false);

                                onChange(validPage, activePage);
                            }}
                            labels={{
                                previous: labels.previous,
                                next: labels.next,
                            }}
                        />
                    )}
                </div>
            </div>
        );
    },
);

TablePagination.displayName = "TablePagination";
