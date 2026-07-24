import{D as s}from"./_index-CfV6VsNk.js";/* empty css               */import{a as e}from"./Calendar-BytSchfp.js";import"./iframe-DYWdyUxL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-B-3C8N3t.js";import"./useId-BOzEIjuC.js";import"./Label-C_9a0mP0.js";import"./SupportLabel-CetoG6I3.js";import"./SuccessIcon-Dw5XGk7M.js";import"./Icon-DdnKr8pm.js";import"./WarningIcon-xab_nx70.js";import"./Button-Cdj6mRlf.js";import"./usePreviousValue-CB25HRsc.js";import"./Loader-Dup7Vdtm.js";import"./useDelayedRender-DiAgrzgK.js";import"./CalendarIcon-Bn7GOgIi.js";import"./Card-CsN_ShNe.js";import"./SlotComponent-5FM_70NU.js";import"./mergeRefs-DaEXLW6U.js";import"./Flex-B6x7hKNj.js";import"./NativeSelect-C_KXOiev.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DB2sIgkz.js";import"./ArrowDownIcon-D2heZ4T3.js";import"./ArrowRightIcon-B8sabrxS.js";import"./TableCaption-CrnlPEt9.js";import"./tableContext-BwZXTt37.js";import"./Text-C7ULA8C5.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
