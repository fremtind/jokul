import "./index.scss";
import { useRef, useState } from "react";
import * as React from "react";
import { render } from "react-dom";
import { getValuePair, breakpoints, initTabListener } from "@fremtind/jkl-core";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import {
    ErrorAlertMessage,
    InfoAlertMessage,
    SuccessAlertMessage,
    WarningAlertMessage,
} from "@fremtind/jkl-alert-message-react";
import { Card } from "@fremtind/jkl-card-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import { DividerLine } from "@fremtind/jkl-divider-line-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { Hamburger } from "@fremtind/jkl-hamburger-react";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { ListItem, OrderedList, UnorderedList } from "@fremtind/jkl-list-react";
import { Loader } from "@fremtind/jkl-loader-react";
import { Logo } from "@fremtind/jkl-logo-react";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "@fremtind/jkl-message-box-react";
import { ProgressBar } from "@fremtind/jkl-progress-bar-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { Select, NativeSelect } from "@fremtind/jkl-select-react";
import { Table } from "@fremtind/jkl-table-react";
import { TextInput, TextArea } from "@fremtind/jkl-text-input-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";

import {
    initialScreenState,
    useAnimatedHeight,
    useClickOutside,
    useFocusOutside,
    useIntersectionObserver,
    useKeyListener,
    useMutationObserver,
    useScreen,
    useScrollIntoView,
} from "@fremtind/jkl-react-hooks";
import {
    isValidChassisnummer,
    isValidEpost,
    isValidRegistreringsnummer,
    isValidTelefonnummer,
} from "@fremtind/jkl-validators-util";

initTabListener();
getValuePair("hes");
console.log(breakpoints);
console.log(initialScreenState);

function App() {
    isValidChassisnummer("");
    isValidEpost("");
    isValidRegistreringsnummer("");
    isValidTelefonnummer("");
    const refObject = useRef(null);
    useAnimatedHeight(false);
    useClickOutside();
    useFocusOutside();
    useIntersectionObserver(refObject, () => undefined);
    useKeyListener();
    useMutationObserver(refObject, () => undefined);
    useScreen();
    useScrollIntoView({ ref: refObject });

    const [radioButtonValue, setRadioButtonValue] = useState("A");
    const [toggleSwitchState, setToggleSwitchState] = useState(true);
    return (
        <div>
            <section>
                <h1 className="jkl-heading-medium">Buttons</h1>
                <PrimaryButton>Click Me</PrimaryButton>
                <SecondaryButton>Click Me</SecondaryButton>
                <TertiaryButton>Click Me</TertiaryButton>
            </section>
            <section>
                <h1>Accordion</h1>
                <Accordion>
                    <AccordionItem title={"Item 1"}>Item 1 content</AccordionItem>
                    <AccordionItem title={"Item 2"}>Item 2 content</AccordionItem>
                </Accordion>
            </section>
            <section>
                <h1>Alert Messages</h1>
                <InfoAlertMessage className="jkl-component-spacing--small-bottom">Info</InfoAlertMessage>
                <SuccessAlertMessage className="jkl-component-spacing--small-bottom">Success</SuccessAlertMessage>
                <WarningAlertMessage className="jkl-component-spacing--small-bottom">Warning</WarningAlertMessage>
                <ErrorAlertMessage className="jkl-component-spacing--small-bottom">Error</ErrorAlertMessage>
            </section>
            <section>
                <h1>Card</h1>
                <Card title="A Card">Card content</Card>
            </section>
            <section>
                <h1>Checkbox</h1>
                <Checkbox name={"Checkbox 1"} value={"true"}>
                    A checkbox 1
                </Checkbox>
                <Checkbox name={"Checkbox 2"} value={"true"}>
                    A checkbox 2
                </Checkbox>
            </section>

            <section>
                <h1>Datepicker</h1>
                <DatePicker />
            </section>

            <section>
                <h1>Divider line</h1>
                <DividerLine />
            </section>

            <section>
                <h1>Field Groups</h1>
                <FieldGroup legend={"Label"}>Text</FieldGroup>
            </section>

            <section>
                <h1>Hamburger</h1>
                <Hamburger />
            </section>

            <section>
                <h1>Icon button</h1>
                <IconButton buttonTitle={"Title"} />
            </section>

            <section>
                <h1>Lists</h1>
                <OrderedList>
                    <ListItem>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                </OrderedList>
                <UnorderedList>
                    <ListItem>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                </UnorderedList>
            </section>

            <section>
                <h1>Loader</h1>
                <Loader textDescription="Loading" />
            </section>

            <section>
                <h1>Logo</h1>
                <Logo />
            </section>

            <section>
                <h1>Messages</h1>
                <ErrorMessage className="jkl-component-spacing--small-bottom" title={"Error Title"}>
                    ErrorMessage
                </ErrorMessage>
                <InfoMessage className="jkl-component-spacing--small-bottom" title={"Info Title"}>
                    InfoMessage
                </InfoMessage>
                <SuccessMessage className="jkl-component-spacing--small-bottom" title={"Success Title"}>
                    SuccessMessage
                </SuccessMessage>
                <WarningMessage className="jkl-component-spacing--small-bottom" title={"Warning Title"}>
                    WarningMessage
                </WarningMessage>
            </section>

            <section>
                <h1>Progress bar</h1>
                <ProgressBar progress={{ current: 25, total: 100 }} />
            </section>

            <section>
                <h1>Radio Button</h1>
                <RadioButtons
                    selectedValue={radioButtonValue}
                    name={"asd"}
                    legend={"leg"}
                    choices={["A", "B"]}
                    onChange={(event) => setRadioButtonValue(event.target.value)}
                />
            </section>
            <section>
                <h1>Selects</h1>
                <Select label={"Select"} items={["Item 1", "Item 2"]} />
                <NativeSelect label={"Native Select"} items={["Item 1", "Item 2"]} />
            </section>

            <section>
                <h1>Table</h1>
                <Table columns={["Column 1", "Column 2"]} rows={[["Row data 1", "Row data 2"]]} />
            </section>

            <section>
                <h1>Text inputs</h1>
                <TextInput label={"Input 1"} />
                <TextArea label={"Input 2"} />
            </section>

            <section>
                <h1>Toggle Switch</h1>
                <ToggleSwitch pressed={toggleSwitchState} onClick={() => setToggleSwitchState(!toggleSwitchState)}>
                    asd
                </ToggleSwitch>
            </section>
        </div>
    );
}

render(<App />, document.getElementById("react-app"));
