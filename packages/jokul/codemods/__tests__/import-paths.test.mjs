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
