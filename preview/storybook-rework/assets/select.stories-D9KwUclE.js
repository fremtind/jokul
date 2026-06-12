import{j as l}from"./iframe-Nvp5l-ln.js";import{S as n}from"./Select-Bwy2loj2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-C8AwN8bx.js";import"./useId-tu3xuOch.js";import"./Label-DenBK_Wi.js";import"./SupportLabel-B0qFR3Yu.js";import"./WarningIcon-CiIMDh8K.js";import"./Icon-DJVK3AMz.js";import"./ArrowDownIcon-a-UDEsbM.js";const p=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],{userEvent:c}=__STORYBOOK_MODULE_TEST__,E={title:"Komponenter/Select/Select (Beta)",component:n,args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1,children:p.map(({value:t,label:o})=>l.jsx("option",{value:t,children:o},t))}},e={args:{value:void 0}},a={play:async()=>{await c.tab()}},r={args:{errorLabel:"Feilmelding"}},s={args:{value:"Apple"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Feilmelding"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Apple"
  }
}`,...s.parameters?.docs?.source}}};const _=["Default","FocusState","ErrorState","HasValue"];export{e as Default,r as ErrorState,a as FocusState,s as HasValue,_ as __namedExportsOrder,E as default};
