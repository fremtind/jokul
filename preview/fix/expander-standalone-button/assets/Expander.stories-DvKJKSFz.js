import{j as e,r as s}from"./iframe-D6aFsJFG.js";import{a as b,E as h}from"./ExpandablePanel-CMcDdZ9z.js";import{E as o}from"./Expander-BajmnUtA.js";/* empty css               */import{R as I}from"./RadioButtonGroup-DhN17oTp.js";import{R as O}from"./RadioButton-4OHigBya.js";import{S}from"./Tag-ClzwAhIH.js";import{T as D}from"./Title-BTXEqIsF.js";import{T as x}from"./Text-BXkwprk7.js";import{P as C}from"./PenIcon-CvXlLcLD.js";import{C as T}from"./CalendarIcon-DZgg-gwd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./useAnimatedHeightBetween-r6NmYKfq.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C-bBQRXY.js";import"./usePreviousValue-qx_ix9cQ.js";import"./ChevronDownIcon-DY4piapG.js";import"./Icon-DCPNNKu8.js";import"./ChevronUpIcon-CdoRzl_v.js";import"./FieldGroup-CyYHC69o.js";import"./useId-dLmhdH3e.js";import"./Label-3cZW-Ll7.js";import"./SupportLabel-CmDxYM3a.js";import"./SuccessIcon-CyE0Cl7W.js";import"./WarningIcon-Bk7-IRuL.js";import"./BaseRadioButton-D2fBL7CD.js";const{userEvent:P,within:w}=__STORYBOOK_MODULE_TEST__,y="expander-trigger",se={title:"Komponenter/Expander",component:o,subcomponents:{ExpandablePanel:h,ExpandablePanelContent:b},args:{expandDirection:"down",icon:e.jsx(T,{})},argTypes:{expandDirection:{control:"radio",options:["up","down"]}},decorators:[n=>e.jsx("div",{style:{width:"32rem",maxWidth:"100%"},children:e.jsx(n,{})})]},l={name:"Kontrollert uten panel",play:async({canvasElement:n})=>{const r=w(n);await new Promise(t=>setTimeout(t,300)),await P.click(r.getByTestId(y))},parameters:{docs:{source:{code:`const [isOpen, setIsOpen] = React.useState(false);

return (
    <>
        <Expander
            icon={<CalendarIcon />}
            open={isOpen}
            onClick={() => setIsOpen((open) => !open)}
        >
            Se hva reiseforsikringen dekker
        </Expander>
        {isOpen ? (
            <div>
                Du er dekket for forsinket bagasje, avbestilling ved akutt
                sykdom og egenandel på leiebil opptil 15 000 kroner.
            </div>
        ) : null}
    </>
);`}}},render:({expandDirection:n,icon:r})=>{const[t,i]=s.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx(o,{"data-testid":y,expandDirection:n,icon:r,open:t,onClick:()=>i(a=>!a),children:"Se hva reiseforsikringen dekker"}),t?e.jsx("div",{children:"Du er dekket for forsinket bagasje, avbestilling ved akutt sykdom og egenandel på leiebil opptil 15 000 kroner."}):null]})}},p={name:"Koblet til innhold",render:({expandDirection:n,icon:r})=>{const[t,i]=s.useState(!1),a=s.useId();return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx(o,{"aria-controls":a,expandDirection:n,icon:r,open:t,onClick:()=>i(u=>!u),children:"Se vilkår for avbestilling"}),e.jsx("div",{id:a,hidden:!t,children:"Du kan avbestille reisen uten gebyr inntil 14 dager før avreise. Etter det gjelder egenandel på 500 kroner."})]})}},m={name:"Åpen fra start",render:({expandDirection:n,icon:r})=>{const[t,i]=s.useState(!0);return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx(o,{expandDirection:n,icon:r,open:t,onClick:()=>i(a=>!a),children:"Skjul detaljer om dekningen"}),t?e.jsx("div",{children:"Dekningen gjelder for alle reiser i Norden og Europa med varighet inntil 60 dager."}):null]})}},k={name:"Åpner oppover",args:{expandDirection:"up"},render:({expandDirection:n,icon:r})=>{const[t,i]=s.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[t?e.jsx("div",{children:"Ring 55 55 55 55 eller start chat med en rådgiver."}):null,e.jsx(o,{expandDirection:n,icon:r,open:t,onClick:()=>i(a=>!a),children:"Kontakt oss"})]})}},j={Toppkasko:{price:"1 890 kr/md",text:"Dekker alt Kasko gjør, og i tillegg leiebil og redusert egenandel.",coverage:"Skader på egen bil, tyveri, brann, leiebil og glass."},Kasko:{price:"1 513 kr/md",text:"Passer for de fleste biler. Dekker det meste av skader, men ikke slitasje.",coverage:"Skader på egen bil, tyveri, brann og glass."},Minikasko:{price:"902 kr/md",text:"Dekker brann, tyveri og glass, men ikke kollisjonsskader.",coverage:"Brann, tyveri og glassskader."},Ansvar:{price:"540 kr/md",text:"Lovpålagt minimum. Dekker skader du påfører andre.",coverage:"Skader du påfører andre personer og kjøretøy."}},E={background:"var(--jkl-color-background-container)",borderRadius:"var(--jkl-border-radius-m)",padding:"var(--jkl-unit-30)",display:"grid",gap:"var(--jkl-unit-20)"},c={name:"I valgkort",args:{icon:void 0},render:({expandDirection:n})=>{const[r,t]=s.useState("Kasko"),[i,a]=s.useState(!1),u=s.useId(),f=j[r];return e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-unit-20)"},children:[e.jsx(I,{legend:"Hvilken forsikring passer best for deg?",name:"forsikring",value:r,inline:!0,onChange:d=>{t(d.target.value),a(!1)},children:Object.keys(j).map(d=>e.jsx(O,{value:d,children:d},d))}),e.jsxs("div",{style:E,children:[e.jsx("div",{children:e.jsx(S,{children:"Inkludert rabattene dine"})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(D,{as:"h3",size:"xs",children:r}),e.jsx(x,{bold:!0,children:f.price})]}),e.jsx(x,{children:f.text}),e.jsxs("div",{children:[e.jsx(o,{"aria-controls":u,expandDirection:n,open:i,onClick:()=>a(d=>!d),children:"Vis hva som dekkes"}),e.jsx("div",{id:u,hidden:!i,children:e.jsx(x,{children:f.coverage})})]})]}),e.jsxs("div",{style:{...E,gridAutoFlow:"column",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(x,{children:["Egenandelen er ",e.jsx("strong",{children:"8 000 kr"})]}),e.jsx(C,{})]})]})}},g={name:"I utvidbart panel",render:({expandDirection:n,icon:r})=>e.jsxs(h,{style:{width:"min(100%, 32rem)"},children:[e.jsx(o,{"data-testid":y,expandDirection:n,icon:r,children:"Hva dekker leiebilforsikringen?"}),e.jsx(b,{children:"Forsikringen dekker skade, tyveri og egenandel når bilen er leid på ferie i Norden eller EU og leieforholdet er betalt med kortet ditt."})]})},v={name:"I utvidbart panel, åpner oppover",args:{expandDirection:"up"},decorators:[n=>e.jsx("div",{style:{minHeight:"100dvh",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"24px"},children:e.jsx(n,{})})],render:({expandDirection:n,icon:r})=>e.jsxs(h,{style:{width:"min(100%, 32rem)"},children:[e.jsx(o,{"data-testid":y,expandDirection:n,icon:r,children:"Se kontaktvalg i bunnmenyen"}),e.jsx(b,{children:"Ring oss pa 55 55 55 55, start chat med skadehjelp eller be om at en rådgiver ringer deg tilbake innen 15 minutter."})]})},oe=["Standalone","StandaloneWithAriaControls","StandaloneOpenByDefault","StandaloneOpensUp","StandaloneInCard","InExpandablePanel","InExpandablePanelOpensUp"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Kontrollert uten panel",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await new Promise(resolve => setTimeout(resolve, 300));
    await userEvent.click(canvas.getByTestId(expanderTestId));
  },
  parameters: {
    docs: {
      source: {
        code: \`const [isOpen, setIsOpen] = React.useState(false);

return (
    <>
        <Expander
            icon={<CalendarIcon />}
            open={isOpen}
            onClick={() => setIsOpen((open) => !open)}
        >
            Se hva reiseforsikringen dekker
        </Expander>
        {isOpen ? (
            <div>
                Du er dekket for forsinket bagasje, avbestilling ved akutt
                sykdom og egenandel på leiebil opptil 15 000 kroner.
            </div>
        ) : null}
    </>
);\`
      }
    }
  },
  render: ({
    expandDirection,
    icon
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
                <Expander data-testid={expanderTestId} expandDirection={expandDirection} icon={icon} open={isOpen} onClick={() => setIsOpen(open => !open)}>
                    Se hva reiseforsikringen dekker
                </Expander>
                {isOpen ? <div>
                        Du er dekket for forsinket bagasje, avbestilling ved
                        akutt sykdom og egenandel på leiebil opptil 15 000
                        kroner.
                    </div> : null}
            </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:"Expander kan brukes alene, utenfor ExpandablePanel. Da rendres den som en\n`button`, og du styrer åpen/lukket selv med `open` og `onClick`.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Koblet til innhold",
  render: ({
    expandDirection,
    icon
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentId = useId();
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
                <Expander aria-controls={contentId} expandDirection={expandDirection} icon={icon} open={isOpen} onClick={() => setIsOpen(open => !open)}>
                    Se vilkår for avbestilling
                </Expander>
                <div id={contentId} hidden={!isOpen}>
                    Du kan avbestille reisen uten gebyr inntil 14 dager før
                    avreise. Etter det gjelder egenandel på 500 kroner.
                </div>
            </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Koble Expander til innholdet med `aria-controls` slik at hjelpemidler\nfinner frem til det som åpnes.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Åpen fra start",
  render: ({
    expandDirection,
    icon
  }) => {
    const [isOpen, setIsOpen] = useState(true);
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
                <Expander expandDirection={expandDirection} icon={icon} open={isOpen} onClick={() => setIsOpen(open => !open)}>
                    Skjul detaljer om dekningen
                </Expander>
                {isOpen ? <div>
                        Dekningen gjelder for alle reiser i Norden og Europa med
                        varighet inntil 60 dager.
                    </div> : null}
            </div>;
  }
}`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Åpner oppover",
  args: {
    expandDirection: "up"
  },
  render: ({
    expandDirection,
    icon
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
                {isOpen ? <div>
                        Ring 55 55 55 55 eller start chat med en rådgiver.
                    </div> : null}
                <Expander expandDirection={expandDirection} icon={icon} open={isOpen} onClick={() => setIsOpen(open => !open)}>
                    Kontakt oss
                </Expander>
            </div>;
  }
}`,...k.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "I valgkort",
  args: {
    icon: undefined
  },
  render: ({
    expandDirection
  }) => {
    const [selected, setSelected] = useState<keyof typeof carInsurances>("Kasko");
    const [isOpen, setIsOpen] = useState(false);
    const coverageId = useId();
    const insurance = carInsurances[selected];
    return <div style={{
      display: "grid",
      gap: "var(--jkl-unit-20)"
    }}>
                <RadioButtonGroup legend="Hvilken forsikring passer best for deg?" name="forsikring" value={selected} inline onChange={e => {
        setSelected(e.target.value as keyof typeof carInsurances);
        setIsOpen(false);
      }}>
                    {Object.keys(carInsurances).map(name => <RadioButton key={name} value={name}>
                            {name}
                        </RadioButton>)}
                </RadioButtonGroup>

                <div style={cardStyle}>
                    <div>
                        <SuccessTag>Inkludert rabattene dine</SuccessTag>
                    </div>
                    <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
                        <Title as="h3" size="xs">
                            {selected}
                        </Title>
                        <Text bold>{insurance.price}</Text>
                    </div>
                    <Text>{insurance.text}</Text>
                    <div>
                        <Expander aria-controls={coverageId} expandDirection={expandDirection} open={isOpen} onClick={() => setIsOpen(open => !open)}>
                            Vis hva som dekkes
                        </Expander>
                        <div id={coverageId} hidden={!isOpen}>
                            <Text>{insurance.coverage}</Text>
                        </div>
                    </div>
                </div>

                <div style={{
        ...cardStyle,
        gridAutoFlow: "column",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
                    <Text>
                        Egenandelen er <strong>8 000 kr</strong>
                    </Text>
                    <PenIcon />
                </div>
            </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:`Expander brukt alene i et kort. Teksten flukter med innholdet rundt, mens
hover og fokus strekker seg utenfor sideveis.`,...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "I utvidbart panel",
  render: ({
    expandDirection,
    icon
  }) => <ExpandablePanel style={{
    width: "min(100%, 32rem)"
  }}>
            <Expander data-testid={expanderTestId} expandDirection={expandDirection} icon={icon}>
                Hva dekker leiebilforsikringen?
            </Expander>
            <ExpandablePanelContent>
                Forsikringen dekker skade, tyveri og egenandel når bilen er leid
                på ferie i Norden eller EU og leieforholdet er betalt med kortet
                ditt.
            </ExpandablePanelContent>
        </ExpandablePanel>
}`,...g.parameters?.docs?.source},description:{story:"Inne i et ExpandablePanel rendres Expander som `summary` og styrer panelet.",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "I utvidbart panel, åpner oppover",
  args: {
    expandDirection: "up"
  },
  decorators: [Story => <div style={{
    minHeight: "100dvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "24px"
  }}>
                <Story />
            </div>],
  render: ({
    expandDirection,
    icon
  }) => <ExpandablePanel style={{
    width: "min(100%, 32rem)"
  }}>
            <Expander data-testid={expanderTestId} expandDirection={expandDirection} icon={icon}>
                Se kontaktvalg i bunnmenyen
            </Expander>
            <ExpandablePanelContent>
                Ring oss pa 55 55 55 55, start chat med skadehjelp eller be om
                at en rådgiver ringer deg tilbake innen 15 minutter.
            </ExpandablePanelContent>
        </ExpandablePanel>
}`,...v.parameters?.docs?.source}}};export{g as InExpandablePanel,v as InExpandablePanelOpensUp,l as Standalone,c as StandaloneInCard,m as StandaloneOpenByDefault,k as StandaloneOpensUp,p as StandaloneWithAriaControls,oe as __namedExportsOrder,se as default};
