const paddedNumber = (number: string | number): string => {
    const num = Number(number);
    if (!Number.isFinite(num)) return "";
    return num < 10 ? `0${num}` : `${num}`;
};

/**
 * Normaliserer en dato til ISO-formatet `DateInput` forventer (`YYYY-MM-DD`).
 *
 * Godtar `Date`-objekter, ISO-strenger (`YYYY-MM-DD`) og norsk punktumformat
 * (`DD.MM.YYYY`). Ugyldige verdier gir tom streng (`""`).
 *
 * @example
 * toValidInputValue(new Date(2026, 7, 13)); // "2026-08-13"
 * toValidInputValue("13.08.2026");          // "2026-08-13"
 * toValidInputValue("ikke en dato");        // ""
 */
export const toValidInputValue = (date: Date | string | undefined): string => {
    const isValidIsoDate = (iso: string): boolean => {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
        if (!match) return false;

        const [, y, m, d] = match;
        const year = Number(y);
        const month = Number(m);
        const day = Number(d);

        const parsed = new Date(Date.UTC(year, month - 1, day));
        return (
            Number.isFinite(parsed.getTime()) &&
            parsed.getUTCFullYear() === year &&
            parsed.getUTCMonth() === month - 1 &&
            parsed.getUTCDate() === day
        );
    };

    let iso = "";

    if (date instanceof Date) {
        const year = date.getFullYear();
        const month = paddedNumber(date.getMonth() + 1);
        const day = paddedNumber(date.getDate());
        iso = `${year}-${month}-${day}`;
        return isValidIsoDate(iso) ? iso : "";
    }

    if (!date) return "";

    if (date.includes(".")) {
        const [day, month, year] = date.split(".");
        if (!day || !month || !year || year.length !== 4) return "";
        iso = `${year}-${paddedNumber(month)}-${paddedNumber(day)}`;
        return isValidIsoDate(iso) ? iso : "";
    }

    if (date.includes("-")) {
        const [year, month, day] = date.split("-");
        if (!day || !month || !year || year.length !== 4) return "";
        iso = `${year}-${paddedNumber(month)}-${paddedNumber(day)}`;
        return isValidIsoDate(iso) ? iso : "";
    }

    return "";
};

/**
 * Gjør ISO-dato (`YYYY-MM-DD`) om til lesbar norsk dato. Overstyr med `options`. Ugyldig → `""`.
 *
 * @example
 * toNorwegianDateFormat("2026-08-13");                    // "13. august 2026"
 * toNorwegianDateFormat("2026-08-13", "nb-NO", { month: "long" }); // "august"
 */
export const toNorwegianDateFormat = (
    date: string,
    locale = "nb-NO",
    options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "2-digit",
        year: "numeric",
    },
): string => {
    const [year, month, day] = date.split("-").map(Number);
    const parsed = new Date(year, month - 1, day);
    if (
        !Number.isFinite(parsed.getTime()) ||
        parsed.getFullYear() !== year ||
        parsed.getMonth() !== month - 1 ||
        parsed.getDate() !== day
    ) {
        return "";
    }
    return parsed.toLocaleDateString(locale, options);
};
