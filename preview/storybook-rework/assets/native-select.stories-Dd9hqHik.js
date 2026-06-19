import{N as o}from"./NativeSelect-DsiRcXqR.js";import{s}from"./shared.data-BdpbTmTP.js";/* empty css               */import"./iframe-CAz-VHJB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CLjYd3xH.js";import"./ArrowDownIcon-DXzBow8F.js";import"./Icon-COJNPfPC.js";import"./InputGroup-BJjrfuvw.js";import"./useId-ny0kvgWc.js";import"./Label-DZ6rAOeV.js";import"./SupportLabel-C9VrhFtr.js";import"./SuccessIcon-BJyQ8q3N.js";import"./WarningIcon-CsASCqxg.js";const{userEvent:n}=__STORYBOOK_MODULE_TEST__,k={title:"Komponenter/Select/Select (Native)",component:o,args:{name:"Select",label:"Hvilket merke er telefonen?",items:s,placeholder:"Velg merke",inline:!1,invalid:!1,description:"Du kan kun velge ett merke",labelProps:{srOnly:!1,variant:"small"},width:"20ch"}},e={args:{value:void 0}},r={play:async()=>{await n.tab()}},a={args:{errorLabel:"Feilmelding"}},t={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["Default","KeyboardFocusState","ErrorState","HasValue"];export{e as Default,a as ErrorState,t as HasValue,r as KeyboardFocusState,D as __namedExportsOrder,k as default};
