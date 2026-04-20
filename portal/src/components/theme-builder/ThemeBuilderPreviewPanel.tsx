"use client";

import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import { CheckboxPanel } from "@fremtind/jokul/checkbox-panel";
import { NativeSelect } from "@fremtind/jokul/select";
import { SummaryTable, SummaryTableRow } from "@fremtind/jokul/summary-table";
import { Tag } from "@fremtind/jokul/tag";
import { TextArea } from "@fremtind/jokul/text-area";
import { TextInput } from "@fremtind/jokul/text-input";
import type {
    ColorVariant,
    EditableColorToken,
    PreviewColorScheme,
} from "./types";
import { getThemeBuilderPreviewStyle } from "./utils";

import styles from "./theme-builder.module.scss";

type ThemeBuilderPreviewPanelProps = {
    activeVariant: ColorVariant;
    previewColorScheme: PreviewColorScheme;
    onPreviewColorSchemeChange: (scheme: PreviewColorScheme) => void;
    tokens: EditableColorToken[];
};

export function ThemeBuilderPreviewPanel({
    activeVariant,
    previewColorScheme,
    onPreviewColorSchemeChange,
    tokens,
}: ThemeBuilderPreviewPanelProps) {
    const previewStyle = getThemeBuilderPreviewStyle(
        tokens,
        activeVariant,
        previewColorScheme,
    );
    const coverageRows = [
        { header: "Bilforsikring", content: "540 kr/mnd" },
        { header: "Leiebil", content: "89 kr/mnd" },
        { header: "Veihjelp", content: "49 kr/mnd" },
    ];

    return (
        <Card as="section" padding="m" className={styles.panel}>
            <div className={styles.panelHeader}>
                <div className={styles.panelIntro}>
                    <h2>Forhåndsvisning</h2>
                    <p>
                        Se hvordan temaet oppfører seg i en ekte flyt med
                        flater, felter og handlinger.
                    </p>
                </div>
                <div className={styles.panelControl}>
                    <NativeSelect
                        label="Color scheme"
                        items={[
                            { label: "System", value: "system" },
                            { label: "Light", value: "light" },
                            { label: "Dark", value: "dark" },
                        ]}
                        value={previewColorScheme}
                        onChange={(event) =>
                            onPreviewColorSchemeChange(
                                event.target.value as PreviewColorScheme,
                            )
                        }
                    />
                </div>
            </div>
            <div
                className={styles.previewSurface}
                data-variant={activeVariant}
                data-color-scheme={previewColorScheme}
                style={previewStyle}
            >
                <div className={styles.previewCanvas}>
                    <div className={styles.previewHeader}>
                        <div className={styles.previewEyebrowRow}>
                            <div className={styles.previewEyebrow}>
                                Eksempel
                            </div>
                            <Tag variant="info">Steg 2 av 3</Tag>
                        </div>
                        <h3>Tilpass bilforsikringen</h3>
                        <p>
                            Ett konkret steg med felter, tilvalg og oppsummering
                            gir et bedre bilde av hvordan temaet faktisk vil
                            oppleves.
                        </p>
                    </div>
                    <div className={styles.previewLayout}>
                        <Card
                            as="form"
                            padding="l"
                            className={styles.previewForm}
                        >
                            <section className={styles.previewSection}>
                                <div className={styles.previewSectionHeader}>
                                    <h4>Kjøretøy</h4>
                                    <p>Grunnlaget for beregningen.</p>
                                </div>
                                <div className={styles.previewFieldGrid}>
                                    <TextInput
                                        label="Registreringsnummer"
                                        defaultValue="AB12345"
                                        readOnly
                                    />
                                    <NativeSelect
                                        label="Dekning"
                                        items={[
                                            {
                                                label: "Ansvar og delkasko",
                                                value: "delkasko",
                                            },
                                            {
                                                label: "Full kasko",
                                                value: "kasko",
                                            },
                                        ]}
                                        value="delkasko"
                                        onChange={() => undefined}
                                    />
                                    <TextInput
                                        label="Bonus"
                                        defaultValue="70 %"
                                        readOnly
                                    />
                                    <TextInput
                                        label="Egenandel"
                                        defaultValue="4 000 kr"
                                        readOnly
                                    />
                                </div>
                            </section>
                            <section className={styles.previewSection}>
                                <div className={styles.previewSectionHeader}>
                                    <h4>Tilvalg</h4>
                                    <p>
                                        Ekstra dekninger som påvirker pris og
                                        oppsett.
                                    </p>
                                </div>
                                <div className={styles.previewPanelStack}>
                                    <CheckboxPanel
                                        defaultChecked
                                        name="preview-addon"
                                        value="rental-car"
                                        label="Leiebil"
                                        amount="89 kr/mnd"
                                        description="Gir deg leiebil mens bilen er pa verksted etter en skade."
                                    />
                                    <CheckboxPanel
                                        defaultChecked
                                        name="preview-addon"
                                        value="roadside"
                                        label="Veihjelp"
                                        amount="49 kr/mnd"
                                        description="Hjelp ved motorstopp, punktering eller tomt batteri i Norden."
                                    />
                                </div>
                            </section>
                            <section className={styles.previewSection}>
                                <div className={styles.previewSectionHeader}>
                                    <h4>Kontakt</h4>
                                    <p>
                                        Avslutt med felter og en litt lengre
                                        tekstflate.
                                    </p>
                                </div>
                                <div className={styles.previewFieldGrid}>
                                    <TextInput
                                        label="E-post"
                                        defaultValue="ola@example.no"
                                        readOnly
                                    />
                                    <TextInput
                                        label="Telefonnummer"
                                        defaultValue="900 00 000"
                                        readOnly
                                    />
                                    <div className={styles.previewFieldWide}>
                                        <TextArea
                                            label="Kommentar"
                                            defaultValue="Jeg bruker denne forhondsvisningen for a se hvordan tekst, flater, border og handlinger spiller sammen."
                                            rows={4}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </section>
                            <div className={styles.previewActions}>
                                <Button variant="primary">Gå videre</Button>
                                <Button variant="ghost">
                                    Lagre og fortsett senere
                                </Button>
                            </div>
                        </Card>
                        <Card
                            as="aside"
                            padding="m"
                            className={styles.previewSummary}
                        >
                            <div className={styles.previewSummaryHeader}>
                                <div className={styles.previewSummaryTag}>
                                    <Tag variant="neutral">Prisestimat</Tag>
                                </div>
                                <h4>Foreløpig oppsummering</h4>
                                <p>
                                    En kompakt sideflate som viser hvordan
                                    containere og sekundær tekst oppføres.
                                </p>
                            </div>
                            <SummaryTable
                                caption="Prisoverslag"
                                header={["Post", "Pris"]}
                                body={coverageRows.map((row) => (
                                    <SummaryTableRow
                                        key={row.header}
                                        header={row.header}
                                        content={row.content}
                                    />
                                ))}
                                footer={
                                    <SummaryTableRow
                                        header="Totalt"
                                        content="678 kr/mnd"
                                    />
                                }
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </Card>
    );
}
