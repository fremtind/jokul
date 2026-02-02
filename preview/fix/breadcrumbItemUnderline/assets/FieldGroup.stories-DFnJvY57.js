import{j as m,r as a}from"./iframe-BFW4KKSQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-C2RaqOr2.js";import i from"./RadioButton.stories-RGs5YTaZ.js";import{P as s}from"./PopupTip-B-sPcE3W.js";import c from"./Popuptip.stories-DvpadJEg.js";import{F as d}from"./FieldGroup-Cl1-TkyA.js";import{R as l}from"./RadioButton-65c6wANi.js";import{C as u}from"./Checkbox-d0TM1JDU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-XtOOBRTZ.js";import"./Label-CnuXDYqW.js";import"./SupportLabel-BEEcfq9Q.js";import"./WarningIcon-DN-86yP3.js";import"./Icon-Cdj9VPy3.js";import"./BaseRadioButton.stories-Ck0DfiNj.js";import"./BaseRadioButton-DYsdnJ9m.js";import"./QuestionIcon-DpgsFBn1.js";import"./TooltipTrigger-DPAH__D1.js";import"./floating-ui.react-UblhucZB.js";import"./index-DnH9OCpK.js";import"./index-CYbO6LUx.js";import"./TooltipContent-BdamdQnc.js";import"./useBrowserPreferences-CpCXuCJh.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
