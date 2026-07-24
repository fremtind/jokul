import{D as s}from"./_index-9q1p-46k.js";/* empty css               */import{a as e}from"./Calendar-DRlB6zA0.js";import"./iframe-lnnRhOPS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-DtjpPJWp.js";import"./useId-DE8bibEE.js";import"./Label-D2-dGWe8.js";import"./SupportLabel-CXLm2iOp.js";import"./SuccessIcon-Cz0BPqX9.js";import"./Icon-B2_nwEVu.js";import"./WarningIcon-DTIU3a-k.js";import"./Button-CuEGLxCT.js";import"./usePreviousValue-DUo7dhrF.js";import"./Loader-B55f1iDY.js";import"./useDelayedRender-CqCtfqBh.js";import"./CalendarIcon-D1GLCguE.js";import"./Card-F7lsWdcr.js";import"./SlotComponent-Bv-jryCH.js";import"./mergeRefs-H4z7hsoo.js";import"./Flex-DndcJaJQ.js";import"./NativeSelect-eh0IdR1R.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-dJaRUuAZ.js";import"./ArrowDownIcon-D6ZsQ4H6.js";import"./ArrowRightIcon-DBw1gsiU.js";import"./TableCaption-CDNycUGs.js";import"./tableContext-DZ2Dwifr.js";import"./Text-DixJ_Cft.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
