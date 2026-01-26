# Release notes for Jøkul 4.0

Dette er en stor oppdatering av Jøkul, og inneholder flere viktige endringer i hvordan designsystemet er bygget opp og brukes. Kjernen i endringene er 
- **et nytt system for håndtering av størrelse** på komponentene i hele eller deler av grensesnittet, og
- **en ny typografiskala** som er knyttet til systemet for størrelse.

De aller fleste komponentene har fått et litt endret visuelt uttrykk i forbindelse med at system for størrelser og typografi er tatt i bruk. I tillegg har noen komponenter som har vært i beta-versjon en stund blitt tatt inn som fullverdige komponenter.

I tillegg finner du diverse ny funksjonalitet og forbedringer som ny implementasjon av ikoner i Figma, bedre sammenheng mellom ikon- og fontstørrelse, bedre håndtering av knapper i tabeller, og mer!

## Størrelsesmodus

I Jøkul 4.0 introduserer vi konseptet `size`.  Dette styres som en modus i Figma, og med attributten `data-size` i kode. Modusen kan settes på hele eller deler av et skjermbilde, og styrer størrelsen på Jøkul-komponentene som befinner seg i området der modusen er satt.

Størrelsen på komponentene endres ved hjelp av en ny gjennomgående skala for avstander inne i komponentene. Dette sørger for et mer helhetlig uttrykk i komponentbiblioteket som også holder seg konsekvent når størrelsene endrer seg.

`Size` er ikke så forskjellig fra konseptet `density` (eller `layout-density`) som allerede har eksistert i Jøkul, men er implementert på en mye mer helhetlig måte som legger til rette for distributørtilpasning og enklere fremtidig vedlikehold. Navnet er endret for å understreke at det er størrelsen på komponentene som endrer seg, ikke avstanden mellom dem.

## Ny typografisk skala

I kombinasjon med systemet for størrelser kommer Jøkul 4.0 med en ny typografisk skala. Denne bygger på et grunnleggende sett av størrelser, linjehøyder og vekter, og forandrer seg i takt med størrelsesmodusen: Når `size` er satt til `small` minsker også fontstørrelsen, ellers er den lik. Fontstørrelsene endrer seg ikke lenger etter skjermstørrelse, men er justert for å passe på alle typer skjermer.

Du vil fortsatt finne tekststilene du kjenner for titler og overskrifter, men vi har laget to nye grupper av stiler for vanlig tekstinnhold: `paragraph` og `text`. `Paragraph` brukes for løpende tekst, og `text` brukes for korte tekster. Begge deler finnes i variantene `large`, `medium` og `small`. For korte tekster finnes i tillegg `text-micro` for tilfellene der man trenger ekstra liten tekst.

Det meste av brødtekst i Jøkul-løsninger settes med `paragraph-medium` (eller `text-medium` for korte tekster), som tilsvarer `18px`, eller `16px` der `size` er satt til `small`.

## Ny implementasjon av ikoner i Figma

I Jøkul 4.0 har vi gått over til å bruke ikonfonten `Material Symbols` direkte for å vise ikoner, akkurat slik vi gjør i kode. Det betyr at det er enklere å tilpasse ikonene til tekst, og gjør at du enkelt får tilgang på flere ikoner når du designer løsninger.

## Kom i gang

Vi har egne guider for hvordan du bruker den nye funksjonaliteten i Jøkul 4.0 for både Figma og kode, og migrasjonsguider som hjelper deg til å gjøre endringene som er nødvendige for å oppgradere skisser og kodebase.

Dokumentasjonen i den nye portalen er oppdatert for å gjenspeile den nye versjonen, og har fått dokumentasjon av verdiene som ligger til grunn for størrelse, farger og typografi.

Hvis du lurer på noe, eller vil ha hjelp til å ta i bruk Jøkul, er det som alltid bare å ta kontakt med Jøkul-teamet! Vi gleder oss til å bygge noe kult med deg 🧑‍🔧
