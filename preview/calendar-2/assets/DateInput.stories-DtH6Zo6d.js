import{D as s,t as e}from"./DateInput-BTrc6QAi.js";/* empty css               *//* empty css               */import"./iframe-CkLQiHoz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-DFJa0rjk.js";import"./Flex-BPQQ_Hgd.js";import"./SlotComponent-TNgwU1lo.js";import"./mergeRefs-Cv1EYVjp.js";import"./NativeSelect-DfJ4Tbjm.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DFNpv_oy.js";import"./ArrowDownIcon-CN7xoyyX.js";import"./Icon-TG9fNn27.js";import"./InputGroup-TCdvbxvB.js";import"./useId-ZAjFlcMh.js";import"./Label-DiINGYzq.js";import"./SupportLabel-Y6vCvDFH.js";import"./SuccessIcon-Cv7X3vOy.js";import"./WarningIcon-DcXwHgfZ.js";import"./Button-CiQaxybo.js";import"./usePreviousValue-CiCn_sFK.js";import"./Loader-D5n2E_DL.js";import"./useDelayedRender-DirulU0F.js";import"./ArrowRightIcon-ChgyBgJv.js";import"./TableCaption-CYyLO_Xr.js";import"./tableContext-CURM1I3I.js";import"./CalendarIcon-CAtBCGL3.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
