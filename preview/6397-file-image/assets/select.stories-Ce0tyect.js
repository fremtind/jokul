import{j as t}from"./iframe-D0jGEvlt.js";import{S as l}from"./Select-xLFWj7VP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-BUXvI50b.js";import"./useId-DQEuAQbV.js";import"./Label-CXgb4YC8.js";import"./SupportLabel-CELo4syA.js";import"./SuccessIcon-B15eQp0H.js";import"./Icon-BhmjRupB.js";import"./WarningIcon-x4yL-9lk.js";import"./ArrowDownIcon-CDgCOZEL.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],f={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const k=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,k as __namedExportsOrder,f as default};
