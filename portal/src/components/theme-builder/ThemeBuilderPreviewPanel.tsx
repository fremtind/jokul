"use client";

import { Button } from "@fremtind/jokul/button";
import { Card } from "@fremtind/jokul/card";
import { NativeSelect } from "@fremtind/jokul/select";
import { SummaryTable, SummaryTableRow } from "@fremtind/jokul/summary-table";
import { Tag } from "@fremtind/jokul/tag";
import { TextArea } from "@fremtind/jokul/text-area";
import { TextInput } from "@fremtind/jokul/text-input";
import { ThemePreviewScope } from "./ThemePreviewScope";
import type { EditableColorToken, ThemeMode } from "./types";

import styles from "./theme-builder.module.scss";

type ThemeBuilderPreviewPanelProps = {
    theme: ThemeMode;
    tokens: EditableColorToken[];
};

export function ThemeBuilderPreviewPanel({
    theme,
    tokens,
}: ThemeBuilderPreviewPanelProps) {
    const summaryRows = [
        { header: "Skadetype", content: "Kollisjon" },
        { header: "Kjøretøy", content: "AB12345" },
        { header: "Status", content: "Mangler skadedato" },
    ];

    return (
        <section className={styles.previewPanel}>
            <ThemePreviewScope
                className={styles.previewSurface}
                theme={theme}
                tokens={tokens}
            >
                <div className={styles.previewCanvas}>
                    <div className={styles.previewHeader}>
                        <div className={styles.previewEyebrowRow}>
                            <div className={styles.previewEyebrow}>Demo</div>
                            <Tag variant="error">Feil i skjema</Tag>
                        </div>
                        <h3>Meld skade på bil</h3>
                    </div>
                    <Card
                        as="form"
                        padding="l"
                        className={styles.previewForm}
                        noValidate
                    >
                        <div className={styles.previewHeader}>
                            <div className={styles.previewEyebrowRow}>
                                <Tag variant="neutral">Skademelding</Tag>
                            </div>
                            <h4>Hva har skjedd?</h4>
                        </div>
                        <div className={styles.previewFieldGrid}>
                            <TextInput
                                label="Registreringsnummer"
                                defaultValue="AB12345"
                                readOnly
                            />
                            <NativeSelect
                                label="Skadetype"
                                items={[
                                    {
                                        label: "Kollisjon",
                                        value: "collision",
                                    },
                                    {
                                        label: "Glasskade",
                                        value: "glass",
                                    },
                                    {
                                        label: "Tyveri",
                                        value: "theft",
                                    },
                                ]}
                                value="collision"
                                onChange={() => undefined}
                            />
                            <TextInput
                                label="Skadedato"
                                placeholder="dd.mm.åååå"
                                errorLabel="Du må oppgi datoen skaden skjedde."
                                readOnly
                            />
                            <TextInput
                                label="Sted"
                                defaultValue="Oslo"
                                readOnly
                            />
                            <div className={styles.previewFieldWide}>
                                <TextArea
                                    label="Beskrivelse"
                                    defaultValue="Jeg rygget inn i en stolpe på parkeringsplassen."
                                    rows={4}
                                    readOnly
                                />
                            </div>
                        </div>
                        <SummaryTable
                            caption="Skademelding"
                            header={["Valg", "Verdi"]}
                            body={summaryRows.map((row) => (
                                <SummaryTableRow
                                    key={row.header}
                                    header={row.header}
                                    content={row.content}
                                />
                            ))}
                            footer={
                                <SummaryTableRow
                                    header="Neste steg"
                                    content="Rett feilen for å sende inn"
                                />
                            }
                        />
                        <div className={styles.previewActions}>
                            <Button type="button" variant="primary">
                                Send inn skademelding
                            </Button>
                            <Button type="button" variant="ghost">
                                Lagre utkast
                            </Button>
                        </div>
                    </Card>
                </div>
            </ThemePreviewScope>
        </section>
    );
}
