import{D as s}from"./_index-B6RqGscR.js";/* empty css               */import{a as e}from"./Calendar-K8Y2ki64.js";import"./iframe-BAOkdMH2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-ChM6Sfc2.js";import"./useId-DxQLXUYI.js";import"./Label-CM_pvvAi.js";import"./SupportLabel-C2JxB6Gn.js";import"./SuccessIcon-D1Qj0uex.js";import"./Icon-BVz5u1ID.js";import"./WarningIcon-B3fJJsEc.js";import"./Button-D95ZRVoN.js";import"./usePreviousValue-DckVcUCL.js";import"./Loader-C8SA-SY5.js";import"./useDelayedRender-B4osJISD.js";import"./CalendarIcon-CMwyd8uX.js";import"./Card-C6NcueNC.js";import"./SlotComponent-S3s6jY_M.js";import"./mergeRefs-Bf_Kdr9a.js";import"./Flex-GWZ2c-AZ.js";import"./NativeSelect-CX6WLpax.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CXmVT46f.js";import"./ArrowDownIcon-CgZHaKXz.js";import"./ArrowRightIcon-CB4cgom9.js";import"./TableCaption-8uijzna3.js";import"./tableContext-DpPivZOg.js";import"./Text-B3lUa1MH.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
