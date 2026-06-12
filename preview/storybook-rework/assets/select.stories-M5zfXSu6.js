import{S as o}from"./Select-DiknAum2.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-Nvp5l-ln.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-tu3xuOch.js";import"./useListNavigation-BI02oyMT.js";import"./usePreviousValue-CkKQlogx.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BKkFc3ge.js";import"./ArrowDownIcon-a-UDEsbM.js";import"./Icon-DJVK3AMz.js";import"./InputGroup-C8AwN8bx.js";import"./Label-DenBK_Wi.js";import"./SupportLabel-B0qFR3Yu.js";import"./WarningIcon-CiIMDh8K.js";import"./Popover-DO9Sr-vC.js";import"./floating-ui.react-ljZGVMpP.js";import"./index-D34pbsZV.js";import"./index-BEqmEVrw.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,x={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const H=["Default","KeyboardFocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,t as HasValue,r as KeyboardFocusState,H as __namedExportsOrder,x as default};
