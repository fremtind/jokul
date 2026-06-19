import{N as s}from"./NativeSelect-DeaBbyA6.js";import{s as o}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-Cb6gFqyv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B0GhHJE8.js";import"./ArrowDownIcon-CWmq46BB.js";import"./Icon-DoUUJJDD.js";import"./InputGroup-Bt7DJrsh.js";import"./useId-DKawYrQb.js";import"./Label-Cw4ogQbY.js";import"./SupportLabel-CseQLA6O.js";import"./SuccessIcon-BVgESurb.js";import"./WarningIcon-CiqfiCIY.js";const{userEvent:n}=__STORYBOOK_MODULE_TEST__,y={title:"Komponenter/Select/Select (Native)",component:s,args:{name:"Select",label:"Hvilket merke er telefonen?",items:o,placeholder:"Velg merke",inline:!1,invalid:!1,description:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},width:"20ch"}},e={args:{value:void 0}},r={play:async()=>{await n.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["Default","FocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,r as FocusState,t as HasValue,D as __namedExportsOrder,y as default};
