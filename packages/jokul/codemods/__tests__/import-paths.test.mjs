import test from "node:test";
import assert from "node:assert/strict";
import { transformImportPaths } from "../import-paths.mjs";

test("migrates core, styles and utilities imports", () => {
    const source = `
import "@fremtind/jokul/styles/core/core.scss";
import "@fremtind/jokul/styles/styles.scss";
import type { WithChildren } from "@fremtind/jokul/core";
`;

    const result = transformImportPaths(source, "/tmp/example.ts");

    assert.equal(
        result.text.includes('import "@fremtind/jokul/styles/base.scss";'),
        true,
    );
    assert.equal(
        result.text.includes('import "@fremtind/jokul/styles/components.scss";'),
        true,
    );
    assert.equal(
        result.text.includes(
            'import type { WithChildren } from "@fremtind/jokul/utilities";',
        ),
        true,
    );
});

test("moves configured font imports ahead of base styles", () => {
    const source = `@use "@fremtind/jokul/styles/core";
@use "@fremtind/jokul/styles/fonts" with (
    $webfonts-dir: "../../src/fonts"
);
`;

    const result = transformImportPaths(source, "/tmp/global.scss");

    assert.match(
        result.text,
        /^@use "@fremtind\/jokul\/styles\/theme\/fonts" with \([\s\S]*?\);\n@use "@fremtind\/jokul\/styles\/base\.scss";/m,
    );
    assert.equal(result.reordered, true);
});

test("migrates internal relative core jkl imports", () => {
    const source = `@use "../../../core/jkl";
`;

    const result = transformImportPaths(
        source,
        "/tmp/components/modal/styles/_layout.scss",
    );

    assert.equal(result.text, '@use "../../../styles/jkl";\n');
});

test("rewrites beta style imports when the beta component is used in the same file", () => {
    const source = `
import { BETA_Select } from "@fremtind/jokul/select";
import "@fremtind/jokul/styles/components/select";
`;

    const result = transformImportPaths(source, "/tmp/MyForm.tsx");

    assert.equal(
        result.text.includes(
            '@fremtind/jokul/styles/components/beta/select',
        ),
        true,
    );
    assert.deepEqual(result.warnings, []);
});

test("warns when beta style import is ambiguous (no beta identifier in file)", () => {
    const source = `
import "@fremtind/jokul/styles/components/select";
`;

    const result = transformImportPaths(source, "/tmp/global.scss");

    assert.equal(result.warnings.length, 1);
    assert.match(result.warnings[0], /Select/);
});

test("removes esm webfonts.css import when base or components css is present", () => {
    const source = `import "@fremtind/jokul/styles/base.css";
import "@fremtind/jokul/styles/fonts/webfonts.css";
`;

    const result = transformImportPaths(source, "/tmp/main.tsx");

    assert.equal(result.text.includes("webfonts"), false);
    assert.deepEqual(result.warnings, []);
});

test("warns when webfonts.css is removed without a base or components import", () => {
    const source = `import "@fremtind/jokul/styles/fonts/webfonts.css";
`;

    const result = transformImportPaths(source, "/tmp/main.tsx");

    assert.equal(result.text.includes("webfonts"), false);
    assert.equal(result.warnings.length, 1);
    assert.match(result.warnings[0], /styles\/base\.css/);
});

test("removes css @import of webfonts.css", () => {
    const source = `@import "@fremtind/jokul/styles/components.css";
@import "@fremtind/jokul/styles/fonts/webfonts.css";
`;

    const result = transformImportPaths(source, "/tmp/global.css");

    assert.equal(result.text.includes("webfonts"), false);
    assert.equal(
        result.text.includes('@import "@fremtind/jokul/styles/components.css";'),
        true,
    );
    assert.deepEqual(result.warnings, []);
});


test("renames Fremtind Material Symbols font-family", () => {
    const source = `.icon {
    font-family: "Fremtind Material Symbols", "Fremtind Material Symbols Fallback", sans-serif;
}
`;

    const result = transformImportPaths(source, "/tmp/icons.scss");

    assert.equal(
        result.text.includes("Fremtind Material Symbols"),
        false,
    );
    assert.equal(
        result.text.includes(
            '"Jokul Icons", "Jokul Icons Fallback", sans-serif',
        ),
        true,
    );
    assert.equal(result.replacements, 2);
});

