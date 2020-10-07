import { State } from "./reducer";
import { formatDate } from "../dateFunctions";

export const init = ({ date, calendarHidden }: State) => ({
    date: date,
    dateString: date ? formatDate(date) : "",
    calendarHidden,
});
