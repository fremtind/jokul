import{N as s}from"./NativeSelect-CEixn5nc.js";import{s as o}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-Y20DORU8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DyYxg0QZ.js";import"./ArrowDownIcon-BwqOE1pc.js";import"./Icon-Dht2BOmM.js";import"./InputGroup-DiJgdQNV.js";import"./useId-CSJRbQxb.js";import"./Label-S3PiGneq.js";import"./SupportLabel-B0QG9p8Z.js";import"./WarningIcon-BVxVD1OR.js";const{userEvent:n}=__STORYBOOK_MODULE_TEST__,O={title:"Komponenter/Select/Select (Native)",component:s,args:{name:"Select",label:"Hvilket merke er telefonen?",items:o,placeholder:"Velg merke",inline:!1,invalid:!1,description:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},width:"20ch"}},e={args:{value:void 0}},r={play:async()=>{await n.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const k=["Default","KeyboardFocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,t as HasValue,r as KeyboardFocusState,k as __namedExportsOrder,O as default};
