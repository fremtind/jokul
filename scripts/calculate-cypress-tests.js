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
    // Hvis lerna ikke finner noen endringer betyr det muligens en endring i lockfila.
    // Kjør en full regresjonstest ved oppdatering av avhengigheter.
    console.log("packages/**/*-react/**/*.spec.js");
}
