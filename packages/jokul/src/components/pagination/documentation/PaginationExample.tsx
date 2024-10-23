import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC, useState } from "react";
import { ScreenReaderOnly } from "../../ScreenReaderOnly.js";
import { TextInput } from "../../text-input/TextInput.js";
import { Pagination } from "../Pagination.js";

export const knobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Antall sider",
            values: ["5", "10", "20"],
            defaultValue: 0,
        },
    ],
};

export const PaginationExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [message, setMessage] = useState<string>();
    const [pagePickerValue, setPagePickerValue] = useState<string>("1");

    const numberOfPages = Number(choiceValues?.["Antall sider"] || "5");

    const updatePage = (newPage: number) => {
        if (newPage > 0 && newPage <= numberOfPages) {
            setCurrentPage(newPage);
            setPagePickerValue(String(newPage));
            setMessage(`Viser nå side ${newPage} av ${numberOfPages}`);
            setTimeout(() => setMessage(undefined), 400);
        }
    };

    const onSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        updatePage(Number(pagePickerValue));
    };

    return (
        <div className="pagination-example">
            <p>Pagination brukt alene</p>
            <Pagination
                aria-label="Velg side"
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                onPageChange={updatePage}
            />
            <p>Pagination brukt med snarvei</p>
            <nav aria-label="Velg side" className="page-selector">
                <div className="page-selector__input">
                    <span aria-hidden="true">Gå til side:</span>
                    <form onSubmit={onSubmit}>
                        <TextInput
                            label={"Gå til side"}
                            labelProps={{ srOnly: true }}
                            name={"go-to-page"}
                            value={pagePickerValue}
                            width="min(4rem, 100%)"
                            onChange={(e) => setPagePickerValue(e.target.value)}
                            aria-invalid={
                                pagePickerValue !== "" &&
                                (Number.isNaN(Number(pagePickerValue)) ||
                                    Number(pagePickerValue) > numberOfPages ||
                                    Number(pagePickerValue) < 1)
                            }
                        />
                    </form>
                </div>
                <Pagination
                    as="div"
                    currentPage={currentPage}
                    numberOfPages={numberOfPages}
                    onPageChange={updatePage}
                />
            </nav>
            <ScreenReaderOnly aria-live="polite">{message}</ScreenReaderOnly>
        </div>
    );
};
