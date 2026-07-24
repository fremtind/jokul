import{D as s}from"./_index-DoTClu44.js";/* empty css               */import{a as e}from"./Calendar-BoB-E3U2.js";import"./iframe-BELzo5jQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-yHjcp_cN.js";import"./useId-V0PEyoa6.js";import"./Label-tZDkTdl2.js";import"./SupportLabel-BTAbZyJJ.js";import"./SuccessIcon-Cb8O67fh.js";import"./Icon-DhocsGnY.js";import"./WarningIcon-kCAmoZg1.js";import"./Button-B8gPkXHA.js";import"./usePreviousValue-Cpq2RwFz.js";import"./Loader-ce1EiKjc.js";import"./useDelayedRender-BwEpNWwT.js";import"./CalendarIcon-CdBmE14G.js";import"./Card-kFt9uPMB.js";import"./SlotComponent-qhBa_G8i.js";import"./mergeRefs-CLhL7P9s.js";import"./Flex-eyfV_MjD.js";import"./NativeSelect-fS9iB0Iw.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BPQFDCQO.js";import"./ArrowDownIcon-D14adkiu.js";import"./ArrowRightIcon-Cf3-A239.js";import"./TableCaption-Bb3ZahN2.js";import"./tableContext-BIWhmyAZ.js";import"./Text-Bxec4ddL.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
