import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
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
            <Flex asChild direction="column" gap="s">
                <FieldGroup
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
                        amount="Den kalde fine tiden"
                        description={
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
                        }
                    />
                    <RadioPanel
                        {...register("season")}
                        value={"spring"}
                        label="Vår"
                        amount="Jeg velger meg april"
                    />
                    <RadioPanel
                        {...register("season")}
                        value={"summer"}
                        label="Sommer"
                        amount="Sol og regn og latter og sang"
                        description={
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
                        }
                    />
                    <RadioPanel
                        {...register("season")}
                        value={"autumn"}
                        label="Høst"
                        amount="Vått, trist, kaldt og mørkt"
                        description={
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
                        }
                    />
                </FieldGroup>
            </Flex>
            <PrimaryButton style={{ marginTop: 32 }}>Send inn</PrimaryButton>
        </form>
    );
};
