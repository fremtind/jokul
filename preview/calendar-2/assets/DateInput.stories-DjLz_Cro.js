import{D as s,t as e}from"./_index-C-EzYYo_.js";/* empty css               */import"./iframe-C5Zwonuo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-DZfsHyZW.js";import"./Text-Dg4lvHes.js";import"./Flex-DKYjZmuQ.js";import"./SlotComponent-Ca5ipsfM.js";import"./mergeRefs-DjO_LR_x.js";import"./NativeSelect-BNEgollk.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Bd41ZGtC.js";import"./ArrowDownIcon-CaQ2p2CD.js";import"./Icon-ByfFX6IZ.js";import"./InputGroup-CNogIbvc.js";import"./useId-n1Z0GKIB.js";import"./Label-raY0cVIX.js";import"./SupportLabel-CIPFQgbg.js";import"./SuccessIcon-BWoaZ5DS.js";import"./WarningIcon-DX5VYoXw.js";import"./Button-BRqUw2Ea.js";import"./usePreviousValue-IZYveHHb.js";import"./Loader-dpa9z90z.js";import"./useDelayedRender-BH-SW3uM.js";import"./ArrowRightIcon-C0-0Pabg.js";import"./TableCaption-D1Z2ODUM.js";import"./tableContext-CqS2-sUW.js";import"./CalendarIcon-CDVTHrIv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,C={title:"Komponenter/Date Input",component:s,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Error)",args:{defaultValue:e(new Date),min:e(new Date(new Date().setDate(new Date().getDate()+1))),errorLabel:"Du kan ikke velge en dato som er før i dag"}},n={name:"Date Input (Disabled)",args:{defaultValue:e(new Date),disabled:!0}},o={name:"Date Input (Read Only)",args:{defaultValue:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
