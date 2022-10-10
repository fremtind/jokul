import { NavCard } from "@fremtind/jkl-card-react";
import { useScreen, useBrowserPreferences } from "@fremtind/jkl-react-hooks";
import { Link, withPrefix } from "gatsby";
import React, { useState, useMemo } from "react";
import { CardList } from "../components/Card";
import { DelayText } from "../components/delay-text";
import { PrincipleDiamond } from "../components/PrincipleDiamond";
import { Seo } from "../components/seo";
import { VisibleDetector } from "../components/VisibleDetector";
import "../styles/style.scss";
import "../styles/index.scss";
import { MainContent } from "../layout/MainContent";

// TODO Try to use scrollY in stead of time when lerping diamonds
// TODO Remove DelayText when it's done

export const Head: React.FC = () => <Seo />;

const IndexPage: React.FC = () => {
    const [principleState, setPrincipleState] = useState(0);

    const onPrincipleStateChange = (state: number) => {
        setPrincipleState(state);
    };

    const { prefersColorScheme, forcedColors } = useBrowserPreferences();

    const onLeave = (state: number) => {
        if (state === principleState) {
            setPrincipleState(0);
        }
    };

    const minScale = useMemo(() => {
        switch (principleState) {
            case 2:
                return 0.2;
            case 3:
                return 0.1;
            default:
                return 1.1;
        }
    }, [principleState]);

    const maxScale = useMemo(() => {
        switch (principleState) {
            case 2:
                return 0.8;
            case 3:
                return 0.3;
            default:
                return 1.1;
        }
    }, [principleState]);

    const { isSmallDevice } = useScreen();

    return (
        <MainContent className="jkl-portal__main--frontpage">
            {!isSmallDevice && <DelayText text="Jøkul Designsystem" delay={100} />}
            <div className="jkl-portal-frontpage">
                <section className="jkl-portal-frontpage__section-intro">
                    <h1 className="jkl-sr-only">Jøkul Designsystem</h1>
                    <p className="jkl-heading-1" data-testid="front-page__tagline">
                        Velkommen til Jøkul — design&shy;systemet til Fremtind. Her har vi samlet alt du trenger for å
                        lage løsninger i vår profil.
                    </p>
                    <div className="jkl-portal-frontpage__section-intro--content">
                        <div className="jkl-portal-frontpage__section-intro--image-container">
                            <div
                                className="jkl-portal-frontpage__section-intro--image"
                                style={{
                                    backgroundImage: `url(${withPrefix("assets/img/frontpage.jpg")})`,
                                }}
                            />
                        </div>
                        <CardList vertical>
                            <NavCard
                                title="Introduksjon"
                                to="/kom-i-gang/introduksjon"
                                component={Link}
                                description="Start her om Jøkul er nytt for deg."
                            />
                            <NavCard
                                title="For designere"
                                to="/kom-i-gang/design"
                                component={Link}
                                description="Branching, Variants, Auto-Layout, breakpoints, praktiske plugins, “uskrevne regler” og
                                mer."
                            />
                            <NavCard
                                title="For utviklere"
                                to="/kom-i-gang/utvikling"
                                component={Link}
                                description="Om pakker, steder å finne kodeeksempler og dokumentasjon, nyttige verktøy og mer."
                            />
                        </CardList>
                    </div>
                </section>

                <section className="jkl-portal-frontpage__section-principles">
                    <h2 className="jkl-sr-only">Hovedprinsipper</h2>
                    <p className="jkl-heading-1 jkl-portal-frontpage__section-principles--heading">
                        Hovedprinsipper du kan tenke på for å designe en løsning til vår profil på best mulig måte:
                    </p>
                    <div className="jkl-portal-frontpage__section-principles__diamond-container">
                        <div className="jkl-portal-principle-diamond">
                            <PrincipleDiamond
                                principleState={principleState}
                                minScale={minScale}
                                maxScale={maxScale}
                                colorScheme={prefersColorScheme}
                                forcedColors={forcedColors}
                                type="diamond"
                            />
                            <PrincipleDiamond
                                principleState={principleState}
                                minScale={minScale}
                                maxScale={maxScale}
                                colorScheme={prefersColorScheme}
                                forcedColors={forcedColors}
                                type="shadow"
                            />
                        </div>
                    </div>
                    <div className="jkl-portal-frontpage__section-principles__principle--container">
                        <VisibleDetector
                            onEnter={() => onPrincipleStateChange(1)}
                            onLeave={() => onLeave(1)}
                            render={(ref) => (
                                <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                    <div className="jkl-portal-frontpage__section-principles__principle--container">
                                        <p className="jkl-title" data-testid="title-elevasjon">
                                            Elevasjon
                                        </p>
                                        <p className="jkl-heading-2">
                                            Vi løfter det som er viktig og skaper et naturlig informasjonshierarki.
                                        </p>
                                    </div>
                                </div>
                            )}
                        />
                        <VisibleDetector
                            onEnter={() => onPrincipleStateChange(2)}
                            onLeave={() => onLeave(2)}
                            render={(ref) => (
                                <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                    <div className="jkl-portal-frontpage__section-principles__principle--container">
                                        <p className="jkl-title" data-testid="title-bevegelse">
                                            Bevegelse
                                        </p>
                                        <p className="jkl-heading-2">
                                            Vi skal utforske, se fremover og være tilpasningsdyktige.
                                        </p>
                                    </div>
                                </div>
                            )}
                        />
                        <VisibleDetector
                            onEnter={() => onPrincipleStateChange(3)}
                            onLeave={() => onLeave(3)}
                            render={(ref) => (
                                <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                    <div className="jkl-portal-frontpage__section-principles__principle--container">
                                        <p className="jkl-title" data-testid="title-klarhet">
                                            Klarhet
                                        </p>
                                        <p className="jkl-heading-2">
                                            Vi skal fremstå som ærlig og klar, med en tydelig og varm stemme
                                        </p>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </section>

                <section className="jkl-portal-frontpage__section-contribute">
                    <div className="jkl-portal-frontpage__section--wrapper">
                        <h2 className="jkl-heading-1">Bidra</h2>
                        <p className="jkl-heading-2">
                            Jøkul er et levende designsystem. For at vi skal holde det relevant, er det viktig at alle
                            som bruker designsystemet og merkevareprofilen vår hjelper til med å forbedre det vi har.
                            Send oss en mail eller bidra i GitHub.
                        </p>
                        <p className="jkl-heading-2">
                            Finn oss i Teams kanalen “Support Designsystem” eller kom på åpent forum hver tirsdag 14 til
                            14.30. Her informerer vi om hva som skjer og tar imot innspill.
                        </p>
                    </div>
                </section>
            </div>
        </MainContent>
    );
};

export default IndexPage;
