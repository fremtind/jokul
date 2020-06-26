# [`@fremtind/jkl-validators-util`](https://fremtind.github.io/jokul/komponenter/utils)

## Beskrivelse

[Bruk og prinsipper](https://fremtind.github.io/jokul/validators-util/documentation/validators/).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-validators-util` eller `npm i @fremtind/jkl-validators-util`.

2. Importer React-pakken:

```js
import { isValidEpost } from "@fremtind/jkl-validators-util";

const isValidEpost = isValidEpost('foo@bar.com'); //true
const isNotValidEpost = isValidEpost('foo@bar'); //false

```
