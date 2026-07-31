import{D as s,t as e}from"./DateInput-Lx6wHjt4.js";/* empty css               *//* empty css               */import"./iframe-DiBCTRt_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-BQnqPh_L.js";import"./Flex-CMWTLHcS.js";import"./SlotComponent-CPIfpyZQ.js";import"./mergeRefs-DDCXdoav.js";import"./NativeSelect-CXQZ8mmU.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DDm3tUoe.js";import"./ArrowDownIcon-CP_bykLx.js";import"./Icon-B1P5Dof_.js";import"./InputGroup-CSkXpCm3.js";import"./useId-gL4i6n-Z.js";import"./Label-Cnd_Z9JB.js";import"./SupportLabel-Db-Axhzu.js";import"./SuccessIcon-C32_bLGn.js";import"./WarningIcon-CtsazS9i.js";import"./Button-D2-LbmvX.js";import"./usePreviousValue-pT0PMmFx.js";import"./Loader-Cs6-lf6R.js";import"./useDelayedRender-CCDHtNK6.js";import"./ArrowRightIcon-BV1bYkyl.js";import"./TableCaption-Br6GEeNp.js";import"./tableContext-gVNL8j2T.js";import"./CalendarIcon-BFaTylBT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
