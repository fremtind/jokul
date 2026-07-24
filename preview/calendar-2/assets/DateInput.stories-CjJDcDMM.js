import{D as s}from"./_index-tXX193T2.js";/* empty css               */import{a as e}from"./Calendar-DQv9jYX-.js";import"./iframe-BZmcJa8V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CVAjUT7W.js";import"./useId-B24-RPn9.js";import"./Label-BiKRDH54.js";import"./SupportLabel-yINM9cBh.js";import"./SuccessIcon-CvA7p0Kz.js";import"./Icon-B4QrTS4L.js";import"./WarningIcon-HsoYDbJw.js";import"./Button-CEjSoeJV.js";import"./usePreviousValue-CxqYLfuA.js";import"./Loader-6ydfcUWu.js";import"./useDelayedRender-DEnoWJ1Z.js";import"./CalendarIcon-f5xsRB-o.js";import"./Flex-CS_MJFfT.js";import"./SlotComponent-DGcYP4pa.js";import"./mergeRefs-DRRMip4j.js";import"./NativeSelect-CAi8SRtk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B9EYxoa6.js";import"./ArrowDownIcon-4BkPl6DA.js";import"./ArrowRightIcon-CTNyMVpH.js";import"./TableCaption-BwjSSRnc.js";import"./tableContext-v3lDyirT.js";import"./Text-DO0fxEm2.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
