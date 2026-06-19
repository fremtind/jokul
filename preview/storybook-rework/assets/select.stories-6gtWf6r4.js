import{S as o}from"./Select-B6RQVeu6.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-CAz-VHJB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ny0kvgWc.js";import"./useListNavigation-BMjMoMs1.js";import"./usePreviousValue-HwujPgPU.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CLjYd3xH.js";import"./ArrowDownIcon-DXzBow8F.js";import"./Icon-COJNPfPC.js";import"./InputGroup-BJjrfuvw.js";import"./Label-DZ6rAOeV.js";import"./SupportLabel-C9VrhFtr.js";import"./SuccessIcon-BJyQ8q3N.js";import"./WarningIcon-CsASCqxg.js";import"./Popover-Dk6c89W0.js";import"./floating-ui.react-BJmvWpYV.js";import"./index-woP9NzCs.js";import"./index-AmflsTgb.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,H={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
