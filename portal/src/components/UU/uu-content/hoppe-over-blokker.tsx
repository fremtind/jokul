import React from "react";
import { Anchor, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const hoppeOverBlokker: UUContent = {
    id: "hoppe-over-blokker",
    title: "Hoppe over blokker",
    tags: ["navigasjon"],
    wcagRules: ["2.4.1"],
    body: () => (
        <>
            <Paragraph>
                Brukeren skal ha en mulighet til å enkelt kunne hoppe over innhold som er gjentatt på flere sider, for å
                kunne komme direkte til hovedinnholdet med tastaturnavigasjon.
            </Paragraph>
            <Paragraph>
                En vanlig teknikk er å bruke en{" "}
                <Anchor href="https://uu.difi.no/krav-og-regelverk/losningsforslag-web/tastaturnavigasjon#Kap2p5">
                    skip-link beskrevet hos difi
                </Anchor>
                . Den skal være blant de 3 første tab-stegene på siden.
            </Paragraph>
        </>
    ),
};

export default hoppeOverBlokker;
