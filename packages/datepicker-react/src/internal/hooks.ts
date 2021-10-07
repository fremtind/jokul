import { nanoid } from "nanoid";
import { useCallback, useState } from "react";
import { dateIsOutsideRange } from "../dateFunctions";

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
    const [inputId] = useState(`jkl-datepicker-${nanoid(8)}`);
    const supportLabelId = `${inputId}-label`;

    return [inputId, supportLabelId];
};