test("renames Fremtind Material Symbols inside CSS files too", () => {
    const source = `.icon {
    font-family: 'Fremtind Material Symbols';
}
`;

    const result = transformImportPaths(source, "/tmp/icons.css");

    assert.equal(
        result.text.includes("Fremtind Material Symbols"),
        false,
    );
    assert.equal(result.text.includes("'Jokul Icons'"), true);
});

test("renames CSS background-action token", () => {
    const source = `.btn {
    background: var(--jkl-color-background-action);
    color: var(--jkl-color-text-on-action);
}
`;

    const result = transformImportPaths(source, "/tmp/button.css");

    assert.equal(result.text.includes("--jkl-color-background-action"), false);
    assert.equal(result.text.includes("--jkl-color-text-on-action"), false);
    assert.equal(result.text.includes("--jkl-color-background-contrast"), true);
    assert.equal(result.text.includes("--jkl-color-text-on-contrast"), true);
    assert.equal(result.changed, true);
});

test("renames CSS text-inverted token to text-on-contrast", () => {
    const source = `.inverted {
    color: var(--jkl-color-text-inverted);
}
`;

    const result = transformImportPaths(source, "/tmp/theme.css");

    assert.equal(result.text.includes("--jkl-color-text-inverted"), false);
    assert.equal(result.text.includes("--jkl-color-text-on-contrast"), true);
});

test("renames CSS container-high and container-low tokens", () => {
    const source = `.card-high {
    background: var(--jkl-color-background-container-high);
}
.card-low {
    background: var(--jkl-color-background-container-low);
}
`;

    const result = transformImportPaths(source, "/tmp/card.css");

    assert.equal(result.text.includes("--jkl-color-background-container-high"), false);
    assert.equal(result.text.includes("--jkl-color-background-container-low"), false);
    assert.equal(
        result.text.split("--jkl-color-background-container").length - 1,
        2,
        "should have two occurrences of the new token",
    );
});

test("renames CSS alert tokens to feedback tokens", () => {
    const source = `.info { background: var(--jkl-color-background-alert-info); }
.warning { background: var(--jkl-color-background-alert-warning); }
.error { background: var(--jkl-color-background-alert-error); }
.success { background: var(--jkl-color-background-alert-success); }
`;

    const result = transformImportPaths(source, "/tmp/alerts.css");

    assert.equal(result.text.includes("--jkl-color-background-alert-"), false);
    assert.equal(result.text.includes("--jkl-color-info-background-container"), true);
    assert.equal(result.text.includes("--jkl-color-warning-background-container"), true);
    assert.equal(result.text.includes("--jkl-color-error-background-container"), true);
    assert.equal(result.text.includes("--jkl-color-success-background-container"), true);
});

test("warns about removed interactive tokens", () => {
    const source = `.item {
    background: var(--jkl-color-background-interactive);
    color: var(--jkl-color-text-interactive);
}
`;

    const result = transformImportPaths(source, "/tmp/interactive.css");

    assert.equal(
        result.warnings.some((w) => /interactive/.test(w)),
        true,
    );
    assert.equal(
        result.warnings.filter((w) => /interactive/.test(w)).length,
        1,
        "should produce one warning for both interactive tokens",
    );
});

test("warns about removed text-on-alert tokens", () => {
    const source = `.info { color: var(--jkl-color-text-on-alert-info); }
`;

    const result = transformImportPaths(source, "/tmp/alerts.css");

    assert.equal(
        result.warnings.some((w) => /text-on-alert/.test(w)),
        true,
    );
});

test("warns about Card variant prop", () => {
    const source = `<Card variant="outlined">
    <p>Innhold</p>
</Card>
`;

    const result = transformImportPaths(source, "/tmp/MyCard.tsx");

    assert.equal(
        result.warnings.some((w) => /variant/.test(w) && /Card/.test(w)),
        true,
    );
});

