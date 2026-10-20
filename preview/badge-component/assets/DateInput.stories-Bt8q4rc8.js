import{r as c,j as l}from"./iframe-CExNQTwL.js";import{D as p,t as e}from"./DateInput-BvGPpGDR.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-4lA1hkYi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-aNk5SE77.js";import"./Select-BWlMbQDS.js";import"./mergeRefs-D6Usw7mE.js";import"./Button-f7SVFka6.js";import"./usePreviousValue-BVgFfbq7.js";import"./Loader-cmisX-TA.js";import"./useDelayedRender-CtDlc0X-.js";import"./InputGroup-DsTAzzOB.js";import"./useId-NPzug_rM.js";import"./Label-DDcs5TJ7.js";import"./SupportLabel-DSt1pslH.js";import"./SuccessIcon-CufdWbrK.js";import"./Icon-DD5Y54mP.js";import"./WarningIcon-w7dUcqyV.js";import"./Search-BF4CioVc.js";import"./Title-BxV27uma.js";import"./useListNavigation-BoqRbtgi.js";import"./ArrowDownIcon-DQ5g4Cbn.js";import"./CloseIcon-B3M079h_.js";import"./ArrowRightIcon-DgP2nnBX.js";import"./TableCaption-BPkev1oD.js";import"./tableContext-WDTxCl4X.js";import"./CalendarIcon-DQ8_CebG.js";import"./SlotComponent-DePPdfKu.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,Z={title:"Komponenter/Date Input",component:p,argTypes:{min:{control:"text"},max:{control:"text"}},args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:f()}},a={name:"Date Input",args:{}},t={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:w=>{const[u,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return l.jsxs(V,{gap:"m",children:[l.jsx(p,{label:"Fra",value:u,min:D,max:i||d,onChange:m=>g(m.target.value)}),l.jsx(p,{label:"Til",value:i,min:u||D,max:d,onChange:m=>I(m.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
