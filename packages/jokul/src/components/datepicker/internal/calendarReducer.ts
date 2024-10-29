import { type Reducer } from "react";

export type CalendarAction =
    | {
          type: "SET_SELECTED_DATE";
          newDate: Date;
      }
    | {
          type: "SET_OFFSET";
          newOffset: number;
      }
    | {
          type: "ADD_OFFSET";
          addedOffset: number;
      };

export type CalendarState = {
    selectedDate: Date;
    offset: number;
    shownDate: Date;
};

export const calendarReducer: Reducer<CalendarState, CalendarAction> = (
    currentState,
    action,
) => {
    let shownDate: Date;

    switch (action.type) {
        case "SET_OFFSET":
            shownDate = new Date(currentState.selectedDate);
            shownDate.setMonth(
                currentState.selectedDate.getMonth() + action.newOffset,
            );

            return {
                ...currentState,
                offset: action.newOffset,
                shownDate,
            };

        case "ADD_OFFSET":
            shownDate = new Date(currentState.selectedDate);
            shownDate.setMonth(
                currentState.selectedDate.getMonth() +
                    currentState.offset +
                    action.addedOffset,
            );

            return {
                ...currentState,
                offset: currentState.offset + action.addedOffset,
                shownDate,
            };

        case "SET_SELECTED_DATE":
            return calendarInitializer(action.newDate);

        default:
            return currentState;
    }
};

export const calendarInitializer = (initialDate: Date): CalendarState => ({
    selectedDate: initialDate,
    offset: 0,
    shownDate: initialDate,
});
