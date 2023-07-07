import { OrderedList, ListItem } from "@fremtind/jkl-list-react";
import { NativeSelect } from "@fremtind/jkl-select-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import React, { FC } from "react";
import "./form-field-anatomy.scss";

export const FormFieldAnatomy: FC = () => {
    return (
        <div className="mb-64">
            <section className="jkl-portal-component-example">
                <div className="jkl-portal-component-example__example-wrapper">
                    <form className="jkl-portal-form-field-anatomy ml-40" onSubmit={(e) => e.preventDefault()}>
                        <span
                            className="jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--heading"
                            aria-hidden="true"
                        >
                            <span className="jkl-portal-form-field-anatomy__indicator-number">1</span>
                        </span>
                        <p className="heading-4 mb-16">Forsikringseier</p>
                        <span
                            className="jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--label"
                            aria-hidden="true"
                        >
                            <span className="jkl-portal-form-field-anatomy__indicator-number">2</span>
                        </span>
                        <span
                            className="jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--input"
                            aria-hidden="true"
                        >
                            <span className="jkl-portal-form-field-anatomy__indicator-number">3</span>
                        </span>
                        <span
                            className="jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--support-label"
                            aria-hidden="true"
                        >
                            <span className="jkl-portal-form-field-anatomy__indicator-number">4</span>
                        </span>
                        <TextInput
                            className="mb-24"
                            name="fodselsnummer"
                            label="Fødselsnummer"
                            defaultValue="Input"
                            helpLabel="Hjelpetekst eller feilmeldingstekst"
                        />
                        <span
                            className="jkl-portal-form-field-anatomy__indicator jkl-portal-form-field-anatomy__indicator--input-with-icon"
                            aria-hidden="true"
                        >
                            <span className="jkl-portal-form-field-anatomy__indicator-number">5</span>
                        </span>
                        <NativeSelect
                            placeholder="Placeholder"
                            items={["Designer", "Utvikler", "Tester", "Leder", "Annet"]}
                            label="Stilling"
                            width="14rem"
                        />
                    </form>
                </div>
                <aside className="jkl-portal-component-example__example-options">
                    <OrderedList>
                        <ListItem>Ledetekst</ListItem>
                        <ListItem>Overskrift</ListItem>
                        <ListItem>Inputfelt</ListItem>
                        <ListItem>Hjelpetekst</ListItem>
                        <ListItem>Inputfelt med ikon</ListItem>
                    </OrderedList>
                </aside>
            </section>
        </div>
    );
};
