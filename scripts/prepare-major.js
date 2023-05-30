const { execSync } = require("child_process");
const fs = require("fs/promises");
const path = require("path");

async function bumpMajor(packageJsonPath) {
    const packageJsonString = await fs.readFile(packageJsonPath, "utf-8");
    const packageJson = JSON.parse(packageJsonString);

    const currentMajor = packageJson.version.split(".")[0];
    const nextMajor = parseInt(currentMajor, 10) + 1;
    const nextVersion = `${nextMajor}.0.0-alpha.0`;

    packageJson.version = nextVersion;

    // Bump Jøkul-pakker i dependencies også
    if (packageJson.dependencies) {
        for (const [name, version] of Object.entries(packageJson.dependencies)) {
            if (name.includes("@fremtind/")) {
                const versionNumber = version.replace("^", "").replace("~", "");
                const currentMajor = versionNumber.split(".")[0];
                const nextMajor = parseInt(currentMajor, 10) + 1;
                const nextVersion = `^${nextMajor}.0.0-alpha.0`;
                packageJson.dependencies[name] = nextVersion;
            }
        }
    }
    if (packageJson.devDependencies) {
        for (const [name, version] of Object.entries(packageJson.devDependencies)) {
            if (name.includes("@fremtind/")) {
                const versionNumber = version.replace("^", "").replace("~", "");
                const currentMajor = versionNumber.split(".")[0];
                const nextMajor = parseInt(currentMajor, 10) + 1;
                const nextVersion = `^${nextMajor}.0.0-alpha.0`;
                packageJson.devDependencies[name] = nextVersion;
            }
        }
    }

    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4));
}

async function prepareMajor() {
    const packagesDir = await fs.readdir(path.join(__dirname, "..", "packages"), {
        encoding: "utf-8",
        withFileTypes: true,
    });

    for (const entry of packagesDir) {
        if (!entry.isDirectory()) {
            continue;
        }
        if (entry.name === ".DS_Store") {
            continue;
        }

        const packagePath = path.join(__dirname, "..", "packages", entry.name);
        try {
            await bumpMajor(path.join(packagePath, "package.json"));
        } catch (e) {
            console.warn(e);
        }
    }

    await bumpMajor(path.join(__dirname, "..", "portal", "package.json"));
    await bumpMajor(path.join(__dirname, "..", "package.json"));

    console.log("Oppdaterte versjonsnummer i alle pakkene, regenererer lockfil...");
    execSync("pnpm install", { cwd: path.join(__dirname, ".."), windowsHide: true });
    console.log("✅ done");
}

prepareMajor();
