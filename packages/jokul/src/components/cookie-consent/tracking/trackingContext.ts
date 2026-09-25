import type { Mixpanel } from "mixpanel-browser";
import { useEffect, useRef } from "react";

const MIXPANEL_API_HOST = "https://api-eu.mixpanel.com";

/**
 * CSS-selektor som markerer et element som sporbart av Mixpanels
 * `autocapture`. Komponenter (f.eks. `Button`) setter selv attributtet
 * `data-jkl-tracked="<Komponentnavn>"` på sitt rot-DOM-element - se
 * TRACKING.md. Autocapture er scopet til KUN slike elementer, ikke resten
 * av forbrukerappens side.
 */
const TRACKED_ELEMENT_SELECTOR = "[data-jkl-tracked]";

/**
 * `data-*`-attributter Jøkul-komponenter kan sette for å berike
 * autocapture-hendelsen (f.eks. `data-jkl-variant`). Fanges opp av BEGGE
 * Mixpanel-prosjektene.
 */
const SHARED_CAPTURE_EXTRA_ATTRS = [
    "data-jkl-tracked",
    "data-jkl-variant",
    "data-jkl-has-icon",
    "data-jkl-checked",
    "data-jkl-selected",
    "data-loading",
    "disabled",
];

/**
 * `data-jkl-tracking` bærer teamets egne, vilkårlig formede felter (fra
 * `tracking`-propen, se `WithTracking`) som én JSON-streng. Fanges KUN opp
 * av teamets egen Mixpanel-instans - Jøkuls sentrale instans utelater den
 * helt fra sin `capture_extra_attrs`, så feltene når den aldri.
 */
const TEAM_ONLY_CAPTURE_ATTR = "data-jkl-tracking";

/**
 * Mixpanel-SDK-ens egne automatiske properties som kan røpe app-spesifikke
 * detaljer (URL-er, ruter, DOM-innhold) - fjernes fra Jøkul-teamets
 * sentrale prosjekt for å holde det anonymisert. Se TRACKING.md.
 *
 * Nettleser/enhet/skjerm-data (`$browser`, `$os`, `$device`,
 * `$screen_height` osv.) er BEVISST IKKE med i denne lista lenger - det er
 * ikke persondata om enkeltbrukere (ingen IP lagres her uansett, se
 * `ip: false` under), og gir Jøkul-teamet verdifull innsikt for å
 * prioritere nettleserstøtte og responsive breakpoints i komponentene. Se
 * "Hva sendes til Jøkul vs. til teamets eget prosjekt" i TRACKING.md.
 */
const INTERNAL_PROPERTY_BLACKLIST = [
    // Autocapture sin DOM-/side-kontekst som kan røpe interne ruter/URL-er
    // eller vilkårlig DOM-innhold (klasser, attributter) i forbrukerappen:
    "$elements",
    "$pathname",
    "$host",
    // Mixpanel SDK sine generelle automatiske super-properties for
    // navigasjon/URL - samme begrunnelse som over:
    "$current_url",
    "$referrer",
    "$referring_domain",
    // Autocapture sin egen kildekode (getPropsForDOMEvent i
    // autocapture/utils.js) løfter href-attributtet til nærmeste
    // <a>-forelder opp som en EGEN topplevel-property, UAVHENGIG av
    // $elements over. Uten denne ville f.eks. Link/NavLink (som begge
    // rendrer <a href> og er data-jkl-tracked) lekke den bokstavelige
    // URL-en/ruten til sentralprosjektet, selv om $elements er blacklistet.
    "$el_attr__href",
    // Samme mønster som $el_attr__href over: autocapture løfter target-
    // elementets CSS-klasser opp som en EGEN topplevel-property
    // ($el_classes), UAVHENGIG av $elements. Uten denne ville
    // forbruker-/app-spesifikke klassenavn (som kan røpe interne
    // komponentnavn/varianter) fortsatt lekke til sentralprosjektet, selv
    // om $elements er blacklistet.
    "$el_classes",
];

// Leses via en funksjon, ikke en modulnivå-konstant, slik at verdien kan
// stubbes i tester. Bakes inn ved bygg, se vite.build.config.mjs.
function getJokulMixpanelToken(): string {
    return (
        (globalThis as { __JOKUL_MIXPANEL_TOKEN__?: string })
            .__JOKUL_MIXPANEL_TOKEN__ ?? ""
    );
}

