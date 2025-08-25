import type { Meta } from "@storybook/react";
import React from "react";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "../../../components/description-list/index.js";
import { type LengthUnit, formatAvstand } from "../avstand/formatAvstand.js";
import { formatBytes } from "../bytes/formatBytes.js";
import { formatFodselsnummer } from "../fodselsnummer/formatFodselsnummer.js";
import { formatKontonummer } from "../kontonummer/formatKontonummer.js";
import { formatKortnummer } from "../kortnummer/formatKortnummer.js";
import { formatOrganisasjonsnummer } from "../organisasjonsnummer/formatOrganisasjonsnummer.js";
import { formatTelefonnummer } from "../telefonnummer/formatTelefonnummer.js";
import { formatNumber } from "../util/formatNumber.js";
import { formatValuta } from "../valuta/formatValuta.js";

import "../../../components/description-list/styles/_index.scss";

/**
 * Eksemplene er hentet fra [Språkrådets artikkel om formattering av tid, tall og
 * datoer](https://sprakradet.no/godt-og-korrekt-sprak/rettskriving-og-grammatikk/tall-tid-dato/).
 */
const meta = {
    title: "Utils/Formatters",
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
} satisfies Meta;

export default meta;

export const Dato = {
    args: {
        locale: "nb-NO",
        time: new Date().toString(),
    },
    argTypes: {
        locale: {
            options: ["nb-NO", "en-US"],
            control: "select",
        },
        time: {
            control: "date",
        },
    },
    render: (args: {
        locale: Intl.LocalesArgument;
        time: string;
    }) => (
        <div>
            <p className="jkl-heading-2">Dato</p>
            <DescriptionList>
                <DescriptionTerm>Dato, måned og år</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                        })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                        })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
                            year: "2-digit",
                            month: "2-digit",
                            day: "2-digit",
                        })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
                            year: "2-digit",
                            month: "numeric",
                            day: "numeric",
                        })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                        })}
                    </time>
                </DescriptionDetail>

                <DescriptionTerm>Uten årstall</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date(args.time).toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
                            month: "numeric",
                            day: "numeric",
                        })}
                    </time>
                </DescriptionDetail>

                <DescriptionTerm>Ved oppramsing</DescriptionTerm>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleDateString(args.locale, {
                        day: "numeric",
                    })}
                    ,
                    {new Date(
                        new Date(args.time).setDate(
                            new Date(args.time).getDate() + 1,
                        ),
                    ).toLocaleDateString(args.locale, {
                        day: "numeric",
                    })}
                    , og{" "}
                    {new Date(
                        new Date(args.time).setDate(
                            new Date(args.time).getDate() + 2,
                        ),
                    ).toLocaleDateString(args.locale, {
                        day: "numeric",
                        month: "long",
                    })}
                </DescriptionDetail>

                <DescriptionTerm>I teknisk bruk</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date(args.time).toString()}>
                        {new Date(args.time).getFullYear()}-
                        {new Date(args.time).getMonth()}-
                        {new Date(args.time).getDate()}
                    </time>
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Tid = {
    args: {
        locale: "nb-NO",
        time: new Date().toString(),
    },
    argTypes: {
        locale: {
            options: ["nb-NO", "en-US"],
            control: "select",
        },
        time: {
            control: "date",
        },
    },
    render: (args: {
        locale: Intl.LocalesArgument;
        time: string;
    }) => (
        <div>
            <p className="jkl-heading-2">Tid</p>
            <DescriptionList>
                <DescriptionTerm>Klokkeslett</DescriptionTerm>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        hour: "numeric",
                        minute: "numeric",
                    })}
                </DescriptionDetail>

                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                    })}
                </DescriptionDetail>

                <DescriptionTerm>Nøyaktige klokkeslett</DescriptionTerm>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        fractionalSecondDigits: 1,
                    })}
                </DescriptionDetail>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        fractionalSecondDigits: 2,
                    })}
                </DescriptionDetail>

                <DescriptionTerm>Tid på døgnet</DescriptionTerm>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        dayPeriod: "long",
                    })}
                </DescriptionDetail>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        dayPeriod: "short",
                    })}
                </DescriptionDetail>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        dayPeriod: "narrow",
                    })}
                </DescriptionDetail>

                <DescriptionTerm>Tidsrom</DescriptionTerm>
                <DescriptionDetail>
                    Kl.{" "}
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        hour: "numeric",
                        minute: "numeric",
                    })}
                    –
                    {new Date(
                        new Date(args.time).setHours(
                            new Date(args.time).getHours() + 8,
                        ),
                    ).toLocaleTimeString(args.locale, {
                        hour: "numeric",
                        minute: "numeric",
                    })}
                </DescriptionDetail>
                <DescriptionDetail>
                    Fra kl.{" "}
                    {new Date(args.time).toLocaleTimeString(args.locale, {
                        hour: "numeric",
                        minute: "numeric",
                    })}{" "}
                    til{" "}
                    {new Date(
                        new Date(args.time).setHours(
                            new Date(args.time).getHours() + 8,
                        ),
                    ).toLocaleTimeString(args.locale, {
                        hour: "numeric",
                        minute: "numeric",
                    })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Tall = {
    args: {
        tall: 10000,
    },
    render: (args: { tall: number }) => (
        <div>
            <p className="jkl-heading-2">
                Tall <small>({formatNumber(args.tall)})</small>
            </p>
            <DescriptionList>
                <DescriptionTerm>Små tall</DescriptionTerm>
                <DescriptionDetail>{formatNumber("23")} år</DescriptionDetail>

                <DescriptionTerm>Store tall</DescriptionTerm>
                <DescriptionDetail>
                    {formatNumber("2500000")} passasjerer
                </DescriptionDetail>
                <DescriptionDetail>
                    {formatNumber("4500800")} kroner
                </DescriptionDetail>
                <DescriptionDetail>
                    {formatNumber("2500")} biler
                </DescriptionDetail>
                <DescriptionDetail>{formatNumber("0,00302")}</DescriptionDetail>

                <DescriptionTerm>Desimaltall</DescriptionTerm>
                <DescriptionDetail>
                    {formatNumber("12345,67")}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Avstand = {
    args: {
        avstand: 4000,
        suffix: "",
        unit: "kilometer",
    },
    argTypes: {
        unit: {
            control: "select",
            options: [
                "kilometer",
                "meter",
                "decimeter",
                "centimeter",
                "millimeter",
                "micrometer",
                "nanometer",
                "picometer",
                "mile",
                "yard",
                "foot",
                "inch",
                "point",
            ],
        },
    },
    render: (args: {
        avstand: number;
        suffix: string;
        unit: LengthUnit;
    }) => (
        <div>
            <p className="jkl-heading-2">Avstand</p>
            <DescriptionList>
                <DescriptionTerm>Avstand</DescriptionTerm>
                <DescriptionDetail>
                    {formatAvstand(args.avstand, {
                        unit: args.unit,
                        suffix: args.suffix,
                    })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Valuta = {
    args: {
        kroner: 4000,
        prefix: "kr",
        suffix: "NOK",
        desimaler: 0,
    },
    argTypes: {
        desimaler: {
            control: {
                type: "number",
                max: 2,
                min: 0,
            },
        },
    },
    render: (args: {
        kroner: number;
        prefix: string;
        suffix: string;
        desimaler: number;
    }) => (
        <div>
            <p className="jkl-heading-2">Valuta</p>
            <DescriptionList>
                <DescriptionTerm>Valuta</DescriptionTerm>
                <DescriptionDetail>
                    {formatValuta(args.kroner, {
                        prefix: args.prefix,
                        suffix: args.suffix,
                        minimumFractionDigits: args.desimaler,
                    })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Telefonnummer = {
    args: {
        telefonnummer: "91509801",
        countryCode: "47",
    },
    argTypes: {
        telefonnummer: {
            type: "select",
            options: ["91509801", "80022222"],
        },
    },
    render: (args: {
        telefonnummer: string;
        countryCode: string;
    }) => (
        <div>
            <p className="jkl-heading-2">Telefonnummer</p>
            <DescriptionList>
                <DescriptionTerm>Telefonnummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatTelefonnummer(args.telefonnummer, {
                        countryCode: args.countryCode,
                    })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Fodselsnummer = {
    args: {
        fodselsnummer: "01065100203",
        partial: false,
    },
    render: (args: {
        fodselsnummer: string;
        partial: boolean;
    }) => (
        <div>
            <p className="jkl-heading-2">Fødselsnummer</p>
            <DescriptionList>
                <DescriptionTerm>Fødselsnummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatFodselsnummer(args.fodselsnummer, {
                        partial: args.partial,
                    })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Kortnummer = {
    args: {
        kortnummer: "5457623898234113",
        partial: false,
    },
    render: (args: {
        kortnummer: string;
        partial: boolean;
    }) => (
        <div>
            <p className="jkl-heading-2">Kortnummer</p>
            <DescriptionList>
                <DescriptionTerm>Kortnummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatKortnummer(args.kortnummer, {
                        partial: args.partial,
                    })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Kontonummer = {
    args: {
        kontonummer: "915651232",
        partial: false,
        separator: ".",
    },
    render: (args: {
        kontonummer: string;
        separator: string;
        partial: boolean;
    }) => (
        <div>
            <p className="jkl-heading-2">Kontonummer</p>
            <DescriptionList>
                <DescriptionTerm>Kontonummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatKontonummer(args.kontonummer, {
                        partial: args.partial,
                        separator: args.separator,
                    })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Organisasjonsnummer = {
    args: {
        org: "915651232",
        partial: false,
    },
    render: (args: { org: string; partial: boolean }) => (
        <div>
            <p className="jkl-heading-2">Organisasjonsnummer</p>
            <DescriptionList>
                <DescriptionTerm>Organisasjonsnummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatOrganisasjonsnummer(args.org, {
                        partial: args.partial,
                    })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};

export const Filstorrelse = {
    args: {
        størrelse: 10_000_000,
    },
    render: (args: { størrelse: number }) => (
        <div>
            <p className="jkl-heading-2">Filstørrelse</p>
            <DescriptionList>
                <DescriptionTerm>Filstørrelse</DescriptionTerm>
                <DescriptionDetail>
                    {formatBytes(args.størrelse)}
                </DescriptionDetail>
            </DescriptionList>
        </div>
    ),
};
