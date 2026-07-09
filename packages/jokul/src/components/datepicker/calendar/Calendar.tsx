import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icon/index.js";
import { Text } from "../../typography/index.js";
import { formatInput, parseDateString } from "../utils.js";
import type { CalendarProps } from "./types.js";
import {
    getCalendarTable,
    getYearOptions,
    isDateDisabled,
    locale,
    months,
} from "./utils.js";

export const Calendar = (props: CalendarProps) => {
    const {
        value,
        defaultValue,
        className,
        onChange,
        styleOptions = {
            hideOutline: false,
            hideNavigation: false,
            hideWeekdayLabels: false,
        },
        min,
        max,
        disableAfterDate,
        disableBeforeDate,
        name = "dato",
        disableWeekends = false,
        ...rest
    } = props;

    const initialDate = value ?? defaultValue;
    const parsedInitialDate = parseDateString(initialDate) ?? new Date();
    const [day, setDay] = useState<Date>(parsedInitialDate);

    const convertedMinDate = parseDateString(min || disableBeforeDate);
    const convertedMaxDate = parseDateString(max || disableAfterDate);

    const minDate = useMemo(
        () => (convertedMinDate ? convertedMinDate : undefined),
        [convertedMinDate],
    );
    const maxDate = useMemo(
        () => (convertedMaxDate ? convertedMaxDate : undefined),
        [convertedMaxDate],
    );

    const [decorator, setDecorator] = useState<{
        month: number;
        year: number;
    }>({
        month: parsedInitialDate.getMonth(),
        year: parsedInitialDate.getFullYear(),
    });

    useEffect(() => {
        const next = parseDateString(value);
        if (!next) return;
        setDay(next);
        setDecorator({ month: next.getMonth(), year: next.getFullYear() });
    }, [value]);

    const yearOptions = useMemo(
        () => getYearOptions(decorator.year, minDate, maxDate),
        [decorator.year, minDate, maxDate],
    );

    const { headers, weeks } = useMemo(
        () => getCalendarTable(Number(decorator.year), Number(decorator.month)),
        [decorator],
    );

    return (
        <div
            className={clsx("jkl-calendar-picker", className)}
            data-no-outline={styleOptions.hideOutline}
            {...rest}
        >
            {!styleOptions.hideNavigation && (
                <Flex
                    gap="s"
                    justifyContent="space-between"
                    className="navigation"
                >
                    <Button
                        type="button"
                        icon={<ArrowLeftIcon />}
                        variant="ghost"
                        aria-label="Forrige måned"
                        onClick={() =>
                            setDecorator(({ month, year }) => {
                                const d = new Date(year, month - 1, 1);
                                return {
                                    month: d.getMonth(),
                                    year: d.getFullYear(),
                                };
                            })
                        }
                    />
                    <Flex gap="none" className="dropdowns">
                        <select
                            aria-label="Velg måned"
                            value={decorator.month}
                            onChange={(e) =>
                                setDecorator({
                                    ...decorator,
                                    month: Number(e.target.value),
                                })
                            }
                        >
                            {months.map((month, index) => (
                                <option key={month} value={index}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        <select
                            aria-label="Velg år"
                            value={decorator.year}
                            onChange={(e) =>
                                setDecorator({
                                    ...decorator,
                                    year: Number(e.target.value),
                                })
                            }
                        >
                            {yearOptions.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </Flex>

                    <Button
                        type="button"
                        icon={<ArrowRightIcon />}
                        variant="ghost"
                        aria-label="Neste måned"
                        onClick={() =>
                            setDecorator(({ month, year }) => {
                                const d = new Date(year, month + 1, 1);
                                return {
                                    month: d.getMonth(),
                                    year: d.getFullYear(),
                                };
                            })
                        }
                    />
                </Flex>
            )}
            <table className="month">
                <caption className="jkl-sr-only">Kalender</caption>
                <thead className="weekdays">
                    <tr>
                        {headers.map((weekday, i) => (
                            <th
                                key={i}
                                scope="col"
                                className="weekday"
                                data-disabled={disableWeekends}
                                aria-label={weekday}
                            >
                                <Text
                                    bold
                                    srOnly={styleOptions?.hideWeekdayLabels}
                                >
                                    {weekday.charAt(0).toUpperCase()}
                                </Text>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, weekI) => (
                        <tr key={`${week}-${weekI}`} className="week">
                            {week.map((cell, dayI) => (
                                <td key={dayI}>
                                    {cell ? (
                                        <label className="day">
                                            <input
                                                type="radio"
                                                name={name}
                                                disabled={isDateDisabled(
                                                    new Date(
                                                        decorator.year,
                                                        decorator.month,
                                                        Number(cell),
                                                    ),
                                                    minDate,
                                                    maxDate,
                                                    disableWeekends,
                                                )}
                                                aria-label={new Date(
                                                    decorator.year,
                                                    decorator.month,
                                                    Number(cell),
                                                ).toLocaleDateString(locale)}
                                                value={new Date(
                                                    decorator.year,
                                                    decorator.month,
                                                    Number(cell),
                                                ).toLocaleDateString(locale)}
                                                checked={
                                                    day.getDate() ===
                                                        Number(cell) &&
                                                    day.getMonth() ===
                                                        decorator.month &&
                                                    day.getFullYear() ===
                                                        decorator.year
                                                }
                                                onChange={(e) => {
                                                    const selected = new Date(
                                                        decorator.year,
                                                        decorator.month,
                                                        Number(cell),
                                                    );
                                                    setDay(selected);
                                                    onChange?.(
                                                        e,
                                                        formatInput(selected),
                                                    );
                                                }}
                                            />
                                            <Text as="span" short aria-hidden>
                                                {cell}
                                            </Text>
                                        </label>
                                    ) : (
                                        ""
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
