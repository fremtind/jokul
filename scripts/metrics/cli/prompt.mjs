import { stdin, stdout } from "node:process";
import { emitKeypressEvents } from "node:readline";
import { createInterface } from "node:readline/promises";

export const BACK = Symbol("tilbake");

let rl;
function io() {
    if (!rl) rl = createInterface({ input: stdin, output: stdout });
    return rl;
}
export function closePrompt() {
    rl?.close();
    rl = undefined;
}

export async function ask(question, fallback = "") {
    const answer = (await io().question(`${question} `)).trim();
    return answer || fallback;
}

export async function askNumber(question, fallback) {
    const answer = (await io().question(`${question} `)).trim();
    const n = Number(answer);
    return answer && Number.isFinite(n) ? n : fallback;
}

const DIM = "\x1b[2m";
const CYAN = "\x1b[36m";
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";

async function fallbackSingle(question, options) {
    console.log(question);
    options.forEach((o, i) => console.log(`  ${i + 1}) ${o.label}`));
    const n = await askNumber("Velg:", 1);
    const idx = Math.min(Math.max(1, n), options.length) - 1;
    return options[idx].value;
}
async function fallbackMulti(question, options) {
    console.log(question);
    options.forEach((o, i) => console.log(`  ${i + 1}) ${o.label}`));
    const raw = (await io().question("Velg (f.eks. 1,3 – «a» = alle): "))
        .trim()
        .toLowerCase();
    if (!raw || raw === "a" || raw === "alle")
        return options.map((o) => o.value);
    const idxs = raw
        .split(/[\s,]+/)
        .map(Number)
        .filter((n) => Number.isInteger(n) && n >= 1 && n <= options.length);
    const picked = [...new Set(idxs)].map((n) => options[n - 1].value);
    return picked.length ? picked : options.map((o) => o.value);
}

