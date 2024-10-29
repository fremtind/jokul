import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { HeadingSmall, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const tekststorrelseAvstander: UUContent = {
    id: "tekstorrelse-og-avstander",
    title: "Tekststørrelse og avstander",
    tags: [
        "tekstinnhold",
        "skjema",
        "tabell",
        "liste",
        "bilder",
        "modal",
        "innlogging",
        "navigasjon",
        "animasjon",
    ],
    wcagRules: ["1.4.4", "1.4.8", "1.4.12"],
    links: [["Avstander i Jøkul", "/profil/spacing"]],
    body: () => (
        <>
            <HeadingSmall>Tekstblokker</HeadingSmall>
            <Paragraph>
                Sørg for at tekstblokker enkelt kan leses av alle brukere.
            </Paragraph>
            <List>
                <CheckListItem>Bredden er ikke mer enn 80 tegn</CheckListItem>
                <CheckListItem>
                    Teksten er ikke blokkjustert (&lsquo;justified&rsquo;)
                </CheckListItem>
                <CheckListItem>
                    Linjeavstanden er minst 1,5 innenfor avsnitt
                </CheckListItem>
                <CheckListItem>
                    Avstanden mellom avsnitt er minst 1,5 ganger større enn
                    linjeavstanden
                </CheckListItem>
            </List>
            <HeadingSmall>Tekst</HeadingSmall>
            <List>
                <CheckListItem>
                    Linjehøyden er minst 1,5 ganger større enn tekststørrelsen
                </CheckListItem>
                <CheckListItem>
                    Avstand mellom tegn er minst 0,12 ganger tekststørrelsen
                </CheckListItem>
                <CheckListItem>
                    Avstand mellom ord er minst 0,16 ganger tekststørrelsen
                </CheckListItem>
            </List>
            <Paragraph>
                Størrelse på tekst skal kunne bli endret opp til 200% uten tap
                av innhold eller funksjon. Det samme gjelder for å zoome inn
                200% på nettsiden. Tekst skal ikke kuttes, bli vanskeligere å
                lese eller forsvinne selv om brukeren har justert
                tekststørrelsen.
            </Paragraph>
        </>
    ),
};

export default tekststorrelseAvstander;
