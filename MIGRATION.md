# Oppgradering av Jøkul til versjon 1.x.x

Dette dokumentet inneholder teknisk dokumentasjon av endringer fra siste stabile 0.x.x-versjon som vil kreve kodeendringer ved oppgradering til versjon 1.x.x. Eventuelle visuelle endringer i komponentene vil ikke beskrives her, da disse allerede er representert i skissene i Figma. Det vil heller ikke tas med ny funksjonalitet dersom den ikke er påkrevd i bruk. Se dokumentasjonen til hver enkelt komponent for oppdatert informasjon om komponentenes funksjonalitet.

## BulletList

Pakkene `@forbrukerradet/jkl-bullet-list` og `@forbrukerradet/jkl-bullet-list-react` finnes ikke lenger, og er erstattet av `@forbrukerradet/jkl-list` og `@forbrukerradet/jkl-list-react`. Der du tidligere har brukt komponenten `<BulletList>` skal du nå bruke `<UnorderedList>`. Det er i tillegg lagt til en `<OrderedList>`-komponent. Listene brukes ellers på samme måte som tidligere.

## Dropdown/Select

Pakkene `@forbrukerradet/jkl-dropdown` og `@forbrukerradet/jkl-dropdown-react` finnes ikke lenger, og er erstattet av `@forbrukerradet/jkl-select` og `@forbrukerradet/jkl-select-react`. Komponenten `<Select>` erstatter `<Dropdown>`. Om du tidligere har brukt `<Select>` for å få ut et vanlig `<select>` HTML-element må du nå bruke `<NativeSelect>`.

Prop-en `initialInputValue` er tatt vekk og erstattet med `value`, slik at komponenten kan brukes kontrollert. Dette sikrer også lik bruk i `<Select>` og `<NativeSelect>`.

## Logo

I `<LogoAnimated>`-komponenten har prop-en `showSymbol` blitt omdøpt til `isSymbol`.

## RadioButton

Hovedkomponenten for bruk av radio buttons har skiftet navn til `<RadioButtons>`. Den brukes ellers likt som før.

## TextField

Varianten `<TextField inline />` er erstattet av `<InlineTextField>`. Denne komponenten tar ikke lenger inn `errorLabel` eller `helpLabel`. Om det skal vises error state kan man bruke den nye prop-en `invalid`
