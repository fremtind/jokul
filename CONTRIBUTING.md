# Bidragsguide

Jøkul er et fellesprosjekt for alle i Fremtind. Det vil si at det også er _ditt_. Om du oppdager en feil, eller har et ønske om å gjøre en endring eller legge noe til, så er det aller beste om _du_ sørger for å få det gjort. Jøkul-teamet er her for å hjelpe deg med det praktiske.

## 📚 Minstekrav til dokumentasjon

Det viktigste du må gjøre er å endre dokumentasjonen der du gjør endringene.

### Portalen og kode

Vi bruker [Storybook](https://storybook.js.org/) for å utvikle komponentene lokalt, og henter informasjonen fra [stories](https://jokul-portal.app.devaws.fremtind.no/storybook) for å dokumentere komponentene.

### Figma

Hvis du gjør endringer på design bør disse endringene gjøres i [Figma](https://www.figma.com/files/784861794507029203/project/52944370/Designsystemet?fuid=1253605757836779042) også.

Dersom du ikke har tilgang til design-mode må du enten få hjelp av en designer på teamet, eller gjøre oss oppmerksom på dette sånn at vi kan gjøre endringene selv.

### Breaking changes

Om du gjør en _breaking change_ må det dokumenteres i [MIGRATION.md](packages/jokul/MIGRATION.md) hvordan man migrerer fra forrige versjon til den nye:

-   Den nye majorversjonen skal ha en egen heading. Bruk dagens versjon + 1.
-   Beskriv alle steg som må tas dersom man skal oppgradere til den nye versjonen
-   Bruk veldig gjerne `diff`-eksempler som demonstrerer endringen visuelt. Se f. eks [radio-button-react/MIGRATION.md](https://github.com/fremtind/jokul/blob/main/packages/radio-button-react/MIGRATION.md).

## Hvordan endre bidragsguiden

Vi har blitt [enige om disse kravene](https://github.com/fremtind/jokul/discussions/2500#discussioncomment-1645212) for dokumentasjon av komponenter i [portalen](https://jokul.fremtind.no).

Dersom du mener denne guiden ikke fungerer godt nok kan du gjerne sende en pull request med endringer direkte, eller ta det opp med oss hvor enn du finner oss.