// mixpanel.init(token, config, name) er en no-op hvis instansnavnet
// allerede er i bruk - den returnerer da bare den FØRSTE klienten og
// ignorerer nytt token/config (bekreftet i mixpanel-browser sin
// kildekode). Gi hver konfigurasjon et unikt navn slik at en
// rekonfigurering (f.eks. endret `mixpanelToken`) alltid gir en ny,
// korrekt konfigurert instans i stedet for å gjenbruke en utdatert klient.
let instanceCounter = 0;
function nextInstanceName(prefix: string): string {
    instanceCounter += 1;
    return `${prefix}_${instanceCounter}`;
}

/**
 * `pageview`/`scroll` er ekte side-nivå-signaler (ikke knyttet til et
 * spesifikt element) og filtreres IKKE av `allow_selectors` - de holdes
 * derfor av med vilje, siden vi kun vil spore komponentbruk, ikke
 * generell side-analytics.
 *
 * `click`, `rage_click`, `dead_click`, `input` og `submit` sendes derimot
 * ALLE gjennom samme element-baserte filter (`allow_selectors`) som vanlig
 * klikk - de skjer aldri, og sender aldri noe, for elementer som ikke er
 * merket med `data-jkl-tracked` (bekreftet i mixpanel-browser sin
 * autocapture-kildekode: alle fem rutes gjennom samme
 * `trackDomEvent()`/`getPropsForDOMEvent()`). Å skru dem av ville derfor
 * IKKE gitt mer personvern eller mindre side-omfang - bare mindre innsikt.
 * `rage_click`/`dead_click` er dessuten spesielt verdifulle
 * designsystem-signaler (frustrerte/gjentatte klikk, og klikk som
 * tilsynelatende ikke gjør noe - typiske tegn på forvirrende/ødelagte
 * komponenter), så disse holdes derfor PÅ. `input`/`submit` holdes også
 * PÅ for å være klare den dagen skjema-/inndata-komponenter (TextInput,
 * Select, Checkbox osv.) merkes med `data-jkl-tracked` - helt uten effekt
 * før det skjer.
 */
function buildAutocaptureConfig(
    captureExtraAttrs: string[],
    { pinPrivacyDefaults = false }: { pinPrivacyDefaults?: boolean } = {},
) {
    return {
        click: true,
        rage_click: true,
        dead_click: true,
        input: true,
        submit: true,
        pageview: false as const,
        scroll: false,
        allow_selectors: [TRACKED_ELEMENT_SELECTOR],
        capture_extra_attrs: captureExtraAttrs,
        // `capture_text_content` er allerede `false` som SDK-default (DOM-
        // tekstinnhold, f.eks. dynamisk knappetekst, fanges ikke opp). Vi
        // pinner den eksplisitt HER, men KUN for Jøkuls interne instans
        // (`pinPrivacyDefaults`) - se `useMixpanelTracking` under. Teamets
        // egen instans lar nøkkelen stå urørt, slik at vi aldri tar et
        // valg om tekstinnholds-fangst på vegne av teamets EGET prosjekt.
        ...(pinPrivacyDefaults ? { capture_text_content: false } : {}),
    };
}

/**
 * Setter opp og forvalter Mixpanel-instansene (teamets og Jøkuls) basert på
 * samtykke fra `CookieConsentProvider`. Bruker Mixpanels innebygde
 * `autocapture` til å spore klikk på elementer merket med
 * `data-jkl-tracked`, i stedet for håndskrevne `track()`-kall - nye
 * komponenter instrumenteres ved å sette riktige `data-*`-attributter, se
 * TRACKING.md.
 *
 * `mixpanel-browser` er en `optionalDependency` og importeres derfor
 * dynamisk (`import("mixpanel-browser")`), KUN når sporing faktisk skal
 * initialiseres (samtykke + token finnes) - se `package.json`. Konsumenter
 * som utelater den valgfrie avhengigheten helt, og/eller aldri gir
 * samtykke eller setter et token, verken laster ned eller kjører
 * SDK-koden i det hele tatt. Et mislykket/manglende modul-oppslag fanges
 * opp og logges (kun i dev), i stedet for å kaste videre og krasje appen.
 */
