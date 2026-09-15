import{r as c,j as l}from"./iframe-jg5XoKNS.js";import{D as p,t as e}from"./DateInput-BSyX9fz5.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-BRNkguz8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-C41zS4Am.js";import"./Select-B_U88V4w.js";import"./mergeRefs-DJfMmZkb.js";import"./Button-C1oZxTwC.js";import"./usePreviousValue-Cn1gxV2N.js";import"./Loader-BstDeGrF.js";import"./useDelayedRender-BnjWFvYK.js";import"./InputGroup-BESdhA9N.js";import"./useId-CymTfCCJ.js";import"./Label-8Tm30--N.js";import"./SupportLabel-Bzbqm0ht.js";import"./SuccessIcon-Bqpo6_9K.js";import"./Icon-DVRJrGcN.js";import"./WarningIcon-Cnbdl-7K.js";import"./Search-D9t4E28B.js";import"./Title-d2rU5CRE.js";import"./useListNavigation-B4DKwopz.js";import"./ArrowDownIcon-DUDx-twm.js";import"./CloseIcon-CtfLTHoj.js";import"./ArrowRightIcon-Ctdd0tBL.js";import"./TableCaption-Dcrp_7Lm.js";import"./tableContext-CTHi2DgD.js";import"./CalendarIcon-BLb-ijRv.js";import"./SlotComponent-BkOnCVAs.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,Z={title:"Komponenter/Date Input",component:p,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:f()}},a={name:"Date Input",args:{}},t={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:w=>{const[u,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return l.jsxs(V,{gap:"m",children:[l.jsx(p,{label:"Fra",value:u,min:D,max:i||d,onChange:m=>g(m.target.value)}),l.jsx(p,{label:"Til",value:i,min:u||D,max:d,onChange:m=>I(m.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const $=["DateInputStory","DateInputMinMax","DateInputRange","DateInputError","DateInputDisabled","DateInputReadOnly"];export{o as DateInputDisabled,n as DateInputError,t as DateInputMinMax,r as DateInputRange,s as DateInputReadOnly,a as DateInputStory,$ as __namedExportsOrder,Z as default};
