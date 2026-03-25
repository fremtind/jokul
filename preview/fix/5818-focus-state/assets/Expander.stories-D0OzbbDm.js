import{j as e,R as x}from"./iframe-Y3RdmOQL.js";import{E as l,a as p}from"./ExpandablePanel-B5eSUQeK.js";import{E as s}from"./Expander-xhWwL-dv.js";/* empty css               */import{C as k}from"./CalendarIcon-DvpGesIT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeightBetween-zJYEOSFa.js";import"./tokens-BiWAXAgN.js";import"./useBrowserPreferences-urArEJWy.js";import"./usePreviousValue-YVp05dAs.js";import"./ChevronDownIcon-BomLz7Kf.js";import"./Icon-eVkb1Efz.js";import"./ChevronUpIcon-CZHJLJ7z.js";const{userEvent:g,within:u}=__STORYBOOK_MODULE_TEST__,d="expander-trigger",T={title:"Komponenter/Expander",component:s,subcomponents:{ExpandablePanel:p,ExpandablePanelContent:l},args:{expandDirection:"down",icon:e.jsx(k,{})},argTypes:{expandDirection:{control:"radio",options:["up","down"]}},decorators:[n=>e.jsx("div",{style:{width:"32rem",maxWidth:"100%"},children:e.jsx(n,{})})],play:async({canvasElement:n})=>{const r=u(n);await new Promise(a=>setTimeout(a,300)),await g.click(r.getByTestId(d))},render:({expandDirection:n,icon:r})=>{const[a,c]=x.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx(s,{"data-testid":d,expandDirection:n,icon:r,open:a,onClick:()=>c(m=>!m),children:"Se hva reiseforsikringen dekker"}),a?e.jsx("div",{children:"Du er dekket for forsinket bagasje, avbestilling ved akutt sykdom og egenandel på leiebil opptil 15 000 kroner."}):null]})}},i={name:"Kontrollert uten panel",parameters:{docs:{source:{code:`const [isOpen, setIsOpen] = React.useState(false);

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
);`}}}},t={name:"I utvidbart panel",render:({expandDirection:n,icon:r})=>e.jsxs(p,{style:{width:"min(100%, 32rem)"},children:[e.jsx(s,{"data-testid":d,expandDirection:n,icon:r,children:"Hva dekker leiebilforsikringen?"}),e.jsx(l,{children:"Forsikringen dekker skade, tyveri og egenandel når bilen er leid på ferie i Norden eller EU og leieforholdet er betalt med kortet ditt."})]})},o={name:"Åpner oppover",args:{expandDirection:"up"},decorators:[n=>e.jsx("div",{style:{minHeight:"100dvh",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"24px"},children:e.jsx(n,{})})],render:({expandDirection:n,icon:r})=>e.jsxs(p,{style:{width:"min(100%, 32rem)"},children:[e.jsx(s,{"data-testid":d,expandDirection:n,icon:r,children:"Se kontaktvalg i bunnmenyen"}),e.jsx(l,{children:"Ring oss pa 55 55 55 55, start chat med skadehjelp eller be om at en rådgiver ringer deg tilbake innen 15 minutter."})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Kontrollert uten panel",
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
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Expander brukes i ExpandablePanel, men kan også brukes alene dersom du ønsker et annet uttrykk.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Åpner oppover",
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
}`,...o.parameters?.docs?.source}}};const R=["StandaloneControlled","InExpandablePanel","OpensUp"];export{t as InExpandablePanel,o as OpensUp,i as StandaloneControlled,R as __namedExportsOrder,T as default};
