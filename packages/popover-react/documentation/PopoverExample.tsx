import { offset } from "@floating-ui/react";
import React, { type FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Button } from "../../button-react/src";
import { TabList, Tab, Tabs, TabPanel } from "../../tabs-react/src";
import { Popover } from "../src";

export const popoverExampleKnobs: ExampleKnobsProps = {};

export const PopoverExample: FC<ExampleComponentProps> = () => {
    const [openState, setOpenState] = React.useState(false);

    const ExampleWrapperComponent = ({ children }: { children: React.ReactNode }) => {
        return (
            <section
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2em",
                    lineHeight: "2",
                    marginTop: "1em",
                }}
            >
                {children}
            </section>
        );
    };

    return (
        <>
            <Popover
                id="popover"
                padding={24}
                open={openState}
                onClose={setOpenState}
                referenceElement={({ ref, ...props }) => {
                    return (
                        <Button
                            variant="ghost"
                            ref={ref}
                            onClick={() => setOpenState(!openState)}
                            aria-expanded={openState}
                            aria-controls="popover"
                            {...props}
                        >
                            Åpne popover
                        </Button>
                    );
                }}
            >
                <Popover.Content>
                    <Tabs>
                        <TabList aria-label="tabs">
                            <Tab>Brev</Tab>
                            <Tab>SMS</Tab>
                            <Tab>Notat</Tab>
                            <Tab>Be om</Tab>
                            <Tab>Saksflyt</Tab>
                        </TabList>
                        <TabPanel>
                            <ExampleWrapperComponent>
                                <div>
                                    <p>Melding om dødsfall</p>
                                    <p>Politi</p>
                                    <p>Bytte av forsikringstaker og betaler</p>
                                    <p>Avbrutt svangerskap</p>
                                    <p>Fritekstbrev med purring og mulighet for basis-/utvidede fullmakter</p>
                                    <p>Fritekstbrev uten purring (venter på svar)</p>
                                    <p>Statsforvalteren</p>
                                    <p>Lege</p>
                                    <p>Opplysninger fra tingrett/fullmakt fra etterlatte</p>
                                    <p>Samboer</p>
                                    <p>Testamente</p>
                                    <p>Utbetalingsopplysninger utland</p>
                                    <p>Varsel om svik</p>
                                    <p>Lege-TestAuto</p>
                                </div>
                                <div>
                                    <p>Utbetalingsbrev NSF barn</p>
                                    <p>Fritekstbrev (venter ikke på svar)</p>
                                    <p>Avslag samboervilkår/avbrutt svangerskap</p>
                                    <p>Info til statsforvalteren</p>
                                    <p>Innkreving</p>
                                    <p>Utbetaling gruppeliv</p>
                                    <p>Ingen dekninger</p>
                                    <p>Avslag svik</p>
                                    <p>Avslag annet</p>
                                </div>
                            </ExampleWrapperComponent>
                        </TabPanel>
                        <TabPanel>
                            <ExampleWrapperComponent>
                                <div>
                                    <p>SMS sendt om betaling</p>
                                    <p>Bekreftelse på mottatt dokumentasjon</p>
                                    <p>SMS om manglende dokumenter</p>
                                    <p>Påminnelse om innsendelse av erklæring</p>
                                    <p>Viktig informasjon om forsikringen din</p>
                                    <p>Oppfølging av tidligere henvendelse</p>
                                    <p>Statusoppdatering på saken din</p>
                                </div>
                                <div>
                                    <p>SMS om saksbehandling</p>
                                    <p>Bekreftelse på utbetaling</p>
                                    <p>Varsel om forsinkelse</p>
                                    <p>SMS om avslag på krav</p>
                                    <p>Påminnelse om manglende betaling</p>
                                    <p>SMS med saksnummer</p>
                                    <p>Oppdatering om klageprosess</p>
                                </div>
                            </ExampleWrapperComponent>
                        </TabPanel>
                        <TabPanel>
                            <ExampleWrapperComponent>
                                <div>
                                    <p>Intern notat om saksbehandling</p>
                                    <p>Vurdering av medisinsk rapport</p>
                                    <p>Oppdatering om videre fremdrift</p>
                                    <p>Gjennomgang av innsendte dokumenter</p>
                                    <p>Notat om kontakt med kunde</p>
                                    <p>Internt notat om mulig svik</p>
                                </div>
                                <div>
                                    <p>Vurdering av klage</p>
                                    <p>Notat om utbetaling</p>
                                    <p>Gjennomgang av policydokument</p>
                                    <p>Notat om interne møter</p>
                                    <p>Sammenfatning av saksopplysninger</p>
                                    <p>Intern kommunikasjon om sak</p>
                                </div>
                            </ExampleWrapperComponent>
                        </TabPanel>
                        <TabPanel>
                            <ExampleWrapperComponent>
                                <div>
                                    <p>Forespørsel om mer informasjon</p>
                                    <p>Be om ny medisinsk vurdering</p>
                                    <p>Etterspørsel etter manglende dokumentasjon</p>
                                    <p>Tilleggsinformasjon fra kunde</p>
                                    <p>Be om bekreftelse på dekning</p>
                                </div>
                                <div>
                                    <p>Oppfølging av tidligere forespørsel</p>
                                    <p>Be om spesifisering av skade</p>
                                    <p>Forespørsel om dokumentasjon på utgifter</p>
                                    <p>Avklaring av vilkår</p>
                                    <p>Etterspørsel etter legeerklæring</p>
                                </div>
                            </ExampleWrapperComponent>
                        </TabPanel>
                        <TabPanel>
                            <ExampleWrapperComponent>
                                <div>
                                    <p>Sak opprettet</p>
                                    <p>Sak under behandling</p>
                                    <p>Sak avsluttet</p>
                                    <p>Sak eskalert</p>
                                    <p>Venter på tilbakemelding</p>
                                    <p>Saksflyt oppdatert</p>
                                </div>
                                <div>
                                    <p>Sak på vent</p>
                                    <p>Sak gjenåpnet</p>
                                    <p>Sak avsluttet uten utbetaling</p>
                                    <p>Sak overført til juridisk</p>
                                    <p>Sak sendt til ekstern vurdering</p>
                                    <p>Intern saksvurdering pågår</p>
                                </div>
                            </ExampleWrapperComponent>
                        </TabPanel>
                    </Tabs>
                </Popover.Content>
            </Popover>
        </>
    );
};

