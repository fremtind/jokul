import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../utils/dev-example/index.js";
import { Flex } from "../../flex/index.js";
import { FieldGroup } from "../../input-group/index.js";
import { SuccessTag } from "../../tag/index.js";
import { RadioPanel } from "../RadioPanel.js";

export const knobs: ExampleKnobsProps = {};

export const ControlledExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [checkedValue, setCheckedValue] = useState("");

    return (
        <Flex asChild={true} direction="column" gap={32} style={{ maxWidth: 580, width: "100%" }}>
            <FieldGroup
                legend="Velg dekning"
                errorLabel={boolValues?.["Med feilmelding"] ? "Nå har du gjort noe galt" : undefined}
            >
                <RadioPanel
                    name="dekning"
                    value={"toppkasko"}
                    checked={checkedValue === "toppkasko"}
                    onChange={() => setCheckedValue("toppkasko")}
                    label="Toppkasko"
                    extraLabel={
                        <Flex
                            as="span"
                            alignItems="center"
                            justifyContent="flex-end"
                            className="radio-panel-example__custom-label radio-panel-example__custom-label--bold"
                        >
                            500 kr/mnd
                        </Flex>
                    }
                >
                    Passer for biler av høy verdi, og spesielt om den er nyere enn 10 år. Dekker maskinskader.
                </RadioPanel>
                <RadioPanel
                    name="dekning"
                    value={"kasko"}
                    checked={checkedValue === "kasko"}
                    onChange={() => setCheckedValue("kasko")}
                    label="Kasko"
                    alwaysOpen={true}
                    extraLabel={
                        <Flex
                            as="span"
                            alignItems="center"
                            justifyContent="flex-end"
                            gap={24}
                            className="radio-panel-example__custom-label radio-panel-example__custom-label--bold"
                        >
                            <SuccessTag>Anbefalt</SuccessTag>
                            300 kr/mnd
                        </Flex>
                    }
                >
                    En forsikring som passer de fleste biler. Dekker det meste av skader, også de du selv er ansvarlig
                    for. Inkluderer Minikasko og Ansvar.
                </RadioPanel>
                <RadioPanel
                    name="dekning"
                    value={"minikasko"}
                    checked={checkedValue === "minikasko"}
                    onChange={() => setCheckedValue("minikasko")}
                    label="Minikasko"
                    extraLabel={
                        <Flex
                            as="span"
                            alignItems="center"
                            justifyContent="flex-end"
                            className="radio-panel-example__custom-label radio-panel-example__custom-label--bold"
                        >
                            200 kr/mnd
                        </Flex>
                    }
                >
                    Passer for eldre biler med en verdi under 50 000 kr. Dekker brann, tyveri og glasskader i tillegg
                    til det lovpålagte.
                </RadioPanel>
                <RadioPanel
                    name="dekning"
                    value={"ansvar"}
                    checked={checkedValue === "ansvar"}
                    onChange={() => setCheckedValue("ansvar")}
                    label="Ansvar"
                    extraLabel={
                        <Flex
                            as="span"
                            alignItems="center"
                            justifyContent="flex-end"
                            className="radio-panel-example__custom-label radio-panel-example__custom-label--bold"
                        >
                            100 kr/mnd
                        </Flex>
                    }
                >
                    Lovpålagt når du eier et kjøretøy som brukes på veien.
                </RadioPanel>
            </FieldGroup>
        </Flex>
    );
};
