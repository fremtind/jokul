import{j as m,r as a}from"./iframe-D7kpMrZy.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-By2HExyX.js";import i from"./RadioButton.stories-Byt6O2Ao.js";import{P as s}from"./PopupTip--hL3E5ai.js";import c from"./Popuptip.stories-BV8bHlE1.js";import{F as d}from"./FieldGroup-ChW_luO7.js";import{R as l}from"./RadioButton-CtMxeH2Q.js";import{C as u}from"./Checkbox-5yrviNXg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Czy7u4h4.js";import"./Label-B-Uox9-a.js";import"./SupportLabel-CCEph7wG.js";import"./WarningIcon-QDmGshK2.js";import"./Icon-288BA59h.js";import"./BaseRadioButton.stories-3Uz9Uool.js";import"./BaseRadioButton-Drz9ySOD.js";import"./QuestionIcon-DgAr1Rin.js";import"./TooltipTrigger-DW-LJi56.js";import"./floating-ui.react-BpYKgz-3.js";import"./index-DT2eYyCC.js";import"./index-BKd7qcu_.js";import"./TooltipContent-BU1hbZ5m.js";import"./useBrowserPreferences-C701FmkI.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
