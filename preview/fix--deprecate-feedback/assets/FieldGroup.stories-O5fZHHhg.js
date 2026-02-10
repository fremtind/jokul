import{j as m,r as a}from"./iframe-iUdBOXKW.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CgxzIBi-.js";import i from"./RadioButton.stories-BBgznA0m.js";import{P as s}from"./PopupTip-KKqawXEE.js";import c from"./Popuptip.stories-D4vhE9Rm.js";import{F as d}from"./FieldGroup-DEfacHVB.js";import{R as l}from"./RadioButton-ysDKWgko.js";import{C as u}from"./Checkbox-Bu5y_CI6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B-9ri-uH.js";import"./Label-BWrDMjoO.js";import"./SupportLabel-BtFH1A6S.js";import"./WarningIcon-Bk1AQKLS.js";import"./Icon-BoQAT8KG.js";import"./BaseRadioButton.stories-C1HIn-Tv.js";import"./BaseRadioButton-BZrkvczq.js";import"./QuestionIcon-BZTbLPCI.js";import"./TooltipTrigger-BwTteSRZ.js";import"./floating-ui.react-DBCWBYvO.js";import"./index-60ONFgdk.js";import"./index-Cn4Yqaj0.js";import"./TooltipContent-CP4QB6r0.js";import"./useBrowserPreferences-CIg2MUpH.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
