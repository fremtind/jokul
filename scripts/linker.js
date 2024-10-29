// Hjelpeverktøy for å teste Jøkul-kode i eget prosjekt.
// Dette scriptet går igjennom alle pakker på disk og gjør de tilgjengelig
// for npm/yarn link. Se
// https://jokul.fremtind.no/guider/hvordan-teste-endringer-eget-prosjekt
// for nærmere forklaring.

const { execSync } = require("child_process");
const fs = require("fs/promises");
const path = require("path");
const prompt = require("prompt");

const runLinker = async () => {
    let projectPath = process.argv[2];

    if (!projectPath) {
        prompt.start();

        const { projectPath } = await prompt.get({
            properties: {
                projectPath: {
                    description:
                        "Hva er filstien til prosjektet hvor du vil teste?",
                    message:
                        "Kan være absolutt (starte med /) eller relativ (starte med ../).",
                    required: true,
                },
            },
        });
    }

    let resolvedPath = null;
    if (path.isAbsolute(projectPath)) {
        resolvedPath = projectPath;
    } else {
        resolvedPath = path.resolve(process.cwd(), projectPath);
    }

    const projectDirFiles = await fs.readdir(resolvedPath, "utf-8");
    let tool = null;

    const isYarn = projectDirFiles.includes("yarn.lock");
    if (isYarn) {
        tool = "yarn";
        console.log("Fant yarn.lock. Fortsetter med yarn.");
    }

    const isPnpm = projectDirFiles.includes("pnpm-lock.yaml");
    if (isPnpm) {
        tool = "pnpm";
        console.log("Fant pnpm-lock.yaml. Fortsetter med pnpm.");
    }

    const isNpm = projectDirFiles.includes("package-lock.json");
    if (isNpm) {
        tool = "npm";
        console.log("Fant package-lock.json. Fortsetter med npm.");
    }

    if (!isPnpm && !isYarn && !isNpm) {
        throw new Error(
            `Fant hverken pnpm-lock.yaml, yarn.lock eller package-lock.json i ${resolvedPath}. Linker støtter bare pnpm, yarn og npm.`,
        );
    }

    if ([isYarn, isPnpm, isNpm].filter((isTool) => isTool).length > 1) {
        throw new Error(
            "Fant flere lockfiler i samme prosjekt. Slett den du ikke bruker.",
        );
    }

    const packagesDir = await fs.readdir(
        path.join(__dirname, "..", "packages"),
        {
            encoding: "utf-8",
            withFileTypes: true,
        },
    );

    if (isPnpm) {
        console.log("Linker...");
    } else {
        console.log("Gjør klar pakker for linking...");
    }

    const packageNames = [];
    for (const entry of packagesDir) {
        if (!entry.isDirectory()) {
            continue;
        }
        if (entry.name === ".DS_Store") {
            continue;
        }

        const packagePath = path.join(__dirname, "..", "packages", entry.name);
        try {
            const packageJson = await fs.readFile(
                path.join(packagePath, "package.json"),
                "utf-8",
            );
            const parsed = JSON.parse(packageJson);
            packageNames.push(parsed.name);
        } catch {
            // Ingen package.json
            continue;
        }

        if (isPnpm) {
            execSync(`pnpm link ${packagePath}`, {
                cwd: resolvedPath,
                windowsHide: true,
            });
        } else {
            execSync(`${tool} link`, {
                cwd: path.join(__dirname, "..", "packages", entry.name),
                windowsHide: true,
            });
        }
        console.log(`  - ${entry.name}`);
    }

    if (packageNames.length === 0) {
        throw new Error("Fant ingen pakker å linke. Her har noe gått galt.");
    }

    const allPackageNames = packageNames
        .reduce((acc, current) => `${acc} ${current}`, "")
        .trim();

    if (!isPnpm) {
        console.log();
        console.log(`Linker pakkene ${allPackageNames} i ${projectPath}`);
        execSync(`${tool} link ${allPackageNames}`, {
            cwd: resolvedPath,
            windowsHide: true,
        });
    }

    console.log();
    console.log(`✅ Jøkul-pakker klar for test i ${projectPath}`);
    console.log(
        `For å gå tilbake til originale pakker kan du kjøre ${tool} install`,
    );
};

runLinker();
