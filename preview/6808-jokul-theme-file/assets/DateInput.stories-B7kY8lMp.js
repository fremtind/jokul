import{r as c,j as p}from"./iframe-DnaMZTWI.js";import{D as l,t as e}from"./DateInput-CRN5bfcR.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-DnajS0ef.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-_7lZvp9j.js";import"./types-BlFGa32c.js";import"./formatDate-Dke5WO_s.js";import"./Text-Cw2D3zUh.js";import"./Select-BZ9PGsQ4.js";import"./Button-LPBHcj6O.js";import"./usePreviousValue-9oZwQHrc.js";import"./Loader-BsIlyN-o.js";import"./useDelayedRender-CRuPnchN.js";import"./InputGroup-Cnm7wNPa.js";import"./useId-C_1OVtph.js";import"./Label-DTt8PoUR.js";import"./SupportLabel-BWZhP9q3.js";import"./SuccessIcon-B_z0YMOz.js";import"./Icon-CXKz6NKW.js";import"./WarningIcon-CPenev79.js";import"./Search-BLMNuns1.js";import"./Title-C5O8DL31.js";import"./useListNavigation-LR8gYzKj.js";import"./ArrowDownIcon-gxorDLj7.js";import"./CloseIcon-CYq289GN.js";import"./ArrowLeftIcon-CZpJd-2X.js";import"./ArrowRightIcon-DVWfyksZ.js";import"./TableCaption-DIKL27If.js";import"./tableContext-CAA5RUI4.js";import"./CalendarIcon-CdDff0JE.js";import"./SlotComponent-M5skpW1E.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Komponenter/Date Input",component:l,argTypes:{min:{control:"text"},max:{control:"text"}},args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:x()}},t={name:"Date Input",args:{}},a={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:f=>{const[u,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return p.jsxs(V,{gap:"m",children:[p.jsx(l,{label:"Fra",value:u,min:D,max:i||d,onChange:m=>g(m.target.value)}),p.jsx(l,{label:"Til",value:i,min:u||D,max:d,onChange:m=>I(m.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}},te=["DateInputStory","DateInputMinMax","DateInputRange","DateInputError","DateInputDisabled","DateInputReadOnly"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Date Input",
  args: {}
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Datoavgrensing",
  args: {
    defaultValue: toValidInputValue(new Date()),
    min: toValidInputValue(new Date()),
    max: toValidInputValue(new Date(new Date().setDate(new Date().getDate() + 14))),
    description: "Du kan bare velge datoer innenfor de neste 14 dagene"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Datointervall",
  render: args => {
    const [fromDate, setFromDate] = useState<string>("2026-01-16");
    const [toDate, setToDate] = useState<string>("2026-09-25");
    const earliestDate = "2026-01-14";
    const latestDate = "2026-10-24";
    return <Flex gap="m">
                <DateInput label="Fra" value={fromDate} min={earliestDate} max={toDate || latestDate} onChange={e => setFromDate(e.target.value)} />
                <DateInput label="Til" value={toDate} min={fromDate || earliestDate} max={latestDate} onChange={e => setToDate(e.target.value)} />
            </Flex>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Date Input (Error)",
  args: {
    defaultValue: toValidInputValue(new Date()),
    min: toValidInputValue(new Date(new Date().setDate(new Date().getDate() + 1))),
    errorLabel: "Du kan ikke velge en dato som er før i dag"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Date Input (Disabled)",
  args: {
    defaultValue: toValidInputValue(new Date()),
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Date Input (Read Only)",
  args: {
    defaultValue: toValidInputValue(new Date()),
    readOnly: true
  }
}`,...s.parameters?.docs?.source}}};export{o as DateInputDisabled,n as DateInputError,a as DateInputMinMax,r as DateInputRange,s as DateInputReadOnly,t as DateInputStory,te as __namedExportsOrder,ee as default};
