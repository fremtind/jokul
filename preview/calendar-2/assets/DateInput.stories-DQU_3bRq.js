import{D as s}from"./_index-Bmf1RKuf.js";/* empty css               */import{a as e}from"./Calendar-UNnI3Nbt.js";import"./iframe-DNeBsABU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-pQgr79y3.js";import"./useId-CaORFJj5.js";import"./Label-MQ5qTBAF.js";import"./SupportLabel-Ci92ZVi8.js";import"./SuccessIcon-D8_Llcs7.js";import"./Icon-D1Uh5uem.js";import"./WarningIcon-CUbEWgE6.js";import"./Button-bTBN078I.js";import"./usePreviousValue-C9lleLtj.js";import"./Loader-obZd60b2.js";import"./useDelayedRender-BYAkFh-6.js";import"./CalendarIcon-BKulPbH6.js";import"./Flex-Cy2y354T.js";import"./SlotComponent-x1hB2fcl.js";import"./mergeRefs-CRqzOuG2.js";import"./NativeSelect-CHMtXRhW.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BSF2Ggr0.js";import"./ArrowDownIcon-ood08jTX.js";import"./ArrowRightIcon-C7VHpRM1.js";import"./TableCaption-BXnXiJyS.js";import"./tableContext-bwfJLAXY.js";import"./Text-DUF24NTZ.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const P=["DateInputStory","DateInputMinMax","DateInputError","DateInputDisabled","DateInputReadOnly"];export{n as DateInputDisabled,r as DateInputError,t as DateInputMinMax,o as DateInputReadOnly,a as DateInputStory,P as __namedExportsOrder,N as default};
