import{D as s,t as e}from"./_index-DLLczs5-.js";/* empty css               */import"./iframe-DSmbHPAN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-u9lwYaSA.js";import"./Flex-DSSWQ7S6.js";import"./SlotComponent-hSV_d9WT.js";import"./mergeRefs-Bi2dp4Z7.js";import"./NativeSelect-BY0k2Otc.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CKXnQrCq.js";import"./ArrowDownIcon-riFVLHU8.js";import"./Icon-CXGEY-5-.js";import"./InputGroup-Dv5MqIEg.js";import"./useId-BqnN0Zcx.js";import"./Label-jurifqgh.js";import"./SupportLabel-Cdbif_TY.js";import"./SuccessIcon-XM7XfDyy.js";import"./WarningIcon-E1iDheLx.js";import"./Button-Dqdjp27D.js";import"./usePreviousValue-DCUFEM92.js";import"./Loader-Dbs6ORoh.js";import"./useDelayedRender-Cr07E68K.js";import"./ArrowRightIcon-RhgGMTZY.js";import"./TableCaption-BtcFmG45.js";import"./tableContext-BeIzfWVK.js";import"./CalendarIcon-B1FBcGA1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,C={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
