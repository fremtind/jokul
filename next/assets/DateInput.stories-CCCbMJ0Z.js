import{r as c,j as m}from"./iframe-BM5Tk-7K.js";import{D as u,t as e}from"./DateInput-DdiHiuhc.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-Bb8cXgJc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-98fwSiQO.js";import"./Select-dJEDF8e4.js";import"./mergeRefs-uMJ1gt5p.js";import"./Button-CqF2kU4m.js";import"./usePreviousValue-Cig1jiQz.js";import"./Loader-DGPTzZYD.js";import"./useDelayedRender-gdtrS9px.js";import"./InputGroup-Dzkjp8OJ.js";import"./useId-BpXa5wQ4.js";import"./Label-C59R4ceN.js";import"./SupportLabel-Dfr6JS5t.js";import"./SuccessIcon-qKKMID0L.js";import"./Icon-CaXfkIdf.js";import"./WarningIcon-Biwm9-GU.js";import"./Search-dqYsZ9b_.js";import"./Title-DyvxLreL.js";import"./useListNavigation-CWqBOOq2.js";import"./ArrowDownIcon-Bhv6bM79.js";import"./CloseIcon-EXhtKKBe.js";import"./ArrowRightIcon-g_Lwehif.js";import"./TableCaption-C7U1S2ma.js";import"./tableContext-CjhWaR8l.js";import"./CalendarIcon-cMTbkUGv.js";import"./SlotComponent-DH5upaxE.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,Z={title:"Komponenter/Date Input",component:u,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:f()}},a={name:"Date Input",args:{}},t={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:w=>{const[p,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return m.jsxs(V,{children:[m.jsx(u,{label:"Fra",value:p,min:D,max:i||d,onChange:l=>g(l.target.value)}),m.jsx(u,{label:"Til",value:i,min:p||D,max:d,onChange:l=>I(l.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Date Input",
  args: {}
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Datoavgrensing",
  args: {
    defaultValue: toValidInputValue(new Date()),
    min: toValidInputValue(new Date()),
    max: toValidInputValue(new Date(new Date().setDate(new Date().getDate() + 14))),
    description: "Du kan bare velge datoer innenfor de neste 14 dagene"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Datointervall",
  render: args => {
    const [fromDate, setFromDate] = useState<string>("2026-01-16");
    const [toDate, setToDate] = useState<string>("2026-09-25");
    const earliestDate = "2026-01-14";
    const latestDate = "2026-10-24";
    return <Flex>
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
}`,...s.parameters?.docs?.source}}};const $=["DateInputStory","DateInputMinMax","DateInputRange","DateInputError","DateInputDisabled","DateInputReadOnly"];export{o as DateInputDisabled,n as DateInputError,t as DateInputMinMax,r as DateInputRange,s as DateInputReadOnly,a as DateInputStory,$ as __namedExportsOrder,Z as default};
