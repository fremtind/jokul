# Oppgradering av jkl-text-input fra <=9.X.X til 10.0.0

I forbindelse med ny funksjonalitet har tekstfeltene i Jøkul endret DOM-struktur, og noen av klassene har fått nye navn. Stilen for "inputfeltet" ligger nå på wrapperen rundt selve `<input />`-elementet. Dersom du bruker stilpakkene separat må du dermed gjøre noen endringer for at tekstfelter fortsatt skal se ut og fungere på riktig måte. Følg guidene under for å se forskjellene, og hva du må endre.

Hvis det er noe som er uklart, eller du vil ha hjelp til å migrere over, ikke nøl med å ta kontakt med Jøkul-teamet!

## `text-input`

Her er den største forskjellen at wrapperen rundt input-feltet har fått nytt klassenavn. På denne wrapperen må du også sette `data-invalid` med samme verdi som `aria-invalid` har på selve input-elementet. Man trenger ikke lenger egen variant-klasse for text-input med handling.

Gammel struktur t.o.m. 9.X.X:

```html
<div class="jkl-text-input jkl-text-input--action">
    <label class="jkl-label jkl-label--small">Filtrer</label>
    <div class="jkl-text-input__input-wrapper">
        <input class="jkl-text-input__input" aria-invalid="true" />
        <button class="jkl-text-input__action-button"><!-- ... --></button>
    </div>
    <span class="jkl-form-support-label jkl-form-support-label--error">Feilmelding</span>
</div>
```

Ny struktur f.o.m. 10.0.0:

```html
<div class="jkl-text-input">
    <label class="jkl-label jkl-label--small">Filtrer</label>
    <div class="jkl-text-input-wrapper" data-invalid="true">
        <input class="jkl-text-input__input" aria-invalid="true" />
        <!-- Støtte for både handling og enhet. Bruk kun én av gangen -->
        <button class="jkl-text-input-action-button"><!-- Uendret struktur --></button>
        <span class="jkl-text-input__unit">kr</span>
    </div>
    <span class="jkl-form-support-label jkl-form-support-label--error">Feilmelding</span>
</div>
```

## `text-area`

TextArea bruker nå samme wrapper som TextInput rundt selve, og rundt telleren for tegn hvis den brukes. Man bruker ikke lenger klassene `jkl-text-input` eller `jkl-text-input__input` noe sted. Dette inkluderer variantklassene med antall rader (`jkl-text-input__text-input--7-rows` etc.). `data-has-content` settes på den nye wrapperen sammen med `data-invalid`. `data-invalid` erstatter `aria-invalid` _på wrapperen_, men man må altså fortsatt sette `aria-invalid` på _selve textarea-elementet_.

Gammel struktur t.o.m. 9.X.X:

```html
<div class="jkl-text-input jkl-text-area jkl-text-area--with-counter">
    <label class="jkl-label jkl-label--small">Beskrivelse</label>
    <div class="jkl-text-area__content">
        <!-- aria-invalid settes på både wrapper og felt -->
        <div class="jkl-text-input__input" aria-invalid="true" data-has-content="true">
            <textarea
                class="jkl-text-area__text-area jkl-text-input__text-input--7-rows"
                aria-invalid="true"
            ></textarea>
        </div>
        <div class="jkl-text-area__counter"><!-- ... --></div>
    </div>
    <span class="jkl-form-support-label jkl-form-support-label--error">Feilmelding</span>
</div>
```

Ny struktur f.o.m. 10.X.X:

```html
<div class="jkl-text-area jkl-text-area--with-counter">
    <label class="jkl-label jkl-label--small">Beskrivelse</label>
    <div class="jkl-text-input-wrapper" data-invalid="true" data-has-content="true">
        <textarea class="jkl-text-area__text-area jkl-text-area__text-area--7-rows" aria-invalid="true"></textarea>
        <div class="jkl-text-area__counter"><!-- Uendret struktur --></div>
    </div>
    <span class="jkl-form-support-label jkl-form-support-label--error">Feilmelding</span>
</div>
```

## `autosuggest`

Denne bruker du forhåpentligvis ikke uten React-pakken :)
