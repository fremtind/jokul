import{j as t}from"./iframe-uvQ3MtjS.js";import{S as l}from"./Select-o7N3b8gk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-9fPWHuc9.js";import"./useId-CW5eSEGV.js";import"./Label-DGJcJja8.js";import"./SupportLabel-Br8lgooy.js";import"./SuccessIcon-BA6lGZUb.js";import"./Icon-BuLhrzqS.js";import"./WarningIcon-xfF6yOtl.js";import"./ArrowDownIcon-dQxLrqRq.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],f={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const k=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,k as __namedExportsOrder,f as default};
