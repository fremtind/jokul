import{D as s,t as e}from"./_index-Dfa3jcLc.js";/* empty css               */import"./iframe-tfIYmcKY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-CeiCWu0_.js";import"./Flex-Cc12rgj7.js";import"./SlotComponent-rkGjgAuz.js";import"./mergeRefs-V90Ujw1V.js";import"./NativeSelect-D9yqgFJF.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-cbwAmKMj.js";import"./ArrowDownIcon-BsJLELzX.js";import"./Icon-3NNtBsJI.js";import"./InputGroup-PqOnVYzJ.js";import"./useId-DUakEgQr.js";import"./Label--QxdZ_YV.js";import"./SupportLabel-Bf4ZgvA8.js";import"./SuccessIcon-CzahbezD.js";import"./WarningIcon-BQHmraDc.js";import"./Button-DlB2akMW.js";import"./usePreviousValue-BPiKMR4b.js";import"./Loader-D3IPKFyC.js";import"./useDelayedRender-PDnGje90.js";import"./ArrowRightIcon-tUtLM2_L.js";import"./TableCaption-D0ZADO6b.js";import"./tableContext-BApP0IpZ.js";import"./CalendarIcon-Btg7SuGX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,C={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const N=["DateInputStory","DateInputMinMax","DateInputError","DateInputDisabled","DateInputReadOnly"];export{n as DateInputDisabled,r as DateInputError,t as DateInputMinMax,o as DateInputReadOnly,a as DateInputStory,N as __namedExportsOrder,C as default};
