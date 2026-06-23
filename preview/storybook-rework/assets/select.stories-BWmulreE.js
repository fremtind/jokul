import{j as l}from"./iframe-BAyTcUFD.js";import{S as n}from"./Select-CGxz39U2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-BTRdypTm.js";import"./useId-DWL38C75.js";import"./Label-CpxcSjvp.js";import"./SupportLabel-CQeMN5Yv.js";import"./SuccessIcon-CUwhY-kr.js";import"./Icon-DLLFMaPw.js";import"./WarningIcon-CEjoXlAd.js";import"./ArrowDownIcon-ObEJ-epV.js";const p=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],{userEvent:c}=__STORYBOOK_MODULE_TEST__,k={title:"Komponenter/Select/Select (Beta)",component:n,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},children:p.map(({value:s,label:o})=>l.jsx("option",{value:s,children:o},s))}},e={args:{value:void 0}},a={play:async()=>{await c.tab()}},r={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Feilmelding"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Apple"
  }
}`,...t.parameters?.docs?.source}}};const A=["Default","FocusState","ErrorState","HasValue"];export{e as Default,r as ErrorState,a as FocusState,t as HasValue,A as __namedExportsOrder,k as default};
