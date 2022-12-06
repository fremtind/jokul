# Migrering fra <= 9.X.X til 10.0.0

Et par klassenavn er endret som følge av oppdatering i jkl-text-input. Hvis du kun bruker Datepicker via React-pakken trenger du ikke forholde deg til dette.

Gammel struktur t.o.m. 9.X.X:

```html
<div class="jkl-datepicker">
    <label class="jkl-label jkl-label--small">Velg dato</label>
    <div class="jkl-datepicker__input-wrapper jkl-text-input__input-wrapper">
        <input class="jkl-datepicker__input jkl-text-input__input" aria-invalid="true" />
        <button class="jkl-datepicker__action-button jkl-text-input__action-button"><!-- endret --></button>
    </div>
    <!-- ... -->
</div>
```

Ny struktur t.o.m. 10.0.0:

```html
<div class="jkl-datepicker">
    <label class="jkl-label jkl-label--small">Velg dato</label>
    <div class="jkl-datepicker__input-wrapper jkl-text-input-wrapper">
        <!--                                      endret ^         -->
        <input class="jkl-datepicker__input jkl-text-input__input" aria-invalid="true" />
        <button class="jkl-datepicker__action-button jkl-text-input-action-button"><!-- ... --></button>
        <!--                                                  endret ^          -->
    </div>
    <!-- ... -->
</div>
```
