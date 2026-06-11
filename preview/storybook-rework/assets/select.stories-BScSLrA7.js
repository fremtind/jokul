import{S as o}from"./Select-DRa8JvVD.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-Y20DORU8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CSJRbQxb.js";import"./useListNavigation-DSPJs2eV.js";import"./usePreviousValue-BgC49yhc.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DyYxg0QZ.js";import"./ArrowDownIcon-BwqOE1pc.js";import"./Icon-Dht2BOmM.js";import"./InputGroup-DiJgdQNV.js";import"./Label-S3PiGneq.js";import"./SupportLabel-B0QG9p8Z.js";import"./WarningIcon-BVxVD1OR.js";import"./Popover-Vk8eREwB.js";import"./floating-ui.react-Daaoclq-.js";import"./index-Csara0lX.js";import"./index-DJM_mIGV.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,x={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
