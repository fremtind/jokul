import { nanoid } from "nanoid";
import { Dispatch, useCallback, useEffect, useState } from "react";
import { dateIsOutsideRange, formatDate, parseDateString } from "../dateFunctions";
import { Action, State } from "./reducer";

type DA = Dispatch<Action>;

export const useUpdateInternalStateOnValueChange = (dispatch: DA, value: Date | undefined) => {
    useEffect(() => {
        // only update state if value actually has a value
        if (typeof value === "undefined") {
            return;
        }

        dispatch({ type: "SET_DATE_STRING", payload: value ? formatDate(value) : "" });
        dispatch({ type: "SET_DATE", payload: value });
    }, [value, dispatch]);
};

export const useSetTimeToDateInRange = (
    dispatch: DA,
    disableAfterDate: Date | undefined,
    disableBeforeDate: Date | undefined,
) => {
    useEffect(() => {
        disableAfterDate && disableAfterDate.setHours(23, 59, 59, 999);
        const now = new Date();

        if (disableAfterDate && now > disableAfterDate) {
            dispatch({ type: "SET_DATE", payload: disableAfterDate });
        }
        if (disableBeforeDate && now < disableBeforeDate) {
            dispatch({ type: "SET_DATE", payload: disableBeforeDate });
        }
    }, [disableBeforeDate, disableAfterDate, dispatch]);
};

export const useDisableDate = (disableBeforeDate: Date | undefined, disableAfterDate: Date | undefined) => {
    return useCallback((inputDate: Date) => dateIsOutsideRange(inputDate, disableBeforeDate, disableAfterDate), [
        disableBeforeDate,
        disableAfterDate,
    ]);
};

export const useToggleCalendar = (
    dispatch: DA,
    state: State,
    disableDate: (inputDate: Date) => boolean | undefined,
) => {
    return useCallback(
        (hidden: boolean) => {
            if (state.calendarHidden && !hidden) {
                const inputDate = parseDateString(state.dateString ?? "");

                // check if the current string is inside the range
                if (inputDate && disableDate(inputDate)) {
                    dispatch({ type: "SET_DATE", payload: undefined });
                    dispatch({ type: "SET_DATE_STRING", payload: "" });
                }
            }
            dispatch({ type: "SET_CALENDAR_OPEN", payload: hidden });
        },
        [dispatch, state, disableDate],
    );
};

export const useCalendarId = () => {
    const [inputId] = useState(`jkl-datepicker-${nanoid(8)}`);
    const supportLabelId = `${inputId}-label`;

    return [inputId, supportLabelId];
};
