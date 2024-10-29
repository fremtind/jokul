import React, { FC } from "react";
import {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../../../../utils/dev-example/index.js";
import { Flex } from "../../flex/index.js";
import { FieldGroup } from "../../input-group/index.js";
import { InfoTag } from "../../tag/index.js";
import { RadioPanel } from "../RadioPanel.js";

export const knobs: ExampleKnobsProps = {
    boolProps: ["Med feilmelding"],
};

export const UncontrolledExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    return (
        <Flex
            asChild={true}
            direction="column"
            gap={32}
            style={{ width: "100%" }}
        >
            <FieldGroup
                legend="Velg sesong"
                defaultValue={"summer"}
                errorLabel={
                    boolValues?.["Med feilmelding"]
                        ? "Nå har du gjort noe galt"
                        : undefined
                }
            >
                <RadioPanel
                    name="season"
                    value={"winter"}
                    label="Vinter"
                    extraLabel={
                        <Flex
                            as="span"
                            alignItems="center"
                            className="radio-panel-example__custom-label radio-panel-example__custom-label--small"
                        >
                            Den kalde fine tiden
                            <InfoTag className="radio-panel-example__season-tag">
                                Anbefalt
                            </InfoTag>
                        </Flex>
                    }
                >
                    <div>
                        <p
                            style={{
                                fontFamily: "monospace",
                            }}
                        >
                            Hvit stillhet legger teppet ned, <br />
                            Snøen danser stille fred. <br />
                            Frostrøyk henger i klar blå luft,
                            <br />
                            Vinden hvisker kald som duft.
                        </p>
                    </div>
                </RadioPanel>
                <RadioPanel
                    name="season"
                    value={"spring"}
                    label="Vår"
                    extraLabel={
                        <Flex
                            as="span"
                            alignItems="center"
                            className="radio-panel-example__custom-label radio-panel-example__custom-label--small"
                        >
                            Jeg velger meg april
                        </Flex>
                    }
                />
                <RadioPanel
                    name="season"
                    value={"summer"}
                    label="Sommer"
                    extraLabel={
                        <Flex
                            as="span"
                            alignItems="center"
                            className="radio-panel-example__custom-label radio-panel-example__custom-label--small"
                        >
                            Sol og regn og latter og sang
                        </Flex>
                    }
                >
                    <div>
                        <p
                            style={{
                                fontFamily: "monospace",
                            }}
                        >
                            Solens varme, dagen lang, <br />
                            Blomster åpner fargerang. <br />
                            Bølger hvisker mot en strand, <br />
                            Sommernatten, lys og brand.
                        </p>
                    </div>
                </RadioPanel>
                <RadioPanel
                    name="season"
                    value={"autumn"}
                    label="Høst"
                    extraLabel={
                        <Flex
                            as="span"
                            alignItems="center"
                            className="radio-panel-example__custom-label radio-panel-example__custom-label--small"
                        >
                            Vått, trist, kaldt og mørkt
                        </Flex>
                    }
                >
                    <div>
                        <p
                            style={{
                                fontFamily: "monospace",
                            }}
                        >
                            Løvet faller, dødt og grått, <br />
                            Alt som levde, råtner smått. <br />
                            Vinden river, kulden biter, <br />
                            Verden visner, alt forvitrer.
                        </p>
                    </div>
                </RadioPanel>
            </FieldGroup>
        </Flex>
    );
};
