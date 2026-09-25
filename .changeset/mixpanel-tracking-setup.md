---
"@fremtind/jokul": minor
---

Ny, valgfri Mixpanel-sporing via `@fremtind/jokul/cookie-consent` - del av `CookieConsentProvider`. Legg til `mixpanelToken` (og valgfritt `appName`) på provideren for å aktivere. Samtykke hentes automatisk fra samtykke-cookien. Sporingen bygger på Mixpanels innebygde `autocapture` (klikk-/hendelsesdeteksjon), scopet til elementer merket med `data-jkl-tracked`. `mixpanel-browser` er en valgfri avhengighet (`optionalDependencies`) som ikke lastes eller bunter noe hos konsumenter uten samtykke og token.

I tillegg sender komponentene som standard en minimal, anonymisert versjon av samme hendelser til Jøkul-teamets sentrale Mixpanel-prosjekt, uavhengig av egen `mixpanelToken` - gir aggregert innsikt i komponentbruk på tvers av apper. Den sentrale instansen inkluderer bevisst `appName` (for å identifisere hvilke apper/team som bruker komponentbiblioteket) og nettleser-/enhet-/skjermdata (ikke persondata), men fjerner automatisk URL-/rute-/DOM-innhold, IP-basert geo-oppslag og teamets egne `tracking`-felter (`property_blacklist` + `ip: false`). Den interne instansen er i tillegg isolert fra teamets egen (`cross_subdomain_cookie: false`, `secure_cookie: true`, eksplisitt pinnede session-replay-/heatmap-/tekstinnhold-innstillinger) - teamets egen Mixpanel-instans er helt upåvirket av dette.

Nye komponenter kan legge til egen sporing uten å røre sentrale filer: sett `data-jkl-tracked="Komponentnavn"` (og eventuelt flere `data-jkl-*`-attributter) på rot-DOM-elementet. Komponenter som støtter `WithTracking` tar også imot en felles `tracking`-prop, f.eks. `<Button tracking={{ orderId, flow: "checkout" }} />`, for egne, teamspesifikke felter som kun sendes til eget prosjekt. Se [TRACKING.md](../packages/jokul/TRACKING.md).
