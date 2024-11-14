const { execSync } = require("child_process");
const { EOL } = require("os");

const args = getChangedComponents()
    .map(
        (component) =>
            `packages/jokul/src/components/${component}/integration/*.spec.ts`,
    )
    .join(" ");

execSync(`pnpm integration:update-screenshots -- ${args}`, {
    stdio: "inherit",
});

function getChangedComponents() {
    execSync("git fetch origin main --depth=1", { stdio: "inherit" });
    const diff = execSync("git diff --name-only origin/main").toString();

    return Array.from(
        new Set(
            diff
                .split(EOL)
                .filter((line) => !!line)
                .map((line) => line.split("/")[4]),
        ),
    );
}