test("warns about Card variant high and low", () => {
    const source = `function Page() {
    return (
        <>
            <Card variant="high">Høy</Card>
            <Card variant="low">Lav</Card>
        </>
    );
}
`;

    const result = transformImportPaths(source, "/tmp/Page.tsx");

    assert.equal(
        result.warnings.some((w) => /variant/.test(w)),
        true,
    );
    assert.equal(
        result.warnings.filter((w) => /variant/.test(w)).length,
        1,
        "should produce one warning even with multiple variant usages",
    );
});

test("renames container-inverted to background-contrast", () => {
    const source = `.inverted { background: var(--jkl-color-background-container-inverted); }
`;

    const result = transformImportPaths(source, "/tmp/inverted.css");

    assert.equal(result.text.includes("--jkl-color-background-container-inverted"), false);
    assert.equal(result.text.includes("--jkl-color-background-contrast"), true);
    assert.deepEqual(result.warnings, []);
});

// --- idempotency ---

test("is idempotent — running twice gives same result", () => {
    const source = `import "@fremtind/jokul/styles/core/core.scss";

.btn { background: var(--jkl-color-background-action); }
`;

    const first = transformImportPaths(source, "/tmp/page.scss");
    const second = transformImportPaths(first.text, "/tmp/page.scss");

    assert.equal(second.changed, false);
    assert.equal(second.replacements, 0);
    assert.equal(second.text, first.text);
});

// --- no-op ---

test("returns changed: false for an already-migrated file", () => {
    const source = `import "@fremtind/jokul/styles/base.scss";

.btn { background: var(--jkl-color-background-contrast); }
`;

    const result = transformImportPaths(source, "/tmp/page.ts");

    assert.equal(result.changed, false);
    assert.equal(result.replacements, 0);
    assert.deepEqual(result.warnings, []);
});

// --- token boundary safety ---

test("does not rename token that is a prefix of a longer token", () => {
    // --jkl-color-text-inverted should not match inside --jkl-color-text-inverted-extra
    const source = `.x { color: var(--jkl-color-text-inverted-extra); }`;

    const result = transformImportPaths(source, "/tmp/x.css");

    assert.equal(result.text.includes("--jkl-color-text-inverted-extra"), true);
    assert.equal(result.changed, false);
});

test("does not rename --jkl-color-background-container (base token, not a v4 token)", () => {
    const source = `.x { background: var(--jkl-color-background-container); }`;

    const result = transformImportPaths(source, "/tmp/x.css");

    assert.equal(result.text, source);
    assert.equal(result.changed, false);
});

test("renames container-high but leaves sibling container-low and base container intact in same rule", () => {
    const source = `.x {
    --high: var(--jkl-color-background-container-high);
    --low: var(--jkl-color-background-container-low);
    --base: var(--jkl-color-background-container);
}
`;

    const result = transformImportPaths(source, "/tmp/x.css");

    assert.equal(result.text.includes("--jkl-color-background-container-high"), false);
    assert.equal(result.text.includes("--jkl-color-background-container-low"), false);
    assert.equal(result.text.includes("var(--jkl-color-background-container)"), true,
        "base container token must survive unchanged");
    assert.equal(result.replacements, 2);
});

test("does not rename alert-info token that has a longer suffix", () => {
    const source = `.x { background: var(--jkl-color-background-alert-info-extra); }`;

    const result = transformImportPaths(source, "/tmp/x.css");

    assert.equal(result.changed, false);
});

// --- CSS token as custom property definition ---

test("renames token used as a custom property definition, not just inside var()", () => {
    const source = `:root {
    --jkl-color-background-action: #005aa4;
    --jkl-color-text-inverted: #fff;
}
`;

    const result = transformImportPaths(source, "/tmp/overrides.css");

    assert.equal(result.text.includes("--jkl-color-background-action:"), false);
    assert.equal(result.text.includes("--jkl-color-text-inverted:"), false);
    assert.equal(result.text.includes("--jkl-color-background-contrast:"), true);
    assert.equal(result.text.includes("--jkl-color-text-on-contrast:"), true);
});

// --- webfonts edge cases ---

test("removes webfonts.min.css import", () => {
    const source = `import "@fremtind/jokul/styles/base.css";
import "@fremtind/jokul/styles/fonts/webfonts.min.css";
`;

    const result = transformImportPaths(source, "/tmp/main.tsx");

    assert.equal(result.text.includes("webfonts"), false);
    assert.deepEqual(result.warnings, []);
});

