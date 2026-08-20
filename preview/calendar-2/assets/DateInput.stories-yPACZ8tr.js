import{r as c,j as u}from"./iframe-B7BRrnZk.js";import{D as m,t as e}from"./DateInput-jYY4YlkV.js";/* empty css               *//* empty css               */import{F as V}from"./Flex-LtXjrw5j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-8URVOSOJ.js";import"./NativeSelect-D69qRlJH.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D5IXuECs.js";import"./ArrowDownIcon-Bh7Xf9p5.js";import"./Icon-D3JfHITU.js";import"./InputGroup-MtrZHwl9.js";import"./useId-gyv7jAtv.js";import"./Label-L_Ua2Xx4.js";import"./SupportLabel-Co7SwUDP.js";import"./SuccessIcon-B960KZK0.js";import"./WarningIcon-BUCY9ITV.js";import"./Button-CkRbXC5_.js";import"./usePreviousValue-C6RsyoxO.js";import"./Loader-DN4YDe1m.js";import"./useDelayedRender-C5gDVmMs.js";import"./ArrowRightIcon-BFS92p1s.js";import"./TableCaption-DFoD9AJE.js";import"./tableContext-DqIpA6Bb.js";import"./mergeRefs-BaiX8sy6.js";import"./CalendarIcon-DPrP9PTg.js";import"./SlotComponent-BWq2Zy3K.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,W={title:"Komponenter/Date Input",component:m,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:f()}},a={name:"Date Input",args:{}},t={name:"Datoavgrensing",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Datointervall",render:w=>{const[p,g]=c.useState("2026-01-16"),[i,I]=c.useState("2026-09-25"),D="2026-01-14",d="2026-10-24";return u.jsxs(V,{children:[u.jsx(m,{label:"Fra",value:p,min:D,max:i||d,onChange:l=>g(l.target.value)}),u.jsx(m,{label:"Til",value:i,min:p||D,max:d,onChange:l=>I(l.target.value)})]})}},n={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},o={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},s={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
