import{j as m,r as a}from"./iframe-B14fq7Ce.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Duhc4kYe.js";import i from"./RadioButton.stories-BZty7FFr.js";import{P as s}from"./PopupTip-j61ioxgz.js";import c from"./Popuptip.stories-CTo4ZMSX.js";import{F as d}from"./FieldGroup-8CniupSX.js";import{R as l}from"./RadioButton-DDAbzd3g.js";import{C as u}from"./Checkbox-Cb41I-BT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dr1SQTfn.js";import"./Label-DHSwOFOI.js";import"./SupportLabel-35Gr9ZBx.js";import"./WarningIcon-DGOpWOsc.js";import"./Icon-Cmy_zgVx.js";import"./BaseRadioButton.stories-D_6egEBr.js";import"./BaseRadioButton-Bfqmm2_s.js";import"./QuestionIcon-CKJe64jH.js";import"./TooltipTrigger-DWROhnZ1.js";import"./floating-ui.react-BN0ZfnAo.js";import"./index-DhnX0AKD.js";import"./index-M4WgDj9Y.js";import"./TooltipContent-DpaukYb7.js";import"./useBrowserPreferences-DkYm2gaG.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
