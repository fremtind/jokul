import{D as o}from"./_index-BQaHOEgx.js";/* empty css               */import{a as e}from"./Calendar-DIXq4KgA.js";import"./iframe-CoW--EkS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-njUlHXiR.js";import"./useId-DzyH_aNV.js";import"./Label-DrfxShLH.js";import"./SupportLabel-CW-yiuaL.js";import"./SuccessIcon-BI8pqagt.js";import"./Icon-kbo-3oi0.js";import"./WarningIcon-B6wGOzoV.js";import"./Button-B9uJfvKP.js";import"./usePreviousValue-DYEnE7Ib.js";import"./Loader-BwEgdT3o.js";import"./useDelayedRender-CQbZp11g.js";import"./CalendarIcon-ByDkUQFD.js";import"./Card-DZ3ZirID.js";import"./SlotComponent-_ZN0yv-3.js";import"./mergeRefs-CaHfFmdf.js";import"./Flex-Dm_53I22.js";import"./NativeSelect-BOE9VKI5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Dyi9nBKr.js";import"./ArrowDownIcon-CTVwfuR0.js";import"./ArrowRightIcon-CWbIXESB.js";import"./TableCaption-BNaLp-Lr.js";import"./tableContext-Bm75NTZ_.js";import"./Text-Ct9EUA-V.js";import"./formatDate-DZfsHyZW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Komponenter/Date Input",component:o,args:{label:"Når skal du reise?",labelProps:{srOnly:!1},onChange:p()}},a={name:"Date Input",args:{}},t={name:"Avgrense valgbare datoer",args:{defaultValue:e(new Date),min:e(new Date),max:e(new Date(new Date().setDate(new Date().getDate()+14))),description:"Du kan bare velge datoer innenfor de neste 14 dagene"}},r={name:"Date Input (Disabled)",args:{value:e(new Date),disabled:!0}},n={name:"Date Input (Read Only)",args:{value:e(new Date),readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
