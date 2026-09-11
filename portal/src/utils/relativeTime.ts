const TIME_IN_SECONDS = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Number.MAX_SAFE_INTEGER,
] as const;
const UNITS_OF_TIME = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
] as const;

export function getRelativeTime(
    time: Date,
    locale: Intl.LocalesArgument = "no-NB",
): string {
    const formatter = new Intl.RelativeTimeFormat(locale, {
        numeric: "auto",
    });
    const secondsElapsed = Math.round((time.getTime() - Date.now()) / 1000);
    const unitIndex = TIME_IN_SECONDS.findIndex(
        (time) => time > Math.abs(secondsElapsed),
    );
    const unit = UNITS_OF_TIME[unitIndex];
    const divisor = unitIndex > 0 ? TIME_IN_SECONDS[unitIndex - 1] : 1;
    const numberOfUnits = Math.round(secondsElapsed / divisor);

    return formatter.format(numberOfUnits, unit);
}
