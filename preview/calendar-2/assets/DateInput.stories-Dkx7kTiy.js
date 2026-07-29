import{D as s,t as e}from"./_index-Dd8VYBUR.js";/* empty css               */import"./iframe-B-gsrB7C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-CHYEhKP6.js";import"./Flex-CeIppJ9R.js";import"./SlotComponent-DUws_h2B.js";import"./mergeRefs-fauIwjzm.js";import"./NativeSelect-n6mL7b9p.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BpZ8p85S.js";import"./ArrowDownIcon-C1v_7lX0.js";import"./Icon--6LHf8Va.js";import"./InputGroup-IsDzZS2x.js";import"./useId-BeLfunr9.js";import"./Label-BEC1Bhzu.js";import"./SupportLabel-Dl6vDL7o.js";import"./SuccessIcon-DN2c95Z4.js";import"./WarningIcon-DCRptmS4.js";import"./Button-CB8OIQ63.js";import"./usePreviousValue-BtetFu4T.js";import"./Loader-BPiyrU50.js";import"./useDelayedRender-CnHgPfma.js";import"./ArrowRightIcon-CQU4TfpL.js";import"./TableCaption-Dip8lL_L.js";import"./tableContext-kSNlUC4v.js";import"./CalendarIcon-Igsf8m0H.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,C={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
