import{D as s}from"./_index-ZtBpuQx4.js";/* empty css               */import{a as e}from"./Calendar-D5JuUcSX.js";import"./iframe-CRj1-ffI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CievuehO.js";import"./useId-BQjP9cWe.js";import"./Label-lOk_nmdg.js";import"./SupportLabel-E9Ja3xKn.js";import"./SuccessIcon-C1xxEch7.js";import"./Icon-BmKMr4vt.js";import"./WarningIcon-DZdjRWSf.js";import"./Button-Dq5t0A7V.js";import"./usePreviousValue-B7q70Bq-.js";import"./Loader-BI0k4B64.js";import"./useDelayedRender-oAuYTB9m.js";import"./CalendarIcon-Ds_7Mt3G.js";import"./Card-C8d--aht.js";import"./SlotComponent-CauhzHOh.js";import"./mergeRefs-CgQ5otvs.js";import"./Flex-CWz5qz5A.js";import"./NativeSelect-CxTtdlDN.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B3KYaBFr.js";import"./ArrowDownIcon-BRR6v4ki.js";import"./ArrowRightIcon-B3ifFxnQ.js";import"./TableCaption-CtYwXgDt.js";import"./tableContext-desCHRGW.js";import"./Text-C-yQkIy6.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  name: "Date Input (Error)",
  args: {
    defaultValue: toValidInputValue(new Date()),
    min: toValidInputValue(new Date(new Date().setDate(new Date().getDate() + 1))),
    errorLabel: "Du kan ikke velge en dato som er før i dag"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Date Input (Disabled)",
  args: {
    defaultValue: toValidInputValue(new Date()),
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Date Input (Read Only)",
  args: {
    defaultValue: toValidInputValue(new Date()),
    readOnly: true
  }
}`,...o.parameters?.docs?.source}}};const U=["DateInputStory","DateInputMinMax","DateInputError","DateInputDisabled","DateInputReadOnly"];export{n as DateInputDisabled,r as DateInputError,t as DateInputMinMax,o as DateInputReadOnly,a as DateInputStory,U as __namedExportsOrder,P as default};
