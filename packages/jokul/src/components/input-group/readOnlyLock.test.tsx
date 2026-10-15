import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Checkbox } from "../checkbox/index.js";
import { Combobox } from "../combobox/index.js";
import { DateInput } from "../date-input/index.js";
import { FileInput } from "../file-input/index.js";
import { NumberInput } from "../number-input/index.js";
import { RadioButton } from "../radio-button/index.js";
import { Search } from "../search/index.js";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "../segmented-control/index.js";
import { Select } from "../select/index.js";
import { TextArea } from "../text-area/index.js";
import { TextInput } from "../text-input/index.js";
import { ToggleSwitch } from "../toggle-switch/index.js";
import { PopupTip } from "../tooltip/index.js";
import { FieldGroup } from "./FieldGroup.js";

// Holder selektoren i `styles/_labels.scss` i sjakk. `:read-only` matcher alt som ikke
// er redigerbart – radioer, avkrysningsbokser, <button>, <select> og filfelt – så lista
// over kontroller må være eksplisitt. Uten denne testen ville et nytt felt lett kunne
// få lås ved uhell.
const LOCK_HOOK =
    ".jkl-input-group:has(:is(.jkl-text-input__input, .jkl-text-area__text-area, .jkl-number-input__input, .jkl-date-input__input, .jkl-combobox__search-input, input[type='search']):read-only:not(:disabled))";

// jsdom gir feil svar for `querySelectorAll` med `:has(:is(...))`, men riktig for
// `matches` på enkeltelementer, så tilstanden sjekkes per input-gruppe.
const lockedGroups = (container: HTMLElement) =>
    Array.from(container.querySelectorAll(".jkl-input-group")).filter((group) =>
        group.matches(LOCK_HOOK),
    );

type FieldProps = { disabled?: boolean; readOnly?: boolean };

const forsikringer = [{ label: "Reise", value: "reise" }];

const supportsReadOnly: Array<[string, (props: FieldProps) => JSX.Element]> = [
    ["TextInput", (props) => <TextInput label="TextInput" {...props} />],
    ["TextArea", (props) => <TextArea label="TextArea" {...props} />],
    ["NumberInput", (props) => <NumberInput label="NumberInput" {...props} />],
    ["DateInput", (props) => <DateInput label="DateInput" {...props} />],
    [
        "Combobox",
        (props) => (
            <Combobox
                label="Combobox"
                name="combobox"
                items={forsikringer}
                onChange={() => undefined}
                {...props}
            />
        ),
    ],
    [
        "Search",
        (props) => (
            <Search label="Search" labelProps={{ srOnly: false }} {...props} />
        ),
    ],
];

const neverLocked: Array<[string, (props: FieldProps) => JSX.Element]> = [
    ["Select", (props) => <Select label="Select" items={["Ja"]} {...props} />],
    [
        "FileInput",
        (props) => (
            <FileInput
                legend="FileInput"
                value={[]}
                onChange={() => undefined}
                {...props}
            />
        ),
    ],
    [
        "FieldGroup",
        (props) => (
            <FieldGroup legend="FieldGroup" {...props}>
                <Checkbox name="varsel" value="sms">
                    SMS
                </Checkbox>
            </FieldGroup>
        ),
    ],
    [
        "Checkbox",
        (props) => (
            <Checkbox name="samtykke" value="ja" {...props}>
                Checkbox
            </Checkbox>
        ),
    ],
    [
        "RadioButton",
        (props) => (
            <RadioButton name="kontakt" value="sms" {...props}>
                RadioButton
            </RadioButton>
        ),
    ],
    ["ToggleSwitch", (props) => <ToggleSwitch {...props}>På</ToggleSwitch>],
    [
        "SegmentedControl",
        (props) => (
            <SegmentedControl legend="SegmentedControl">
                <SegmentedControlButton name="dekning" value="ja" {...props}>
                    Ja
                </SegmentedControlButton>
            </SegmentedControl>
        ),
    ],
];

describe("låseikonet i read-only-felter", () => {
    describe.each(supportsReadOnly)("%s", (_name, Field) => {
        it("låses når feltet er readOnly", () => {
            const { container } = render(Field({ readOnly: true }));
            expect(lockedGroups(container)).toHaveLength(1);
        });

        it.each([
            ["normal", {}],
            ["disabled", { disabled: true }],
            ["disabled og readOnly", { disabled: true, readOnly: true }],
        ])("låses ikke i tilstanden %s", (_tilstand, props) => {
            const { container } = render(Field(props));
            expect(lockedGroups(container)).toHaveLength(0);
        });
    });

    describe.each(neverLocked)("%s", (_name, Field) => {
        it.each([
            ["normal", {}],
            ["readOnly", { readOnly: true }],
            ["disabled", { disabled: true }],
        ])("låses ikke i tilstanden %s", (_tilstand, props) => {
            const { container } = render(Field(props));
            expect(lockedGroups(container)).toHaveLength(0);
        });
    });

    it("henger låsen på label-teksten når feltet har tooltip", () => {
        const { container } = render(
            <TextInput
                label="Med tooltip"
                tooltip={<PopupTip content="Hjelp" />}
                readOnly
            />,
        );
        const [group] = lockedGroups(container);

        expect(
            group.querySelectorAll(":scope > .jkl-label > .jkl-label__text"),
        ).toHaveLength(1);
    });

    it("henger låsen på labelen selv når feltet ikke har tooltip", () => {
        const { container } = render(
            <TextInput label="Uten tooltip" readOnly />,
        );
        const [group] = lockedGroups(container);

        expect(
            group.querySelectorAll(":scope > .jkl-label > .jkl-label__text"),
        ).toHaveLength(0);
        expect(
            group.querySelector(
                ":scope > .jkl-label:not(:has(> .jkl-label__text))",
            ),
        ).not.toBeNull();
    });

    it("skjuler låsen sammen med labelen når labelen er skjult", () => {
        const { container } = render(<Search label="Søk" readOnly />);
        const [group] = lockedGroups(container);

        expect(group.querySelector(":scope > .jkl-label")).toHaveClass(
            "jkl-label--sr-only",
        );
    });

    it("låser DateInput uten å låse kalenderens egne felter", () => {
        const { container } = render(<DateInput label="DateInput" readOnly />);
        const [group] = lockedGroups(container);

        expect(group.querySelector(":scope > .jkl-label")).toHaveTextContent(
            "DateInput",
        );
    });
});
