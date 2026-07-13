import clsx from "clsx";
import { useMemo, useState } from "react";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icon/index.js";
import { Text } from "../../typography/index.js";
import type { CalendarProps } from "../types.js";
import { getInputValidationState, toNativeValue } from "../utils/index.js";
import { CalendarDay } from "./CalendarDay.js";
import { getCalendarTable, getYearOptions, months } from "./utils.js";

export const Calendar = (props: CalendarProps) => {
    const {
        value,
        defaultValue,
        className,
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        hideOutline = false,
        hideNavigation = false,
        hideWeekdayLabels = false,
        min,
        max,
        disableAfterDate,
        disableBeforeDate,
        name = "dato",
        disableWeekends = false,
        ...rest
    } = props;

    const initialDate = value ?? defaultValue;
    const [selectedDate, setSelectedDate] = useState<string>(
        toNativeValue(initialDate),
    );

    const [decorator, setDecorator] = useState<{
        month: number;
        year: number;
    }>({
        month: new Date(selectedDate).getMonth(),
        year: new Date(selectedDate).getFullYear(),
    });

    const yearOptions = useMemo(
        () => getYearOptions(decorator.year, min, max),
        [decorator.year, min, max],
    );

    const { headers, weeks } = useMemo(
        () => getCalendarTable(Number(decorator.year), Number(decorator.month)),
        [decorator],
    );

    return (
        <div
            className={clsx("jkl-calendar-picker", className)}
            data-no-outline={hideOutline}
            {...rest}
        >
            {!hideNavigation && (
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
                                <Text bold srOnly={hideWeekdayLabels}>
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
                                        <CalendarDay
                                            value={new Date(
                                                decorator.year,
                                                decorator.month,
                                                cell,
                                            ).toString()}
                                            checked={
                                                new Date(
                                                    selectedDate,
                                                ).getDate() === cell &&
                                                new Date(
                                                    selectedDate,
                                                ).getMonth() ===
                                                    decorator.month &&
                                                new Date(
                                                    selectedDate,
                                                ).getFullYear() ===
                                                    decorator.year
                                            }
                                            min={min || disableBeforeDate}
                                            max={max || disableAfterDate}
                                            disableWeekends={disableWeekends}
                                            name={name}
                                            onChange={(e) => {
                                                setSelectedDate(e.target.value);
                                                onChange?.(
                                                    e,
                                                    new Date(e.target.value),
                                                    getInputValidationState(
                                                        e.target.value,
                                                        min,
                                                        max,
                                                    ),
                                                );
                                            }}
                                            onBlur={onBlur}
                                            onFocus={onFocus}
                                            onKeyDown={onKeyDown}
                                        />
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
