# [`@forbrukerradet/jkl-validators-util`](https://jokul.fremtind.no/komponenter/validators)

## Beskrivelse

[Bruk og prinsipper](https://jokul.fremtind.no/profil/skjemadesign)

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/guider/utvikling)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @forbrukerradet/jkl-validators-util` eller `npm i @forbrukerradet/jkl-validators-util`.

2. Importer React-pakken:

```js
import { isValidEpost } from "@forbrukerradet/jkl-validators-util";

const isValidEpost = isValidEpost("foo@bar.com"); //true
const isNotValidEpost = isValidEpost("foo@bar"); //false
```
