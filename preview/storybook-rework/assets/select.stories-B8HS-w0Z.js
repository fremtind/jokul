import{S as o}from"./Select--I0I2YrJ.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-Cb6gFqyv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DKawYrQb.js";import"./useListNavigation-Di5ROjHU.js";import"./usePreviousValue-C42uI4Nu.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B0GhHJE8.js";import"./ArrowDownIcon-CWmq46BB.js";import"./Icon-DoUUJJDD.js";import"./InputGroup-Bt7DJrsh.js";import"./Label-Cw4ogQbY.js";import"./SupportLabel-CseQLA6O.js";import"./SuccessIcon-BVgESurb.js";import"./WarningIcon-CiqfiCIY.js";import"./Popover-BYTzWKNV.js";import"./floating-ui.react-3YehoJUu.js";import"./index-Cm1xwd2q.js";import"./index-DZ1SgfmC.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,L={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
