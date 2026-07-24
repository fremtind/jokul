import{D as s}from"./_index-iRtRmfAe.js";/* empty css               */import{a as e}from"./Calendar--i4wfj81.js";import"./iframe-DczHPdlv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-D4viaD6Q.js";import"./useId-pHBeU-vi.js";import"./Label-D5w0ElEA.js";import"./SupportLabel-Cv_UVzm5.js";import"./SuccessIcon-DIhEpNqE.js";import"./Icon-CbdNsX6z.js";import"./WarningIcon-nqVKxOXy.js";import"./Button-BUjmE0Af.js";import"./usePreviousValue-B6GFLNtp.js";import"./Loader-BUMTEVnh.js";import"./useDelayedRender-D7mTAlPM.js";import"./CalendarIcon-C3YDAaD5.js";import"./Card-znnyU53d.js";import"./SlotComponent-B9ewTH5z.js";import"./mergeRefs-BrIAKJ7n.js";import"./Flex-CelAk_n1.js";import"./NativeSelect-tQeIlUhY.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-KI2ixWGD.js";import"./ArrowDownIcon-DXvZj97K.js";import"./ArrowRightIcon-BPNc9O3F.js";import"./TableCaption-2kljCSk3.js";import"./tableContext-B0uadK0j.js";import"./Text--wjW1_0P.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
