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
    prompt.start();

    const { projectPath } = await prompt.get({
        properties: {
            projectPath: {
                description: "Hva er filstien til prosjektet hvor du vil teste?",
                message: "Kan være absolutt (starte med /) eller relativ (starte med ../).",
                required: true,
            },
        },
    });
    let resolvedPath = null;
    if (path.isAbsolute(projectPath)) {
        resolvedPath = projectPath;
    } else {
        resolvedPath = path.resolve(process.cwd(), projectPath);
    }

    const projectDirFiles = await fs.readdir(resolvedPath, "utf-8");
    const isYarn = projectDirFiles.includes("yarn.lock");
    if (isYarn) {
        console.log("Fant yarn.lock. Fortsetter med yarn.");
    }

    const isNpm = projectDirFiles.includes("package-lock.json");
    if (isNpm) {
        console.log("Fant package-lock.json. Fortsetter med npm.");
    }

    if (!isYarn && !isNpm) {
        throw new Error(
            `Fant hverken yarn.lock eller package-lock.json i ${resolvedPath}. Linker støtter bare yarn og npm.`,
        );
    }

    const tool = isYarn ? "yarn" : "npm";

    const packagesDir = await fs.readdir(path.join(__dirname, "..", "packages"), {
        encoding: "utf-8",
        withFileTypes: true,
    });

    console.log("Gjør klar pakker for linking...");

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
            const packageJson = await fs.readFile(path.join(packagePath, "package.json"), "utf-8");
            const parsed = JSON.parse(packageJson);
            packageNames.push(parsed.name);
        } catch {
            // Ingen package.json
            continue;
        }

        execSync(`${tool} link`, { cwd: path.join(__dirname, "..", "packages", entry.name), windowsHide: true });
        console.log(`  - ${entry.name}`);
    }

    if (packageNames.length === 0) {
        throw new Error("Fant ingen pakker å linke. Her har noe gått galt.");
    }

    const allPackageNames = packageNames.reduce((acc, current) => `${acc} ${current}`, "").trim();

    console.log();
    console.log(`Linker pakkene ${allPackageNames} i ${projectPath}`);
    execSync(`${tool} link ${allPackageNames}`, { cwd: resolvedPath, windowsHide: true });

    console.log();
    console.log(`✅ Jøkul-pakker klar for test i ${projectPath}`);
    console.log(`For å gå tilbake til originale pakker kan du kjøre ${tool} install`);
};

runLinker();
