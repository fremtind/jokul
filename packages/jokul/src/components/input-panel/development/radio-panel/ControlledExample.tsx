import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../../button/Button.js";
import { Flex } from "../../../flex/index.js";
import { SuccessTag } from "../../../tag/index.js";
import { RadioPanel } from "../../RadioPanel.js";
import { RadioPanelGroup } from "../../RadioPanelGroup.js";

export const knobs: ExampleKnobsProps = {
    boolProps: ["Med feilmelding"],
};

type Inputs = {
    dekning: string;
};

export const ControlledExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const { handleSubmit, control, watch } = useForm<Inputs>({
        defaultValues: {
            dekning: "toppkasko",
        },
    });

    const onSubmit: SubmitHandler<Inputs> = ({ dekning }) =>
        console.log(`Submitted value: ${dekning}`);

    console.log(`Selected value: ${watch("dekning")}`);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="dekning"
                render={({ field: { value, ...inputProps } }) => (
                    <Flex
                        asChild={true}
                        direction="column"
                        gap={32}
                        style={{ maxWidth: 580, width: "100%" }}
                    >
                        <RadioPanelGroup
                            legend="Velg dekning"
                            errorLabel={
                                boolValues?.["Med feilmelding"]
                                    ? "Nå har du gjort noe galt"
                                    : undefined
                            }
                        >
                            <RadioPanel
                                {...inputProps}
                                value={"toppkasko"}
                                checked={value === "toppkasko"}
                                label="Toppkasko"
                                extraLabel={
                                    <Flex
                                        as="span"
                                        alignItems="center"
                                        justifyContent="flex-end"
                                        className="input-panel-example__custom-label input-panel-example__custom-label--bold"
                                    >
                                        500 kr/mnd
                                    </Flex>
                                }
                            >
                                Passer for biler av høy verdi, og spesielt om
                                den er nyere enn 10 år. Dekker maskinskader.
                            </RadioPanel>
                            <RadioPanel
                                {...inputProps}
                                value={"kasko"}
                                checked={value === "kasko"}
                                label="Kasko"
                                alwaysOpen={true}
                                extraLabel={
                                    <Flex
                                        as="span"
                                        alignItems="center"
                                        justifyContent="flex-end"
                                        gap={24}
                                        className="input-panel-example__custom-label input-panel-example__custom-label--bold"
                                    >
                                        <SuccessTag>Anbefalt</SuccessTag>
                                        300 kr/mnd
                                    </Flex>
                                }
                            >
                                En forsikring som passer de fleste biler. Dekker
                                det meste av skader, også de du selv er
                                ansvarlig for. Inkluderer Minikasko og Ansvar.
                            </RadioPanel>
                            <RadioPanel
                                {...inputProps}
                                value={"minikasko"}
                                checked={value === "minikasko"}
                                label="Minikasko"
                                extraLabel={
                                    <Flex
                                        as="span"
                                        alignItems="center"
                                        justifyContent="flex-end"
                                        className="input-panel-example__custom-label input-panel-example__custom-label--bold"
                                    >
                                        200 kr/mnd
                                    </Flex>
                                }
                            >
                                Passer for eldre biler med en verdi under 50 000
                                kr. Dekker brann, tyveri og glasskader i tillegg
                                til det lovpålagte.
                            </RadioPanel>
                            <RadioPanel
                                {...inputProps}
                                value={"ansvar"}
                                checked={value === "ansvar"}
                                label="Ansvar"
                                extraLabel={
                                    <Flex
                                        as="span"
                                        alignItems="center"
                                        justifyContent="flex-end"
                                        className="input-panel-example__custom-label input-panel-example__custom-label--bold"
                                    >
                                        100 kr/mnd
                                    </Flex>
                                }
                            >
                                Lovpålagt når du eier et kjøretøy som brukes på
                                veien.
                            </RadioPanel>
                        </RadioPanelGroup>
                    </Flex>
                )}
            />
            <PrimaryButton style={{ marginTop: 32 }}>Send inn</PrimaryButton>
        </form>
    );
};
