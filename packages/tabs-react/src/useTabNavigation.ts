import { useCallback, useEffect, useState } from "react";

const slugify = (input: string) =>
    input.toLocaleLowerCase().replace(/æ/g, "ae").replace(/ø/, "oe").replace(/å/, "aa").replace(/(\W)/g, "-");

const getSearchParameter = (parameter: string) => {
    if (typeof window !== "undefined") {
        const pageParams = new URLSearchParams(window.location.search);
        return pageParams.get(parameter);
    }
    return null;
};

export type TabNavigationOptions = {
    /**
     * En tekststreng du vil bruke som URL-parameter for valgt tab
     * Vil gi utslag i lenker på formen `dinløsning.com/dinside?[urlParameter]=din-tab`
     * @default "seksjon"
     */
    urlParameter?: string;
    /**
     * Navigasjonsfunksjon fra eventuell Router du bruker i applikasjonen din,
     * for å få URL-endringen inn i nettleserhistorien på riktig måte.
     * Hvis denne ikke defineres legges endringen inn i `window.history`.
     */
    navigateFunction?: (sectionPath: string) => void;
    /**
     * Eventuell funksjonalitet du vil ha utført ved onChange fra Tabs-komponenten
     */
    onChange?: (tabIndex: number) => void;
};

/**
 * useTabNavigation lar deg behandle navigering i tabs som navigasjon på en side, ved å legge til et søkeattributt i sidens
 * URL med henvisning til gjeldende tab. Dermed kan du også lenke til en spesifikk tab ved å bruke samme syntaks i lenkene dine.
 *
 * @param tabTitles Overskriftene på tabene du vil bruke (tips: bruk dette arrayet til å rendre Tabs i komponenten også)
 * @param options Valgfritt objekt med valg for håndtering av navigasjonen
 * @returns Et objekt med indeksen for valgt tab og en funksjon for håndtering av onChange i Tabs-komponenten
 */
export const useTabNavigation = (tabTitles: string[], options?: Partial<TabNavigationOptions>) => {
    const { urlParameter, navigateFunction, onChange } = { urlParameter: "seksjon", ...options };

    const getTabFromURL = useCallback(() => {
        const paramSection = tabTitles.findIndex((section) => slugify(section) === getSearchParameter(urlParameter));
        return paramSection < 0 ? 0 : paramSection;
    }, [tabTitles, urlParameter]);

    const [navigatedTab, setNavigatedTab] = useState(getTabFromURL());

    const navigate = useCallback(
        /**
         * Oppdater URL med sti til valgt tab, eller naviger med angitt funksjon
         * @param sectionID Indeks til tab som navigeres til
         */
        (sectionID: number) => {
            const tabString = slugify(tabTitles[sectionID]);
            if (navigateFunction) {
                navigateFunction(`?${urlParameter}=${tabString}`);
            } else if (typeof window !== "undefined") {
                // Legger til en URL i historien til nettleseren uten å laste siden på nytt
                // https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
                window.history.pushState(null, tabTitles[sectionID], `?${urlParameter}=${tabString}`);
            }
        },
        [tabTitles, navigateFunction, urlParameter],
    );

    useEffect(() => {
        const updateCurrentTab = () => {
            setNavigatedTab(getTabFromURL());
        };

        if (typeof window !== "undefined") {
            // Oppdater valgt tab dersom man går frem eller tilbake i historien i nettleservinduet
            window.addEventListener("popstate", updateCurrentTab);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("popstate", updateCurrentTab);
            }
        };
    }, [getTabFromURL]);

    useEffect(() => {
        if (typeof window !== "undefined" && typeof document !== "undefined") {
            // Scroll til eventuell hash-lenke (dokumentet kan ikke gjøre dette automatisk,
            // siden innholdet ikke nødvendigvis er lastet før vi oppdaterer havigatedTab)
            if (window.location.hash !== "") {
                const hash = decodeURI(window.location.hash);
                document.querySelector(hash)?.scrollTo();
            }
        }
    }, []);

    const handleTabChange = (tabIndex: number) => {
        onChange?.(tabIndex);
        navigate(tabIndex);
    };

    return {
        handleTabChange,
        navigatedTab,
    };
};
