import{R as p,j as e}from"./iframe-CLDPu5u9.js";import{B as s}from"./Button-BioY7HdG.js";import{F as r}from"./Flex-CZi36Acv.js";import{F as d}from"./FieldGroup-BFbAcSEN.js";import{S as u}from"./Select-DxGNjxJN.js";import{T as a}from"./TextInput-N1Beljrn.js";import{E as m}from"./Expander-rspzSL0x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BZpo1Syd.js";import"./Loader-BoQk4DJL.js";import"./types-BlFGa32c.js";import"./useDelayedRender-Bwofc9Ol.js";import"./SlotComponent-1D2Py54k.js";import"./mergeRefs-_7lZvp9j.js";import"./useId-BrG_CAWg.js";import"./Label-D7gaP69D.js";import"./SupportLabel-D51ULbPh.js";import"./SuccessIcon-Ct-KKGKW.js";import"./Icon-COZE6_km.js";import"./WarningIcon-C4IvNZnI.js";import"./InputGroup-DOy6DhdG.js";import"./Search-BZMNeqmv.js";import"./Text-DXCjspfe.js";import"./Title-DCPEnmny.js";import"./useListNavigation-AfQa35o_.js";import"./ArrowDownIcon-CqerAZEK.js";import"./CloseIcon-CWJPwH3h.js";import"./BaseTextInput-BS14CEYG.js";import"./IconButton-MrD29JOl.js";import"./ChevronDownIcon-BPSmpkpF.js";import"./ChevronUpIcon-Dp1BqEy-.js";const K={title:"Mønstre/Ett spørsmål av gangen",parameters:{layout:"centered"}},t={name:"Flere felt (legend)",render:()=>{const[n,l]=p.useState(!0);return e.jsxs(r,{direction:"column",gap:"l",style:{inlineSize:"min(100%, 28rem)"},children:[e.jsx(d,{legend:"Hvilken bil vil du forsikre?",description:"Du finner opplysningene i vognkortet.",labelProps:{pageHeading:!0},children:e.jsxs(r,{direction:"column",gap:"m",children:[e.jsx(u,{label:"Merke",placeholder:"Velg merke",items:["Audi","Toyota","Volkswagen"]}),e.jsx(a,{label:"Modell"}),e.jsx(a,{label:"Årsmodell",inputMode:"numeric"})]})}),e.jsxs("div",{children:[e.jsx(m,{open:n,onClick:()=>l(o=>!o),children:"Hvilke krav stiller vi til bilen?"}),n?e.jsxs("ul",{children:[e.jsx("li",{children:"Bilen kan ikke brukes i næring, for eksempel som drosje, budbil eller utleiebil."}),e.jsx("li",{children:"Motoreffekten må stemme med vognkortet."}),e.jsx("li",{children:"Er bilen importert, må den være fortollet i Norge."})]}):null]}),e.jsx(r,{justifyContent:"center",children:e.jsx(s,{variant:"primary",children:"Fortsett"})})]})}},i={name:"Ett felt (label)",render:()=>{const[n,l]=p.useState(!1);return e.jsxs(r,{direction:"column",gap:"l",style:{inlineSize:"min(100%, 28rem)"},children:[e.jsx(a,{label:"Hvilken forsikringssum vil du endre til?",description:"Du kan ikke øke summen. I dag er den 60 000 kr.",labelProps:{pageHeading:!0},inputMode:"numeric",defaultValue:"50 000",unit:"kr",align:"right"}),e.jsxs("div",{children:[e.jsx(m,{open:n,onClick:()=>l(o=>!o),children:"Hva er forsikringssum?"}),n?e.jsx("p",{children:"Forsikringssummen er det høyeste beløpet vi kan betale ut. En lavere sum gir lavere pris."}):null]}),e.jsxs(r,{direction:"column",gap:"s",alignItems:"center",children:[e.jsx(s,{variant:"primary",children:"Fortsett"}),e.jsx(s,{variant:"ghost",children:"Avbryt"})]})]})}},L=["FlereFelt","EttFelt"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};export{i as EttFelt,t as FlereFelt,L as __namedExportsOrder,K as default};
