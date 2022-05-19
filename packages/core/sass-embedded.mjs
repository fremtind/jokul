import sass from "sass-embedded";
import path from "path";
import globFs from "glob-fs";
import { pathToFileURL } from "url";
import { writeFile } from "fs";

const glob = globFs({ gitignore: true });

const sassOptions = {
    importers: [
        {
            // An importer that redirects relative URLs starting with "~" to
            // the monorepo `node_modules`.
            findFileUrl(url) {
                if (!url.startsWith("~")) return null;
                const base = path.join(/* __dirname,  */ "node_modules", "/"); // base must end in /, otherwise node_modules/ is discarded from the URL.
                const resolved = new URL(url.substring(1), pathToFileURL(base));
                return resolved;
            },
        },
    ],
    sourceMap: true,
};

glob.readdir("**/*.scss", (_, files) =>
    files.forEach(async (file) => {
        sass.compileAsync(file, sassOptions).then((output) =>
            writeFile(`${file.replace(".scss", "")}.css`, output.css, () => null),
        );
        sass.compileAsync(file, { ...sassOptions, style: "compressed" }).then((output) =>
            writeFile(`${file.replace(".scss", "")}.min.css`, output.css, () => null),
        );
    }),
);
