## Mønstre

Mønstre er komponenter som vi kan bruke om igjen. I Jøkul utvikler vi mønstre for handlinger som gjentas ofte, slik at design og bruk blir konsekvent, uavhengig av hvilke løsninger vi lager for Fremtind.

Her er eksempler på mønstre som vi tenker kan være nyttige å ha for deg som designer og utvikler løsninger for Fremtind.

### Vanlige handlinger

Vanlige handlinger er handlinger som gjentar seg uavhengig av komponenter og arbeidsflyter. Handlinger kan være tilbakevirkende (regressive), for eksempel Avbryt eller Slett, eller fremoverrettet (progressive), som Legg til eller Fortsett.
Vi ønsker at designere og utviklere på tvers av Fremtind skal finne ferdige mønstre for slike handlinger. Da slipper dere å finne opp kruttet på nytt hver gang dere trenger vanlige handlinger i Jøkul til løsningene dere lager.

### Deaktiverte tilstander

Vi lager mønstre for deaktiverte tilstander, slik at designere og utviklere vet nøyaktig hvordan det skal se ut når vi tar bort det interaktive momentet i en komponent.

### Filtrering

Måten vi bruker, fjerner eller legger til data i et datasett på, kan vi også standardisere til et mønster. Brukerne skal gjenkjenne hvordan de kan filtrere informasjon, uansett hvor i Fremtinds løsninger de er.

### Overflytsregler

Når en tekst er for lang for et bestemt område, kan vi bestemme hvordan vi vil at dette skal vises. Vi kan for eksempel forkorte informasjonen og vise en ellipse. I Jøkul finner du blant annet mønstre for hvordan vi forkorter søkebaner og lange URL-er.


# Skjemadesign

Skjemaer er viktige i Fremtinds løsninger og vi ønsker at de skal være konsekvente. Her finner du noen regler for  skjemaoppsett og hvordan vi bruker skjemakomponentene.

## Skjemaseksjoner

I Jøkul har vi flere skjemakomponenter, for eksempel
- tekstfelt
- radioknapper
- avmerkingsbokser
- nedtrekksfelt
- datovelgere

En eller flere skjemakomponenter sammen utgjør en _skjemaseksjon_, og et skjema består av en eller flere seksjoner. 

Hver skjemakomponent har en _ledetekst_. Det kan være en overskrift med et spørsmål eller et ord eller en setning som sier noe om hva vi ønsker at brukeren skal oppgi eller gjøre. Deretter er det selve komponenten som brukeren skal gjøre noe med, og eventuelt en hjelpetekst eller melding. Ledetekstene kommer i to størrelser, stor og normal. Vi bruker den store varianten når skjemakomponenten er alene i en seksjon, og den normale når skjemakomponenten står sammen med flere komponenter i samme seksjon.

Vi avgrenser seksjoner tydelig fra hverandre. Til det bruker vi enten luft, hvis seksjonene ligger mot en en felles bakgrunn, eller vi rammer dem inn i  egne kort. Hvis det er nødvendig, kan vi ha en overskrift på hver seksjon.

De interne løsningene vi lager, kan ha mer kompakte skjemakomponenter. Det kan være nyttig hvis det er viktig å komprimere informasjonen vi gir i et skjermbilde, men hovedregelen er at vi også her skal følge prinsippene for skjemaoppsett.

### Hvilken størrelse skal ledetekstene ha i et dynamisk skjema?
I et dynamisk skjema kommer underordnede spørsmål til syne når brukeren har tatt stilling til ett eller flere steg i et skjema.  Da velger du størrelse på ledeteksten ut fra det brukeren ser i standardmodus. Det vil si at hvis en seksjon starter med bare ett spørsmål, så velger du stor ledetekst, mens spørsmålene som dukker opp når du har svart på dette ene spørsmålet, får normal ledetekst. Det er også mulig at svar på et spørsmål kan utløse ene ny skjemaseksjon. 

## Skjemavalidering

I et skjema validerer vi innndata i et felt/en komponent etter følgende praksis: Når brukeren flytter markøren videre til neste felt/komponent og når brukernen skal gå videre i eller sende inn et skjema. 

Hvis valideringen gir feil, får komponenten feilstatus. Det viser vi ved at et spørsmål blir understreket med rødt og det vises en melding som forklarer hva som er feil. Hvis brukeren får feil når hen sender inn skjemaet, flytter vi fokus i skjemaet til den første skjemakomponenten som har feil/ikke besto valideringen.

MERK! I Jøkul har vi valgt at valideringsteksten skal _erstatte_ hjelpeteksten på våre skjemakomponenter. Derfor er det veldig viktig at valideringsteksten også tar med seg informasjonen fra hjelpeteksten, i tillegg til å forklare hva som er feil.
Eksempel: Fødselsnummeret er feil (valideringstekst). Fødselsnummer har 11 siffer (hjelpetekst). 