test("removes webfonts.css when imported with require()", () => {
    const source = `require("@fremtind/jokul/styles/base.css");
require("@fremtind/jokul/styles/fonts/webfonts.css");
`;

    const result = transformImportPaths(source, "/tmp/main.cjs");

    assert.equal(result.text.includes("webfonts"), false);
    assert.deepEqual(result.warnings, []);
});

// --- font family edge cases ---

test("renames only the fallback font-family if primary is absent", () => {
    const source = `.icon {
    font-family: "Fremtind Material Symbols Fallback";
}
`;

    const result = transformImportPaths(source, "/tmp/icons.css");

    assert.equal(result.text.includes("Fremtind Material Symbols Fallback"), false);
    assert.equal(result.text.includes("Jokul Icons Fallback"), true);
    assert.equal(result.replacements, 1);
});

// --- combined transforms ---

test("applies import path and token rename in one pass", () => {
    const source = `import "@fremtind/jokul/styles/core/core.scss";

.inverted {
    background: var(--jkl-color-background-action);
}

export default function Page() {
    return <section />;
}
`;

    const result = transformImportPaths(source, "/tmp/page.tsx");

    assert.equal(result.text.includes("styles/core/core"), false);
    assert.equal(result.text.includes("--jkl-color-background-action"), false);
    assert.equal(result.text.includes("styles/base.scss"), true);
    assert.equal(result.text.includes("--jkl-color-background-contrast"), true);
    assert.equal(result.replacements, 2);
});

// --- SCSS-only transforms ---

test("does not reorder font import in a .css file", () => {
    const source = `@import "@fremtind/jokul/styles/base.css";
@import "@fremtind/jokul/styles/theme/fonts";
`;

    const result = transformImportPaths(source, "/tmp/global.css");

    assert.equal(result.reordered, false);
});

// --- Tailwind color class renames ---

test("renames bg-background-action to bg-background-contrast", () => {
    const source = `<div className="bg-background-action text-white">Innhold</div>`;

    const result = transformImportPaths(source, "/tmp/component.tsx");

    assert.equal(result.text.includes("bg-background-action"), false);
    assert.equal(result.text.includes("bg-background-contrast"), true);
    assert.equal(result.replacements, 1);
});

test("renames text-text-inverted to text-text-on-contrast", () => {
    const source = `<p className="text-text-inverted">Tekst</p>`;

    const result = transformImportPaths(source, "/tmp/page.tsx");

    assert.equal(result.text.includes("text-text-inverted"), false);
    assert.equal(result.text.includes("text-text-on-contrast"), true);
});

test("renames text-text-on-action to text-text-on-contrast", () => {
    const source = `<button className="bg-background-contrast text-text-on-action">Knapp</button>`;

    const result = transformImportPaths(source, "/tmp/button.tsx");

    assert.equal(result.text.includes("text-text-on-action"), false);
    assert.equal(result.text.includes("text-text-on-contrast"), true);
});

test("renames bg-background-container-high and -low", () => {
    const source = `<div className="bg-background-container-high md:bg-background-container-low">
    Innhold
</div>`;

    const result = transformImportPaths(source, "/tmp/card.tsx");

    assert.equal(result.text.includes("bg-background-container-high"), false);
    assert.equal(result.text.includes("bg-background-container-low"), false);
    assert.equal(result.text.includes("bg-background-container"), true);
    assert.equal(result.replacements, 2);
});

test("does not rename bg-background-container (base Tailwind class)", () => {
    const source = `<div className="bg-background-container">Innhold</div>`;

    const result = transformImportPaths(source, "/tmp/card.tsx");

    assert.equal(result.text, source);
    assert.equal(result.changed, false);
});

test("renames bg-background-alert-info to bg-info-background-container", () => {
    const source = `<div className="bg-background-alert-info border-border-subdued">
    Info
</div>`;

    const result = transformImportPaths(source, "/tmp/alert.tsx");

    assert.equal(result.text.includes("bg-background-alert-info"), false);
    assert.equal(result.text.includes("bg-info-background-container"), true);
    assert.equal(result.replacements, 1);
});

