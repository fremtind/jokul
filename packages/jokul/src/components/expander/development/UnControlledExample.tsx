import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { Flex } from "../../flex/Flex.js";
import { GreenCheckIcon } from "../../icon/index.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { Expander } from "../Expander.js";

export const knobs: ExampleKnobsProps = {
    boolProps: ["icon", "flip direction"],
};

export const UnControlledExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    return (
        <Flex style={{ width: "100%" }} direction="column" gap="lg">
            <div>
                <ExpandablePanel>
                    <Expander
                        icon={
                            boolValues?.["icon"] ? (
                                <GreenCheckIcon />
                            ) : undefined
                        }
                        expandDirection={
                            boolValues?.["flip direction"] ? "up" : undefined
                        }
                    >
                        Når er det vi faktisk er åpne?
                    </Expander>

                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
                <ExpandablePanel style={{ marginTop: 16 }}>
                    <Expander
                        icon={
                            boolValues?.["icon"] ? (
                                <GreenCheckIcon />
                            ) : undefined
                        }
                        expandDirection={
                            boolValues?.["flip direction"] ? "up" : undefined
                        }
                    >
                        Når er det vi faktisk er åpne?
                    </Expander>

                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </div>
            <div>
                <ExpandablePanel variant="stroke">
                    <Expander
                        icon={
                            boolValues?.["icon"] ? (
                                <GreenCheckIcon />
                            ) : undefined
                        }
                        expandDirection={
                            boolValues?.["flip direction"] ? "up" : undefined
                        }
                    >
                        Når er det vi faktisk er åpne?
                    </Expander>

                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
                <ExpandablePanel variant="stroke">
                    <Expander
                        icon={
                            boolValues?.["icon"] ? (
                                <GreenCheckIcon />
                            ) : undefined
                        }
                        expandDirection={
                            boolValues?.["flip direction"] ? "up" : undefined
                        }
                    >
                        Når er det vi faktisk er åpne?
                    </Expander>

                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
                <ExpandablePanel variant="stroke">
                    <Expander
                        icon={
                            boolValues?.["icon"] ? (
                                <GreenCheckIcon />
                            ) : undefined
                        }
                        expandDirection={
                            boolValues?.["flip direction"] ? "up" : undefined
                        }
                    >
                        Når er det vi faktisk er åpne?
                    </Expander>

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
