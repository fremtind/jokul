import{j as m,r as a}from"./iframe-BeW8231r.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-BqeA4OyA.js";import i from"./RadioButton.stories-mljDDJPA.js";import{P as s}from"./PopupTip-D1uATAmJ.js";import c from"./Popuptip.stories-CSvBWE4Z.js";import{F as d}from"./FieldGroup-D9WtPkxt.js";import{R as l}from"./RadioButton-8mo1vNPS.js";import{C as u}from"./Checkbox-mDn20XyW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CD2qvuFc.js";import"./Label-CR2FVV2F.js";import"./SupportLabel-vE8N1Zgi.js";import"./WarningIcon-BjIpl0Xz.js";import"./Icon-C2YR2oDk.js";import"./BaseRadioButton.stories-CiLH-rYd.js";import"./BaseRadioButton-BIpuDNX3.js";import"./QuestionIcon-Ciy05p2g.js";import"./TooltipTrigger-DBreVulo.js";import"./floating-ui.react-3XB4crQl.js";import"./index-BfQHnZ7l.js";import"./index-BN073Zom.js";import"./TooltipContent-BJIP85Y4.js";import"./useBrowserPreferences-CB5LaC5l.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
