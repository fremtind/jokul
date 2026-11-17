import{j as t}from"./iframe-Cd58-eiO.js";import{S as l}from"./Select-CjUxgoYf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-VGKWNv8R.js";import"./useId-x49vx7R9.js";import"./types-IsTkoTmK.js";import"./Label-Dj74iRke.js";import"./SupportLabel-BAvqvobB.js";import"./SuccessIcon-BAJX7sQa.js";import"./Icon-5Ollpz7g.js";import"./WarningIcon-CZpWc3K5.js";import"./ArrowDownIcon-B7sZsRKS.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],k={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]},x=["SelectStory","InvalidStory"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};export{a as InvalidStory,e as SelectStory,x as __namedExportsOrder,k as default};
