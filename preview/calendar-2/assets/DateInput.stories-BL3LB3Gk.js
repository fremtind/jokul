import{D as s}from"./_index-D2vq12iu.js";/* empty css               */import{a as e}from"./Calendar-CrROGQPL.js";import"./iframe-DxYlN7nq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-C2z7Bdrj.js";import"./useId-Dcq2o0V2.js";import"./Label-VCDfnGxr.js";import"./SupportLabel-DJpuwltU.js";import"./SuccessIcon-dMtpW5y_.js";import"./Icon-CXmdW7MR.js";import"./WarningIcon-D7Wl25q-.js";import"./Button-CB-EMXsJ.js";import"./usePreviousValue-DSEJxdc0.js";import"./Loader-BBt6OLHx.js";import"./useDelayedRender-DAcsp19A.js";import"./CalendarIcon-CZ-jtOPb.js";import"./Flex-C_djToRd.js";import"./SlotComponent-B9_Z_TVR.js";import"./mergeRefs-1ER95Lb_.js";import"./NativeSelect-C7s5So5k.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-K2OkLHjJ.js";import"./ArrowDownIcon-D-GFxcoK.js";import"./ArrowRightIcon-DtSS3cNd.js";import"./TableCaption-CyseSZYr.js";import"./tableContext-Cux9lxDs.js";import"./Text-B-n6R61W.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
