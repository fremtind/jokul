import{D as s}from"./_index-vbNhsKvs.js";/* empty css               */import{a as e}from"./Calendar-BkGVgTaZ.js";import"./iframe-BaeIsfXD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-DWxNLoDA.js";import"./useId-CVVuxryf.js";import"./Label-C1IMJ2Ou.js";import"./SupportLabel-D8QTtzMm.js";import"./SuccessIcon-2pd3aG7q.js";import"./Icon-D1VP7FbD.js";import"./WarningIcon-C98j5mof.js";import"./Button-C5gP_j7-.js";import"./usePreviousValue-D9WD-Fq4.js";import"./Loader-C_8hyXER.js";import"./useDelayedRender-C0owDi99.js";import"./CalendarIcon-Dt6m23eF.js";import"./Card-D1D9KPIa.js";import"./SlotComponent-CMy4RUFr.js";import"./mergeRefs-BdwY0niU.js";import"./Flex-DE-oH1xi.js";import"./NativeSelect-BFOzJDAf.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Cdnv2Eba.js";import"./ArrowDownIcon-Dp-1tr_E.js";import"./ArrowRightIcon-0YRJ1nTF.js";import"./TableCaption-YBlCgSbN.js";import"./tableContext-C2_1jsEQ.js";import"./Text-BbtymVt4.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
