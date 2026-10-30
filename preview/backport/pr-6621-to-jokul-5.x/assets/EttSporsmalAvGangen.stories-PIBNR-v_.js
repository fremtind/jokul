import{R as m,j as e}from"./iframe-faZ-BQ5s.js";import{B as s}from"./Button-1B4HKHN8.js";import{F as r}from"./Flex-bce93z0l.js";import{F as d}from"./FieldGroup-BBK7tgAA.js";import{S as u}from"./Select-BVWg3wyD.js";import{T as a}from"./TextInput-C7gG126R.js";import{E as p}from"./Expander-BWjlAyWb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Dyi6XRoa.js";import"./Loader-DB_mlgWO.js";import"./useDelayedRender-C8qam8Xc.js";import"./SlotComponent-C_OlWr_o.js";import"./mergeRefs-_7lZvp9j.js";import"./useId-BZ_ER28T.js";import"./Label-B_AWcEof.js";import"./SupportLabel-DlnRrjQF.js";import"./SuccessIcon-8SbR0fHE.js";import"./Icon-XvUqTLNT.js";import"./WarningIcon-C1ge9Raq.js";import"./useListNavigation-DmLkpvP0.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-odfz6leU.js";import"./ArrowDownIcon-C5P_InXm.js";import"./InputGroup-C3z5nof8.js";import"./Popover-ROmFyQay.js";import"./floating-ui.react-CBdxd0Rr.js";import"./index-HJz0-95R.js";import"./index-Co88M_OH.js";import"./getThemeAndSize-CZAj3IXt.js";import"./BaseTextInput-C28zbfdr.js";import"./IconButton-IOcQatiz.js";import"./ChevronDownIcon-DC-GOqwp.js";import"./ChevronUpIcon-BZRhXBaq.js";const Q={title:"Mønstre/Ett spørsmål av gangen",parameters:{layout:"centered"}},t={name:"Flere felt (legend)",render:()=>{const[n,l]=m.useState(!0);return e.jsxs(r,{direction:"column",gap:"l",style:{inlineSize:"min(100%, 28rem)"},children:[e.jsx(d,{legend:"Hvilken bil vil du forsikre?",description:"Du finner opplysningene i vognkortet.",labelProps:{pageHeading:!0},children:e.jsxs(r,{direction:"column",gap:"m",children:[e.jsx(u,{name:"merke",label:"Merke",defaultPrompt:"Velg merke",items:["Audi","Toyota","Volkswagen"]}),e.jsx(a,{label:"Modell"}),e.jsx(a,{label:"Årsmodell",inputMode:"numeric"})]})}),e.jsxs("div",{children:[e.jsx(p,{open:n,onClick:()=>l(o=>!o),children:"Hvilke krav stiller vi til bilen?"}),n?e.jsxs("ul",{children:[e.jsx("li",{children:"Bilen kan ikke brukes i næring, for eksempel som drosje, budbil eller utleiebil."}),e.jsx("li",{children:"Motoreffekten må stemme med vognkortet."}),e.jsx("li",{children:"Er bilen importert, må den være fortollet i Norge."})]}):null]}),e.jsx(r,{justifyContent:"center",children:e.jsx(s,{variant:"primary",children:"Fortsett"})})]})}},i={name:"Ett felt (label)",render:()=>{const[n,l]=m.useState(!1);return e.jsxs(r,{direction:"column",gap:"l",style:{inlineSize:"min(100%, 28rem)"},children:[e.jsx(a,{label:"Hvilken forsikringssum vil du endre til?",description:"Du kan ikke øke summen. I dag er den 60 000 kr.",labelProps:{pageHeading:!0},inputMode:"numeric",defaultValue:"50 000",unit:"kr",align:"right"}),e.jsxs("div",{children:[e.jsx(p,{open:n,onClick:()=>l(o=>!o),children:"Hva er forsikringssum?"}),n?e.jsx("p",{children:"Forsikringssummen er det høyeste beløpet vi kan betale ut. En lavere sum gir lavere pris."}):null]}),e.jsxs(r,{direction:"column",gap:"s",alignItems:"center",children:[e.jsx(s,{variant:"primary",children:"Fortsett"}),e.jsx(s,{variant:"ghost",children:"Avbryt"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
                        <Select name="merke" label="Merke" defaultPrompt="Velg merke" items={["Audi", "Toyota", "Volkswagen"]} />
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
}`,...i.parameters?.docs?.source}}};const U=["FlereFelt","EttFelt"];export{i as EttFelt,t as FlereFelt,U as __namedExportsOrder,Q as default};
