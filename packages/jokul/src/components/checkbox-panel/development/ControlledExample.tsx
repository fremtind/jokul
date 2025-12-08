import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { PrimaryButton } from "../../button/Button.js";
import { CheckboxPanel } from "../../checkbox-panel/CheckboxPanel.js";
import { Flex } from "../../flex/Flex.js";

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
            gap="l"
            style={{ maxWidth: 580, width: "100%" }}
            asChild
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <CheckboxPanel
                    label="Kasko"
                    {...register("kasko")}
                    checked={kasko}
                    aria-invalid={boolValues?.["Med feil"] ? "true" : undefined}
                    amount="300 kr/mnd"
                    value="300"
                    description=" En forsikring som passer de fleste biler. Dekker det meste
                    av skader, også de du selv er ansvarlig for. Inkluderer
                    Minikasko og Ansvar."
                />
                <CheckboxPanel
                    label="Minikasko"
                    {...register("minikasko")}
                    checked={minikasko}
                    aria-invalid={boolValues?.["Med feil"] ? "true" : undefined}
                    amount="200 kr/mnd"
                    value="200"
                    description="Passer for eldre biler med en verdi under 50 000 kr. Dekker
                    brann, tyveri og glasskader i tillegg til det lovpålagte."
                />

                <CheckboxPanel
                    label="Ansvar"
                    {...register("ansvar")}
                    checked={ansvar}
                    aria-invalid={boolValues?.["Med feil"] ? "true" : undefined}
                    amount="100 kr/mnd"
                    value="100"
                    description="Lovpålagt når du eier et kjøretøy som brukes på veien."
                />
                <PrimaryButton style={{ marginTop: 32, width: "fit-content" }}>
                    Send inn
                </PrimaryButton>
            </form>
        </Flex>
    );
};