test("renames all four alert color classes", () => {
    const source = `className="bg-background-alert-info bg-background-alert-warning bg-background-alert-error bg-background-alert-success"`;

    const result = transformImportPaths(source, "/tmp/alerts.tsx");

    assert.equal(result.text.includes("bg-background-alert-"), false);
    assert.equal(result.text.includes("bg-info-background-container"), true);
    assert.equal(result.text.includes("bg-warning-background-container"), true);
    assert.equal(result.text.includes("bg-error-background-container"), true);
    assert.equal(result.text.includes("bg-success-background-container"), true);
    assert.equal(result.replacements, 4);
});

test("renames Tailwind class with hover: modifier", () => {
    const source = `<div className="hover:bg-background-action focus:bg-background-action">X</div>`;

    const result = transformImportPaths(source, "/tmp/cmp.tsx");

    assert.equal(result.text.includes("bg-background-action"), false);
    assert.equal(result.text.includes("hover:bg-background-contrast"), true);
    assert.equal(result.text.includes("focus:bg-background-contrast"), true);
    assert.equal(result.replacements, 2);
});

test("renames Tailwind class with opacity modifier (/50)", () => {
    const source = `<div className="bg-background-action/50">X</div>`;

    const result = transformImportPaths(source, "/tmp/cmp.tsx");

    assert.equal(result.text.includes("bg-background-action/50"), false);
    assert.equal(result.text.includes("bg-background-contrast/50"), true);
    assert.equal(result.replacements, 1);
});

test("renames Tailwind class in @apply rule", () => {
    const source = `.btn {
    @apply bg-background-action text-text-inverted;
}
`;

    const result = transformImportPaths(source, "/tmp/styles.css");

    assert.equal(result.text.includes("bg-background-action"), false);
    assert.equal(result.text.includes("text-text-inverted"), false);
    assert.equal(result.text.includes("bg-background-contrast"), true);
    assert.equal(result.text.includes("text-text-on-contrast"), true);
    assert.equal(result.replacements, 2);
});

test("renames non-bg prefix: border-background-action", () => {
    const source = `<div className="border-background-action">X</div>`;

    const result = transformImportPaths(source, "/tmp/cmp.tsx");

    assert.equal(result.text.includes("border-background-action"), false);
    assert.equal(result.text.includes("border-background-contrast"), true);
});

test("does not rename longer Tailwind class that shares a prefix", () => {
    // bg-background-container-inverted-extra must not match bg-background-container-inverted
    const source = `<div className="bg-background-container-inverted-extra">X</div>`;

    const result = transformImportPaths(source, "/tmp/cmp.tsx");

    assert.equal(result.text, source);
    assert.equal(result.changed, false);
});

test("Tailwind renames are idempotent", () => {
    const source = `<div className="bg-background-contrast text-text-on-contrast">X</div>`;

    const result = transformImportPaths(source, "/tmp/cmp.tsx");

    assert.equal(result.changed, false);
    assert.equal(result.replacements, 0);
});

// --- Tailwind warnings ---

test("warns about bg-background-interactive Tailwind class", () => {
    const source = `<div className="bg-background-interactive hover:bg-background-interactive-hover">X</div>`;

    const result = transformImportPaths(source, "/tmp/cmp.tsx");

    assert.equal(result.warnings.some((w) => /background-interactive/.test(w)), true);
    assert.equal(result.warnings.filter((w) => /background-interactive/.test(w)).length, 1);
});

test("warns about border-border-separator Tailwind class", () => {
    const source = `<div className="border border-border-separator">X</div>`;

    const result = transformImportPaths(source, "/tmp/cmp.tsx");

    assert.equal(result.warnings.some((w) => /border-border-separator/.test(w) || /kantklasser/.test(w)), true);
});

// --- does not warn about valid 5.0 patterns ---

test("does not warn about valid 5.0 patterns", () => {
    const source = `@use "@fremtind/jokul/styles/jkl";

.title {
    @include jkl.text-style("heading-1");
    color: var(--jkl-color-text-default);
    background: var(--jkl-color-background-contrast);
}
`;

    const result = transformImportPaths(source, "/tmp/title.scss");

    assert.deepEqual(result.warnings, []);
});
