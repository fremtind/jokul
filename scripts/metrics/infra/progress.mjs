/**
 * Enkel fremdriftsindikator.
 * - TTY: oppdaterer én linje med \r.
 * - Ikke-TTY (CI): logger hver ~10 %.
 */

// Delt «siste status»-linje slik at en blokkerende nedtelling (se gh.mjs)
// kan vise fremdriften samtidig som den teller ned.
let latestStatus = "";
export const setStatus = (s) => {
    latestStatus = s;
};
export const getStatus = () => latestStatus;

export function createProgress(total, label) {
    const isTty = Boolean(process.stdout.isTTY);
    const start = Date.now();
    let lastBucket = -1;

    function render(done) {
        if (total === 0) return;
        const pct = Math.floor((done / total) * 100);
        if (isTty) {
            const line = `${label} ${done}/${total} (${pct}%)`;
            setStatus(line);
            process.stdout.write(`\r\x1b[K${line}   `);
        } else {
            const bucket = Math.floor(pct / 10);
            if (bucket > lastBucket || done === total) {
                lastBucket = bucket;
                console.log(`${label} ${done}/${total} (${pct}%)`);
            }
        }
    }

    return {
        tick: (done) => render(done),
        done() {
            if (isTty && total > 0) {
                const secs = ((Date.now() - start) / 1000).toFixed(1);
                setStatus("");
                process.stdout.write(
                    `\r\x1b[K${label} ${total}/${total} (100%) ✓ ${secs}s\n`,
                );
            }
        },
    };
}

/**
 * Animert «arbeider»-indikator for blokkerende operasjoner (f.eks. kodesøk).
 * TTY: animerer en ellipsis på én linje. Ikke-TTY (CI): skriver label én gang.
 */
export function createSpinner(label) {
    const start = Date.now();
    if (!process.stdout.isTTY) {
        console.log(`${label}...`);
        return { stop() {}, fail() {} };
    }
    const frames = ["   ", ".  ", ".. ", "..."];
    let i = 0;
    const timer = setInterval(() => {
        process.stdout.write(`\r${label}${frames[i++ % frames.length]}`);
    }, 250);
    timer.unref?.(); // ikke hold prosessen i live kun for spinneren
    function finish(mark, suffix = "") {
        clearInterval(timer);
        const secs = ((Date.now() - start) / 1000).toFixed(1);
        process.stdout.write(`\r${label}... ${mark} ${secs}s${suffix}\n`);
    }
    return {
        stop: (suffix = "") => finish("✓", suffix),
        fail: () => finish("✕"),
    };
}
