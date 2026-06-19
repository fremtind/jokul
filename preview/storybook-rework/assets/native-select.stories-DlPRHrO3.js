import{N as o}from"./NativeSelect-uiEIT6ce.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-6RHYNS26.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DlUDu6Av.js";import"./ArrowDownIcon-BOaGJE04.js";import"./Icon-1aO4zp42.js";import"./InputGroup-BlL5jtdj.js";import"./useId-BqE05kCo.js";import"./Label-BQtpRQJn.js";import"./SupportLabel-Cir8bMW7.js";import"./SuccessIcon-De6syDOa.js";import"./WarningIcon-BUylynMV.js";const{userEvent:n}=__STORYBOOK_MODULE_TEST__,k={title:"Komponenter/Select/Select (Native)",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",items:s,placeholder:"Velg merke",inline:!1,invalid:!1,description:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},width:"20ch"}},e={args:{value:void 0}},r={play:async()=>{await n.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Feilmelding"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Apple"
  }
}`,...t.parameters?.docs?.source}}};const D=["Default","KeyboardFocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,t as HasValue,r as KeyboardFocusState,D as __namedExportsOrder,k as default};
