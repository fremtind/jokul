import { Tab, TabList, TabPanel, Tabs } from "@fremtind/jkl-tabs-react";
import React, { FC } from "react";
import { FormFieldAnatomy } from "../../../components/form-field-anatomy";
import { MainContent } from "../../../layout/MainContent";
import "../../../styles/skjemadesign.scss";

const Skjemadesign: FC = () => (
    <MainContent>
        <h1 className="jkl-title jkl-portal-skjemadesign__tittel">Skjemadesign</h1>
        <p className="jkl-portal-ingress">
            Skjemaer er viktige i Fremtinds løsninger og vi ønsker at de skal være konsekvente. Her finner du noen
            regler for skjemaoppsett og hvordan vi bruker skjemakomponentene.
        </p>

        <Tabs>
            <TabList aria-label="Seksjoner">
                <Tab>Eksempler</Tab>
                <Tab>Kode</Tab>
                <Tab>Bruk</Tab>
                <Tab>Universell utforming</Tab>
                <Tab>Tekster</Tab>
                <Tab>Changelog</Tab>
            </TabList>

            <TabPanel>
                <h2 className="jkl-portal-heading-large">Skjemaseksjoner</h2>
                <p className="jkl-portal-paragraph">
                    I Jøkul har vi flere skjemakomponenter. En eller flere skjemakomponenter sammen, utgjør en
                    skjemaseksjon, og et skjema kan bestå av en eller flere seksjoner.
                </p>
                {/* <ComponentExample title="" component={FormComponentsExample} knobs={{ boolProps: formComponentsExampleBoolProps }} /> */}
            </TabPanel>
            <TabPanel>Hallo kode</TabPanel>
            <TabPanel>
                <h2 className="jkl-portal-heading-large">Anatomi</h2>
                <p className="jkl-portal-paragraph">
                    Hver skjemakomponent har en ledetekst. Det kan være en overskrift med et spørsmål, et ord eller en
                    setning, som sier noe om hva vi ønsker at brukeren skal oppgi eller gjøre. Deretter er det selve
                    komponenten som brukeren skal gjøre noe med, og eventuelt en hjelpetekst eller melding.
                </p>
                <FormFieldAnatomy />
                <p className="jkl-portal-paragraph">
                    Vi avgrenser seksjoner tydelig fra hverandre. Hvis seksjonene ligger på en felles bakgrunn, bruker
                    vi luft til å vise dette skillet. Ellers kan vi ramme dem inn i egne kort. Hvis det er nødvendig,
                    kan vi ha en overskrift på hver seksjon.
                </p>
                {/* <PortalImage
                    className="jkl-spacing-xl--bottom"
                    src="/assets/documentation/skjemadesign/skjemadesign_hund.png"
                    alt="Skjermbilde av et skjemadesign fra kjøpsflyten for hundeforsikring"
                /> */}
                <p className="jkl-portal-paragraph">
                    De interne løsningene vi lager, kan ha mer kompakte skjemakomponenter. Det kan være nyttig hvis det
                    er viktig å komprimere informasjonen vi gir i et skjermbilde, men hovedregelen er at vi skal følge
                    prinsippene for skjemaoppsett.
                </p>
            </TabPanel>
            <TabPanel>
                <h2 className="jkl-portal-heading-large">Skjemavalidering</h2>
                <p className="jkl-portal-paragraph">
                    Det er vanskelig å komme med en ferdig mal for validering som fungerer for alle skjema i alle
                    sammenhenger. Det som beskrives her er en _anbefaling_ og et godt utgangspunkt. Om du opplever at
                    deler av anbefalingen ikke fungerer godt for deg er det helt lov å gjøre noe annet.
                </p>
                <p className="jkl-portal-paragraph">
                    Som hovedregel følger vi i stor grad det funksjonelle i{" "}
                    <a
                        className="jkl-link"
                        href="https://www.uutilsynet.no/wcag-standarden/skjema/38#formidle_feil_i_skjema_1"
                    >
                        uutilsynets løsningsforslag for skjema
                    </a>
                    . Vi beskriver noen av disse temaene i vår egen{" "}
                    <a className="jkl-link" href="https://jokul.fremtind.no/universell-utforming/guide">
                        oppslagsguide for universell utforming
                    </a>{" "}
                    også.
                </p>
                <p className="jkl-portal-paragraph">Kort fortalt</p>
                <ul className="jkl-list jkl-portal-ul">
                    <li className="jkl-list jkl-portal-list-item">
                        Vi validerer skjemaet for første gang når brukeren prøver å sende inn skjemaet eller det
                        gjeldende steget
                    </li>{" "}
                    <li className="jkl-list jkl-portal-list-item">
                        Hvert skjemafelt merkes med{" "}
                        <a className="jkl-link" href="https://jokul.fremtind.no/profil/farger">
                            statusfargen vår for feil
                        </a>{" "}
                        og får en beskrivende feilmelding
                    </li>{" "}
                    <li className="jkl-list jkl-portal-list-item">
                        Vi lister også alle feilmeldingene i skjemaet i en{" "}
                        <a className="jkl-link" href="https://jokul.fremtind.no/komponenter/messagebox">
                            FormErrorMessageBox
                        </a>{" "}
                        i starten av skjemaet
                    </li>{" "}
                    <li className="jkl-list jkl-portal-list-item">
                        Vi scroller opp til denne listen automatisk og flytter tastaturfokus til første skjemafelt
                    </li>{" "}
                    <li className="jkl-list jkl-portal-list-item">
                        Når brukeren retter feilen skjuler vi feilmeldingen med én gang begge steder, og går tilbake til
                        standard farge
                    </li>{" "}
                    <li className="jkl-list jkl-portal-list-item">
                        Når alle feil er rettet fjerner vi oppsummeringen fra starten av skjemaet
                    </li>
                </ul>
                <h3 className="jkl-portal-heading-medium">Valider skjemaet ved forsøk på innsending</h3>
                <p className="jkl-portal-paragraph">
                    Mange skjemaer er delt inn i flere sider eller steg, mens andre er korte nok til at alt er på samme
                    side. Om et skjema har flere steg skal hvert steg valideres for seg selv. Et steg må være uten feil
                    for at brukeren skal kunne gå videre til neste steg.
                </p>{" "}
                <p className="jkl-portal-paragraph">
                    Vi viser ingen valideringsfeil før brukeren har prøvd å trykke seg videre i skjemaet.
                </p>
                <p className="jkl-portal-paragraph">
                    Et unntak gjøres dersom et valg gjort i skjemaet gjør at vi vet at brukeren ikke får lov til å gå
                    videre i flyten. I disse tilfellene viser vi en{" "}
                    <a className="jkl-link" href="https://jokul.fremtind.no/komponenter/messagebox">
                        InfoMessageBox
                    </a>{" "}
                    under skjemafeltet som forklarer hvorfor brukeren ikke trenger fortsette med utfyllingen av
                    skjemaet, og hva neste steg er for dem. Beskjeden dukker opp med en gang valget er gjort så brukeren
                    slipper fylle ut unødvendig informasjon.
                </p>
                <img
                    className="jkl-spacing-xl--bottom"
                    src="/assets/documentation/skjemadesign/skjemavalidering_blocker.png"
                    alt="Skjermbilde av et skjema hvor vi informerer brukeren om riktig vei videre i en InfoMessageBox"
                />
                <h3 className="jkl-portal-heading-medium">Liste med feilene i skjemaet</h3>{" "}
                <p className="jkl-portal-paragraph">
                    Et skjema kan ofte ha flere feil, og noen ganger feil som er knyttet til hverandre, gjerne kalt
                    kryssvalidering. For å gi brukeren en oversikt over feilene lister vi opp samtlige feil i en
                    [ErrorMessageBox](/komponenter/messagebox) som vises over skjemaet (se
                    [FormErrorMessageBox](/komponenter/messagebox#i-skjema) for en variant med ferdige animasjoner).
                </p>
                <p className="jkl-portal-paragraph">
                    Innholdet i denne meldingsboksen skal være _selve feilmeldingene_. Det holder ikke å liste
                    _ledeteksten_ til skjemafeltene det gjelder. Innholdet blir lest opp av skjermlesere.
                </p>
                <p className="jkl-portal-paragraph">
                    Vi scroller automatisk opp så toppen av meldingsboksen er synlig for brukeren. Første inputfelt
                    under oppsummeringen får tastaturfokus, sånn at tastaturbrukere enklere kan komme i gang med
                    rettingen av feil.
                </p>
                <img
                    className="jkl-spacing-xl--bottom"
                    src="/assets/documentation/skjemadesign/skjemavalidering_error_summary.png"
                    alt="Skjermbilde av en oppsummering av fire valideringsfeil vist i en ErrorMessageBox"
                />
                <h3 className="jkl-portal-heading-medium">Feilmeldinger under skjemafelt</h3>
                <p className="jkl-portal-paragraph">
                    Om et skjemafelt har feil viser vi en feilmeldingstekst under feltet. Vi har valgt at
                    valideringsteksten skal erstatte hjelpeteksten. Derfor er det veldig viktig at feilmeldingen også
                    tar med seg informasjonen fra hjelpeteksten, i tillegg til å forklare hva som er feil.
                </p>
                {/* <Grid>
                    <DoDontExample
                        type="do"
                        description="Feilmeldingen inkluderer hjelpeteksten."
                        content={
                            <TextInput
                                label="Fødselsnummer"
                                errorLabel="Du må fylle ut fødselsnummer, 11 siffer"
                                defaultValue="Input"
                            />
                        }
                    />
                    <DoDontExample
                        type="dont"
                        description="Feilmeldingen mangler hjelpeteksten."
                        content={
                            <TextInput
                                label="Fødselsnummer"
                                errorLabel="Fødselsnummeret er feil"
                                defaultValue="Input"
                            />
                        }
                    />
                </Grid> */}
                <h3 className="jkl-portal-heading-medium">Retting av feil</h3>
                <p className="jkl-portal-paragraph">
                    Feilmeldingene forsvinner og skjemaet går tilbake til vanlig farge med én gang feilen er rettet.
                    Brukeren skal ikke trenge å gå videre til neste skjemafelt for at statusen skal oppdateres.
                </p>{" "}
                <p className="jkl-portal-paragraph">
                    Vi fjerner feilmeldingen fra oppsummeringen på samme måte som for skjemafeltet. Den forsvinner med
                    én gang feilen er rettet. Når siste feil er rettet skjuler vi selve meldingsboksen.
                </p>
            </TabPanel>
            <TabPanel>
                <h3 className="jkl-portal-heading-large">Feilmeldinger under skjemafelt</h3>
                <p className="jkl-portal-paragraph">
                    Om et skjemafelt har feil viser vi en feilmeldingstekst under feltet. Vi har valgt at
                    valideringsteksten skal erstatte hjelpeteksten. Derfor er det veldig viktig at feilmeldingen også
                    tar med seg informasjonen fra hjelpeteksten, i tillegg til å forklare hva som er feil.
                </p>
                {/* <Grid>
                    <DoDontExample
                        type="do"
                        description="Feilmeldingen inkluderer hjelpeteksten."
                        content={
                            <TextInput
                                label="Fødselsnummer"
                                errorLabel="Du må fylle ut fødselsnummer, 11 siffer"
                                defaultValue="Input"
                            />
                        }
                    />
                    <DoDontExample
                        type="dont"
                        description="Feilmeldingen mangler hjelpeteksten."
                        content={
                            <TextInput
                                label="Fødselsnummer"
                                errorLabel="Fødselsnummeret er feil"
                                defaultValue="Input"
                            />
                        }
                    />
                </Grid> */}
            </TabPanel>
            <TabPanel>Hallo changelog</TabPanel>
        </Tabs>
    </MainContent>
);

export default Skjemadesign;
