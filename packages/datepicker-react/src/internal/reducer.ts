import { formatDate, isSameDay, parseDateString } from "../dateFunctions";

interface SetDate {
    type: "SET_DATE";
    payload: Date | undefined;
}

interface SetDateString {
    type: "SET_DATE_STRING";
    payload: string | undefined;
}

interface ToggleCalendar {
    type: "SET_CALENDAR_OPEN";
    payload: boolean;
}

export type Action = SetDate | SetDateString | ToggleCalendar;

export interface State {
    date?: Date;
    dateString?: string;
    calendarHidden: boolean;
}

const dateHasChanged = (date: Date | undefined, newDate: Date) => {
    return !date || !isSameDay(date, newDate);
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_DATE":
            return { ...state, date: action.payload, dateString: action.payload ? formatDate(action.payload) : "" };

        case "SET_DATE_STRING":
            let date = state.date;
            const newDate = parseDateString(action.payload ?? "");

            // Only set the date if it is a valid date
            if (newDate && dateHasChanged(date, newDate)) {
                date = newDate;
            } else if (action.payload === "") {
                date = undefined;
            }

            return { ...state, dateString: action.payload, date };

        case "SET_CALENDAR_OPEN":
            return { ...state, calendarHidden: action.payload };

        default:
            throw new Error();
    }
};
