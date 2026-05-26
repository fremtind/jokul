import{r as a,j as p}from"./iframe-C8P7wUfQ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Ci0JzhZF.js";import{H as s,m as n}from"./Help.stories-CG3M9BFj.js";import c from"./RadioButton.stories-DrkauiO-.js";import{F as d}from"./FieldGroup-BJh6iB8N.js";import{C as l}from"./Checkbox-BwE2FPKc.js";import{R as u}from"./RadioButton-CibDUuOd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DSx_Iy8k.js";import"./Button-PXBhS8oj.js";import"./usePreviousValue-DlzzwXft.js";import"./Loader-KQbHVH4K.js";import"./useDelayedRender-Ct_iwX5D.js";/* empty css               *//* empty css               */import"./Flex-Dq56DBCx.js";import"./SlotComponent-B3Byw-8H.js";import"./mergeRefs-CYHnrRuL.js";import"./BaseRadioButton.stories-CYFHQfLt.js";import"./BaseRadioButton-BBwBkXLe.js";import"./useId-Dp0FmzfQ.js";/* empty css               */import"./Label-NrmB6OBy.js";import"./SupportLabel-BZsA8fIg.js";import"./WarningIcon-DBmG4iyG.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    tooltip: <Help {...HelpStories.args} />
  }
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
