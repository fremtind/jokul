import{j as m,r as a}from"./iframe-BMCzICyo.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CA9XJzhP.js";import i from"./RadioButton.stories-BusmWXUZ.js";import{P as s}from"./PopupTip-DMFlhoze.js";import c from"./Popuptip.stories-Bjh43XIs.js";import{F as d}from"./FieldGroup-E2hmHiY3.js";import{R as l}from"./RadioButton-D6XFUYyK.js";import{C as u}from"./Checkbox-CjXlpalI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-4iJrGLTu.js";import"./Label-BeC2XA2B.js";import"./SupportLabel-DIeQvXMg.js";import"./WarningIcon-CHldbbbZ.js";import"./Icon-Bd00UdEx.js";import"./BaseRadioButton.stories-_nd3NXEk.js";import"./BaseRadioButton-DmikzYRr.js";import"./QuestionIcon-DLCfMRa-.js";import"./TooltipTrigger-BG8PYH75.js";import"./floating-ui.react-D8Wud-DB.js";import"./index-e9bKQ2cV.js";import"./index-BII4BdWc.js";import"./TooltipContent-BMCgYE4u.js";import"./useBrowserPreferences-uZ4nlbkA.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
