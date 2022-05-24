import { useId } from "@fremtind/jkl-react-hooks";
import { useCallback } from "react";
import { dateIsOutsideRange } from "./utils";

export const useDisableDate = (
    disableBeforeDate: Date | undefined,
    disableAfterDate: Date | undefined,
): ((inputDate: Date) => boolean | undefined) => {
    return useCallback(
        (inputDate: Date) => dateIsOutsideRange(inputDate, disableBeforeDate, disableAfterDate),
        [disableBeforeDate, disableAfterDate],
    );
};

export const useCalendarId = (): [string, string] => {
    const inputId = useId("jkl-datepicker");

    const supportLabelId = `${inputId}-label`;

    return [inputId, supportLabelId];
};
