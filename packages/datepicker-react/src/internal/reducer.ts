import { Reducer } from "react";
import { DateValidationError } from "../types";
import { formatDate, isSameDay, parseDateString } from "./utils";

interface InputChangeAction {
    type: "INPUT_CHANGE";
    payload: string;
}

interface ToggleCalendarVisibilityAction {
    type: "TOGGLE";
}

interface SelectDateInCalendarAction {
    type: "SELECT_DATE_IN_CALENDAR";
    payload: Date;
}
interface ValuePropChangedAction {
    type: "VALUE_PROP_CHANGED";
    payload: string;
}

interface SetValueOnBlur {
    type: "SET_VALUE_ON_BLUR";
    payload: string;
}

export type Action =
    | InputChangeAction
    | ToggleCalendarVisibilityAction
    | SelectDateInCalendarAction
    | ValuePropChangedAction
    | SetValueOnBlur;

export interface State {
    date?: Date;
    dateString: string;
    calendarHidden: boolean;
    error: DateValidationError | undefined;
}

const dateHasChanged = (date: Date | undefined, newDate: Date) => {
    return !date || !isSameDay(date, newDate);
};

export function createReducer(
    disableBeforeDate: undefined | Date,
    disableAfterDate: undefined | Date,
): Reducer<State, Action> {
    function getValidationError(stringValue: string): DateValidationError | undefined {
        if (!stringValue) {
            return undefined;
        }

        const value = parseDateString(stringValue);
        if (!value) {
            return "WRONG_FORMAT";
        }

        if (disableBeforeDate && value < disableBeforeDate) {
            return "OUTSIDE_LOWER_BOUND";
        }

        if (disableAfterDate && value > disableAfterDate) {
            return "OUTSIDE_UPPER_BOUND";
        }

        return undefined;
    }

    return function reducer(state: State, action: Action): State {
        switch (action.type) {
            case "INPUT_CHANGE":
                const newDate = parseDateString(action.payload);

                if (newDate && dateHasChanged(state.date, newDate)) {
                    return {
                        ...state,
                        date: newDate,
                        dateString: action.payload,
                        calendarHidden: true,
                        error: getValidationError(action.payload),
                    };
                } else {
                    return {
                        ...state,
                        date: undefined,
                        dateString: action.payload,
                        error: getValidationError(action.payload),
                    };
                }

            case "SET_VALUE_ON_BLUR":
                const inputDate = parseDateString(action.payload);
                return {
                    ...state,
                    date: inputDate,
                    dateString: action.payload,
                    error: getValidationError(action.payload),
                };

            case "TOGGLE":
                if (state.calendarHidden && state.date) {
                    if (disableBeforeDate && state.date < disableBeforeDate) {
                        return {
                            ...state,
                            date: undefined,
                            dateString: "",
                            calendarHidden: !state.calendarHidden,
                            error: undefined,
                        };
                    } else if (disableAfterDate && state.date > disableAfterDate) {
                        return {
                            ...state,
                            date: undefined,
                            dateString: "",
                            calendarHidden: !state.calendarHidden,
                            error: undefined,
                        };
                    }
                }
                return { ...state, calendarHidden: !state.calendarHidden };

            case "SELECT_DATE_IN_CALENDAR":
                return {
                    ...state,
                    date: action.payload,
                    dateString: formatDate(action.payload),
                    calendarHidden: true,
                    error: undefined,
                };

            case "VALUE_PROP_CHANGED":
                if (state.date === undefined && action.payload === undefined) {
                    return state;
                }

                return {
                    ...state,
                    date: parseDateString(action.payload),
                    dateString: action.payload,
                    error: getValidationError(action.payload),
                };

            default:
                throw new Error();
        }
    };
}
