const paddedNumber = (number: string | number): string => {
    const num = Number(number);
    if (!Number.isFinite(num)) return "";
    return num < 10 ? `0${num}` : `${num}`;
};

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
    let iso = "";

    if (date instanceof Date) {
        const year = date.getFullYear();
        const month = paddedNumber(date.getMonth() + 1);
        const day = paddedNumber(date.getDate());
        iso = `${year}-${month}-${day}`;
        return isValidIsoDate(iso) ? iso : "";
    }

    if (!date) return "";

    const norwegianMatch = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(date);
    if (norwegianMatch) {
        const [, day, month, year] = norwegianMatch;
        iso = `${year}-${paddedNumber(month)}-${paddedNumber(day)}`;
        return isValidIsoDate(iso) ? iso : "";
    }

    const isoMatch = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(date);
    if (isoMatch) {
        const [, year, month, day] = isoMatch;
        iso = `${year}-${paddedNumber(month)}-${paddedNumber(day)}`;
        return isValidIsoDate(iso) ? iso : "";
    }

    return "";
};

/**
 * Gjør ISO-dato (`YYYY-MM-DD`) om til lesbar norsk dato. Overstyr med `options`. Ugyldig → `""`.
 *
 * @example
 * toNorwegianDateFormat("2026-08-13");                    // "13.08.2026"
 * toNorwegianDateFormat("2026-08-13", "nb-NO", { month: "long" }); // "august"
 */
export const toNorwegianDateFormat = (
    date: string,
    locale = "nb-NO",
    options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    },
): string => {
    if (!isValidIsoDate(date)) {
        return "";
    }

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

/**
 * Normaliserer `min`/`max` til ISO-format (`YYYY-MM-DD`).
 *
 * `number` godtas fordi react-hook-forms `register()` typer `min`/`max` som
 * `string | number`. Tall tolkes som millisekunder siden epoch (`Date.now()`).
 * Verdier som ikke gir en gyldig dato blir `undefined`, slik at både det native
 * feltet og kalenderen ser bort fra grensen i stedet for å få en søppelverdi.
 *
 * @example
 * toValidBoundary("13.08.2026");            // "2026-08-13"
 * toValidBoundary(Date.now());              // dagens dato som ISO
 * toValidBoundary("ikke en dato");          // undefined
 */
export const toValidBoundary = (
    boundary: string | number | undefined,
): string | undefined => {
    if (boundary === undefined || boundary === null || boundary === "") {
        return undefined;
    }

    let iso = "";
    if (typeof boundary === "number") {
        iso = Number.isFinite(boundary)
            ? toValidInputValue(new Date(boundary))
            : "";
    } else {
        iso = toValidInputValue(boundary);
    }

    return iso === "" ? undefined : iso;
};
