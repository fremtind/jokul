import React from "react";
import { Layout } from "../components";
import { DelayText } from "../components/Delaytext";

import "@fremtind/jkl-core/core.min.css";
import "./style.scss";
import "./index.scss";
import { CardList, Card } from "../components/Card";

const IndexPage = () => (
    <DelayText text="Jøkul Designsystem" delay={100}>
        <Layout isFrontpage>
            <div className="jkl-portal__frontpage">
                <section className="jkl-portal__frontpage__section-intro">
                    <div className="jkl-portal__frontpage__section-intro--content">
                        <div className="jkl-portal__frontpage__section-intro--content-text">
                            {/* <h1 className="jkl-title-large">Velkommen</h1> */}
                            <p className="jkl-lead">
                                Jøkul er designsystemet til Fremtind. Her har vi samlet alt du trenger for å lage
                                løsninger i vår profil.
                            </p>
                        </div>

                        <img alt="Utviklere" src="/Fremtind 1411-16.jpg" />
                    </div>

                    <CardList vertical>
                        <Card heading="Komponenter" to="/componenter">
                            Bruk komponentene vår til å designe og utvikle gode digitale løsninger.
                        </Card>
                        <Card heading="Vår profil" to="/componenter">
                            Fremtinds stil er enkel, tydelig og moderne.
                        </Card>
                        <Card heading="Ny i Jøkul?" to="/componenter">
                            Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul.
                        </Card>
                    </CardList>
                </section>

                <section className="jkl-portal__frontpage__section-contribute">
                    <div className="jkl-portal__frontpage__section--wrapper">
                        <h1 className="jkl-title-small">Bidra</h1>
                        <p className="jkl-body">
                            <i>Jøkul</i> er et levende designsystem. For at vi skal holde det relevant er det viktig at
                            alle som bruker designsystemet og merkevareprofilen vår hjelper til med å forbedre det vi
                            har.
                        </p>
                        <p className="jkl-body">
                            Har du laget noe nytt i vår profil, funnet feil, endret noe eller har forslag til
                            forbedringer så bidra via GitHub eller ta kontakt med oss. Vi setter stor pris på alle
                            bidrag.
                        </p>
                    </div>
                </section>

                <section className="jkl-portal__frontpage__section-image">
                    <img alt="flere utviklere" src="/Fremtind 31.jpg" />
                </section>

                <section className="jkl-portal__frontpage__section-contact">
                    <div className="jkl-portal__frontpage__section--wrapper">
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
                </section>
            </div>
        </Layout>
    </DelayText>
);

export default IndexPage;
