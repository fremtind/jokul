## Mønstre

Mønstre er komponenter som vi kan bruke om igjen. I Jøkul vil vi utvikle mønstre for handlinger som gjentas ofte, slik at design og bruk blir konsekvent uansett hvilke løsning vi lager for Fremtid.
Her er eksempler på mønstre som vi tenker kan være nyttige å ha for de som bruker Jøkul til å designe og utvikle løsninger for Fremtind.

### Vanlige handlinger

Vanlige handlinger er handlinger som gjentar seg uavhengig av komponenter og arbeidsflyter. De kan være tilbakevirkende (regressive), for eksempel Avbryt eller Slett, eller fremoverrettet (progressive), som Legg til eller Fortsett.
Vi ønsker at designere og utviklere på tvers av Fremtind skal finne ferdige mønstre for slike handlinger. Da slipper de å finne opp kruttet på nytt hver gang de trenger vanlige handlinger i Jøkul, til løsningene de lager.

### Deaktiverte tilstander

Vi lager mønstre for deaktiverte tilstander, slik at designere og utviklere vet nøyaktig hvordan det skal se ut når vi tar bort det interaktive momentet i en komponent.

### Filtrering

Måten vi bruker, fjerner eller legger til data i et datasett, kan vi også standardisere til et mønster. Brukerne skal gjenkjenne hvordan de kan filtrere informasjon, uansett hvor i Fremtinds løsninger de er.

### Overflytsregler

Når en tekst er for lang for et bestemt område, kan vi bestemme hvordan vi vil at dette skal vises. Vi kan for eksempel forkorte informasjonen og vise en ellipse. I Jøkul finner du blant annet mønstre for hvordan vi forkorter søkebaner og lange URL-er.


# Skjemadesign

Skjema utgjør en viktig del av Fremtinds løsninger. For å sikre konsistens på tvers har vi laget noen regler for skjemaoppsett bruk av skjemakomponentene i Jøkul.

## Skjemaseksjoner

I Jøkul har vi flere skjemakomponenter; tekstfelt, radioknapper, avmerkingsbokser, nedtrekksfelt, datovelger og flere. En eller flere skjemakomponenter sammen utgjør en skjemaseksjon, og et skjema består av en eller flere seksjoner. 

Hver skjemakomponent består av en label (Aka tilhørende overskrift som beskriver f.eks et spørsmål eller ønsket input), selve komponenten som brukeren skal interagere med og en mulig hjelpetekst / valideringstekst. Labels kommer i to størrelser, stor og normal. Vi bruker den store varianten når skjemakomponenten er alene i sin seksjon, og vi bruker normal når skjemakomponenten står med flere komponenter i samme seksjon.

Seksjoner må tydelig avgrenses fra hverandre. Enten ved hjelp av whitespace om de ligger på en felles bakgrunn, eller ved å innramme de i separate kort. I tillegg til skjemakomponentene kan en seksjon ha en separat overskrift dersom det behøves.

For interne løsninger tilbyr vi mer kompakte varianter av skjemakomponentene. Disse kan brukes dersom det er viktig å komprimere informasjonen som gis i et skjermbilde, men utover dette skal de samme prinsippene for skjemaoppsett følges.

### Dynamiske skjema
Dersom man har dynamiske skjema, altså spørsmål som kommer til syne først etter brukeren har tatt stilling til et eller flere steg i et skjema, så velger man størrelse på label utifra hva som brukeren ser i default state. Altså, dersom en seksjon starter med bare ett spørsmål så velger man stor variant, mens spørsmålene som dukker opp etter at bruker har svart på denne bruker normal variant. Det er også tillatt at svar på et spørsmål kan lage en ny skjemaseksjon for brukeren. 

## Skjemavalidering

Som standard bør følgende praksis for validering gjelde: Det valideres når fokus flyttes vekk fra en skjemakomponent (on blur) og det valideres når man prøver å sende inn eller bekrefte skjemaet (submit). 

Dersom noe feilvalideres får komponenten(e) error-state, med en rød valideringstekst som forklarer hva som er feil. Ved feilvalidering på submit scroller vi opp til første skjemakomponent som ikke validerte.

MERK! Valideringsteksten ERSTATTER hjelpeteksten på våre skjemakomponenter. Det er derfor veldig viktig at valideringsteksten ivaretar informasjonen som stod i hjelpeteksten i tillegg til å forklare hva som er feil.
