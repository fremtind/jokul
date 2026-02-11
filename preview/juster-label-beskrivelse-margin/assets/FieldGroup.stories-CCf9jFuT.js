import{j as m,r as a}from"./iframe-CHh95oun.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CEUmk9QF.js";import i from"./RadioButton.stories-Bf19Vh3v.js";import{P as s}from"./PopupTip-Ba7fIYmS.js";import c from"./Popuptip.stories-0fcuySMC.js";import{F as d}from"./FieldGroup-Z2iOvygb.js";import{R as l}from"./RadioButton-CcjNt4Pw.js";import{C as u}from"./Checkbox-COsPB21R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B_BdXr48.js";import"./Label-CgtD0_-d.js";import"./SupportLabel-9R-0Q8hy.js";import"./WarningIcon-i8xZvBQn.js";import"./Icon-Bena-Sng.js";import"./BaseRadioButton.stories-CAUyssmp.js";import"./BaseRadioButton-BxQSrhm_.js";import"./QuestionIcon-DGCfIPil.js";import"./TooltipTrigger-5rQxGCLh.js";import"./floating-ui.react-DV-Ye3yB.js";import"./index-BLU3-UJt.js";import"./index-DVbdpC0Y.js";import"./TooltipContent-DR6Hv9iv.js";import"./useBrowserPreferences-B3_QHkFC.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
