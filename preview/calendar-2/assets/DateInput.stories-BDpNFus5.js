import{D as s}from"./_index-COuiJQfJ.js";/* empty css               */import{a as e}from"./Calendar-Df3Y3JYp.js";import"./iframe-DJsDf6Xw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-MSH-RSJP.js";import"./useId-Bjx1lglR.js";import"./Label-DQhT3wiH.js";import"./SupportLabel-DDjCeNrh.js";import"./SuccessIcon-CwIMaXBK.js";import"./Icon-feTOB1bx.js";import"./WarningIcon-GiNYF8mV.js";import"./Button-DrA5m4LC.js";import"./usePreviousValue-C01OkxUe.js";import"./Loader-CKCe4m_t.js";import"./useDelayedRender-DrJX0D0K.js";import"./CalendarIcon-D0MNiKd6.js";import"./Card-BmvEZ9id.js";import"./SlotComponent-DAi5HQ9p.js";import"./mergeRefs-CxGsQqwz.js";import"./Flex-CEZ93GMw.js";import"./NativeSelect-D0DJVa0_.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-v158iSpq.js";import"./ArrowDownIcon-CXj9WWja.js";import"./ArrowRightIcon-73jGoVcp.js";import"./TableCaption-xG-kMyJg.js";import"./tableContext-DOzatEaZ.js";import"./Text-CMaExNKF.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
