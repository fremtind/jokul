import{D as s}from"./_index-CB5fPwTu.js";/* empty css               */import{a as e}from"./Calendar-D-bYtjyf.js";import"./iframe-DWegUtH-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-3wdZFCyp.js";import"./useId-C476k4y_.js";import"./Label-CijQOmlh.js";import"./SupportLabel-DA3S-Zo_.js";import"./SuccessIcon-D1tY9H-M.js";import"./Icon-D0MHEvnZ.js";import"./WarningIcon-3fxHl9vf.js";import"./Button-CbPehrbg.js";import"./usePreviousValue-nqP0plzW.js";import"./Loader-CCm9MpZY.js";import"./useDelayedRender-40LLIMSC.js";import"./CalendarIcon-BstowIU9.js";import"./Card-gS_VApLA.js";import"./SlotComponent-Bo_omsBn.js";import"./mergeRefs-84hj-KYZ.js";import"./Flex-CfCINvJS.js";import"./NativeSelect-DeHPxx8C.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CtUJ0ZBX.js";import"./ArrowDownIcon-vIq_rK2G.js";import"./ArrowRightIcon-Bcv9uZDx.js";import"./TableCaption-C8AbHZUR.js";import"./tableContext-DzS-VssV.js";import"./Text-CRDupJZ_.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
