import React, { useState } from "react";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../radio-button/styles/_index.scss";
import "../../text-input/styles/_index.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../button/Button.js";
import { Flex } from "../../flex/Flex.js";
import { FieldGroup } from "../../input-group/FieldGroup.js";
import { RadioButton } from "../../radio-button/RadioButton.js";
import { TextInput } from "../../text-input/TextInput.js";
import { useToast } from "../index.js";

type Inputs = {
    deling: string;
    mobilnummer: string;
};

const Form = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const [currentStep, setCurrentStep] = useState(1);

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    const sharingStep = (
        <Flex gap={16} direction="column">
            <FieldGroup
                legend="Vil du dele din erfaring med oss?"
                aria-invalid={errors.deling ? "true" : "false"}
            >
                <RadioButton
                    value="Ja"
                    {...register("deling", { required: true })}
                >
                    Ja
                </RadioButton>
                <RadioButton
                    value="Nei"
                    {...register("deling", { required: true })}
                >
                    Nei
                </RadioButton>
            </FieldGroup>
            {errors.deling && errors.deling.type === "required" && (
                <p>du må si ja</p>
            )}
            <Flex gap={12}>
                <Button
                    variant={watch("deling") !== "Ja" ? "ghost" : "primary"}
                    type="button"
                    disabled={watch("deling") !== "Ja"}
                    onClick={() => setCurrentStep(2)}
                >
                    Neste
                </Button>
            </Flex>
        </Flex>
    );

    const phoneStep = (
        <Flex gap={16} direction="column">
            <TextInput label="Telefonnummer" {...register("mobilnummer")} />
            <Flex gap={12}>
                <Button type="button" onClick={() => setCurrentStep(1)}>
                    Tilbake
                </Button>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={() => setCurrentStep(3)}
                >
                    Send
                </Button>
            </Flex>
        </Flex>
    );

    const submittedStep = (
        <Flex gap={16} direction="column">
            <p>Takk! Vi snakkes.</p>
            <Flex gap={12}>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => setCurrentStep(3)}
                >
                    Lukk
                </Button>
            </Flex>
        </Flex>
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 1 && sharingStep}
            {currentStep === 2 && phoneStep}
            {currentStep === 3 && submittedStep}
        </form>
    );
};

export function ToastUsageExample() {
    const { add } = useToast();
    return (
        <Button
            onClick={() => {
                add(
                    {
                        content: <Form />,
                    },
                    { timeout: "off" },
                );
            }}
        >
            Vis toast i kontekst
        </Button>
    );
}
