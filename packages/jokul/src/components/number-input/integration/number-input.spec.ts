import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { expect, test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.describe.configure({ mode: "serial" });

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "number-input",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    await helper?.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: ".jkl-number-input__input" });
});

test("renders allthethings correctly", async () => {
    await helper.open();

    await helper.checkProp("bool-prop-med-stepper");
    await helper.checkProp("bool-prop-med-hjelpetekst");
    await helper.checkProp("bool-prop-med-feil");

    await helper.snapshots({
        focusElement: '[data-direction="increment"]',
    });
});

test("updates the summary when typing a new value", async () => {
    await helper.open();

    const input = helper.page.getByLabel("Antall reisende");

    await input.fill("4");

    await expect(input).toHaveValue("4");
    await expect(helper.page.getByTestId("number-input-summary")).toContainText(
        "4 reisende",
    );
    await expect(helper.page.getByTestId("number-input-summary")).toContainText(
        "516 kr per måned",
    );
});

test("does not render stepper controls by default", async () => {
    await helper.open();

    await expect(
        helper.page.getByRole("button", { name: "Senk verdien" }),
    ).toHaveCount(0);
    await expect(
        helper.page.getByRole("button", { name: "Øk verdien" }),
    ).toHaveCount(0);
});

test("supports native keyboard stepping", async () => {
    await helper.open();

    const input = helper.page.getByLabel("Antall reisende");

    await input.focus();
    await input.press("ArrowUp");
    await input.press("ArrowDown");
    await input.press("ArrowDown");
    await input.press("ArrowDown");

    await expect(input).toHaveValue("1");
    await expect(helper.page.getByTestId("number-input-summary")).toContainText(
        "1 reisende",
    );
});

test("allows clearing the value and updates the summary", async () => {
    await helper.open();

    const input = helper.page.getByLabel("Antall reisende");

    await input.clear();

    await expect(input).toHaveValue("");
    await expect(helper.page.getByTestId("number-input-summary")).toContainText(
        "Ingen verdi valgt",
    );
    await expect(helper.page.getByTestId("number-input-summary")).toContainText(
        "0 kr per måned",
    );
});

test("uses native validation for values outside the allowed range", async () => {
    await helper.open();

    const input = helper.page.getByLabel("Antall reisende");

    await input.fill("5");

    await expect(input).toHaveValue("5");
    await expect(
        input.evaluate((element) =>
            (element as HTMLInputElement).checkValidity(),
        ),
    ).resolves.toBe(false);
});

test("keeps focus on the input when using the stepper", async () => {
    await helper.open();
    await helper.checkProp("bool-prop-med-stepper");

    const input = helper.page.getByLabel("Antall reisende");
    const increment = helper.page.getByRole("button", {
        name: "Øk verdien",
    });

    await increment.click();

    await expect(input).toBeFocused();
    await expect(input).toHaveValue("3");
});

test("disables the stepper controls when the field is disabled", async () => {
    await helper.open();
    await helper.checkProp("bool-prop-med-stepper");
    await helper.checkProp("bool-prop-disabled");

    await expect(
        helper.page.getByRole("button", { name: "Senk verdien" }),
    ).toBeDisabled();
    await expect(
        helper.page.getByRole("button", { name: "Øk verdien" }),
    ).toBeDisabled();
    await expect(helper.page.getByLabel("Antall reisende")).toBeDisabled();
});

test("disables the stepper controls when the field is read only", async () => {
    await helper.open();
    await helper.checkProp("bool-prop-med-stepper");
    await helper.checkProp("bool-prop-read-only");

    await expect(
        helper.page.getByRole("button", { name: "Senk verdien" }),
    ).toBeDisabled();
    await expect(
        helper.page.getByRole("button", { name: "Øk verdien" }),
    ).toBeDisabled();
    await expect(helper.page.getByLabel("Antall reisende")).toHaveJSProperty(
        "readOnly",
        true,
    );
});

test("shows help text and replaces it with the error message", async () => {
    await helper.open();
    await helper.checkProp("bool-prop-med-hjelpetekst");

    await expect(
        helper.page.getByText(
            "Du kan legge til opptil 4 personer på samme bestilling.",
        ),
    ).toBeVisible();

    await helper.checkProp("bool-prop-med-feil");

    await expect(
        helper.page.getByText("Du kan maksimalt velge 4 reisende."),
    ).toBeVisible();
    await expect(
        helper.page.getByText(
            "Du kan legge til opptil 4 personer på samme bestilling.",
        ),
    ).toHaveCount(0);
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();

    await helper.checkProp("bool-prop-med-stepper");
    await helper.checkProp("bool-prop-med-hjelpetekst");

    await axe();
});
