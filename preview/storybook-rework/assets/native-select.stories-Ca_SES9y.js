import{N as s}from"./NativeSelect-BknLbksc.js";import{s as o}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-HvQr5kN0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CLy9G28l.js";import"./ArrowDownIcon-CJhHFT8r.js";import"./Icon-D8JyBxeF.js";import"./InputGroup-1G1fvZmo.js";import"./useId-Dol2UeJo.js";import"./Label-D5vi3BOP.js";import"./SupportLabel-BMQ-S6Iv.js";import"./WarningIcon-BUrSqrmY.js";const{userEvent:n}=__STORYBOOK_MODULE_TEST__,k={title:"Komponenter/Select/Select (Native)",component:s,args:{name:"Select",label:"Hvilket merke er telefonen?",items:o,placeholder:"Velg merke",inline:!1,invalid:!1,description:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},width:"20ch"}},e={args:{value:void 0}},r={play:async()=>{await n.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["Default","FocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,r as FocusState,t as HasValue,y as __namedExportsOrder,k as default};
