const { execSync } = require("child_process");

// Bruker lerna changed for å få testet dependencytreet ved endringer
try {
    const cypressTests = execSync("pnpm --silent ci:changed")
        .toString()
        .split("\n")
        .filter((row) => {
            if (row === "") {
                return false;
            }
            // Bare pakker med -react postfiks har visuelle regresjonstester.
            if (!row.includes("-react")) {
                return false;
            }
            return true;
        })
        .map((row) => `${row}/**/*.spec.js`);

    console.log(cypressTests.join("\n"));
} catch (error) {
    console.error(JSON.stringify(error));
    console.error(error.message);
    process.exit(1);
}
