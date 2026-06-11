import{S as o}from"./Select-9Qhlql1P.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-HvQr5kN0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dol2UeJo.js";import"./useListNavigation-D8K9lYxp.js";import"./usePreviousValue-Byp8xk4v.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CLy9G28l.js";import"./ArrowDownIcon-CJhHFT8r.js";import"./Icon-D8JyBxeF.js";import"./InputGroup-1G1fvZmo.js";import"./Label-D5vi3BOP.js";import"./SupportLabel-BMQ-S6Iv.js";import"./WarningIcon-BUrSqrmY.js";import"./Popover-C-cozItG.js";import"./floating-ui.react-86SsFyE2.js";import"./index-CZjdsYR4.js";import"./index-BEtSUNzL.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,H={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const L=["Default","FocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,r as FocusState,t as HasValue,L as __namedExportsOrder,H as default};
