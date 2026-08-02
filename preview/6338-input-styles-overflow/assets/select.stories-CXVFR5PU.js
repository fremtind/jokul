import{j as t}from"./iframe-DCXAhuRy.js";import{S as l}from"./Select-pSq5Iv4r.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-C37ENLa4.js";import"./useId-FaBSEY2Q.js";import"./Label-BJSCStQj.js";import"./SupportLabel-CJMi1dxc.js";import"./SuccessIcon-JOXGa2lG.js";import"./Icon-CG6DKFD0.js";import"./WarningIcon-DyYtsQiP.js";import"./ArrowDownIcon-2q12ULKQ.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],f={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const k=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,k as __namedExportsOrder,f as default};
