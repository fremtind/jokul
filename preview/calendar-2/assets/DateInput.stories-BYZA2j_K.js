import{r as c,j as u}from"./iframe-B_ZprsNo.js";import{D as m,t as e}from"./DateInput-gi6JUkFf.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-CpPVTCYh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-RkN_T9jZ.js";import"./NativeSelect-lUuUjCjn.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Cy7ykE4B.js";import"./ArrowDownIcon-BwBOcnmF.js";import"./Icon-BrhMsI5_.js";import"./InputGroup-k1Sfya55.js";import"./useId-VjQkGL6A.js";import"./Label-BUzYHGSH.js";import"./SupportLabel-C-EZjCMJ.js";import"./SuccessIcon-TRT5yn3z.js";import"./WarningIcon-DpGWfTt7.js";import"./Button-C_ASjeuZ.js";import"./usePreviousValue-m0AryCQV.js";import"./Loader-dm-O8i45.js";import"./useDelayedRender-B8hchlrX.js";import"./ArrowRightIcon-CQ4oPNPr.js";import"./TableCaption-B06mJ1bw.js";import"./tableContext-CwkIpvfV.js";import"./CalendarIcon-Bq6-xDej.js";import"./SlotComponent-xnEExfWS.js";import"./mergeRefs-DBNpWw3s.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,W={title:"Komponenter/Date Input",component:m,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:f()}},a={name:"Date Input",args:{}},t={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:w=>{const[p,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return u.jsxs(V,{children:[u.jsx(m,{label:"Fra",value:p,min:D,max:i||d,onChange:l=>g(l.target.value)}),u.jsx(m,{label:"Til",value:i,min:p||D,max:d,onChange:l=>I(l.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const X=["DateInputStory","DateInputMinMax","DateInputRange","DateInputError","DateInputDisabled","DateInputReadOnly"];export{o as DateInputDisabled,n as DateInputError,t as DateInputMinMax,r as DateInputRange,s as DateInputReadOnly,a as DateInputStory,X as __namedExportsOrder,W as default};
