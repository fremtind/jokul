import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react/src";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react/src";
import { Card } from "@fremtind/jkl-card-react/src";
import { Checkbox } from "@fremtind/jkl-checkbox-react/src";
import { DividerLine } from "@fremtind/jkl-divider-line-react/src";
import { Dropdown } from "@fremtind/jkl-dropdown-react/src";
import { LogoAnimated, LogoMain, LogoSymbol } from "@fremtind/jkl-logo-react/src";
import { RadioButtonChoice } from "@fremtind/jkl-radio-button-react/src";
import { TextArea, TextField } from "@fremtind/jkl-text-input-react/src";
import { H1, H2, H3, H4, LeadParagraph, P, SmallParagraph, TinyParagraph } from "@fremtind/jkl-typography-react/src";
import React, { useState } from "react";
import { BulletList, BulletListItem } from "../../../packages/bullet-list-react/src";
import Layout from "../components/layout";
import "./a-la-carte.scss";

export default function ALaCarte() {
    const [isLogoOpen, setLogoOpen] = useState(true);
    const [choice, setChoice] = useState("1");
    const [textInput1, setTextInput1] = useState();
    const [textInput2, setTextInput2] = useState();
    const [textInput3, setTextInput3] = useState();
    return (
        <Layout>
            <section>
                <h1 className="jkl-h2">Button</h1>
                <span className="jkl-component-vertical-spacer">
                    <PrimaryButton onClick={() => {}}>Primary</PrimaryButton>
                </span>
                <span className="jkl-component-vertical-spacer">
                    <SecondaryButton onClick={() => {}}>Secondary</SecondaryButton>
                </span>
                <span className="jkl-component-vertical-spacer">
                    <TertiaryButton onClick={() => {}}>Tertiary</TertiaryButton>
                </span>
            </section>

            <section>
                <h1 className="jkl-h2">Accordion</h1>
                <Accordion>
                    <AccordionItem title={"Hello"}>Hugh?</AccordionItem>
                </Accordion>
            </section>

            <section>
                <h1 className="jkl-h2">Bullet List</h1>
                <BulletList>
                    <BulletListItem>Some Item</BulletListItem>
                    <BulletListItem>Some Item 2</BulletListItem>
                    <BulletListItem>Some Item 3</BulletListItem>
                    <BulletList>
                        <BulletListItem>Nested Item 1</BulletListItem>
                        <BulletList>
                            <BulletListItem>INCEPTION!</BulletListItem>
                        </BulletList>
                    </BulletList>
                </BulletList>
            </section>

            <section>
                <h1 className="jkl-h2">Card</h1>
                <Card> I am card!</Card>
            </section>

            <section>
                <h1 className="jkl-h2">Checkbox</h1>
                <Checkbox defaultChecked={true}> Yes </Checkbox>
                <Checkbox> No </Checkbox>
            </section>

            <section>
                <h1 className="jkl-h2">Divider line</h1>
                <DividerLine />
            </section>

            <section>
                <h1 className="jkl-h2">Dropdown</h1>
                <Dropdown items={["Ener", "Toer", "Treer"]} label={"Jeg er"} onChange={() => {}} />
            </section>

            <section>
                <h1 className="jkl-h2">Logo</h1>
                <div className="jkl-logo-wrapper">
                    Tekstlogo: <LogoMain />
                </div>
                <div className="jkl-logo-wrapper">
                    Symbollogo: <LogoSymbol />
                </div>
                {/* eslint-disable-next-line */}
                <div
                    onClick={() => {
                        setLogoOpen(!isLogoOpen);
                    }}
                >
                    Animert logo (trykk):
                    <LogoAnimated showSymbol={isLogoOpen} />
                </div>
            </section>

            <section>
                <h1 className="jkl-h2">Radiobutton choice</h1>
                <RadioButtonChoice
                    selectedValue={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    name={"Testing testing"}
                    choices={["1", "2", "3"]}
                />
            </section>

            <section>
                <h1 className="jkl-h2">Text input</h1>
                <TextField onChange={(e) => setTextInput1(e.target.value)} value={textInput1} label={"Fornavn"} />
                <TextField onChange={(e) => setTextInput2(e.target.value)} value={textInput2} label={"Etternavn"} />
                <TextArea
                    onChange={(e) => setTextInput3(e.target.value)}
                    value={textInput3}
                    label={"Din livshistorie"}
                />
            </section>

            <section>
                <h1 className="jkl-h2">Typografi</h1>
                <H1>H1 </H1>
                <H2>H2 </H2>
                <H3>H3 </H3>
                <H4>H4 </H4>
                <P>P</P>
                <LeadParagraph>Lead paragraph</LeadParagraph>
                <SmallParagraph>SmallParagraph</SmallParagraph>
                <TinyParagraph>TinyParagraph</TinyParagraph>
            </section>
        </Layout>
    );
}
