// eslint-disable @typescript-eslint/no-unused-vars
import React from "react";

const basicUsage = [
    `boolKnob("<navn på egenskap>")`,
    `choiceKnob("<navn på egenskap>")`,
];

const nonFormattable = [
    `<div data-foo="boolKnob("Hei")">`,
    `<div data-foo=boolKnob("Hei")>`,
    `<div> /*.... */ </div>`,
    `<choiceKnob("Variant") />`,
];
const formattable = [
    `<div data-foo={'boolKnob("Hei")'}>`,
    `<div> {/*.... */} </div>`,
];
export const KnobUsage = () => (
    <div>
        <p>
            Koden som skal rendres som eksempel. Du kan legge inn verdier som
            kan endres av brukeren ved hjelp av Egenskaper. Legg dem inn i
            Egenskaper-fanen, og referer til verdiene deres i kodeeksemplet ved
            hjelp av {basicUsage.map((markup) => markup).join(" eller")}. Koden
            vil bli automatisk formatert for deg når du lagrer så lenge det er
            kjørbar kode.
        </p>
        <p>
            For at formattering skal fungere når du bruker egenskaper er det
            viktig å holde seg til en syntax som fremdeles regnes som gyldig
            kode før verdien på egenskapen settes inn. Dersom prettier ikke
            klarer å tyde koden klarer den heller ikke å formattere den.
        </p>
        <div>
            Eksempler på bruk som <em>ikke</em> vil bli formattert av prettier
        </div>
        {nonFormattable.map((markup, index) => (
            <div key={index}>
                <code>{markup}</code>
            </div>
        ))}
        <div>Eksempler på bruk som vil bli formattert av prettier</div>
        {formattable.map((markup, index) => (
            <div key={index}>
                <code>{markup}</code>
            </div>
        ))}
    </div>
);
