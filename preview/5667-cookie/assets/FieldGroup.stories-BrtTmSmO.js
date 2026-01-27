import{j as m,r as a}from"./iframe-CwaNc35c.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-64Ybhsch.js";import i from"./RadioButton.stories-DvXguy3f.js";import{P as s}from"./PopupTip-BqFWvZ6p.js";import c from"./Popuptip.stories-DsazXga5.js";import{F as d}from"./FieldGroup-BKDnvcYn.js";import{R as l}from"./RadioButton-0O4nph80.js";import{C as u}from"./Checkbox-CPAUrOx8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BZNJbNDa.js";import"./Label-rnfmb29W.js";import"./SupportLabel-C51loiy9.js";import"./WarningIcon-B_XASjeN.js";import"./Icon-DfjqDqJi.js";import"./BaseRadioButton.stories-CqjH7GOF.js";import"./BaseRadioButton-BLRmnr0f.js";import"./QuestionIcon-BztjngqD.js";import"./TooltipTrigger-5sW2xley.js";import"./floating-ui.react-CNYkx6xR.js";import"./index-RM4x3A-V.js";import"./index-DVdOHpc9.js";import"./TooltipContent-BCEfqy7d.js";import"./useBrowserPreferences-DsHxZUOf.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
