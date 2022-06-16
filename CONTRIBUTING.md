# Bidragsguide

## Bidra til Jøkul

Jøkul er et fellesprosjekt for alle i Fremtind. Det vil si at det også er _ditt_. Om du oppdager en feil, eller har et ønske om å gjøre en endring eller legge noe til, så er det aller beste om _du_ sørger for å få det gjort. Jøkul-teamet er her for å hjelpe deg med det praktiske.

Før du begynner bør du ha lest [Hvordan endre Jøkul](https://jokul.fremtind.no/guider/hvordan-endre-jokul). Guiden der forklarer den anbefalte fremgangsmåten for å foreslå en endring. Kort fortalt går det ut på å snakke med folk! 😄 Guiden forklarer hvor og hvordan vi pleier å samarbeide, noen tips og triks for å få til en god diskusjon, og veien videre når vi har blitt enige om noe.

Det er skrevet en [innføring for utviklere her](https://jokul.fremtind.no/guider/utvikling) som hjelper deg med å komme i gang med utvikling _for_ Jøkul, ikke bare _med_ Jøkul.

### 📚 Minstekrav til dokumentasjon

Vi har blitt [enige om noen minimumskrav](https://github.com/fremtind/jokul/discussions/2500#discussioncomment-1645212) for dokumentasjon av [komponenter i portalen](https://jokul.fremtind.no/komponenter/accordion). Disse er:

-   Ingress med kort beskrivelse av komponenten
-   Første eksempel synlig uten å scrolle
-   Relevante eksempler på riktig og feil bruk
-   Live kodeeksempel (oppdateres med valgte egenskaper)
-   React-props for komponenten(e) i bunnen

I tillegg er det noen føringer for dokumentasjon i hver pakke sin README:

-   Lenke direkte til dokumentasjonen for komponenten i portalen
-   Beskrive hvordan installere pakken, med eksempelkommandoer for copy+paste
-   Eksempel på `import` av React- og CSS-kode for copy+paste

Sist, men ikke minst – om du gjør en _breaking change_ må det dokumenteres i pakken sin MIGRATION hvordan man migrerer fra forrige versjon til den nye:

-   Opprett MIGRATION.md om den ikke finnes, i samme mappe som README
-   Den nye majorversjonen skal ha en egen heading. Bruk dagens versjon + 1.
-   Beskriv alle steg som må tas dersom man skal oppgradere til den nye versjonen
-   Bruk veldig gjerne `diff`-eksempler som demonstrerer endringen visuelt. Se f. eks [radio-button-react/MIGRATION.md](https://github.com/fremtind/jokul/blob/main/packages/radio-button-react/MIGRATION.md).
