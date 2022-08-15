import React from "react";
import { Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const kontrast: UUContent = {
    id: "konsekvent-navigasjon",
    title: "Konsekvent navigasjon",
    tags: ["navigasjon"],
    wcagRules: ["2.1.1", "2.1.2", "2.4.3"],
    body: () => (
        <Paragraph>
            Navigeringsmekanismer som gjentas på flere sider skal oppføre seg likt og se like ut på alle sider med
            mindre brukeren selv gjør en endring.
        </Paragraph>
    ),
};

export default kontrast;
