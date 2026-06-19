import{S as o}from"./Select-C-sjQYzr.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-6RHYNS26.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BqE05kCo.js";import"./useListNavigation-CrG8hOcA.js";import"./usePreviousValue-vlv9V51J.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DlUDu6Av.js";import"./ArrowDownIcon-BOaGJE04.js";import"./Icon-1aO4zp42.js";import"./InputGroup-BlL5jtdj.js";import"./Label-BQtpRQJn.js";import"./SupportLabel-Cir8bMW7.js";import"./SuccessIcon-De6syDOa.js";import"./WarningIcon-BUylynMV.js";import"./Popover-C9-SVy87.js";import"./floating-ui.react-Dw369FX7.js";import"./index-BB6J1KU6.js";import"./index-ChpyK0s9.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,H={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const L=["Default","KeyboardFocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,t as HasValue,r as KeyboardFocusState,L as __namedExportsOrder,H as default};
