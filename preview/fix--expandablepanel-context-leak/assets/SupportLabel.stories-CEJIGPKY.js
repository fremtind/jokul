import{j as a}from"./iframe-CajLcGSS.js";import{S as p}from"./SupportLabel-ChLpiwUd.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BnN7-65l.js";import"./Icon-D5GqpPAQ.js";const u={title:"Komponenter/SupportLabel",component:p,argTypes:{label:{control:"text"}}},r={name:"SupportLabel",args:{labelType:"help"},render:e=>a.jsx(p,{...e,label:e.label?e.label:`Dette er en ${e.labelType} label`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "SupportLabel",
  args: {
    labelType: "help"
  },
  render: props => <SupportLabel {...props} label={props.label ? props.label : \`Dette er en \${props.labelType} label\`} />
}`,...r.parameters?.docs?.source}}};const c=["SupportLabelStory"];export{r as SupportLabelStory,c as __namedExportsOrder,u as default};
