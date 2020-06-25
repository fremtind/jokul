import React, { useState, useMemo } from "react";
import { DelayText } from "../components/Delaytext";

import "@fremtind/jkl-core/core.min.css";
import "./style.scss";
import "./index.scss";
import { CardList, Card } from "../components/Card";
import { PrincipleDiamond } from "../components/PrincipleDiamond";
import { VisibleDetector } from "../components/VisibleDetector";
import { withPrefix } from "gatsby";

// TODO Try to use scrollY in stead of time when lerping diamonds
// TODO Remove DelayText when it's done

const IndexPage = () => {
    const [principleState, setPrincipleState] = useState(0);

    const onPrincipleStateChange = (state: number) => {
        setPrincipleState(state);
    };

    const ref = React.useRef(null);

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

    return (
        <DelayText ref={ref} text="Jøkul Designsystem" delay={100}>
            <div className="jkl-portal-frontpage">
                <section className="jkl-portal-frontpage__section-intro">
                    <h2 className="jkl-title-small" data-testid="front-page__tagline">
                        Velkommen til Jøkul — designsystemet til Fremtind. Her har vi samlet alt du trenger for å lage
                        løsninger i vår profil.
                    </h2>
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
                            <Card heading="For utviklere" link="/komigang/utvikling">
                                Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul.
                            </Card>
                            <Card heading="For designere" link="/komigang/design">
                                Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul.
                            </Card>
                            <Card heading="Prosessen" link="/komigang/prosessen">
                                Hvordan du kan jobbe med designsystemet.
                            </Card>
                        </CardList>
                    </div>
                </section>

                <section className="jkl-portal-frontpage__section-principles">
                    <h2 className="jkl-title-small jkl-portal-frontpage__section-principles--heading">
                        Hovedprinsipper du kan tenke på for å designe en løsning til vår profil på best mulig måte:
                    </h2>
                    <div className="jkl-portal-frontpage__section-principles__diamond-container">
                        <div className="jkl-portal-principle-diamond">
                            <PrincipleDiamond
                                principleState={principleState}
                                minScale={minScale}
                                maxScale={maxScale}
                                type="diamond"
                            />
                            <PrincipleDiamond
                                principleState={principleState}
                                minScale={minScale}
                                maxScale={maxScale}
                                type="shadow"
                            />
                        </div>
                    </div>
                    <div className="jkl-portal-frontpage__section-principles__principle--container">
                        <VisibleDetector
                            onEnter={() => onPrincipleStateChange(1)}
                            onLeave={() => onLeave(1)}
                            //@ts-ignore
                            render={(ref) => (
                                <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                    <div className="jkl-portal-frontpage__section-principles__principle--container">
                                        <h1 className="jkl-title-large" data-testid="title-elevasjon">
                                            Elevasjon
                                        </h1>
                                        <p className="jkl-lead">
                                            Vi løfter det som er viktig og skaper et naturlig informasjonshierarki.
                                        </p>
                                    </div>
                                </div>
                            )}
                        />
                        <VisibleDetector
                            onEnter={() => onPrincipleStateChange(2)}
                            onLeave={() => onLeave(2)}
                            //@ts-ignore
                            render={(ref) => (
                                <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                    <div className="jkl-portal-frontpage__section-principles__principle--container">
                                        <h1 className="jkl-title-large" data-testid="title-bevegelse">
                                            Bevegelse
                                        </h1>
                                        <p className="jkl-lead">
                                            Vi skal utforske, se fremover og være tilpasningsdyktige.
                                        </p>
                                    </div>
                                </div>
                            )}
                        />
                        <VisibleDetector
                            onEnter={() => onPrincipleStateChange(3)}
                            onLeave={() => onLeave(3)}
                            //@ts-ignore
                            render={(ref) => (
                                <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                    <div className="jkl-portal-frontpage__section-principles__principle--container">
                                        <h1 className="jkl-title-large" data-testid="title-klarhet">
                                            Klarhet
                                        </h1>
                                        <p className="jkl-lead">
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
                        <h2 className="jkl-title-small">Bidra</h2>
                        <p className="jkl-lead">
                            Jøkul er et levende designsystem. For at vi skal holde det relevant, er det viktig at alle
                            som bruker designsystemet og merkevareprofilen vår hjelper til med å forbedre det vi har.
                            Send oss en mail eller bidra i GitHub.
                        </p>
                        <p className="jkl-lead">
                            Finn oss i Teams kanalen “Support Designsystem” eller kom på åpent forum hver tirsdag 14 til
                            14.30. Her informerer vi om hva som skjer og tar imot innspill.
                        </p>
                    </div>
                </section>
            </div>
        </DelayText>
    );
};

export default IndexPage;
