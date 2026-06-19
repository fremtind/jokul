import{S as o}from"./Select-U23ZprsZ.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-2cjfxI8U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-xYyGFk01.js";import"./useListNavigation-BXs3q103.js";import"./usePreviousValue-JN_C6zxt.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CM5oALdm.js";import"./ArrowDownIcon-BgkgQFHl.js";import"./Icon-BodlVgTg.js";import"./InputGroup-B6-IMUKZ.js";import"./Label-25enJFIX.js";import"./SupportLabel-Q8nZiujB.js";import"./SuccessIcon-CfoBPrrq.js";import"./WarningIcon-DDkHZmXj.js";import"./Popover-k3EuXrJg.js";import"./floating-ui.react-v-K3-Lyq.js";import"./index-DCZI71Lb.js";import"./index-CA-djLKv.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,L={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const T=["Default","FocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,r as FocusState,t as HasValue,T as __namedExportsOrder,L as default};
