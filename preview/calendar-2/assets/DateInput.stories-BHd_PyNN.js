import{D as s}from"./_index-CwfED5AD.js";/* empty css               */import{a as e}from"./Calendar-BytvsiqG.js";import"./iframe-DOGnsXL-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-M7cVebkJ.js";import"./useId-Dq6nG81M.js";import"./Label-CpSEfxht.js";import"./SupportLabel-CBHuDz12.js";import"./SuccessIcon-DlRo9NKk.js";import"./Icon-jWDh-j8H.js";import"./WarningIcon-B06b2JL6.js";import"./Button-DatrOgoB.js";import"./usePreviousValue-CcjplcU6.js";import"./Loader-B3pRtGCb.js";import"./useDelayedRender-B5jVceKN.js";import"./CalendarIcon-BCI56HuS.js";import"./Card-B5mLnJzc.js";import"./SlotComponent-B83S1Gh5.js";import"./mergeRefs-DJs1BG91.js";import"./Flex-DNIyskBp.js";import"./NativeSelect-D_cG4SvN.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-mwPDrxin.js";import"./ArrowDownIcon-CPLHF5QS.js";import"./ArrowRightIcon-lslvKq_R.js";import"./TableCaption-B56PQDaL.js";import"./tableContext-caB3HG2c.js";import"./Text-DKKJL132.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
