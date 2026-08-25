import{r as c,j as m}from"./iframe-DUSK3EL0.js";import{D as u,t as e}from"./DateInput-BmRySoFe.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-DUquMeXH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-pw_vefsz.js";import"./Select-ZkMDZbfI.js";import"./mergeRefs-BGvpb6pC.js";import"./Button-Cenx_Ne3.js";import"./usePreviousValue-2Ty8ukGF.js";import"./Loader-B40sQrz-.js";import"./useDelayedRender-C68oFPg3.js";import"./InputGroup-DLD7jAjz.js";import"./useId-BWR4YtCt.js";import"./Label-CGfkNRAN.js";import"./SupportLabel-BWHNu2on.js";import"./SuccessIcon-31L3ixE1.js";import"./Icon-OvV2KghW.js";import"./WarningIcon-CwQuELVA.js";import"./Search-BEkV8hc4.js";import"./Title-D0BvmPIH.js";import"./useListNavigation-DtClSrXm.js";import"./ArrowDownIcon-EfWEkruo.js";import"./CloseIcon-D_fWOejj.js";import"./ArrowRightIcon-BIvlZKpQ.js";import"./TableCaption-BDHJ5WAz.js";import"./tableContext-Td90D9vN.js";import"./CalendarIcon-Rx53jxRP.js";import"./SlotComponent-D-XCActz.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,Z={title:"Komponenter/Date Input",component:u,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:f()}},a={name:"Date Input",args:{}},t={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:w=>{const[p,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return m.jsxs(V,{children:[m.jsx(u,{label:"Fra",value:p,min:D,max:i||d,onChange:l=>g(l.target.value)}),m.jsx(u,{label:"Til",value:i,min:p||D,max:d,onChange:l=>I(l.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
