import { Reducer } from "react";
import { formatDate, isSameDay, parseDateString } from "../dateFunctions";

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
    payload: Date | undefined;
}

export type Action =
    | InputChangeAction
    | ToggleCalendarVisibilityAction
    | SelectDateInCalendarAction
    | ValuePropChangedAction;

export interface State {
    date?: Date;
    dateString: string;
    calendarHidden: boolean;
}

const dateHasChanged = (date: Date | undefined, newDate: Date) => {
    return !date || !isSameDay(date, newDate);
};

export function createReducer(
    disableBeforeDate: undefined | Date,
    disableAfterDate: undefined | Date,
): Reducer<State, Action> {
    return function reducer(state: State, action: Action): State {
        switch (action.type) {
            case "INPUT_CHANGE":
                const newDate = parseDateString(action.payload);

                if (newDate && dateHasChanged(state.date, newDate)) {
                    return { ...state, date: newDate, dateString: action.payload };
                } else if (action.payload === "") {
                    return { ...state, date: undefined, dateString: action.payload };
                }
                return { ...state, dateString: action.payload };

            case "TOGGLE":
                if (state.calendarHidden && state.date) {
                    if (disableBeforeDate && state.date < disableBeforeDate) {
                        return {
                            ...state,
                            date: undefined,
                            dateString: "",
                            calendarHidden: !state.calendarHidden,
                        };
                    } else if (disableAfterDate && state.date > disableAfterDate) {
                        return {
                            ...state,
                            date: undefined,
                            dateString: "",
                            calendarHidden: !state.calendarHidden,
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
                };

            case "VALUE_PROP_CHANGED":
                if (state.date === undefined && action.payload === undefined) {
                    return state;
                } else if (state.date && action.payload && isSameDay(state.date, action.payload)) {
                    return state;
                }
                return {
                    ...state,
                    date: action.payload,
                    dateString: action.payload ? formatDate(action.payload) : "",
                };

            default:
                throw new Error();
        }
    };
}
