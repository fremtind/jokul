import{r as c,j as l}from"./iframe-U_bfD-vz.js";import{D as p,t as e}from"./DateInput-CKK4eX5S.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-x-LWPJrw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-_7lZvp9j.js";import"./formatDate-Dke5WO_s.js";import"./Text-CV3hVylK.js";import"./Select-DL5eH2it.js";import"./Button-CoDKX3Lz.js";import"./usePreviousValue-DxkAZtoL.js";import"./Loader-1kSfjfT3.js";import"./useDelayedRender-BdFI4hCa.js";import"./InputGroup-B6eaFDYx.js";import"./useId-BHvPmunK.js";import"./Label-BxXjVMqy.js";import"./SupportLabel-CCcWmwCn.js";import"./SuccessIcon-Dtk71qB5.js";import"./Icon-bW-47p_G.js";import"./WarningIcon-DtjcIgfp.js";import"./Search-DY1EVDRZ.js";import"./Title-JSAJ3k2x.js";import"./useListNavigation-SKpMUyCS.js";import"./ArrowDownIcon-V8hMW2bp.js";import"./CloseIcon-WM8VCDJ9.js";import"./ArrowRightIcon-Bp6I5uTM.js";import"./TableCaption-By0Lk4g7.js";import"./tableContext-BMyj-gOP.js";import"./CalendarIcon-3mTd5uuj.js";import"./SlotComponent-CRPUYxYB.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Komponenter/Date Input",component:p,argTypes:{min:{control:"text"},max:{control:"text"}},args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:x()}},a={name:"Date Input",args:{}},t={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:f=>{const[u,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return l.jsxs(V,{gap:"m",children:[l.jsx(p,{label:"Fra",value:u,min:D,max:i||d,onChange:m=>g(m.target.value)}),l.jsx(p,{label:"Til",value:i,min:u||D,max:d,onChange:m=>I(m.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}},$=["DateInputStory","DateInputMinMax","DateInputRange","DateInputError","DateInputDisabled","DateInputReadOnly"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{o as DateInputDisabled,n as DateInputError,t as DateInputMinMax,r as DateInputRange,s as DateInputReadOnly,a as DateInputStory,$ as __namedExportsOrder,Z as default};
