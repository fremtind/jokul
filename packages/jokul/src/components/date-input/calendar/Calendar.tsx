import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icon/index.js";
import { Select } from "../../select/index.js";
import { Table, TableCaption } from "../../table/index.js";
import { Text } from "../../typography/index.js";
import { toValidInputValue } from "../utils.js";
import { CalendarWeek } from "./CalendarWeek.js";
import type { CalendarProps } from "./types.js";
import {
    clampDateToRange,
    getCalendarTable,
    getNextFocusableDate,
    getSelectableMonths,
    getYearOptions,
    hasSelectableDateInMonth,
    isoToLocalDate,
    months,
} from "./utils.js";

export const Calendar = (props: CalendarProps) => {
    const {
        max,
        min,
        value,
        id,
        popover = "auto",
        onChange,
        label,
        description,
    } = props;

    const calendarId = id ?? `jkl-calendar-${useId()}`;

    const rootRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLTableSectionElement>(null);
    const shouldMoveFocus = useRef(false);

    const [focusedDate, setFocusedDate] = useState<Date>(() =>
        clampDateToRange(isoToLocalDate(value) ?? new Date(), min, max),
    );

    const month = focusedDate.getMonth();
    const year = focusedDate.getFullYear();
    const day = toValidInputValue(value ?? "");
    const focusedIso = toValidInputValue(focusedDate);

    const yearOptions = useMemo(
        () => getYearOptions(year, min, max),
        [year, min, max],
    );

    const monthOptions = useMemo(
        () => getSelectableMonths(year, min, max),
        [year, min, max],
    );

    const { headers, weeks } = useMemo(
        () => getCalendarTable(year, month),
        [year, month],
    );

    useEffect(() => {
        const element = rootRef.current;
        if (!element) {
            return;
        }

        const handleToggle = (event: Event) => {
            const { newState } = event as Event & { newState?: string };
            if (newState !== "open") {
                return;
            }
            gridRef.current
                ?.querySelector<HTMLInputElement>(
                    `input[type="radio"][value="${focusedIso}"]`,
                )
                ?.focus();
        };

        element.addEventListener("toggle", handleToggle);
        return () => element.removeEventListener("toggle", handleToggle);
    }, [focusedIso]);

    // Fokusdatoen må alltid være valgbar: ligger den utenfor min/max finnes det
    // ingen aktiv radio å flytte fokus til når popoveren åpnes. Klampes derfor
    // både når verdien og når grensene endrer seg.
    useEffect(() => {
        setFocusedDate((current) =>
            clampDateToRange(isoToLocalDate(value) ?? current, min, max),
        );
    }, [value, min, max]);

    useEffect(() => {
        if (!shouldMoveFocus.current) {
            return;
        }
        shouldMoveFocus.current = false;
        gridRef.current
            ?.querySelector<HTMLInputElement>(
                `input[type="radio"][value="${focusedIso}"]`,
            )
            ?.focus();
    }, [focusedIso]);

    const selectFocusedDate = () => {
        gridRef.current
            ?.querySelector<HTMLInputElement>(
                `input[type="radio"][value="${focusedIso}"]`,
            )
            ?.click();
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLTableSectionElement>,
    ) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectFocusedDate();
            return;
        }

        const next = getNextFocusableDate(
            event.key,
            event.shiftKey,
            focusedDate,
            min,
            max,
        );
        if (!next) {
            return;
        }

        event.preventDefault();
        shouldMoveFocus.current = true;
        setFocusedDate(next);
    };

    const monthNavigationAvailable = (
        fromDate: Date,
        offset: number,
    ): boolean => {
        const adjacent = new Date(
            fromDate.getFullYear(),
            fromDate.getMonth() + offset,
            1,
        );
        return hasSelectableDateInMonth(
            adjacent.getFullYear(),
            adjacent.getMonth(),
            min,
            max,
        );
    };

    const goToMonth = (offset: number) => {
        const target = clampDateToRange(
            new Date(year, month + offset, 1),
            min,
            max,
        );

        if (!monthNavigationAvailable(target, offset)) {
            shouldMoveFocus.current = true;
        }

        setFocusedDate(target);
    };

    const canGoToPreviousMonth = monthNavigationAvailable(focusedDate, -1);
    const canGoToNextMonth = monthNavigationAvailable(focusedDate, 1);

    return (
        <div
            ref={rootRef}
            id={calendarId}
            className="jkl-calendar jkl-popover"
            data-testid="jkl-calendar"
            // @ts-expect-error popover er ikke tilgjengelig i typene til React-versjonen vår
            popover={popover}
        >
            <div className="jkl-calendar__labels">
                <Text className="jkl-label" short>
                    {label}
                </Text>
                <Text className="jkl-input-group-description">
                    {description}
                </Text>
            </div>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                gap="s"
                className="jkl-calendar__navigation"
            >
                <Flex gap="xs" wrap="wrap" data-size="small">
                    <Select
                        placeholder="Måned"
                        label="Måned"
                        items={monthOptions.map((index) =>
                            months[index].toLowerCase(),
                        )}
                        labelProps={{ srOnly: true }}
                        width="13ch"
                        value={months[month].toLowerCase()}
                        onChange={(e) =>
                            setFocusedDate(
                                clampDateToRange(
                                    new Date(
                                        year,
                                        months.findIndex(
                                            (m) =>
                                                m.toLowerCase() ===
                                                e.target.value,
                                        ),
                                        1,
                                    ),
                                    min,
                                    max,
                                ),
                            )
                        }
                    />
                    <Select
                        placeholder="År"
                        label="År"
                        items={yearOptions.map((y) => y.toString())}
                        labelProps={{ srOnly: true }}
                        width="4ch"
                        value={year}
                        onChange={(e) =>
                            setFocusedDate(
                                clampDateToRange(
                                    new Date(Number(e.target.value), month, 1),
                                    min,
                                    max,
                                ),
                            )
                        }
                    />
                </Flex>
                <Flex gap="xs">
                    <Button
                        type="button"
                        data-testid={`${calendarId}-back-button`}
                        variant="ghost"
                        aria-label="Forrige måned"
                        icon={<ArrowLeftIcon />}
                        disabled={!canGoToPreviousMonth}
                        onClick={() => goToMonth(-1)}
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        data-testid={`${calendarId}-forward-button`}
                        icon={<ArrowRightIcon />}
                        aria-label="Neste måned"
                        disabled={!canGoToNextMonth}
                        onClick={() => goToMonth(1)}
                    />
                </Flex>
            </Flex>
            <Table
                caption={<TableCaption srOnly>Kalender</TableCaption>}
                data-testid="jkl-calendar-table"
                fullWidth
            >
                <thead>
                    <tr>
                        {headers.map((weekday) => (
                            <th key={weekday} scope="col" aria-label={weekday}>
                                <Text bold>
                                    {weekday.charAt(0).toUpperCase()}
                                </Text>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody ref={gridRef} onKeyDown={handleKeyDown}>
                    {weeks.map((week, weekIndex) => (
                        <CalendarWeek
                            // biome-ignore lint/suspicious/noArrayIndexKey: Index er dessverre eneste som gir mening.
                            key={`week-${weekIndex}`}
                            week={week}
                            weekIndex={weekIndex}
                            year={year}
                            month={month}
                            name={`${calendarId}-day`}
                            selectedDate={toValidInputValue(day)}
                            focusedDate={focusedIso}
                            min={min}
                            max={max}
                            onChange={onChange}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

Calendar.displayName = "Calendar";
