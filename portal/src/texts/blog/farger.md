**TL;DR**: Vi har et stort gap midt i fargeskalaen vår som gjør det vanskelig å variere kontrast i det vi designer og lager, og fortsatt oppfylle krav til tilgjengelighet. Særlig skaper det problemer dersom vi ønsker å sette fargene våre i system med design tokens for å gjøre det lettere å designe og utvikle nye komponenter og løsninger. Kan vi utvide eller tenke nytt rundt fargeskalen vår for å løse dette?

## Bakgrunn

Etter å ha blitt inspirert på konferanse har vi i Jøkul-teamet begynt å se på hvordan vi kan jobbe bedre med **design tokens** i Jøkul, og for min egen del har det gitt opphav til en del tanker og mulige problemstillinger. En av dem har med fargene våre å gjøre, men det er greit med litt bakgrunnsinfo før jeg kommer til det.

For å friske opp litt om hva design tokens betyr, så er de frittstående egenskaper som er knyttet til et designsystem eller en visuell profil. De representerer som regel verdier for farger, skriftstørrelser, hjørneavrunding, etc., og gir verdiene _navn_ som kan refereres til slik at man ikke må huske på selve verdien.

Til en viss grad benytter vi oss allerede av dette i Jøkul: Vi har en fargeskala der fargene har navn (`color-snohvit` er `#F9F9F9`), og en spacingskala med t-skjortestørrelser (`spacing-xl` er `40px`). **Men**… Design tokens blir først ordentlig nyttige når man legger inn **ett nivå til** oppå disse grunnverdiene: Når vi i dag har `color-varde` som bakgrunnsfarge på `ToggleSwitch`-komponenten vår er det ingen hint noe sted om hva som gjør den til en egnet farge for akkurat det; valget _virker tilfeldig_. Det er heller ingen egenskap ved fargen Varde som tilsier hvilke andre bruksområder den kan egne seg til. Den er jo tross alt bare en farge?

Ved å legge til et lag med _semantiske verdier_ (eller _roller_ om du vil) som plukker fra grunnverdiene, gjør vi det enklere å bygge opp mønstre, komponenter og sider med konsekvent uttrykk som fortsatt kan tillate variasjon. Hadde vi hatt en verdi som het `color-interactive-element-bg` (tilfeldig forslag) hadde det kanskje vært enklere å forstå at den kan brukes som bakgrunnsfarge for f.eks. `ToggleSwitch`. Fargen ville fortsatt referert til `color-varde`, men det er ikke lenger tilfeldig at det er _den_ fargen som blir valgt. Fargen `varde` vil selvfølgelig også kunne ha andre roller. Tilsvarende kan man lage roller for tekststørrelser, avrunding av hjørner, spacing, etc.

## Problemet

For at slike roller skal fungere må de oppfylle noen forutsetninger. For eksempel må en fargerolle som skal brukes på interaktive elementer ha en kontrast på minst 3:1 mot den eller de fargerollene som brukes på bakgrunner. Tilsvarende må roller for tekstfarge ha en kontrast på minst 4,5:1 (7:1 for liten skrift) mot fargeroller for bakgrunner.

Og her har vi et (potensielt) problem.

Fargeskalaen vår består i praksis av to "bolker" med farger; lyse og mørke. Innad i disse er det **ingen** verdier som har kontrastforhold på over 3:1 mellom seg. Kontrasten mellom den lyseste av de mørke fargene (stein) og hvit er imidlertid hele 6,22:1. I utgangspunktet virker dette kanskje ikke så problematisk, profilen vår er jo tross alt definert av høy kontrast, men det gir oss veldig lite spillerom til å lage gode roller for fargene våre.

For eksempel har tidligere nevnte `ToggleSwitch` faktisk **ikke god nok kontrast** mot noen av fargene våre til å oppfylle kravene til interaktive elementer. Selv ikke mot helhvit, og _i hvert fall ikke_ mot andre overflatefarger vi bruker, som snøhvit og dis. Hvis det er slik at vi ønsker oss en farge uten veldig høy kontrast, som kan brukes mot flere av bakgrunnsfargene våre, er vi nødt til å fylle inn noe av gapet mellom Stein (38,2% lightness) og Svaberg (77,5% lightness).

## Løsninger?

For å bygge et fleksibelt og robust designsystem basert på tokens og roller trenger vi altså flere fargeverdier å plukke fra enn vi har i dag. Den "enkle" løsningen er å finne flere fargenyanser som kan passe inn i den eksisterende skalaen vår, og dette vil nok fint kunne løse problemet. Jeg har imidlertid lyst til å foreslå en oppdeling av fargene våre i to skalaer (i tillegg til meldingsfargene våre).

Flere fargeskalaer er ofte forbundet med flere hovedfarger, gjerne en primær og en sekundær "brand color". Men i tillegg til skalaer for disse fargene finner man gjerne en nøytral skala. Hvis vi kan lage en nøytral skala (som ikke trenger å være _helt_ nøytrale gråtoner) og f.eks. en skala basert rundt Varde og Granitt har man kanskje nok farger å plukke fra til å finne både gode farger for bakgrunner og interaktive elementer.

Denne tilnærmingen finner vi f.eks. i [Carbon Design System](https://carbondesignsystem.com/guidelines/color/overview/#color-anatomy) (med blå og nøytral skala). [Material Design 3.0](https://m3.material.io/styles/color/the-color-system/key-colors-tones) utvider dette til tre primærfargeskalaer og to nøytrale skalaer, men prinsippet er det samme. Hvis du synes at disse skalaene har altfor mange farger i seg til å være nyttige, så husk at **ikke alle verdier fra alle skalaene trenger å benyttes**. I en verden med design tokens er skalaene et palett man plukker fra, som sørger for at verdiene man bruker _harmonerer med hverandre_. I daglig bruk forholder man seg kun til de fargene som er tatt i bruk i _roller_.
