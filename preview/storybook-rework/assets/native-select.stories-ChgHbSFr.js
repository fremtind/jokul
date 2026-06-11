import{N as s}from"./NativeSelect-BwK2Ofb8.js";import{s as o}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-C4dhTlAs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DN--rDXH.js";import"./ArrowDownIcon-EWeyvGCO.js";import"./Icon-JgCnYFH5.js";import"./InputGroup-BiyrnfK5.js";import"./useId-CNj6Voav.js";import"./Label-BEqVZLqD.js";import"./SupportLabel-DiaJg8H9.js";import"./WarningIcon-C9VdE4pm.js";const{userEvent:n}=__STORYBOOK_MODULE_TEST__,k={title:"Komponenter/Select/Select (Native)",component:s,args:{name:"Select",label:"Hvilket merke er telefonen?",items:o,placeholder:"Velg merke",inline:!1,invalid:!1,description:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},width:"20ch"}},e={args:{value:void 0}},r={play:async()=>{await n.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
