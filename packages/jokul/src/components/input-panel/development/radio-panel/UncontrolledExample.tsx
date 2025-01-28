import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../../button/Button.js";
import { Flex } from "../../../flex/index.js";
import { InfoTag } from "../../../tag/index.js";
import { RadioPanel } from "../../RadioPanel.js";
import { RadioPanelGroup } from "../../RadioPanelGroup.js";

export const knobs: ExampleKnobsProps = {
    boolProps: ["Med feilmelding"],
};

type Inputs = {
    season: string;
};

export const UncontrolledExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const { register, handleSubmit, watch } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = ({ season }) =>
        console.log(`Submitted value: ${season}`);

    console.log(`Selected value: ${watch("season")}`);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
                asChild={true}
                direction="column"
                gap={32}
                style={{ width: "100%" }}
            >
                <RadioPanelGroup
                    legend="Velg sesong"
                    errorLabel={
                        boolValues?.["Med feilmelding"]
                            ? "Nå har du gjort noe galt"
                            : undefined
                    }
                >
                    <RadioPanel
                        {...register("season")}
                        value={"winter"}
                        label="Vinter"
                        defaultChecked={true}
                        extraLabel={
                            <Flex
                                as="span"
                                alignItems="center"
                                className="input-panel-example__custom-label input-panel-example__custom-label--small"
                            >
                                Den kalde fine tiden
                                <InfoTag className="input-panel-example__season-tag">
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
                        {...register("season")}
                        value={"spring"}
                        label="Vår"
                        extraLabel={
                            <Flex
                                as="span"
                                alignItems="center"
                                className="input-panel-example__custom-label input-panel-example__custom-label--small"
                            >
                                Jeg velger meg april
                            </Flex>
                        }
                    />
                    <RadioPanel
                        {...register("season")}
                        value={"summer"}
                        label="Sommer"
                        extraLabel={
                            <Flex
                                as="span"
                                alignItems="center"
                                className="input-panel-example__custom-label input-panel-example__custom-label--small"
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
                        {...register("season")}
                        value={"autumn"}
                        label="Høst"
                        extraLabel={
                            <Flex
                                as="span"
                                alignItems="center"
                                className="input-panel-example__custom-label input-panel-example__custom-label--small"
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
                </RadioPanelGroup>
            </Flex>
            <PrimaryButton style={{ marginTop: 32 }}>Send inn</PrimaryButton>
        </form>
    );
};
