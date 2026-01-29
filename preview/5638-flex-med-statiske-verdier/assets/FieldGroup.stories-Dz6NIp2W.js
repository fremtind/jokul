import{j as m,r as a}from"./iframe-B4gZtcdG.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CqOpCch0.js";import i from"./RadioButton.stories-DU0fCbTN.js";import{P as s}from"./PopupTip-BuK0paqI.js";import c from"./Popuptip.stories-BhpC-uSV.js";import{F as d}from"./FieldGroup-BMLXAqps.js";import{R as l}from"./RadioButton-CRvNrIXQ.js";import{C as u}from"./Checkbox-CIjpfhhz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ObM7Lq-m.js";import"./Label-yB2xeEuV.js";import"./SupportLabel-ZuPVdxS-.js";import"./WarningIcon-BqN2MMND.js";import"./Icon-DN5QmmSY.js";import"./BaseRadioButton.stories-BarnWjcU.js";import"./BaseRadioButton-cO3Dqf0K.js";import"./QuestionIcon-BwtdauZc.js";import"./TooltipTrigger-YIZkMFX9.js";import"./floating-ui.react-BkE2bchH.js";import"./index-BA4MXK2-.js";import"./index-ZoKSlqD8.js";import"./TooltipContent-DMPBgWkO.js";import"./useBrowserPreferences-K7q4LjvL.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
