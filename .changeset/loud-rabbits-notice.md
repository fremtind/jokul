---
"@fremtind/jokul-mcp-server": patch
---

Legger til en MCP-server for Jøkul, som hjelper AI-modeller med å bruke designsystemet på riktig måte i prosjektet ditt.

## Hva er MCP?

[Model Context Protocol](https://modelcontextprotocol.io/) (MCP) er en åpen protokoll som lar AI-assistenter (som Claude, Copilot, m.fl.) få tilgang til verktøy og datakilder. Denne serveren eksponerer Jøkul-dokumentasjon og komponentinformasjon gjennom MCP.

## Funksjoner

### Verktøy (Tools)

#### Kildekode og imports

- **`list_components`** – List alle tilgjengelige Jøkul-komponenter med info om Figma Code Connect, stories og dokumentasjon
- **`get_component_info`** – Hent detaljert informasjon om en spesifikk komponent (kildekode, typer, Figma Code Connect, stories)
- **`get_figma_code_connect`** – Hent Figma Code Connect-eksempler som viser hvordan Figma-design mapper til React-kode
- **`get_usage_guide`** – Hent den komplette brukerveiledningen for Jøkul
- **`get_migration_guide`** – Hent migreringsveiledning for oppgradering mellom versjoner
- **`search_components`** – Søk etter komponenter basert på funksjonalitet (f.eks. "form", "navigation", "feedback")
- **`get_import_statement`** – Hent korrekte import-statements for komponenter, hooks og utilities

#### Portal (jokul.fremtind.no)

- **`portal_list_components`** – List alle komponenter dokumentert i portalen, med beskrivelse, kategorier og status
- **`portal_get_component`** – Hent full dokumentasjon for en komponent fra portalen, inkludert retningslinjer, do/don't og relaterte komponenter
- **`portal_list_fundamentals`** – List alle grunnleggende artikler i portalen (designprinsipper, tilgjengelighet, farger, typografi, m.m.)
- **`portal_get_fundamental`** – Hent fullt innhold fra en grunnleggende artikkel
- **`portal_list_blog_posts`** – List blogginnlegg og artikler fra portalen (release notes, guider, nyheter)
- **`portal_get_blog_post`** – Hent fullt innhold fra et blogginnlegg
- **`portal_search`** – Søk på tvers av alt innhold i portalen (komponenter, grunnleggende og blogg)

### Ressurser (Resources)

- `jokul://usage-guide` – Brukerveiledning i Markdown-format
- `jokul://migration-guide` – Migreringsdokumentasjon
- `jokul://components` – JSON-liste over alle komponenter

### Prompt-maler (Prompts)

- **`create_jokul_component`** – Veiledning for å lage nye UI-komponenter med Jøkul
- **`review_jokul_usage`** – Gjennomgang av kode for korrekt Jøkul-bruk og tilgjengelighet
- **`migrate_to_jokul_v4`** – Hjelp med migrering fra eldre Jøkul-versjoner til v4

## Kom i gang

Se [README](https://github.com/fremtind/jokul/blob/main/packages/mcp-server/README.md) for oppsettsinstruksjoner for VS Code, IntelliJ, Zed og andre MCP-klienter.