export function useMixpanelTracking({
    mixpanelToken,
    appName,
    consentGranted,
}: {
    mixpanelToken?: string;
    appName?: string;
    consentGranted: boolean;
}): void {
    const teamMixpanelRef = useRef<Mixpanel>();
    const teamInitializedRef = useRef(false);
    const jokulMixpanelRef = useRef<Mixpanel>();
    const jokulInitializedRef = useRef(false);

    useEffect(() => {
        const jokulMixpanelToken = getJokulMixpanelToken();
        const shouldInitTeamTracking = Boolean(consentGranted && mixpanelToken);
        const shouldInitJokulTelemetry = Boolean(
            consentGranted && jokulMixpanelToken,
        );

        // Satt til `true` av cleanup-funksjonen under (ved unmount ELLER
        // ved at effekten kjører på nytt pga. endrede deps) - hindrer at
        // det asynkrone modul-oppslaget under setter refs/oppretter
        // instanser for en effekt-kjøring som allerede er "utdatert" (f.eks.
        // ved raske reconfigureringer, eller React StrictMode sin
        // mount->unmount->mount-simulering i dev).
        let cancelled = false;

        async function setup() {
            if (!shouldInitTeamTracking && !shouldInitJokulTelemetry) {
                return;
            }

            let mixpanel: Mixpanel;
            try {
                // `mod.default` er runtime-ekvivalent med den gamle
                // statiske `import mixpanel from "mixpanel-browser"` (Node
                // sin CJS/ESM-interop gir samme objekt), men TypeScripts
                // typechecker klarer ikke å utlede riktig type for et
                // dynamisk `import()` av denne CJS-pakken (uten et
                // `exports`-felt i dens package.json) under
                // `moduleResolution: NodeNext` - den faller tilbake til
                // hele modul-navnerommet i stedet for kun default-eksporten.
                // Trygg å asserte eksplisitt her, siden `Mixpanel`-typen
                // uansett kommer fra samme `.d.ts`-fil.
                mixpanel = (await import("mixpanel-browser"))
                    .default as unknown as Mixpanel;
            } catch (error) {
                if (process.env.NODE_ENV !== "production") {
                    console.warn(
                        "Kunne ikke laste `mixpanel-browser` (valgfri " +
                            "avhengighet) - Mixpanel-sporing deaktiveres for " +
                            "denne appen. Installer `mixpanel-browser` hvis " +
                            "du ønsker sporing. Se TRACKING.md.",
                        error,
                    );
                }
                return;
            }
            if (cancelled) {
                return;
            }

            if (shouldInitTeamTracking && mixpanelToken) {
                const teamInstanceName = nextInstanceName("__jkl_team__");
                const teamInstance = mixpanel.init(
                    mixpanelToken,
                    {
                        api_host: MIXPANEL_API_HOST,
                        // Isolerer persistens (distinct_id, super-properties,
                        // batch-kø osv.) fra alt annet forbrukerappen selv
                        // måtte gjøre med `mixpanel-browser` - Mixpanel-SDK-en
                        // nøkler persistens på `token` + `persistence_name`
                        // (default: kun token), IKKE på instansnavnet i
                        // `init()`. Uten dette ville en team-app som (fortsatt)
                        // bruker samme token til egen, separat
                        // Mixpanel-instrumentering, dele lagringsnøkkel med
                        // oss - og f.eks. `reset()` her ville da nullstilt
                        // forbrukerappens egen persisterte tilstand også.
                        persistence_name: teamInstanceName,
                        // Kun `false` for HTTPS-transport - harmløst og
                        // begrenser ingen funksjonalitet, så satt likt på
                        // begge instanser (se `secure_cookie` under).
                        secure_cookie: true,
                        // Merk: `cross_subdomain_cookie` og
                        // `record_sessions_percent`/`record_heatmap_data`
                        // settes BEVISST IKKE her (kun på Jøkuls interne
                        // instans under) - det er teamets eget prosjekt/token,
                        // og disse verdiene ville kunne stå i veien for at
                        // teamet selv bruker Mixpanels Session Replay/
                        // cross-subdomain-identitet på sin egen instans. Se
                        // TRACKING.md.
                        autocapture: buildAutocaptureConfig([
                            ...SHARED_CAPTURE_EXTRA_ATTRS,
                            TEAM_ONLY_CAPTURE_ATTR,
                        ]),
                    },
                    teamInstanceName,
                );
                if (cancelled) {
                    // Effekten ble supersedert mens `init()` (synkron, men
                    // etter et asynkront modul-oppslag) kjørte - tegn
                    // øyeblikkelig ut igjen i stedet for å la den henge.
                    teamInstance.disable();
                    teamInstance.reset();
                    return;
                }
                if (appName) {
                    teamInstance.register({ appName });
                }
                teamMixpanelRef.current = teamInstance;
                teamInitializedRef.current = true;
            }

            if (shouldInitJokulTelemetry) {
                const jokulInstanceName = nextInstanceName("__jkl_internal__");
                const jokulInstance = mixpanel.init(
                    jokulMixpanelToken,
                    {
                        api_host: MIXPANEL_API_HOST,
                        ip: false,
                        persistence_name: jokulInstanceName,
                        secure_cookie: true,
                        // Mixpanel setter som default cookien på hele det
                        // ekstraherte rotdomenet (`cross_subdomain_cookie:
                        // true`) når den ikke er eksplisitt satt. Siden
                        // instansnavnet/`persistence_name` vårt er identisk
                        // for ALLE forbrukerapper, ville to ulike apper på
                        // samme rotdomene (f.eks. to ulike Fremtind-apper) i
                        // praksis dele samme skjulte bruker-ID i dette
                        // sentrale prosjektet - forurenser adopsjonstallene og
                        // kan gjøre at én apps samtykke-tilbaketrekning
                        // (`reset()`) sletter en annen apps tilstand. `false`
                        // binder cookien til eksakt vertsnavn i stedet. Gjelder
                        // KUN denne interne instansen, se kommentar over.
                        cross_subdomain_cookie: false,
                        // Session Replay/heatmaps er allerede `0`/`false` som
                        // SDK-default, og slår uansett ikke inn automatisk her
                        // (`remote_settings_mode` er `'disabled'` som default,
                        // og vi setter den ikke). Pinnes likevel EKSPLISITT for
                        // denne instansen, siden en feil her ville betydd fullt
                        // skjermopptak av forbrukerappen sentralt hos oss - noe
                        // som aldri skal kunne skje, uansett fremtidige
                        // kodeendringer. IKKE satt på teamets instans over
                        // (se kommentar der).
                        record_sessions_percent: 0,
                        record_heatmap_data: false,
                        property_blacklist: INTERNAL_PROPERTY_BLACKLIST,
                        autocapture: buildAutocaptureConfig(
                            SHARED_CAPTURE_EXTRA_ATTRS,
                            { pinPrivacyDefaults: true },
                        ),
                    },
                    jokulInstanceName,
                );
                if (cancelled) {
                    jokulInstance.disable();
                    jokulInstance.reset();
                    return;
                }
                // `appName` lar Jøkul-teamet se hvilke apper/team som faktisk
                // bruker komponentbiblioteket (og hvilke komponenter/varianter
                // hvor mye) - helt sentralt for å kunne prioritere
                // designsystemarbeid og for å kunne ta kontakt med team som
                // f.eks. bruker en utdatert variant. Er kun med her når teamet
                // selv har satt den, akkurat som for egen instans over.
                if (appName) {
                    jokulInstance.register({ appName });
                }
                jokulMixpanelRef.current = jokulInstance;
                jokulInitializedRef.current = true;
            }
        }

        setup();

        // Rydder opp FORRIGE konfigurasjon - både når effekten kjører på
        // nytt (endret token/appName/samtykke) og ved faktisk unmount
        // (f.eks. at `CookieConsentProvider` selv avmonteres, eller React
        // StrictMode sin doble mount/unmount i dev). `.disable()` er en
        // dokumentert, ikke-destruktiv Mixpanel-API som gjør ALLE
        // fremtidige `track()`-kall på DENNE instansen til no-ops
        // (bekreftet i mixpanel-browser sin kildekode: `track()` sjekker
        // `_flags.disable_all_events` før noe som helst sendes) - i
        // motsetning til kun `.reset()` (som bare nullstiller identitet/
        // persistens), hindrer dette at autocapture sine `window`-nivå
        // DOM-lyttere (som mixpanel-browser selv aldri eksplisitt fjerner
        // fra en forkastet instans) fortsetter å SENDE klikk/hendelser fra
        // en utdatert klient - selve årsaken til at rekonfigurering/
        // avmontering tidligere kunne gi lekkasje/duplisering av
        // hendelser. Selve DOM-lytterne blir stående registrert (et lite,
        // ubetydelig minnefotavtrykk for en provider som normalt kun
        // rekonfigureres et fåtall ganger i en apps levetid), men de kan
        // aldri lenger faktisk sende noe.
        return () => {
            cancelled = true;
            if (teamInitializedRef.current) {
                teamMixpanelRef.current?.disable();
                teamMixpanelRef.current?.reset();
            }
            teamMixpanelRef.current = undefined;
            teamInitializedRef.current = false;
            if (jokulInitializedRef.current) {
                jokulMixpanelRef.current?.disable();
                jokulMixpanelRef.current?.reset();
            }
            jokulMixpanelRef.current = undefined;
            jokulInitializedRef.current = false;
        };
    }, [consentGranted, mixpanelToken, appName]);
}
