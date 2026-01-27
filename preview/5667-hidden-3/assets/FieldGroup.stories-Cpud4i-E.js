import{j as m,r as a}from"./iframe-CIR2GNTq.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-XetYSDvm.js";import i from"./RadioButton.stories-BfoqkH_C.js";import{P as s}from"./PopupTip-BsT_f-sX.js";import c from"./Popuptip.stories-BrCDmo-6.js";import{F as d}from"./FieldGroup-BUlpJ0Y_.js";import{R as l}from"./RadioButton-CHZ7GpNU.js";import{C as u}from"./Checkbox-D7MyOFC5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DHIRJo7F.js";import"./Label-UITE9Syh.js";import"./SupportLabel-BnetiMwE.js";import"./WarningIcon-Cesxs-ot.js";import"./Icon-DRsGYZKV.js";import"./BaseRadioButton.stories-Ddqpvh5W.js";import"./BaseRadioButton-CFodKkkf.js";import"./QuestionIcon-CFbyvO8H.js";import"./TooltipTrigger-CaVrNGF5.js";import"./floating-ui.react-CfinGKs6.js";import"./index-CW1Reyb_.js";import"./index-Dq8dUmYR.js";import"./TooltipContent-C7WFmQur.js";import"./useBrowserPreferences-CBPyMa4V.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <PopupTip {...PopuptipStories.args} content="Du kan bare velge en metode" />
  }
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,z as __namedExportsOrder,w as default};
