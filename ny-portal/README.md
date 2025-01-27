# Lokalt oppsett

Jøkul-portalen kan kjøres opp i lokalt utviklingsmiljø mot en lokal database på din egen maskin. Det vil si at du selv må legge inn data for at det skal vises fornuftig innhold i portalen utover det som er hardkodet. På sikt ønsker vi å få satt opp det lokale miljøet til å kunne hente data fra testmiljø eller liknende.

## Installasjon av Postgres

For å kunne kjøre opp portalen lokalt må du ha en PostgreSQL-database kjørende lokalt. Den enkleste måte å installere Postgres på utviklermaskinene er gjennom [Homebrew](https://brew.sh/):

```sh
brew install postgresql@14
```

Du kan nå sette opp Postgres som en `service` i Homebrew slik at den alltid kjører i bakgrunnen når maskinen er på:

```sh
brew services start postgresql@14
```

## Oppsett av database

Når Postgres kjører på maskinen din må du opprette en database som dataene i portalen skal lagres i. Dette gjør du gjennom verktøyet `psql` som blir installert med Postgres.

1. Koble deg på standard-databasen med kommandoen

```sh
psql postgres
```

2. Opprett en ny database med følgende SQL-spørring (husk semikolon!):

```sql
CREATE DATABASE "jokul-portal"; -- Du kan kalle databasen hva du vil, men vi anbefaler jokul-portal
```

3. Sjekk at databasen du opprettet er listet opp når du kjører kommandoen `\l`

## Oppsett av miljøvariabler

For å kunne kjøres opp trenger portalen at det er definert to miljøvariabler i en `.env`-fil på rot i portal-mappen:

| Variabel         | Verdi                                   | Funksjon                        |
| ---------------- | --------------------------------------- | ------------------------------- |
| `PAYLOAD_SECRET` | Valgfri, tilfeldig verdi                | Brukes internt av Payload       |
| `DATABASE_URI`   | `postgresql://localhost/<databasenavn>` | Tilkoblingsstreng for databasen |

Du kan ta utgansgpunkt i filen `.env.example`, og erstatte verdiene der med dine egne hvis du har valgt et annet navn for databasen din.
