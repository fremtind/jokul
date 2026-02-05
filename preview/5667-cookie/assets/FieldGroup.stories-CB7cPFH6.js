import{j as m,r as a}from"./iframe-DABf5EGM.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-Bj7FDEiZ.js";import i from"./RadioButton.stories-D33Jw6dX.js";import{P as s}from"./PopupTip-S8RH_JSD.js";import c from"./Popuptip.stories-Ct2vtEor.js";import{F as d}from"./FieldGroup-E4wyeoJC.js";import{R as l}from"./RadioButton-B9Oh92-2.js";import{C as u}from"./Checkbox-Bhn3iw7s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DQPqsQea.js";import"./Label-DjYfhJZn.js";import"./SupportLabel-DIChkk9o.js";import"./WarningIcon-DM1YJTeM.js";import"./Icon-10ffj0ic.js";import"./BaseRadioButton.stories-CnXNxeDx.js";import"./BaseRadioButton-nxm8IvNU.js";import"./QuestionIcon-DkNioDhI.js";import"./TooltipTrigger-DxylBp1K.js";import"./floating-ui.react-DsSV-IHG.js";import"./index-Ba5yo5BA.js";import"./index-BWZpmhyy.js";import"./TooltipContent-BPcjE4ro.js";import"./useBrowserPreferences-1l49CoU5.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
