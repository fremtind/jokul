import{D as o}from"./_index-CBBMs-wT.js";/* empty css               */import{a as e}from"./Calendar-rc3hgQSl.js";import"./iframe-DC-3-uyd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-bOMYFDG8.js";import"./useId-v3s_VPVC.js";import"./Label-CzZuHFxj.js";import"./SupportLabel-CeeFtam-.js";import"./SuccessIcon-BvhrHHlw.js";import"./Icon-DFBhF5Wg.js";import"./WarningIcon-BX1ox5wU.js";import"./Button-IYpmQIr6.js";import"./usePreviousValue-DZKtktEi.js";import"./Loader-BWnedKHf.js";import"./useDelayedRender-J4n5LV5F.js";import"./CalendarIcon-BPcgCHk7.js";import"./Card-Ck4Khmja.js";import"./SlotComponent-B6MLg4ke.js";import"./mergeRefs-BKf2yjCN.js";import"./Flex-wlSonJ7k.js";import"./NativeSelect-CZbgyhA2.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DDwVD8aI.js";import"./ArrowDownIcon-CNhlvlEd.js";import"./ArrowRightIcon-CaJNC4XC.js";import"./TableCaption-BkhDzTOI.js";import"./tableContext-DctjRbe2.js";import"./Text-BmTcAeTm.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:o,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Disabled)",args:{value:e(new Date),disabled:!0}},n={name:"Date Input (Read Only)",args:{value:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
