import altAttributtBilder from "./alt-attributt-bilder";
import blinkendeInnhold from "./blinkende-innhold";
import dekorativtInnhold from "./dekorativt-innhold";
import farger from "./farger";
import fokushandtering from "./fokushandtering";
import hoppeOverBlokker from "./hoppe-over-blokker";
import ikoner from "./ikoner";
import inndatafelter from "./inndatafelter";
import konsekventIdentifikasjon from "./konsekvent-identifikasjon";
import konsekventNavigasjon from "./konsekvent-navigasjon";
import kontrast from "./kontrast";
import lenker from "./lenker";
import liste from "./liste";
import lydVideo from "./lyd-video";
import modal from "./modal";
import overskrifterStruktur from "./overskrifter-struktur";
import skjema from "./skjema";
import skjemavalidering from "./skjemavalidering";
import sprak from "./sprak";
import tabell from "./tabell";
import tastaturnavigasjon from "./tastaturnavigasjon";
import tekststorrelseAvstander from "./tekst-strl-avstander";
import tidsbegrensning from "./tidsbegrensning";

export type UUTagType =
    | "skjema"
    | "bilder"
    | "tabell"
    | "tekstinnhold"
    | "media"
    | "modal"
    | "innlogging"
    | "animasjon"
    | "navigasjon"
    | "liste";

export type UUContent = {
    id: string;
    title: string;
    tags: UUTagType[];
    wcagRules?: string[];
    links?: [string, string][];
    body: () => JSX.Element;
};

export const uuContent: UUContent[] = [
    altAttributtBilder,
    blinkendeInnhold,
    dekorativtInnhold,
    farger,
    fokushandtering,
    hoppeOverBlokker,
    ikoner,
    inndatafelter,
    konsekventIdentifikasjon,
    konsekventNavigasjon,
    kontrast,
    lenker,
    liste,
    lydVideo,
    modal,
    overskrifterStruktur,
    skjema,
    skjemavalidering,
    sprak,
    tabell,
    tastaturnavigasjon,
    tekststorrelseAvstander,
    tidsbegrensning,
];
