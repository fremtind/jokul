import{S as o}from"./Select-BlTuFacY.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-GA692mXG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BxRGXoch.js";import"./useListNavigation-DB3ripRw.js";import"./usePreviousValue-BTc41bKa.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-pD039VU-.js";import"./ArrowDownIcon-BGjAeOmh.js";import"./Icon-DiondMS_.js";import"./InputGroup-CqmDcY7s.js";import"./Label-CsBLLIpj.js";import"./SupportLabel-bcgH6cGz.js";import"./WarningIcon-CI6RQvlZ.js";import"./Popover-B2yLsggR.js";import"./floating-ui.react-6nl7QLJ5.js";import"./index-BhdFazLX.js";import"./index-Cgmiw-U1.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,x={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
