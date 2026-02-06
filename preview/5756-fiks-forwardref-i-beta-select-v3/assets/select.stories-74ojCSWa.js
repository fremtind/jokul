import{j as t}from"./iframe-CO-6u7ty.js";import{S as l}from"./Select-C5Gvilnf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-p6_xCABz.js";import"./useId-DIVYmsrS.js";import"./Label-CKBpQodC.js";import"./SupportLabel-Cna44SEe.js";import"./WarningIcon-BvXE7Nnw.js";import"./Icon-CiI2KeTo.js";import"./ArrowDownIcon-ByrcK5a9.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],b={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const f=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,f as __namedExportsOrder,b as default};