function keypressSelect(
    question,
    options,
    { multi, initialCursor = 0, emptyMeansAll = false, preselected = [] },
) {
    // Ikke-interaktiv (CI/pipe): fall tilbake til tall-inntasting.
    if (!stdin.isTTY) {
        return multi
            ? fallbackMulti(question, options)
            : fallbackSingle(question, options);
    }

    // Lukk en evt. aktiv line-mode readline så den ikke spiser tastetrykk.
    if (rl) closePrompt();

    emitKeypressEvents(stdin);
    const wasRaw = stdin.isRaw;
    stdin.setRawMode(true);
    stdin.resume();

    let cursor = Math.min(Math.max(initialCursor, 0), options.length - 1);
    const selected = new Set();
    for (const idx of preselected) {
        if (idx >= 0 && idx < options.length) selected.add(idx);
    }
    const instructions = multi
        ? "↑/↓ · mellomrom velg · a alle · enter bekreft · esc tilbake"
        : "↑/↓ · pgup/pgdn · enter velg · esc tilbake";

    // Innledende linjeskift i ledeteksten beholdes som tomme rader i det
    // sporede området, så høyde-regnestykket alltid stemmer.
    const leadingCount = (question.match(/^\n+/)?.[0] ?? "").length;
    const q = question.slice(leadingCount).replace(/\n/g, " ");

    // Rullende vindu: hold blokka strengt lavere enn terminalhøyden, ellers
    // ruller terminalen og absolutt «markør opp» treffer ikke toppen (som gir
    // gjentatt ledetekst). renderHeight må matche antall skrevne rader nøyaktig.
    const chrome = leadingCount + 3; // tomme rader + ledetekst + instruksjon + status
    const pageSize = Math.min(
        options.length,
        Math.max(3, (stdout.rows || 24) - chrome - 1),
    );
    const renderHeight = leadingCount + pageSize + 3;
    let windowStart = Math.min(
        Math.max(0, cursor - Math.floor(pageSize / 2)),
        Math.max(0, options.length - pageSize),
    );
    let firstRender = true;

    function fit(text) {
        const max = Math.max(10, (stdout.columns || 80) - 4);
        return text.length <= max
            ? text
            : `…${text.slice(text.length - (max - 1))}`;
    }

    function render() {
        if (firstRender) {
            firstRender = false;
        } else {
            // Markøren står på siste rad (status) – gå til toppen av blokka.
            stdout.write(`\x1b[${renderHeight - 1}A\r`);
        }
        if (cursor < windowStart) windowStart = cursor;
        else if (cursor >= windowStart + pageSize)
            windowStart = cursor - pageSize + 1;
        const windowEnd = windowStart + pageSize;
        const lines = [];
        for (let i = 0; i < leadingCount; i++) lines.push("");
        lines.push(q, `${DIM}${instructions}${RESET}`);
        for (let i = windowStart; i < windowEnd; i++) {
            const o = options[i];
            const active = i === cursor;
            const pointer = active ? `${CYAN}›${RESET}` : " ";
            const mark = multi
                ? selected.has(i)
                    ? `${GREEN}◉${RESET} `
                    : "◯ "
                : "";
            const text = fit(o.label);
            const label = active ? `${CYAN}${text}${RESET}` : text;
            lines.push(`${pointer} ${mark}${label}`);
        }
        const above = windowStart;
        const below = options.length - windowEnd;
        const hints = [];
        if (above > 0) hints.push(`↑ ${above} flere`);
        if (below > 0) hints.push(`↓ ${below} flere`);
        const status = [
            `${cursor + 1}/${options.length}`,
            ...(multi ? [`${selected.size} valgt`] : []),
            ...hints,
        ].join(" · ");
        lines.push(`${DIM}${status}${RESET}`);
        // Ingen etterfølgende «\n» – markøren blir stående på status-raden,
        // så blokka aldri dytter terminalen til å rulle.
        stdout.write(lines.map((l) => `\x1b[2K${l}`).join("\n"));
    }

    render();

    return new Promise((resolve) => {
        function cleanup() {
            stdin.removeListener("keypress", onKey);
            if (!wasRaw) stdin.setRawMode(false);
            stdin.pause();
        }
        function finish(value) {
            cleanup();
            stdout.write("\n");
            resolve(value);
        }
        function move(delta) {
            cursor = (cursor + delta + options.length) % options.length;
            render();
        }
        function onKey(_str, key) {
            if (!key) return;
            if (key.ctrl && key.name === "c") {
                cleanup();
                stdout.write("\n");
                process.exit(130);
            } else if (key.name === "up" || key.name === "k") {
                move(-1);
            } else if (key.name === "down" || key.name === "j") {
                move(1);
            } else if (key.name === "pageup") {
                cursor = Math.max(0, cursor - pageSize);
                render();
            } else if (key.name === "pagedown") {
                cursor = Math.min(options.length - 1, cursor + pageSize);
                render();
            } else if (key.name === "home") {
                cursor = 0;
                render();
            } else if (key.name === "end") {
                cursor = options.length - 1;
                render();
            } else if (multi && key.name === "space") {
                selected.has(cursor)
                    ? selected.delete(cursor)
                    : selected.add(cursor);
                render();
            } else if (multi && key.name === "a") {
                selected.size === options.length
                    ? selected.clear()
                    : options.forEach((_, i) => selected.add(i));
                render();
            } else if (key.name === "escape") {
                finish(BACK);
            } else if (key.name === "return" || key.name === "enter") {
                if (multi) {
                    // Ingenting huket av → bruk raden under pekeren.
                    // «a» velger alle; emptyMeansAll gir «alle» der det ønskes.
                    let chosen;
                    if (selected.size) chosen = [...selected];
                    else if (emptyMeansAll) chosen = options.map((_, i) => i);
                    else chosen = [cursor];
                    finish(
                        chosen
                            .sort((a, b) => a - b)
                            .map((i) => options[i].value),
                    );
                } else {
                    finish(options[cursor].value);
                }
            }
        }
        stdin.on("keypress", onKey);
    });
}
export async function askConfirm(question, def = true) {
    const value = await keypressSelect(
        question,
        [
            { label: "Ja", value: true },
            { label: "Nei", value: false },
        ],
        { multi: false, initialCursor: def ? 0 : 1 },
    );
    return value === BACK ? def : value;
}
export async function askChoice(question, options, opts = {}) {
    return keypressSelect(question, options, { ...opts, multi: false });
}
export async function askMultiChoice(question, options, opts = {}) {
    return keypressSelect(question, options, { ...opts, multi: true });
}
