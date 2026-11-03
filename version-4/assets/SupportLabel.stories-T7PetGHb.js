import{j as a}from"./iframe-V2Wyp4xM.js";import{S as p}from"./SupportLabel-FL1FCUFh.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BBuzsZfd.js";import"./Icon-DRBvMYRR.js";const u={title:"Komponenter/SupportLabel",component:p,argTypes:{label:{control:"text"}}},r={name:"SupportLabel",args:{labelType:"help"},render:e=>a.jsx(p,{...e,label:e.label?e.label:`Dette er en ${e.labelType} label`})},c=["SupportLabelStory"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "SupportLabel",
  args: {
    labelType: "help"
  },
  render: props => <SupportLabel {...props} label={props.label ? props.label : \`Dette er en \${props.labelType} label\`} />
}`,...r.parameters?.docs?.source}}};export{r as SupportLabelStory,c as __namedExportsOrder,u as default};