export default PopoverExample;

export const popoverExampleCode: CodeExample = () => `
    <Popover
        id="popover"
        floatingOptions={{
            open: openState,
        }}
        padding="large"
        onClose={setOpenState}
        referenceElement={({ ref, ...props }) => {
            return (
                <Button
                    variant="ghost"
                    ref={ref}
                    onClick={() => setOpenState(!openState)}
                    aria-expanded={openState}
                    aria-controls="popover"
                    {...props}
                >
                    Åpne popover
                </Button>
            );
        }}
    >
        <Popover.Content>
            <Tabs>
                <TabList aria-label="tabs">
                    <Tab>Brev</Tab>
                    <Tab>SMS</Tab>
                    <Tab>Notat</Tab>
                    <Tab>Be om</Tab>
                    <Tab>Saksflyt</Tab>
                </TabList>
                <TabPanel>
                    <ExampleWrapperComponent>
                        <div>
                            <p>Melding om dødsfall</p>
                            <p>Politi</p>
                            <p>Bytte av forsikringstaker og betaler</p>
                            <p>Avbrutt svangerskap</p>
                            <p>Fritekstbrev med purring og mulighet for basis-/utvidede fullmakter</p>
                            <p>Fritekstbrev uten purring (venter på svar)</p>
                            <p>Statsforvalteren</p>
                            <p>Lege</p>
                            <p>Opplysninger fra tingrett/fullmakt fra etterlatte</p>
                            <p>Samboer</p>
                            <p>Testamente</p>
                            <p>Utbetalingsopplysninger utland</p>
                            <p>Varsel om svik</p>
                            <p>Lege-TestAuto</p>
                        </div>
                        <div>
                            <p>Utbetalingsbrev NSF barn</p>
                            <p>Fritekstbrev (venter ikke på svar)</p>
                            <p>Avslag samboervilkår/avbrutt svangerskap</p>
                            <p>Info til statsforvalteren</p>
                            <p>Innkreving</p>
                            <p>Utbetaling gruppeliv</p>
                            <p>Ingen dekninger</p>
                            <p>Avslag svik</p>
                            <p>Avslag annet</p>
                        </div>
                    </ExampleWrapperComponent>
                </TabPanel>
                <TabPanel>
                    <ExampleWrapperComponent>
                        <div>
                            <p>SMS sendt om betaling</p>
                            <p>Bekreftelse på mottatt dokumentasjon</p>
                            <p>SMS om manglende dokumenter</p>
                            <p>Påminnelse om innsendelse av erklæring</p>
                            <p>Viktig informasjon om forsikringen din</p>
                            <p>Oppfølging av tidligere henvendelse</p>
                            <p>Statusoppdatering på saken din</p>
                        </div>
                        <div>
                            <p>SMS om saksbehandling</p>
                            <p>Bekreftelse på utbetaling</p>
                            <p>Varsel om forsinkelse</p>
                            <p>SMS om avslag på krav</p>
                            <p>Påminnelse om manglende betaling</p>
                            <p>SMS med saksnummer</p>
                            <p>Oppdatering om klageprosess</p>
                        </div>
                    </ExampleWrapperComponent>
                </TabPanel>
                <TabPanel>
                    <ExampleWrapperComponent>
                        <div>
                            <p>Intern notat om saksbehandling</p>
                            <p>Vurdering av medisinsk rapport</p>
                            <p>Oppdatering om videre fremdrift</p>
                            <p>Gjennomgang av innsendte dokumenter</p>
                            <p>Notat om kontakt med kunde</p>
                            <p>Internt notat om mulig svik</p>
                        </div>
                        <div>
                            <p>Vurdering av klage</p>
                            <p>Notat om utbetaling</p>
                            <p>Gjennomgang av policydokument</p>
                            <p>Notat om interne møter</p>
                            <p>Sammenfatning av saksopplysninger</p>
                            <p>Intern kommunikasjon om sak</p>
                        </div>
                    </ExampleWrapperComponent>
                </TabPanel>
                <TabPanel>
                    <ExampleWrapperComponent>
                        <div>
                            <p>Forespørsel om mer informasjon</p>
                            <p>Be om ny medisinsk vurdering</p>
                            <p>Etterspørsel etter manglende dokumentasjon</p>
                            <p>Tilleggsinformasjon fra kunde</p>
                            <p>Be om bekreftelse på dekning</p>
                        </div>
                        <div>
                            <p>Oppfølging av tidligere forespørsel</p>
                            <p>Be om spesifisering av skade</p>
                            <p>Forespørsel om dokumentasjon på utgifter</p>
                            <p>Avklaring av vilkår</p>
                            <p>Etterspørsel etter legeerklæring</p>
                        </div>
                    </ExampleWrapperComponent>
                </TabPanel>
                <TabPanel>
                    <ExampleWrapperComponent>
                        <div>
                            <p>Sak opprettet</p>
                            <p>Sak under behandling</p>
                            <p>Sak avsluttet</p>
                            <p>Sak eskalert</p>
                            <p>Venter på tilbakemelding</p>
                            <p>Saksflyt oppdatert</p>
                        </div>
                        <div>
                            <p>Sak på vent</p>
                            <p>Sak gjenåpnet</p>
                            <p>Sak avsluttet uten utbetaling</p>
                            <p>Sak overført til juridisk</p>
                            <p>Sak sendt til ekstern vurdering</p>
                            <p>Intern saksvurdering pågår</p>
                        </div>
                    </ExampleWrapperComponent>
                </TabPanel>
            </Tabs>
        </Popover.Content>
    </Popover>
`;
