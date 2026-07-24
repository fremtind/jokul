import{D as s}from"./_index-CMjaR_oW.js";/* empty css               */import{a as e}from"./Calendar-CfEkhcMC.js";import"./iframe-BLh5WKhB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-BY-sgGSd.js";import"./useId-C-iNBN64.js";import"./Label-BNHUVq9R.js";import"./SupportLabel-BkI7YTN8.js";import"./SuccessIcon-DgzhIWdX.js";import"./Icon-B5LLWZHv.js";import"./WarningIcon-2X_4-MaP.js";import"./Button-ovN0c6NN.js";import"./usePreviousValue-wPtrC9qx.js";import"./Loader-BE0h-rDF.js";import"./useDelayedRender-BOA9U0a4.js";import"./CalendarIcon-Bcsn6Oui.js";import"./Card-BXwFw-TH.js";import"./SlotComponent-3HYlCzDm.js";import"./mergeRefs-DNIMpV3J.js";import"./Flex-B-iJaz2h.js";import"./NativeSelect-RyNga_Kt.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CEtUQB-z.js";import"./ArrowDownIcon-bntqNhZ0.js";import"./ArrowRightIcon-CkYhqwur.js";import"./TableCaption-BIGY1k1Z.js";import"./tableContext-CPHIgy2L.js";import"./Text-D0hZovtq.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
