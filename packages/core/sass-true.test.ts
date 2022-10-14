/**
 * @jest-environment node
 */
import path from "path";
import { pathToFileURL } from "url";
import glob from "glob";
import sass from "sass-embedded";
import * as sassTrue from "sass-true";

const importers = [
    {
        // An importer that redirects relative URLs starting with "~" to
        // the monorepo `node_modules`.
        findFileUrl(url: string) {
            if (!url.startsWith("~")) return null;
            const base = path.join(__dirname, "../../../", "node_modules", "/"); // base must end in /, otherwise node_modules/ is discarded from the URL.
            const resolved = new URL(url.substring(1), pathToFileURL(base));
            return resolved;
        },
    },
];

describe("Sass", () => {
    const sassFiles = glob.sync(path.resolve(process.cwd(), "**/*.test.scss"));
    expect(sassFiles.length).toBeGreaterThan(0);
    sassFiles.forEach((file) => sassTrue.runSass({ sass, file, importers }, { describe, it }));
});
