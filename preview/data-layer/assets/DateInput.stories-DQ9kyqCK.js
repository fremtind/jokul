import{r as c,j as l}from"./iframe-CDa7pJma.js";import{D as p,t as e}from"./DateInput-Bx6W5py3.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-CWnLdXBE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-YjSsgwWY.js";import"./formatDate-Dke5WO_s.js";import"./Text-OzFw203v.js";import"./Select-D7X9qkmj.js";import"./mergeRefs-n2brYZWD.js";import"./Button-CFUv8Zis.js";import"./usePreviousValue-ImjzenmM.js";import"./Loader-BworsGNj.js";import"./useDelayedRender-DVyyCK5S.js";import"./InputGroup-BY1VBAS9.js";import"./useId-DTJ5Q7tR.js";import"./Label-BR6gLBM4.js";import"./SupportLabel-DFPHlsxV.js";import"./SuccessIcon-CkajFwBn.js";import"./Icon-BFTeEGxG.js";import"./WarningIcon-DkyhFYvJ.js";import"./Search-C7LEdWY6.js";import"./Title-DwGKiJFo.js";import"./useListNavigation-yHnR_GaO.js";import"./ArrowDownIcon-Mv3BK9ot.js";import"./CloseIcon-CUNRQSXR.js";import"./ArrowRightIcon-0S-fhaxZ.js";import"./TableCaption-EaOor7L4.js";import"./tableContext-CpgaU6WB.js";import"./CalendarIcon-Dv_Rh-03.js";import"./SlotComponent-CpGAMfLY.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,$={title:"Komponenter/Date Input",component:p,argTypes:{min:{control:"text"},max:{control:"text"}},args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:f()}},t={name:"Date Input",args:{}},a={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:w=>{const[u,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return l.jsxs(V,{gap:"m",children:[l.jsx(p,{label:"Fra",value:u,min:D,max:i||d,onChange:m=>g(m.target.value)}),l.jsx(p,{label:"Til",value:i,min:u||D,max:d,onChange:m=>I(m.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ee=["DateInputStory","DateInputMinMax","DateInputRange","DateInputError","DateInputDisabled","DateInputReadOnly"];export{o as DateInputDisabled,n as DateInputError,a as DateInputMinMax,r as DateInputRange,s as DateInputReadOnly,t as DateInputStory,ee as __namedExportsOrder,$ as default};
