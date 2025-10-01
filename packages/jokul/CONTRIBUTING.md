# Bidragsguide

## For mønster

Den enkleste måten å bidra på er å lage en story. En story er en liten kodesnutt, som andre kan kopiere inn i sine
løsninger. Storybook er bygget opp av mange stories, og det er disse vi bruker i portalen.

Den enkleste storyen vi har er nok Button, den er relativt enkel å forstå, og den flest har brukt en håndfull ganger.

### Jeg skjønner ikke hvordan

1. Dra ned repoet
2. Let fram en Story (gjerne Button.stories.ts(x)
3. Kopier fila, plasser den i stories mappa til komponenten som best passer mønsteret.
   a) Dersom det ikke finnes en stories mappe går det helt fint å lage en.
   b) Dersom du ikke vet hvilken komponent som passer best kan det hende at den bør bo et annet sted. Spør designerne
   dine, andre utviklere eller oss!
4. Skriv i vei!

### Jeg trenger å gjøre kall til et system utenfra

Dersom mønsteret du vil dokumentere trenger å hente data anbefaler vi å mocke dette. Som regel kommer du langt med å
bruke en setTimeout funksjon sammen med falsk data. Storybook har også egne funksjoner for å støtte under denne typen
dokumentasjon, spør oss gjerne om hjelp om du står helt fast!

### Jeg får det ikke helt til / det er for mye å sette seg inn i

Send oss en melding med mønsteret dokumentert i Figma, eller aller helst lenke til noe kode! Vi finner alltid ut av noe
sammen 😁👌

### Mønsteret er ikke lagd enda (tror jeg)

Så kult! Som regel er dette den beste tiden for oss å bli involvert, fordi vi kan se om det er et behov vi burde legge
til rette for på andre måter enn bare stories også!

Send en melding til oss personlig, ta det med i et forum, eller lag et issue så kan vi diskutere hvor stor oppgaven er
for oss og for deg!

### Jeg ønsker å endre et mønster som eksisterer 😐

Dette er et supert tema å ta opp i forum. Kanskje dere har innsikt som viser at man burde gjøre forbedringer, eller et
forslag til å løse mønsteret på en helt annen måte? Siden vi ønsker mest mulig gjenbruk av dokumenterte mønstre kan dine
ideer være med å gjøre det bedre for andre løsninger også.

## For komponenter

Den enkleste måten å komme med innspill på komponenter på er å lage et issue her, da kan vi holde styr på det enkelt.
Når det er sagt kan du fint bare sende oss en melding eller ta opp problemet ditt på forum også!

Dersom du har en spesifikk endring du ønsker er det veldig fint om du har noen tanker på hvordan endringen skal se ut
eller fungere.

### Jeg trenger en helt ny komponent

Kult! Da er det enda bedre om du har noen referanser til komponenter andre steder så vi skjønner hvilket behov
komponenten skal fylle.

Her er den enkleste måten å få det gjennom på definitivt å lage en PR så vi kan diskutere det tekniske behovet så vel
som det design-messige.

Dersom du ikke har en god tanke om hvordan det skal gjøres teknisk er det helt greit å bare komme med et løst ønske
også, men da er veien til mål lengre.

## Jeg skjønner ikke helt forskjell på mønster og komponent

Spør! Mønster er større deler av en løsning, men det er litt vanskelig å forstå hvor en komponent slutter og et mønster
starter. Særlig fordi både i React og i Figma blir alt som er gjenbrukbart referert til som komponenter 😑

Igjen, bare spør, forskjellen er ikke så farlig for oss, det handler først og fremst bare om hvordan tingen skal
forvaltes!
