import React, { useState } from "react";
import { DatePicker } from "../../../datepicker-react/src";
import { RadioButton, RadioButtonGroup } from "../../../radio-button-react/src";
import { TaskCard } from "../../src/TaskCard";
import "../../../card/card.scss";
import "../../../datepicker/datepicker.scss";
import "../../../text-input/text-input.scss";
import "./kjopsflyt.scss";

export default function KjopsflytExample() {
    const [valg, setValg] = useState("ja");
    return (
        <div className="jkl-kjopsflyt">
            <header className="jkl-kjopsflyt-header">
                <span>Din bank</span>
            </header>
            <nav>
                <ul className="jkl-kjopsflyt-menu">
                    <li className="jkl-kjopsflyt-menu__item">Forsikringsoversikt</li>
                    <li className="jkl-kjopsflyt-menu__item">Betaling og faktura</li>
                    <li className="jkl-kjopsflyt-menu__item">Kjøp forsikring</li>
                    <li className="jkl-kjopsflyt-menu__item">Meld skade</li>
                    <li className="jkl-kjopsflyt-menu__spacer" aria-hidden></li>
                    <li className="jkl-kjopsflyt-menu__item">Dine tilbud</li>
                    <li className="jkl-kjopsflyt-menu__item">Helge Nordmann</li>
                </ul>
            </nav>
            <main className="jkl-kjopsflyt-content">
                <section className="jkl-kjopsflyt-form">
                    <h1 className="jkl-heading-1 jkl-spacing-40--bottom">Ditt tilbud</h1>
                    <RadioButtonGroup
                        className="jkl-spacing-40--bottom"
                        value={valg}
                        onChange={(e) => setValg(e.target.value)}
                        legend="Har du reiseforsikring i et annet selskap du vil at vi sier opp for deg?"
                        labelProps={{ variant: "small" }}
                    >
                        <RadioButton value="ja">Ja</RadioButton>
                        <RadioButton value="nei">Nei</RadioButton>
                    </RadioButtonGroup>
                    <DatePicker
                        className="jkl-spacing-40--bottom"
                        label="Velg datoen du vil at forsikringen skal starte"
                    />
                    <h2 className="jkl-heading-4 jkl-spacing-8--bottom">Betaling</h2>
                    <p className="jkl-body jkl-spacing-40--bottom">
                        Du vil få en månedlig / kvartalsvis / halvårlig / årlig faktura.
                    </p>
                    <h2 className="jkl-heading-4 jkl-spacing-8--bottom">Varsel på SMS</h2>
                    <p className="jkl-body">
                        Når du kommer til et nytt land, vil du få en SMS med påminnelse om hva du skal gjøre når noe
                        skjer, og hvor du kan få hjelp. Døgnet rundt i hele verden.{" "}
                    </p>
                </section>
                <section className="jkl-kjopsflyt-details">
                    <TaskCard withShadow padding="xl">
                        <h2 className="jkl-heading-3 jkl-spacing-8--bottom">Forsikringsdetaljer</h2>
                        <table className="jkl-kjopsflyt-table">
                            <tbody>
                                <tr className="jkl-kjopsflyt-table__row">
                                    <th scope="row" className="jkl-kjopsflyt-table__data">
                                        Dekning
                                    </th>
                                    <td className="jkl-kjopsflyt-table__data">Deg og din familie</td>
                                </tr>
                                <tr className="jkl-kjopsflyt-table__row">
                                    <th scope="row" className="jkl-kjopsflyt-table__data">
                                        Reisedøgn
                                    </th>
                                    <td className="jkl-kjopsflyt-table__data">90 dager per reise</td>
                                </tr>
                                <tr className="jkl-kjopsflyt-table__row">
                                    <th scope="row" className="jkl-kjopsflyt-table__data">
                                        Område
                                    </th>
                                    <td className="jkl-kjopsflyt-table__data">Hele verden</td>
                                </tr>
                                <tr className="jkl-kjopsflyt-table__row">
                                    <th scope="row" className="jkl-kjopsflyt-table__data">
                                        Egenandel
                                    </th>
                                    <td className="jkl-kjopsflyt-table__data">Ingen egenandel</td>
                                </tr>
                            </tbody>
                        </table>
                    </TaskCard>
                </section>
            </main>
        </div>
    );
}
