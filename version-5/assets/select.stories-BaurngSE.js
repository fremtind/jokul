import{j as t}from"./iframe-BGaBJ1ys.js";import{S as l}from"./Select-Dv9thDqx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-Ag0GiBkA.js";import"./useId-Cr0_R8OP.js";import"./Label-D7VCm1U8.js";import"./SupportLabel-DpRTcJHs.js";import"./SuccessIcon-x48MCFhe.js";import"./Icon-Cf3fY8pJ.js";import"./WarningIcon-BC6yM_cn.js";import"./ArrowDownIcon-CpbjWSFW.js";const o=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],f={title:"Beta/Select",component:l,parameters:{layout:"centered"},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",placeholder:"Velg",required:!1,disabled:!1,children:o.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))},tags:["autodocs","forms"]},e={name:"Select"},a={name:"Invalid Select",args:{required:!0},tags:["dev"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Select",
  args: {
    required: true
  },
  tags: ["dev"]
}`,...a.parameters?.docs?.source}}};const k=["SelectStory","InvalidStory"];export{a as InvalidStory,e as SelectStory,k as __namedExportsOrder,f as default};
