import{R as p,j as e}from"./iframe-CpjE09ZT.js";import{B as s}from"./Button-DoXCULlV.js";import{F as r}from"./Flex-BLxOKUru.js";import{F as d}from"./FieldGroup-DW0u8-6k.js";import{S as u}from"./Select-CPsCq_Tw.js";import{T as a}from"./TextInput-Bb3OgY5N.js";import{E as m}from"./Expander-vD5_0936.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B_g86ocX.js";import"./Loader-rGq_P8Wv.js";import"./types-BlFGa32c.js";import"./useDelayedRender-EYEVPfKQ.js";import"./SlotComponent-DgG28txs.js";import"./mergeRefs-_7lZvp9j.js";import"./useId-AqVQ_QMd.js";import"./Label-Bm8r1d79.js";import"./SupportLabel-BY929WKb.js";import"./SuccessIcon-Dg7i1Z3V.js";import"./Icon-3txnnQXp.js";import"./WarningIcon-67MixeAi.js";import"./InputGroup-Be5s9fP2.js";import"./Search-B7SmYQQB.js";import"./Text-DgA2TONx.js";import"./Title-CeLnhNeW.js";import"./useListNavigation-DctE7fqK.js";import"./ArrowDownIcon-BBmJwEM7.js";import"./CloseIcon-BudOuERL.js";import"./BaseTextInput-eu9kkn5-.js";import"./IconButton-B0j-s1KW.js";import"./ChevronUpIcon-CKMlhW-J.js";const J={title:"Mønstre/Ett spørsmål av gangen",parameters:{layout:"centered"}},t={name:"Flere felt (legend)",render:()=>{const[n,l]=p.useState(!0);return e.jsxs(r,{direction:"column",gap:"l",style:{inlineSize:"min(100%, 28rem)"},children:[e.jsx(d,{legend:"Hvilken bil vil du forsikre?",description:"Du finner opplysningene i vognkortet.",labelProps:{pageHeading:!0},children:e.jsxs(r,{direction:"column",gap:"m",children:[e.jsx(u,{label:"Merke",placeholder:"Velg merke",items:["Audi","Toyota","Volkswagen"]}),e.jsx(a,{label:"Modell"}),e.jsx(a,{label:"Årsmodell",inputMode:"numeric"})]})}),e.jsxs("div",{children:[e.jsx(m,{open:n,onClick:()=>l(o=>!o),children:"Hvilke krav stiller vi til bilen?"}),n?e.jsxs("ul",{children:[e.jsx("li",{children:"Bilen kan ikke brukes i næring, for eksempel som drosje, budbil eller utleiebil."}),e.jsx("li",{children:"Motoreffekten må stemme med vognkortet."}),e.jsx("li",{children:"Er bilen importert, må den være fortollet i Norge."})]}):null]}),e.jsx(r,{justifyContent:"center",children:e.jsx(s,{variant:"primary",children:"Fortsett"})})]})}},i={name:"Ett felt (label)",render:()=>{const[n,l]=p.useState(!1);return e.jsxs(r,{direction:"column",gap:"l",style:{inlineSize:"min(100%, 28rem)"},children:[e.jsx(a,{label:"Hvilken forsikringssum vil du endre til?",description:"Du kan ikke øke summen. I dag er den 60 000 kr.",labelProps:{pageHeading:!0},inputMode:"numeric",defaultValue:"50 000",unit:"kr",align:"right"}),e.jsxs("div",{children:[e.jsx(m,{open:n,onClick:()=>l(o=>!o),children:"Hva er forsikringssum?"}),n?e.jsx("p",{children:"Forsikringssummen er det høyeste beløpet vi kan betale ut. En lavere sum gir lavere pris."}):null]}),e.jsxs(r,{direction:"column",gap:"s",alignItems:"center",children:[e.jsx(s,{variant:"primary",children:"Fortsett"}),e.jsx(s,{variant:"ghost",children:"Avbryt"})]})]})}},K=["FlereFelt","EttFelt"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Flere felt (legend)",
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return <Flex direction="column" gap="l" style={{
      inlineSize: "min(100%, 28rem)"
    }}>
                <FieldGroup legend="Hvilken bil vil du forsikre?" description="Du finner opplysningene i vognkortet." labelProps={{
        pageHeading: true
      }}>
                    <Flex direction="column" gap="m">
                        <Select label="Merke" placeholder="Velg merke" items={["Audi", "Toyota", "Volkswagen"]} />
                        <TextInput label="Modell" />
                        <TextInput label="Årsmodell" inputMode="numeric" />
                    </Flex>
                </FieldGroup>
                <div>
                    <Expander open={isOpen} onClick={() => setIsOpen(open => !open)}>
                        Hvilke krav stiller vi til bilen?
                    </Expander>
                    {isOpen ? <ul>
                            <li>
                                Bilen kan ikke brukes i næring, for eksempel som
                                drosje, budbil eller utleiebil.
                            </li>
                            <li>Motoreffekten må stemme med vognkortet.</li>
                            <li>
                                Er bilen importert, må den være fortollet i
                                Norge.
                            </li>
                        </ul> : null}
                </div>
                <Flex justifyContent="center">
                    <Button variant="primary">Fortsett</Button>
                </Flex>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Ett felt (label)",
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Flex direction="column" gap="l" style={{
      inlineSize: "min(100%, 28rem)"
    }}>
                <TextInput label="Hvilken forsikringssum vil du endre til?" description="Du kan ikke øke summen. I dag er den 60 000 kr." labelProps={{
        pageHeading: true
      }} inputMode="numeric" defaultValue="50 000" unit="kr" align="right" />
                <div>
                    <Expander open={isOpen} onClick={() => setIsOpen(open => !open)}>
                        Hva er forsikringssum?
                    </Expander>
                    {isOpen ? <p>
                            Forsikringssummen er det høyeste beløpet vi kan
                            betale ut. En lavere sum gir lavere pris.
                        </p> : null}
                </div>
                <Flex direction="column" gap="s" alignItems="center">
                    <Button variant="primary">Fortsett</Button>
                    <Button variant="ghost">Avbryt</Button>
                </Flex>
            </Flex>;
  }
}`,...i.parameters?.docs?.source}}};export{i as EttFelt,t as FlereFelt,K as __namedExportsOrder,J as default};
