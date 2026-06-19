import{S as o}from"./Select-BzZRMpwK.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-Bjv_KgzE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dufhz9ey.js";import"./useListNavigation-DESyGg3R.js";import"./usePreviousValue-CVuRAxUZ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BrfpAmRV.js";import"./ArrowDownIcon-jV2L8X3g.js";import"./Icon-7NrcGDwC.js";import"./InputGroup-BY8Lon_U.js";import"./Label-unL0otln.js";import"./SupportLabel-DZdi5IeT.js";import"./SuccessIcon-CCmZzOHD.js";import"./WarningIcon-CVIKJ5dl.js";import"./Popover-D47Z2tqK.js";import"./floating-ui.react-9pR-V9VU.js";import"./index-C2CXF13h.js";import"./index-zpA_3oGK.js";import"./getThemeAndSize-CZAj3IXt.js";const{userEvent:m}=__STORYBOOK_MODULE_TEST__,L={title:"Komponenter/Select/Select",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:s,defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},e={args:{value:void 0}},r={play:async()=>{await m.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
