import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useRef, useState } from "react";
import * as cow from "../../../../../stories/assets/cow.jpg";
import { File } from "../../../file/File.js";
import { Flex } from "../../../flex/index.js";
import { ListItem, UnorderedList } from "../../../list/index.js";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../table/index.js";
import { Text, Title } from "../../../typography/index.js";
import { FileInput } from "../../FileInput.js";
import { validateFileInputFiles } from "../../internal/validateFileInputFiles.js";
import type { UploadedFile } from "../../types.js";
import { upload } from "../../utils.js";
import { createUploadedFiles } from "../fileInputStoryUtils.js";
import {
    DemoFileInput,
    Forklaring,
    Panel,
    gammelValidering,
    medSimulertServer,
    synligTekst,
    useActiveElementDescription,
    useContainerRef,
    useLiveRegionLog,
    useTrackingAttributes,
} from "./endringerStoryUtils.js";

import "../../styles/_index.scss";
import "../../../progress-bar/styles/_index.scss";

/**
 * Stories som viser endringene i FileInput-PR-ene, så de kan testes og diskuteres
 * i review. Hver story forklarer hva som er endret og hvordan du tester det.
 */
const meta = {
    title: "Komponenter/File Input/Endringer",
    parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const code = (text: string) => <code>{text}</code>;

const Gruppe = ({ children }: { children: string }) => (
    <Title as="h3" size="s" style={{ marginBlock: "var(--jkl-unit-30) 0" }}>
        {children}
    </Title>
);

export const Oversikt: Story = {
    name: "Oversikt",
    render: () => (
        <Forklaring tittel="Endringer i FileInput">
            <Text>
                Hver story i denne mappen viser én endring. Under er en oversikt
                gruppert etter type.
            </Text>
            <Gruppe>Breaking (neste major)</Gruppe>
            <UnorderedList>
                <ListItem>
                    Propen {code("variant")} er fjernet. FileInput bruker alltid
                    den kompakte visningen. → <em>Alltid kompakt visning</em>
                </ListItem>
                <ListItem>
                    {code("onChange")} får alltid en {code("ChangeEvent")} fra
                    filvelgeren, aldri en {code("DragEvent")}. →{" "}
                    <em>Hele dropsonen tar imot klikk og slipp</em>
                </ListItem>
                <ListItem>
                    Klassen {code("jkl-file-input--has-files")} er fjernet.
                </ListItem>
                <ListItem>
                    {code("data-track-*")} settes bare på filvelgeren, ikke på
                    dropsonen. → <em>Tracking kun på filvelgeren</em>
                </ListItem>
            </UnorderedList>
            <Gruppe>Nytt</Gruppe>
            <UnorderedList>
                <ListItem>
                    {code("File")} viser {code("uploadProgress")} som en tynn
                    linje i underkanten av filen, og {code("upload()")} kan
                    avbrytes med en {code("AbortSignal")}. →{" "}
                    <em>Opplasting med fremdrift og avbryt</em>
                </ListItem>
            </UnorderedList>
            <Gruppe>Fikser</Gruppe>
            <UnorderedList>
                <ListItem>
                    Slipp når feltet er deaktivert gjør ingenting, og
                    nettleseren åpner ikke filen. → <em>Deaktivert</em>
                </ListItem>
                <ListItem>
                    Med {code("multiple={false}")} beholdes bare én fil. →{" "}
                    <em>Én fil</em>
                </ListItem>
                <ListItem>
                    Dra-markeringen blinker ikke lenger når du drar over teksten
                    i dropsonen. →{" "}
                    <em>Hele dropsonen tar imot klikk og slipp</em>
                </ListItem>
                <ListItem>
                    {code("accept")} valideres etter samme regler som
                    nettleseren. → <em>Validering av filtyper</em>
                </ListItem>
                <ListItem>
                    Forhåndsvisninger av bilder frigjøres og lekker ikke minne.
                </ListItem>
                <ListItem>
                    Spinneren er byttet ut med en {code("ProgressBar")} uten
                    verdi når fremdriften er ukjent. →{" "}
                    <em>Lastetilstand i liste og kort</em>
                </ListItem>
            </UnorderedList>
            <Gruppe>Tilgjengelighet</Gruppe>
            <UnorderedList>
                <ListItem>
                    Antall valgte filer leses opp, og fillisten har et navn. →{" "}
                    <em>Skjermleseropplesning</em>
                </ListItem>
                <ListItem>
                    Fokus flyttes til filvelgeren når en fil fjernes. →{" "}
                    <em>Fokus etter fjerning</em>
                </ListItem>
                <ListItem>
                    Feilmeldingen på en fil er koblet til fjern-knappen og
                    lenken. → <em>Feilmelding koblet til fjern-knappen</em>
                </ListItem>
                <ListItem>
                    «eller slipp filer her» skjules på touch-enheter, der
                    dra-og-slipp ikke finnes.
                </ListItem>
            </UnorderedList>
        </Forklaring>
    ),
};

export const AlltidKompakt: Story = {
    name: "Alltid kompakt visning",
    render: () => (
        <>
            <Forklaring
                tittel="Alltid kompakt visning"
                test={[
                    "Sammenlign med «File Input» i main – den store varianten finnes ikke lenger.",
                    "Sjekk at maks filstørrelse står i beskrivelsen.",
                ]}
            >
                <Text>
                    Den tidligere {code('variant="small"')} er nå den eneste
                    visningen, og {code("variant")}-propen er fjernet. Stilene
                    bruker de samme tokenene som andre inputfelt (border radius,
                    kantfarger og bevegelse).
                </Text>
            </Forklaring>
            <DemoFileInput
                description="Last opp kvitteringer og bilder av skaden."
                accept="image/*,.pdf"
                maxSizeBytes={8_000_000}
                initialFiles={createUploadedFiles([
                    "skade.png",
                    "kvittering.pdf",
                ])}
            />
        </>
    ),
};

export const HeleDropsonen: Story = {
    name: "Hele dropsonen tar imot klikk og slipp",
    render: () => {
        const [log, setLog] = useState<string[]>([]);
        return (
            <>
                <Forklaring
                    tittel="Hele dropsonen tar imot klikk og slipp"
                    test={[
                        "Klikk på teksten «eller slipp filer her» – filvelgeren åpnes.",
                        "Dra filer over dropsonen og beveg pekeren over knappen og teksten – markeringen skal ikke blinke.",
                        "Slipp filene – loggen viser at onChange fikk en change-event fra <input>.",
                        "Hold musen over dropsonen – både kanten og knappen får hover-stil.",
                        "Tab til filvelgeren – knappen får fokusring.",
                    ]}
                >
                    <Text>
                        Filvelgeren ({code('<input type="file">')}) er usynlig
                        og dekker hele dropsonen. Nettleseren tar seg av klikk,
                        slipp, {code("multiple")} og {code("disabled")}, så den
                        egne {code("Dropzone")}-komponenten er fjernet. Vi
                        lytter bare på {code("dragenter")}/{code("dragleave")}{" "}
                        for å style dropsonen.
                    </Text>
                </Forklaring>
                <DemoFileInput
                    onFilesAdded={(e, files) =>
                        setLog((current) => [
                            `${e.type} fra <${e.target.tagName.toLowerCase()} type="${e.target.type}">: ${files.map((f) => f.file.name).join(", ")}`,
                            ...current,
                        ])
                    }
                />
                <Panel tittel="onChange-logg">
                    {log.length === 0
                        ? "Ingen filer lagt til ennå"
                        : log.map((line, i) => (
                              // biome-ignore lint/suspicious/noArrayIndexKey: logg
                              <div key={i}>{line}</div>
                          ))}
                </Panel>
            </>
        );
    },
};

export const EnFil: Story = {
    name: "Én fil (multiple={false})",
    render: () => (
        <>
            <Forklaring
                tittel="Én fil"
                test={[
                    "Dra og slipp flere filer samtidig – bare én havner i listen.",
                    "Velg en ny fil – den erstatter den forrige.",
                ]}
            >
                <Text>
                    Tidligere kunne man slippe flere filer selv om{" "}
                    {code("multiple={false}")}. Nå sender FileInput aldri mer
                    enn én fil til {code("onChange")}.
                </Text>
            </Forklaring>
            <DemoFileInput multiple={false} />
        </>
    ),
};

export const Deaktivert: Story = {
    name: "Deaktivert",
    render: () => (
        <>
            <Forklaring
                tittel="Deaktivert"
                test={[
                    "Dra en fil over dropsonen – den markeres ikke, og pekeren viser at slipp ikke er lov.",
                    "Slipp filen – ingenting skjer, og nettleseren åpner ikke filen i en ny fane.",
                    "Hold musen over – dropsonen får ikke hover-stil.",
                ]}
            >
                <Text>
                    Før kunne man slippe filer i en deaktivert FileInput. Nå
                    stopper nettleseren slippet, og vi hindrer at filen åpnes i
                    stedet.
                </Text>
            </Forklaring>
            <DemoFileInput
                disabled
                initialFiles={createUploadedFiles(["skade.png"])}
            />
        </>
    ),
};

const valideringseksempler = [
    {
        navn: "notat.txt",
        type: "text/plain",
        accept: "image/*,",
        kommentar: "Komma på slutten godtok alle filtyper",
    },
    {
        navn: "søknad.pdf",
        type: "application/pdf",
        accept: "df",
        kommentar: "Endelser ble sammenlignet uten punktum",
    },
    {
        navn: "søknad.pdf",
        type: "application/pdf",
        accept: "application/pd",
        kommentar: "MIME-typer ble sammenlignet med includes",
    },
    {
        navn: "min.fil.pdf",
        type: "application/pdf",
        accept: "image/*",
        kommentar: "Feilmeldingen brukte teksten etter første punktum",
    },
    {
        navn: "README",
        type: "",
        accept: ".pdf",
        kommentar: "Filer uten endelse fikk en tom filtype i meldingen",
    },
    {
        navn: "SØKNAD.PDF",
        type: "application/pdf",
        accept: ".pdf",
        kommentar: "Uendret: store og små bokstaver",
    },
    {
        navn: "TEST.TxT",
        type: "text/plain",
        accept: "txt,exe",
        kommentar: "Uendret: endelser uten punktum godtas fortsatt",
    },
];

export const Validering: StoryObj<{ accept: string }> = {
    name: "Validering av filtyper",
    args: { accept: "image/*,.pdf" },
    argTypes: { accept: { control: "text" } },
    render: ({ accept }) => (
        <>
            <Forklaring
                tittel="Validering av filtyper"
                test={[
                    "Se tabellen for forskjellen mellom før og nå.",
                    "Endre accept i Controls og last opp filer for å prøve selv. Filer som ikke godtas vises med feilmelding.",
                ]}
            >
                <Text>
                    {code("accept")} valideres nå etter reglene i
                    HTML-spesifikasjonen: {code(".pdf")} sjekker endelsen,{" "}
                    {code("image/*")} sjekker starten på MIME-typen, og{" "}
                    {code("application/pdf")} må være lik MIME-typen. Endelser
                    uten punktum godtas fortsatt for bakoverkompatibilitet.
                </Text>
            </Forklaring>
            <Table
                fullWidth
                caption={
                    <TableCaption>
                        Validering av accept før og etter endringen
                    </TableCaption>
                }
            >
                <TableHead>
                    <TableRow>
                        <TableHeader>Fil</TableHeader>
                        <TableHeader>accept</TableHeader>
                        <TableHeader>Før</TableHeader>
                        <TableHeader>Nå</TableHeader>
                        <TableHeader>Kommentar</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {valideringseksempler.map((eksempel) => {
                        const fil = new window.File(["a"], eksempel.navn, {
                            type: eksempel.type,
                        });
                        return (
                            <TableRow
                                key={`${eksempel.navn}-${eksempel.accept}`}
                            >
                                <TableCell>
                                    {code(eksempel.navn)} (
                                    {eksempel.type || "ingen type"})
                                </TableCell>
                                <TableCell>{code(eksempel.accept)}</TableCell>
                                <TableCell>
                                    {gammelValidering(fil, eksempel.accept)
                                        ?.message ?? "Godkjent"}
                                </TableCell>
                                <TableCell>
                                    {validateFileInputFiles(
                                        fil,
                                        eksempel.accept,
                                    )?.message ?? "Godkjent"}
                                </TableCell>
                                <TableCell>{eksempel.kommentar}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <div style={{ marginBlockStart: "var(--jkl-unit-40)" }}>
                <DemoFileInput key={accept} accept={accept} />
            </div>
        </>
    ),
};

type Opplasting = UploadedFile & { id: string; feil?: string };

export const Opplasting: StoryObj<{ fileVariant: "list" | "card" }> = {
    name: "Opplasting med fremdrift og avbryt",
    args: { fileVariant: "list" },
    argTypes: {
        fileVariant: {
            control: { type: "inline-radio" },
            options: ["list", "card"],
        },
    },
    render: ({ fileVariant }) => {
        const [files, setFiles] = useState<Opplasting[]>([]);
        const [log, setLog] = useState<string[]>([]);
        const controllers = useRef(new Map<string, AbortController>());

        const update = (id: string, patch: Partial<Opplasting>) =>
            setFiles((current) =>
                current.map((f) => (f.id === id ? { ...f, ...patch } : f)),
            );
        const remove = (id: string) =>
            setFiles((current) => current.filter((f) => f.id !== id));
        const logg = (line: string) => setLog((current) => [line, ...current]);

        const start = (uploaded: UploadedFile) => {
            const id = crypto.randomUUID();
            const name = uploaded.file.name;
            if (uploaded.validation) {
                setFiles((current) => [...current, { ...uploaded, id }]);
                return;
            }
            setFiles((current) => [
                ...current,
                { ...uploaded, id, state: "loading" },
            ]);

            const controller = new AbortController();
            controllers.current.set(id, controller);
            const data = new FormData();
            data.append("fil", uploaded.file);

            medSimulertServer(() =>
                upload(
                    "/api/vedlegg",
                    data,
                    (progress) => update(id, { uploadProgress: progress }),
                    undefined,
                    controller.signal,
                ),
            )
                .then(() => {
                    update(id, { state: undefined });
                    logg(`${name}: lastet opp`);
                })
                .catch((error: Error) => {
                    if (error.name === "AbortError") {
                        logg(`${name}: avbrutt`);
                        return;
                    }
                    update(id, { state: "error", feil: error.message });
                    logg(`${name}: ${error.message}`);
                })
                .finally(() => controllers.current.delete(id));
        };

        return (
            <>
                <Forklaring
                    tittel="Opplasting med fremdrift og avbryt"
                    test={[
                        "Last opp noen filer – fremdriften vises som en linje i underkanten av hver fil.",
                        "Trykk på søppelbøtta mens en fil lastes opp – opplastingen avbrytes.",
                        "Last opp en fil med «feil» i navnet – serveren svarer 500, og feilmeldingen vises på filen.",
                        "Bytt fileVariant i Controls for å se fremdriften i kortvisning.",
                    ]}
                >
                    <Text>
                        {code("File")} har fått propen {code("uploadProgress")},
                        som vises som en tynn {code("ProgressBar")} i
                        underkanten av filen når {code('state="loading"')}. Uten
                        fremdrift glir linjen frem og tilbake.{" "}
                        {code("upload()")} tar nå imot en {code("AbortSignal")}{" "}
                        og gir en {code("Error")} med HTTP-status når serveren
                        svarer med feil. Serveren her er simulert.
                    </Text>
                </Forklaring>
                <FileInput
                    legend="Vedlegg"
                    fileVariant={fileVariant}
                    value={files}
                    onChange={(_e, newFiles) => newFiles.forEach(start)}
                >
                    {files.map(
                        ({
                            id,
                            file,
                            state,
                            validation,
                            uploadProgress,
                            feil,
                        }) => (
                            <File
                                key={id}
                                fileName={file.name}
                                fileType={file.type}
                                fileSize={file.size}
                                file={file}
                                state={validation ? "error" : state}
                                uploadProgress={uploadProgress}
                                errorLabel={validation?.message ?? feil}
                                onRemove={() => {
                                    controllers.current.get(id)?.abort();
                                    remove(id);
                                }}
                            />
                        ),
                    )}
                </FileInput>
                <Panel tittel="Hendelser">
                    {log.length === 0
                        ? "Ingen opplastinger ennå"
                        : log.map((line, i) => (
                              // biome-ignore lint/suspicious/noArrayIndexKey: logg
                              <div key={i}>{line}</div>
                          ))}
                </Panel>
            </>
        );
    },
};

export const Lastetilstand: Story = {
    name: "Lastetilstand i liste og kort",
    render: () => (
        <>
            <Forklaring
                tittel="Lastetilstand i liste og kort"
                test={[
                    "Sjekk at linjen glir i underkanten av filene i begge visningene.",
                    "Slå på redusert bevegelse i operativsystemet – linjen blir stiplet og står stille.",
                    "Tab gjennom siden – linjen er ikke et tabstopp.",
                ]}
            >
                <Text>
                    Spinneren er fjernet. Når fremdriften er ukjent, viser{" "}
                    {code("File")} en {code("ProgressBar")} uten verdi som glir
                    frem og tilbake i underkanten, samme sted som linjen med
                    kjent fremdrift. Bildet og filtypen vises hele tiden.
                </Text>
            </Forklaring>
            <Flex gap="24" wrap="wrap" alignItems="start">
                {(["list", "card"] as const).map((variant) => (
                    <Flex
                        key={variant}
                        direction="column"
                        gap="8"
                        style={{ width: "18rem" }}
                    >
                        <File
                            variant={variant}
                            fileName="skade.png"
                            fileType="image/png"
                            fileSize={3_490_000}
                            path={cow.default}
                            state="loading"
                        />
                        <File
                            variant={variant}
                            fileName="kvittering.pdf"
                            fileType="application/pdf"
                            fileSize={120_000}
                            state="loading"
                        />
                    </Flex>
                ))}
            </Flex>
        </>
    ),
};

export const FeilKobletTilKnapp: Story = {
    name: "Feilmelding koblet til fjern-knappen",
    render: () => {
        const container = useContainerRef();
        const [description, setDescription] = useState("");
        return (
            <>
                <Forklaring
                    tittel="Feilmelding koblet til fjern-knappen"
                    test={[
                        "Tab til fjern-knappen med skjermleser på – feilmeldingen leses opp som beskrivelse.",
                        "Trykk «Les beskrivelse» for å se hva skjermleseren får.",
                    ]}
                >
                    <Text>
                        Feilmeldingen hadde en id, men ingenting pekte på den.
                        Nå har både fjern-knappen og lenken{" "}
                        {code("aria-describedby")} til feilmeldingen. Knappen
                        har også fått {code("aria-label")} i tillegg til{" "}
                        {code("title")}.
                    </Text>
                </Forklaring>
                <div ref={container} style={{ maxWidth: "24rem" }}>
                    <File
                        fileName="skade.png"
                        fileType="image/png"
                        fileSize={12_000_000}
                        path={cow.default}
                        state="error"
                        errorLabel="Filen er 12 MB, men kan maksimalt være 8 MB"
                        onRemove={() => {}}
                    />
                </div>
                <Panel tittel="Tilgjengelig navn og beskrivelse for fjern-knappen">
                    <button
                        type="button"
                        className="jkl-button jkl-button--tertiary"
                        onClick={() => {
                            const button =
                                container.current?.querySelector("button");
                            const describedBy =
                                button?.getAttribute("aria-describedby");
                            setDescription(
                                `Navn: «${button?.getAttribute("aria-label")}». Beskrivelse: «${
                                    (describedBy &&
                                        synligTekst(
                                            document.getElementById(
                                                describedBy,
                                            ),
                                        )) ||
                                    "ingen"
                                }»`,
                            );
                        }}
                    >
                        Les beskrivelse
                    </button>
                    <div>{description}</div>
                </Panel>
            </>
        );
    },
};

export const FokusEtterFjerning: Story = {
    name: "Fokus etter fjerning",
    render: () => {
        const focused = useActiveElementDescription();
        return (
            <>
                <Forklaring
                    tittel="Fokus etter fjerning"
                    test={[
                        "Tab til en av søppelbøttene og trykk Enter.",
                        "Panelet under viser at fokus havner på filvelgeren, ikke på <body>.",
                        "Trykk Tab igjen – du fortsetter fra filvelgeren i stedet for toppen av siden.",
                    ]}
                >
                    <Text>
                        Når en fil fjernes, forsvinner knappen som hadde fokus.
                        Før havnet fokus da på {code("<body>")}, og
                        tastaturbrukere måtte starte fra toppen. Nå flytter
                        FileInput fokus til filvelgeren.
                    </Text>
                </Forklaring>
                <DemoFileInput
                    initialFiles={createUploadedFiles([
                        "bilde-1.png",
                        "bilde-2.png",
                        "bilde-3.png",
                    ])}
                />
                <Panel tittel="Fokus akkurat nå">{focused}</Panel>
            </>
        );
    },
};

export const Skjermleseropplesning: Story = {
    name: "Skjermleseropplesning",
    render: () => {
        const container = useContainerRef();
        const log = useLiveRegionLog(container);
        return (
            <>
                <Forklaring
                    tittel="Skjermleseropplesning"
                    test={[
                        "Legg til og fjern filer – panelet viser hva skjermleseren leser opp.",
                        "Med VoiceOver/NVDA: navigér til fillisten – den heter «Valgte filer».",
                    ]}
                >
                    <Text>
                        FileInput har en skjult {code('aria-live="polite"')}
                        -region som sier hvor mange filer som er valgt, og
                        fillisten har fått {code('aria-label="Valgte filer"')}.
                    </Text>
                </Forklaring>
                <div ref={container}>
                    <DemoFileInput
                        initialFiles={createUploadedFiles(["bilde-1.png"])}
                    />
                </div>
                <Panel tittel="Skjermleseren leser opp">
                    {log.map((line, i) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: logg
                        <div key={i}>«{line}»</div>
                    ))}
                </Panel>
            </>
        );
    },
};

export const Tracking: Story = {
    name: "Tracking kun på filvelgeren",
    render: () => {
        const container = useContainerRef();
        const input = useTrackingAttributes(
            container,
            ".jkl-file-input__input",
        );
        const dropzone = useTrackingAttributes(
            container,
            ".jkl-file-input__dropzone",
        );
        return (
            <>
                <Forklaring tittel="Tracking kun på filvelgeren">
                    <Text>
                        Før sto de samme {code("data-track-*")}-attributtene på
                        både dropsonen og filvelgeren, så samme samhandling
                        kunne bli registrert på to elementer. Nå står de bare på
                        filvelgeren, som er elementet brukeren faktisk
                        samhandler med.
                    </Text>
                </Forklaring>
                <div ref={container}>
                    <DemoFileInput
                        accept="image/*"
                        trackingProps={{ id: "skademelding-vedlegg" }}
                    />
                </div>
                <Panel tittel="data-track-* på filvelgeren">
                    {input.map((attr) => (
                        <div key={attr}>{code(attr)}</div>
                    ))}
                </Panel>
                <Panel tittel="data-track-* på dropsonen">
                    {dropzone.length === 0
                        ? "Ingen"
                        : dropzone.map((attr) => (
                              <div key={attr}>{code(attr)}</div>
                          ))}
                </Panel>
            </>
        );
    },
};
