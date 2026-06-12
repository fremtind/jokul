import{S as o}from"./Select-DPldE5Wz.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-2CDGeqKK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DH6fwIQQ.js";import"./useListNavigation-CsGjp0aw.js";import"./usePreviousValue-BwI7IMt4.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-vyFeF2VF.js";import"./ArrowDownIcon-DPE1u6_X.js";import"./Icon-fvP8p-C6.js";import"./InputGroup-CO4QFWjx.js";import"./Label-DtEvUvd2.js";import"./SupportLabel-v171zuaM.js";import"./WarningIcon-C_LJvm5c.js";import"./Popover-BByHfoOW.js";import"./floating-ui.react-Bj6cZCn5.js";import"./index-CvZYm1ZW.js";import"./index-Css7utUH.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,x={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
