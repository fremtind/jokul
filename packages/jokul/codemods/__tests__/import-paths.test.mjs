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
import "@fremtind/jokul/styles/components/select/_index.scss";
`;

    const result = transformImportPaths(source, "/tmp/example.tsx");

    assert.equal(
        result.text.includes(
            '@fremtind/jokul/styles/components/beta/select/_index.scss',
        ),
        true,
    );
    assert.deepEqual(result.warnings, []);
});

test("warns when beta style imports are ambiguous", () => {
    const source = `
import "@fremtind/jokul/styles/components/nav-link";
`;

    const result = transformImportPaths(source, "/tmp/example.scss");

    assert.equal(result.changed, false);
    assert.equal(result.warnings.length, 1);
});

test("removes redundant webfonts.css imports when base or components css is also imported", () => {
    const source = `import "@fremtind/jokul/styles/styles.css";
import "@fremtind/jokul/styles/core/core.css";
import "@fremtind/jokul/styles/fonts/webfonts.css";
`;

    const result = transformImportPaths(source, "/tmp/main.tsx");

    assert.equal(
        result.text.includes("@fremtind/jokul/styles/fonts/webfonts.css"),
        false,
    );
    assert.equal(
        result.text.includes('import "@fremtind/jokul/styles/components.css";'),
        true,
    );
    assert.equal(
        result.text.includes('import "@fremtind/jokul/styles/base.css";'),
        true,
    );
    assert.deepEqual(result.warnings, []);
});

test("removes minified webfonts.css imports as well", () => {
    const source = `import "@fremtind/jokul/styles/core/core.min.css";
import "@fremtind/jokul/styles/fonts/webfonts.min.css";
`;

    const result = transformImportPaths(source, "/tmp/main.ts");

    assert.equal(
        result.text.includes("webfonts"),
        false,
    );
    assert.equal(
        result.text.includes('import "@fremtind/jokul/styles/base.min.css";'),
        true,
    );
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

test("warns about removed sass color variables", () => {
    const source = `@use "@fremtind/jokul/styles/jkl";

.banner {
    background: jkl.$color-granitt;
    color: jkl.$color-snohvit;
}
`;

    const result = transformImportPaths(source, "/tmp/banner.scss");

    assert.equal(
        result.warnings.some((warning) =>
            /jkl\.\$color-\*/.test(warning),
        ),
        true,
    );
    // Bare én advarsel per mønster, selv om det er flere forekomster
    assert.equal(
        result.warnings.filter((warning) =>
            /jkl\.\$color-\*/.test(warning),
        ).length,
        1,
    );
});

test("warns about removed light/dark mode mixins", () => {
    const source = `@use "@fremtind/jokul/styles/jkl";

@include jkl.light-mode-variables {
    --min-farge: jkl.$color-granitt;
}
@include jkl.dark-mode-variables {
    --min-farge: jkl.$color-snohvit;
}
`;

    const result = transformImportPaths(source, "/tmp/theme.scss");

    assert.equal(
        result.warnings.some((warning) =>
            /light-mode-variables/.test(warning),
        ),
        true,
    );
});

test("warns about deprecated text-style names", () => {
    const source = `@use "@fremtind/jokul/styles/jkl";

.lead {
    @include jkl.text-style("body");
}

.fineprint {
    @include jkl.text-style("small");
}
`;

    const result = transformImportPaths(source, "/tmp/typography.scss");

    assert.equal(
        result.warnings.some((warning) =>
            /paragraph-large\/medium\/small/.test(warning),
        ),
        true,
    );
});

test("does not warn about valid 5.0 patterns", () => {
    const source = `@use "@fremtind/jokul/styles/jkl";

.title {
    @include jkl.text-style("heading-1");
    color: var(--jkl-color-text-default);
}
`;

    const result = transformImportPaths(source, "/tmp/title.scss");

    assert.deepEqual(result.warnings, []);
});
