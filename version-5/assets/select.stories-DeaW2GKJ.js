import{j as t}from"./iframe-xr8QZbXV.js";import{S as l}from"./Select-D6bVvDPy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CuqkEHL-.js";import"./useId-CPQ7E86z.js";import"./Label-BAOdgBFR.js";import"./SupportLabel-imS2Z3ot.js";import"./SuccessIcon-Db-bsP1L.js";import"./Icon-NwIqtF4C.js";import"./WarningIcon-kYjntusl.js";import"./ArrowDownIcon-5ScyYKyx.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],f={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const k=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,k as __namedExportsOrder,f as default};
