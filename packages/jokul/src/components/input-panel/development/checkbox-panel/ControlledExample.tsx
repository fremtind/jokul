import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../../button/Button.js";
import { Flex } from "../../../flex/Flex.js";
import { SuccessTag } from "../../../tag/Tag.js";
import { CheckboxPanel } from "../../index.js";

export const knobs: ExampleKnobsProps = {
    boolProps: ["Med feil"],
};

type Inputs = {
    kasko: boolean;
    minikasko: boolean;
    ansvar: boolean;
};

export const ControlledExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const { register, handleSubmit, watch } = useForm<Inputs>({
        defaultValues: { kasko: true, minikasko: false, ansvar: false },
    });

    const onSubmit: SubmitHandler<Inputs> = ({ kasko, minikasko, ansvar }) =>
        console.log(
            `
Submitted values:
Kasko:     ${kasko}
Minikasko: ${minikasko}
Ansvar:    ${ansvar}
`,
        );

    const kasko = watch("kasko");
    const minikasko = watch("minikasko");
    const ansvar = watch("ansvar");

    console.log(
        `
Selected values:
Kasko:     ${kasko}
Minikasko: ${minikasko}
Ansvar:    ${ansvar}
`,
    );

    return (
        <Flex
            direction="column"
            gap={32}
            style={{ maxWidth: 580, width: "100%" }}
            asChild={true}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <CheckboxPanel
                    label="Kasko"
                    {...register("kasko")}
                    checked={kasko}
                    aria-invalid={boolValues?.["Med feil"] ? "true" : undefined}
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
                    En forsikring som passer de fleste biler. Dekker det meste
                    av skader, også de du selv er ansvarlig for. Inkluderer
                    Minikasko og Ansvar.
                </CheckboxPanel>
                <CheckboxPanel
                    label="Minikasko"
                    {...register("minikasko")}
                    checked={minikasko}
                    aria-invalid={boolValues?.["Med feil"] ? "true" : undefined}
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
                    Passer for eldre biler med en verdi under 50 000 kr. Dekker
                    brann, tyveri og glasskader i tillegg til det lovpålagte.
                </CheckboxPanel>
                <CheckboxPanel
                    label="Ansvar"
                    {...register("ansvar")}
                    checked={ansvar}
                    aria-invalid={boolValues?.["Med feil"] ? "true" : undefined}
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
                    Lovpålagt når du eier et kjøretøy som brukes på veien.
                </CheckboxPanel>
                <PrimaryButton style={{ marginTop: 32, width: "fit-content" }}>
                    Send inn
                </PrimaryButton>
            </form>
        </Flex>
    );
};
