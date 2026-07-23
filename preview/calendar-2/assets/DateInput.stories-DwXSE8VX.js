import{D as o}from"./_index-CDMhC1Tg.js";/* empty css               */import{a as e}from"./Calendar-NcUEQuF4.js";import"./iframe-Bs2ZEwwT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CpKsJGCn.js";import"./useId-CVc_TE9Z.js";import"./Label-BaAE2F6s.js";import"./SupportLabel-DD1h3dlP.js";import"./SuccessIcon-Gd7hNHf-.js";import"./Icon-C7s4gIxg.js";import"./WarningIcon-D--lXmJJ.js";import"./Button-BmmzBNH9.js";import"./usePreviousValue-l7ugWeuV.js";import"./Loader-D0qJ6omB.js";import"./useDelayedRender-D_khDUEd.js";import"./CalendarIcon-BVeZJ3Kq.js";import"./Card-D7KmuBBz.js";import"./SlotComponent-C-RR4lsL.js";import"./mergeRefs-XO6I4NKo.js";import"./Flex-BRpAonZ5.js";import"./NativeSelect-G6jGPmAZ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D-W4J-GQ.js";import"./ArrowDownIcon-B3Y5W5C0.js";import"./ArrowRightIcon-5xQEZZ9q.js";import"./TableCaption-BmI2YfQ-.js";import"./tableContext-DzJjgAYg.js";import"./Text-Du1HvY2t.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:o,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Disabled)",args:{value:e(new Date),disabled:!0}},n={name:"Date Input (Read Only)",args:{value:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Date Input",
  args: {}
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Avgrense valgbare datoer",
  args: {
    defaultValue: toValidInputValue(new Date()),
    min: toValidInputValue(new Date()),
    max: toValidInputValue(new Date(new Date().setDate(new Date().getDate() + 14))),
    description: "Du kan bare velge datoer innenfor de neste 14 dagene"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Date Input (Disabled)",
  args: {
    value: toValidInputValue(new Date()),
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Date Input (Read Only)",
  args: {
    value: toValidInputValue(new Date()),
    readOnly: true
  }
}`,...n.parameters?.docs?.source}}};const P=["DateInputStory","DateInputMinMax","DateInputDisabled","DateInputReadOnly"];export{r as DateInputDisabled,t as DateInputMinMax,n as DateInputReadOnly,a as DateInputStory,P as __namedExportsOrder,N as default};
