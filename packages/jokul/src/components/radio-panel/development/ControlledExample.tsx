import React, { type FC } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { PrimaryButton } from "../../button/Button.js";
import { Flex } from "../../flex/index.js";
import { FieldGroup } from "../../input-group/index.js";
import { RadioPanel } from "../RadioPanel.js";

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
                        asChild
                        direction="column"
                        gap="s"
                        style={{ maxWidth: 580, width: "100%" }}
                    >
                        <FieldGroup
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
                                amount="500 kr/mnd"
                                description="Passer for biler av høy verdi, og spesielt om
                                den er nyere enn 10 år. Dekker maskinskader."
                            />
                            <RadioPanel
                                {...inputProps}
                                value={"kasko"}
                                checked={value === "kasko"}
                                label="Kasko"
                                amount="300 kr/mnd"
                                description="En forsikring som passer de fleste biler. Dekker
                                det meste av skader, også de du selv er
                                ansvarlig for. Inkluderer Minikasko og Ansvar."
                            />
                            <RadioPanel
                                {...inputProps}
                                value={"minikasko"}
                                checked={value === "minikasko"}
                                label="Minikasko"
                                amount="200 kr/mnd"
                                description=" Passer for eldre biler med en verdi under 50 000
                                kr. Dekker brann, tyveri og glasskader i tillegg
                                til det lovpålagte."
                            />
                            <RadioPanel
                                {...inputProps}
                                value={"ansvar"}
                                checked={value === "ansvar"}
                                label="Ansvar"
                                amount="100 kr/mnd"
                                description="Lovpålagt når du eier et kjøretøy som brukes på
                                veien."
                            />
                        </FieldGroup>
                    </Flex>
                )}
            />
            <PrimaryButton style={{ marginTop: 32 }}>Send inn</PrimaryButton>
        </form>
    );
};
