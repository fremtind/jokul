import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { Flex } from "../../flex/Flex.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { Expander } from "../Expander.js";

export const knobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "open",
            values: ["true", "false", "undefined"],
            defaultValue: 2,
        },
    ],
};

export const ControlledExample: FC<ExampleComponentProps> = ({
    choiceValues,
}) => {
    const open =
        choiceValues?.["open"] === "undefined"
            ? undefined
            : choiceValues?.["open"] === "true";

    return (
        <Flex style={{ width: "100%" }} direction="column" gap={40}>
            <div>
                <ExpandablePanel open={open}>
                    <Expander>Når er det vi faktisk er åpne?</Expander>

                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </div>
            <div>
                <ExpandablePanel variant="stroke" open={open}>
                    <Expander>Når er det vi faktisk er åpne?</Expander>

                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
                <ExpandablePanel variant="stroke" open={open}>
                    <Expander>Når er det vi faktisk er åpne?</Expander>

                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
                <ExpandablePanel variant="stroke" open={open}>
                    <Expander>Når er det vi faktisk er åpne?</Expander>

                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </div>
        </Flex>
    );
};
