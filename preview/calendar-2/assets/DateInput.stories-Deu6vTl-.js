import{D as o}from"./_index-Btqh8umm.js";/* empty css               */import{a as e}from"./Calendar-DmY7bHj1.js";import"./iframe-CqTnkM_1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-zfrxC50A.js";import"./useId-BVoRJFWI.js";import"./Label-CJYycKf-.js";import"./SupportLabel-Cdl8nkVh.js";import"./SuccessIcon-ChRmwb7j.js";import"./Icon-CEv1qPMv.js";import"./WarningIcon-Bpdymgl6.js";import"./Button-CjYOHO16.js";import"./usePreviousValue-E84bz1b4.js";import"./Loader-Bg9EaNoC.js";import"./useDelayedRender-B9QkeEw9.js";import"./CalendarIcon-DjBISZlv.js";import"./Card-BMICJHQI.js";import"./SlotComponent-DpRtLQa4.js";import"./mergeRefs-BXC6GWea.js";import"./Flex-DiDA15Ok.js";import"./NativeSelect-UhMBHLkt.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-qe4Te7zK.js";import"./ArrowDownIcon-DrPnYUo0.js";import"./ArrowRightIcon-DvJUfjsN.js";import"./TableCaption-Bt55NkmZ.js";import"./tableContext-BtmlU3EO.js";import"./Text-DkQnsTBy.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:o,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Disabled)",args:{value:e(new Date),disabled:!0}},n={name:"Date Input (Read Only)",args:{value:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  name: "Date Input (Disabled)",
  args: {
    value: toValidInputValue(new Date()),
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Date Input (Read Only)",
  args: {
    value: toValidInputValue(new Date()),
    readOnly: true
  }
}`,...n.parameters?.docs?.source}}};const P=["DateInputStory","DateInputMinMax","DateInputDisabled","DateInputReadOnly"];export{r as DateInputDisabled,t as DateInputMinMax,n as DateInputReadOnly,a as DateInputStory,P as __namedExportsOrder,N as default};
