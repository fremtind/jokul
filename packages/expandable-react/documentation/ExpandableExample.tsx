import { GreenCheckIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import {
    ExampleComponentProps,
    CodeExample,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { ExpandablePanel } from "../src/ExpandablePanel";
import { Expander } from "../src/Expander";

export const knobs: ExampleKnobsProps = {
    boolProps: ["icon", "flip direction"],
};

export const ExpandableExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                gap: 40,
                flexDirection: "column",
            }}
        >
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
        </div>
    );
};

export const code: CodeExample = ({ boolValues }) => {
    return `
<div
    style={{
        width: "100%",
        display: "flex",
        gap: 40,
        flexDirection: "column",
    }}
>
    <div>
        <ExpandablePanel>
            <Expander
                icon={${
                    boolValues?.["icon"] ? "<GreenCheckIcon />" : "undefined"
                }}
                expandDirection={${
                    boolValues?.["flip direction"] ? '"up"' : "undefined"
                }}
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
        <ExpandablePanel>
            <Expander
                icon={${
                    boolValues?.["icon"] ? "<GreenCheckIcon />" : "undefined"
                }}
                expandDirection={${
                    boolValues?.["flip direction"] ? '"up"' : "undefined"
                }}
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
                icon={${
                    boolValues?.["icon"] ? "<GreenCheckIcon />" : "undefined"
                }}
                expandDirection={${
                    boolValues?.["flip direction"] ? '"up"' : "undefined"
                }}
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
                icon={${
                    boolValues?.["icon"] ? "<GreenCheckIcon />" : "undefined"
                }}
                expandDirection={${
                    boolValues?.["flip direction"] ? '"up"' : "undefined"
                }}
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
                icon={${
                    boolValues?.["icon"] ? "<GreenCheckIcon />" : "undefined"
                }}
                expandDirection={${
                    boolValues?.["flip direction"] ? '"up"' : "undefined"
                }}
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
</div>    
    `;
};
