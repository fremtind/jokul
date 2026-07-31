/**
 * Felles UI-lag: farger, overskrifter og statuslinjer.
 * Respekterer NO_COLOR og faller tilbake til ren tekst utenfor TTY.
 */
const useColor = Boolean(process.stdout.isTTY) && !process.env.NO_COLOR;
const wrap = (code) => (s) =>
    useColor ? `\x1b[${code}m${s}\x1b[0m` : String(s);

export const dim = wrap("2");
export const bold = wrap("1");
export const cyan = wrap("36");
export const green = wrap("32");
export const yellow = wrap("33");
export const red = wrap("31");

export function heading(title) {
    console.log(`\n${bold(cyan(title))}`);
}
export function step(n, total, title) {
    console.log(`\n${dim(`Steg ${n}/${total}`)} · ${bold(title)}`);
}
export function ok(msg) {
    console.log(`${green("✓")} ${msg}`);
}
export function warn(msg) {
    console.log(`${yellow("⚠")}  ${msg}`);
}
export function err(msg) {
    console.error(`${red("✕")} ${msg}`);
}
export function kbd(key) {
    return dim(`[${key}]`);
}

/** Enkel «panel»: overskrift + innrykkede linjer (ingen ramme-matte). */
export function panel(title, lines) {
    console.log(`\n${bold(title)}`);
    for (const line of lines.filter(Boolean)) console.log(`  ${line}`);
}
