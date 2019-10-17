import React from "react";
import { Example } from "../components";
import { BulletList, BulletListItem } from "@fremtind/jkl-bullet-list-react";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "@fremtind/jkl-message-box-react";
import "@fremtind/jkl-message-box/message-box.min.css";

import messageType from "!raw-loader!@fremtind/jkl-message-box-react/build/MessageBox.d.ts";

const example = `<>
        <InfoMessage title="Informasjon">
            Vi lagrer alle svarene dine underveis, slik at du kan forstsette der du slapp når det passer for deg.
        </InfoMessage>
        <ErrorMessage title="Feilmelding">Vi finner ikke denne kombinasjonen av e-post og passord. Prøv igjen.</ErrorMessage>
        <SuccessMessage title="Vellykket handling">Saken din er registrert</SuccessMessage>
        <WarningMessage title="Advarsel">Du må fylle ut alle feltene før du kan gå videre</WarningMessage>
        <InfoMessage fullWidth title="Informasjon i full bredde">
            <h2 className="jkl-h2"> Slik behandler vi saken din</h2>
            <BulletList>
                <BulletListItem>Vi dekker skaden på bilen din. Skadenummeret ditt er 1352630007.</BulletListItem>
                <BulletListItem>
                    Vi kontakter deg innen klokka 15 neste arbeidsdag. Da får du vite hvem vi mener er ansvarlig for
                    uhellet og om du må betale egenandel.
                </BulletListItem>
                <BulletListItem>Vi kontakter forsikringsselskapet til den andre parten.</BulletListItem>
                <BulletListItem>Du må oppgi skadenummeret til verkstedet. </BulletListItem>
                <BulletListItem>
                    Kontakt Avis Bilutleie på telefon 66 77 11 06 for å få leiebil. Oppgi skadenummeret ditt. Du har
                    leiebil i inntil 45 dager mens bilen er på verksted.{" "}
                </BulletListItem>
            </BulletList>
        </InfoMessage>
    </>`;

const exampleImport = `import {
  ErrorMessage,
  InfoMessage,
  SuccessMessage,
  WarningMessage
} from "@fremtind/jkl-message-box-react";
import "@fremtind/jkl-message-box/message-box.min.css";
`;

const MessageBoxExample = () => (
    <Example
        exampleComponents={{ ErrorMessage, InfoMessage, SuccessMessage, WarningMessage, BulletList, BulletListItem }}
        exampleCode={example}
        type={messageType}
        exampleImport={exampleImport}
    />
);

export default MessageBoxExample;
