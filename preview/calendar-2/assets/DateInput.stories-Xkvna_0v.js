import{D as s}from"./_index-BgZp4X_c.js";/* empty css               */import{a as e}from"./Calendar-D8KiKr7Q.js";import"./iframe-Q6Hi1QQy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CVT_crvB.js";import"./useId-BsqxMsdv.js";import"./Label-BGs6fnOD.js";import"./SupportLabel-C0DRBcW4.js";import"./SuccessIcon--bND-ZRE.js";import"./Icon-DHxYZjTo.js";import"./WarningIcon-B7he0VyW.js";import"./Button-D-oBgXkJ.js";import"./usePreviousValue-BMdS6YLX.js";import"./Loader-XtpRgGsy.js";import"./useDelayedRender-DLYR5jQu.js";import"./CalendarIcon-DAa5QXAr.js";import"./Card-DogIRVPW.js";import"./SlotComponent-CP2K66-I.js";import"./mergeRefs-BNunRsTs.js";import"./Flex-Cp1UPENX.js";import"./NativeSelect-Co6QbIK9.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DjwSi6t7.js";import"./ArrowDownIcon-DjyeBwbI.js";import"./ArrowRightIcon-By2hU1LX.js";import"./TableCaption--saeC1Ov.js";import"./tableContext-Q507GKWH.js";import"./Text-ClEUC7pP.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
