import{D as s}from"./_index-s8K_aBeq.js";/* empty css               */import{a as e}from"./Calendar-BhKXpPu5.js";import"./iframe-Cjf1vOlA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-BQHLYV9d.js";import"./useId-a6xwJViz.js";import"./Label-Bfk6YG8_.js";import"./SupportLabel-DsCm1aTr.js";import"./SuccessIcon-U9pdly8B.js";import"./Icon-DMgurLya.js";import"./WarningIcon-BNk8XuXd.js";import"./Button-BQLmPI1c.js";import"./usePreviousValue-u8QMjaAz.js";import"./Loader-BcjsLjHU.js";import"./useDelayedRender-ChRcOpRS.js";import"./CalendarIcon-Bz6HWL-b.js";import"./Card-B1Am3eRq.js";import"./SlotComponent-C7398424.js";import"./mergeRefs-P1HhVlzr.js";import"./Flex-DEOA1wg7.js";import"./NativeSelect-WD5Vm6Z6.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CN4q1xLw.js";import"./ArrowDownIcon-DiDY9pKy.js";import"./ArrowRightIcon-bYX0X8yO.js";import"./TableCaption-C77Bm9da.js";import"./tableContext-CeqwaLnP.js";import"./Text--uI88Nrz.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
