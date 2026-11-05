import{r as c,j as l}from"./iframe-CMTplqJo.js";import{D as p,t as e}from"./DateInput-D3o6ibrX.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-Cozbiuh3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-_7lZvp9j.js";import"./formatDate-Dke5WO_s.js";import"./Text-D3m7GFAe.js";import"./Select-DKDP9oI4.js";import"./Button-lWktbHFr.js";import"./usePreviousValue-1pSTm4ys.js";import"./Loader-D3c14EZC.js";import"./useDelayedRender-Dttd8YNS.js";import"./InputGroup-C6N2H8kH.js";import"./useId-C3tVUgss.js";import"./Label-CQVW3tcM.js";import"./SupportLabel-Dpb6ooSZ.js";import"./SuccessIcon-DonR_IWg.js";import"./Icon-DTiJGJJd.js";import"./WarningIcon-C22n8rPH.js";import"./Search-BDp563Fc.js";import"./Title-D7nbWypj.js";import"./useListNavigation-BLeTg64f.js";import"./ArrowDownIcon-rQMSkiNN.js";import"./CloseIcon-Bk6GweaS.js";import"./ArrowRightIcon-D5zIVdqF.js";import"./TableCaption-C08L1Kje.js";import"./tableContext-Cj5N6HLA.js";import"./CalendarIcon-CFoNYg_r.js";import"./SlotComponent-96B6i1N2.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Komponenter/Date Input",component:p,argTypes:{min:{control:"text"},max:{control:"text"}},args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:x()}},a={name:"Date Input",args:{}},t={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:f=>{const[u,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return l.jsxs(V,{gap:"m",children:[l.jsx(p,{label:"Fra",value:u,min:D,max:i||d,onChange:m=>g(m.target.value)}),l.jsx(p,{label:"Til",value:i,min:u||D,max:d,onChange:m=>I(m.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}},$=["DateInputStory","DateInputMinMax","DateInputRange","DateInputError","DateInputDisabled","DateInputReadOnly"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
