import React, { useState, useMemo } from "react";
import { Layout } from "../components";
import { DelayText } from "../components/Delaytext";

import "@fremtind/jkl-core/core.min.css";
import "./style.scss";
import "./index.scss";
import { CardList, Card } from "../components/Card";
import { PrincipleDiamond } from "../components/PrincipleDiamond";
import { VisibleDetector } from "../components/VisibleDetector";

// TODO Fix top section

const IndexPage = () => {
    const [principleState, setPrincipleState] = useState(0);

    const onPrincipleStateChange = (state: number) => {
        setPrincipleState(state);
    };

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
        <Layout isFrontpage>
            <DelayText text="Jøkul Designsystem" delay={100}>
                <div className="jkl-portal-frontpage">
                    <section className="jkl-portal-frontpage__section-intro">
                        <h2 className="jkl-title-small">
                            Velkommen til Jøkul — designsystemet til Fremtind. Her har vi samlet alt du trenger for å
                            lage løsninger i vår profil.
                        </h2>
                        <div className="jkl-portal-frontpage__section-intro--content">
                            <div className="jkl-portal-frontpage__section-intro--image-container">
                                <img alt="Terreng" src="/Fremtind 1411-16.jpg" />
                            </div>
                            <CardList vertical>
                                <Card heading="For utviklere" to="/komigang/utvikling">
                                    Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul.
                                </Card>
                                <Card heading="For designere" to="/komigang/design">
                                    Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul.
                                </Card>
                                <Card heading="Prosessen">Hvordan du kan jobbe med designsystemet.</Card>
                            </CardList>
                        </div>
                    </section>

                    <section className="jkl-portal-frontpage__section-principles">
                        <h2 className="jkl-title-small jkl-portal-frontpage__section-principles--heading">
                            Hovedprinsipper du kan tenke på for å designe en løsning til vår profil på best mulig måte.
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
                                render={(ref) => (
                                    <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                        <div className="jkl-portal-frontpage__section-principles__principle--container">
                                            <h1 className="jkl-title-large">Elevasjon</h1>
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
                                render={(ref) => (
                                    <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                        <div className="jkl-portal-frontpage__section-principles__principle--container">
                                            <h1 className="jkl-title-large">Bevegelse</h1>
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
                                render={(ref) => (
                                    <div ref={ref} className="jkl-portal-frontpage__section-principles__principle">
                                        <div className="jkl-portal-frontpage__section-principles__principle--container">
                                            <h1 className="jkl-title-large">Klarhet</h1>
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
                            <h1 className="jkl-title-small">Bidra</h1>
                            <p className="jkl-body">
                                <i>Jøkul</i> er et levende designsystem. For at vi skal holde det relevant er det viktig
                                at alle som bruker designsystemet og merkevareprofilen vår hjelper til med å forbedre
                                det vi har.
                            </p>
                            <p className="jkl-body">
                                Har du laget noe nytt i vår profil, funnet feil, endret noe eller har forslag til
                                forbedringer så bidra via GitHub eller ta kontakt med oss. Vi setter stor pris på alle
                                bidrag.
                            </p>
                        </div>
                    </section>

                    {/*<section className="jkl-portal-frontpage__section-image">
                    <img alt="flere utviklere" src="/Fremtind 31.jpg" />
                </section>

                <section className="jkl-portal-frontpage__section-contact">
                    <div className="jkl-portal-frontpage__section--wrapper">
                        <h3 className="jkl-title-small">Kontakt oss</h3>
                        <div>
                            <h5 className="jkl-heading-small">Epost</h5>
                            <p className="jkl-body">Fremtind.designsystem@fremtind.no</p>
                        </div>
                        <div>
                            <h5 className="jkl-heading-small">Teams</h5>
                            <p className="jkl-body">
                                Kanalen <i>Support Designsystem</i>
                            </p>
                        </div>
                        <div>
                            <h5 className="jkl-heading-small">Forum</h5>
                            <p className="jkl-body">
                                Designsystemforumet. Vi holder åpent forum hver tirsdag fra klokken 14 til 14:30. Her
                                informerer vi om hva som skjer og tar imot innspill.
                            </p>
                        </div>
                    </div>
                </section> */}
                </div>
            </DelayText>
        </Layout>
    );
};

export default IndexPage;
