import { NavCard } from "@fremtind/jkl-card-react";
import { ListItem, UnorderedList } from "@fremtind/jkl-list-react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Grid } from "../../components/Grid";
import { Image } from "../../components/image";
import { Seo } from "../../components/seo";
import { HeadingLarge, Ingress, PageTitle, Paragraph } from "../../components/Typography";
import { MainContent } from "../../layout/MainContent";

const pageTitle = "Jobb med Jøkul-teamet";

export const Head: FC = () => <Seo title={pageTitle} />;

const JobbMedTeamet: FC = () => (
    <MainContent>
        <PageTitle>{pageTitle}</PageTitle>
        <Ingress>
            Jøkul-teamet skal gjøre arbeidsvherdagen enklere for leveranseteamene. Vi har mange måter å hjelpe på, delt
            inn i to servicespor: fasilitering og støtte.
        </Ingress>
        <Image disableFullscreen>
            <StaticImage src="../../../static/assets/kom-i-gang/team-api.png" alt="" />
        </Image>
        <HeadingLarge>Fasilitering og deling av kunnskap</HeadingLarge>
        <Paragraph>
            Få ekspert-coaching og rådgivning skreddersydd ditt team og tjeneste gjennom midlertidig-hospitering fra
            Jøkul-teamet.
        </Paragraph>
        <UnorderedList className="jkl-portal-paragraph">
            <ListItem>
                Vi tilbyr coaching og midleritidg hospitering for å øke den faglige forståelsen for designsystem ute i
                leveranseteamene.
            </ListItem>
            <ListItem>
                Vi holder fagforedrag innad i organsasjonen for å spre verdifull og relevant kunnskap om designystemet
                og dets effekt på arbeidet vårt.
            </ListItem>
            <ListItem>Vi onboarder og introduserer nye designere og utviklere til designsystemtankegang</ListItem>
            <ListItem>
                Vi forsker på og deler de nyeste teknikkene for å jobbe med designsystem på en effektiv måte innenfor
                hver fagdisiplin.
            </ListItem>
        </UnorderedList>
        <NavCard
            href="mailto:fremtind.designsystem@fremtind.no?subject=Hjelp%20oss%20med%3A"
            className="mt-40"
            style={{ maxWidth: "25rem" }}
            title="Fasilitering med Jøkul-teamet"
            description="Få skreddersydd designsystem-analyse, coaching og rådgivning fra Jøkul-teamet."
        />
        <HeadingLarge>Støtte og vedlikehold</HeadingLarge>
        <Paragraph>
            Vi tilbyr Jøkul som en plattform. Det betyr at vi i praksis har ansvar for forvaltning av designsystemet,
            noe som ofte skjer gjennom bidrag fra leveranseteamene. Plattform-teamet er ansvarlig for at Jøkul fungerer,
            og holdes til enhver tids gjeldende moderne standarder.
        </Paragraph>
        <UnorderedList className="jkl-portal-paragraph">
            <ListItem>Vi sørger for at det er enkelt å bruke og endre på plattformen.</ListItem>
            <ListItem>Vi holder deg oppdatert på hva som skjer i Jøkul.</ListItem>
            <ListItem>Vi sørger for hjelp til selvhjelp gjennom lett tilgjengelig dokumentasjon.</ListItem>
            <ListItem>
                Vi tilbyr revers-hospitering hvor medlemmer fra levereanseteamene midlertidig blir ansatt i Jøkul-teamet
                for å jobbe med Jøkul, noe som kommer teamet til gode på sikt.
            </ListItem>
            <ListItem>
                Vi organiserer arbeidsgrupper for å bygge ny funksjonalitet i Jøkul, i tillegg til å drøfte vår tolkning
                og tilnærming av faglige temaer.
            </ListItem>
            <ListItem>Vi tilbyr support hvis du skulle ha enkle spørsmål om bruk og bidrag.</ListItem>
        </UnorderedList>
        <Grid className="jkl-portal-paragraph">
            <NavCard
                href="mailto:fremtind.designsystem@fremtind.no?subject=Samskap"
                title="Jobb med oss"
                description="Bli med på å gjøre Jøkul bedre for deg selv – og for andre."
            />
            <NavCard
                href="https://teams.microsoft.com/l/channel/19%3adb7fc5da697547ad8a199247b3be66dc%40thread.skype/Support%2520Designsystem?groupId=460dde26-9370-4131-8b04-61b3e9b47048&tenantId=273051d7-ce03-4594-b66d-0c68e4c778c0"
                title="Brukerstøtte"
                description="Spør om det du måtte lure på rundt bruk av Jøkul, bugs eller annet smått og kort."
            />
        </Grid>
        <HeadingLarge>Ikke vær redd for å kontakte oss</HeadingLarge>
        <Paragraph>
            Jøkul-teamet er her for å hjelpe deg. Det kan vi ikke om du ikke sier i fra til oss hvis noe er vanskelig,
            noe mangler, eller noe rett og slett er blitt ødelagt. Om du finner noe som ser rart ut, ikke nøl med å ta
            kontakt!
        </Paragraph>
        <NavCard
            className="mt-40"
            style={{ maxWidth: "25rem" }}
            to="/kom-i-gang/slik-er-jokul-satt-sammen"
            component={GatsbyLink}
            title="Neste: Slik er Jøkul satt sammen"
            description="Et system er summen av dets deler i samspill. Ofte er det greit å ha en samlet oversikt over delene på ett sted."
        />
    </MainContent>
);

export default JobbMedTeamet;
