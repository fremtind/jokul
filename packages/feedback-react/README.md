# [`@fremtind/jkl-feedback-react`](https://jokul.fremtind.no/komponenter/feedback)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/feedback).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/guider/utvikling/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-feedback-react` eller `npm i @fremtind/jkl-feedback-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { Feedback } from "@fremtind/jkl-feedback-react";
import "@fremtind/jkl-feedback/feedback.min.css";
```

Du må også importere stilarkene til komponentene som brukes i mønsteret, hvis du ikke allerede gjør det andre steder i løsningen din:

```js
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";
import "@fremtind/jkl-slider/slider.min.css";
```
