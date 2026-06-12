import{N as s}from"./NativeSelect-BsPKlkW8.js";import{s as o}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-Nvp5l-ln.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BKkFc3ge.js";import"./ArrowDownIcon-a-UDEsbM.js";import"./Icon-DJVK3AMz.js";import"./InputGroup-C8AwN8bx.js";import"./useId-tu3xuOch.js";import"./Label-DenBK_Wi.js";import"./SupportLabel-B0qFR3Yu.js";import"./WarningIcon-CiIMDh8K.js";const{userEvent:n}=__STORYBOOK_MODULE_TEST__,O={title:"Komponenter/Select/Select (Native)",component:s,args:{name:"Select",label:"Hvilket merke er telefonen?",items:o,placeholder:"Velg merke",inline:!1,invalid:!1,description:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},width:"20ch"}},e={args:{value:void 0}},r={play:async()=>{await n.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
