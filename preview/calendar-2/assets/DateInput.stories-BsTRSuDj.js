import{D as s,t as e}from"./_index-Dk1kkXRB.js";/* empty css               */import"./iframe-CQAVWTjP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-VgAE9c7T.js";import"./Flex-De-WmYcL.js";import"./SlotComponent-Dzt3WMt3.js";import"./mergeRefs-mHWaU_KQ.js";import"./NativeSelect-BypcwQb6.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B8t6hf6P.js";import"./ArrowDownIcon-CDpZm1Z4.js";import"./Icon-CdSgCaQk.js";import"./InputGroup-mepo02rn.js";import"./useId-NmReFy88.js";import"./Label-sv8wGvqN.js";import"./SupportLabel-C0xmIasW.js";import"./SuccessIcon-CwCVO0ts.js";import"./WarningIcon-CfP3IsWI.js";import"./Button-t2xMBh2G.js";import"./usePreviousValue-MG7a4oNx.js";import"./Loader-5Twbi1PT.js";import"./useDelayedRender-BBDJ8ovG.js";import"./ArrowRightIcon-DhNp5o0x.js";import"./TableCaption-B4KdTdFp.js";import"./tableContext-Cwy9Lauh.js";import"./CalendarIcon-C_MKXOhs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,C={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
