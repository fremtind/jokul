import{j as m,r as a}from"./iframe-DLN0b-4F.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CWMNoBho.js";import i from"./RadioButton.stories-pcdhjNiT.js";import{P as s}from"./PopupTip-B0uFYaUp.js";import c from"./Popuptip.stories-DvxPT7cY.js";import{F as d}from"./FieldGroup-CwMQf0qc.js";import{R as l}from"./RadioButton-Dr84tbNx.js";import{C as u}from"./Checkbox-BD0hZ_1F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CBOygkYO.js";import"./Label-Cl1An-25.js";import"./SupportLabel-B7h0NDbR.js";import"./WarningIcon-Bl71Yfcf.js";import"./Icon-DLt8tIui.js";import"./BaseRadioButton.stories-BkiO7Vvw.js";import"./BaseRadioButton-BhTZxQ2u.js";import"./QuestionIcon-DMZdAPOa.js";import"./TooltipTrigger-DFz_LnEy.js";import"./floating-ui.react-B3faytuG.js";import"./index-DsJ7d7fO.js";import"./index-Dq-2xu2D.js";import"./TooltipContent-BrxxaTnV.js";import"./useBrowserPreferences-D8lhYfC2.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
