import{r as a,j as p}from"./iframe-CFoDiKN1.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C-JSwx6M.js";import{H as s,m as n}from"./Help.stories-C2tsqqHt.js";import c from"./RadioButton.stories-CHyavJhw.js";import{F as d}from"./FieldGroup-e5aEvEGQ.js";import{C as l}from"./Checkbox-3lXAwU8E.js";import{R as u}from"./RadioButton-Cmrp4-58.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-r1OyPw2j.js";import"./Button-C3qE0i46.js";import"./usePreviousValue-CjFODzC-.js";import"./Loader-DfOQ8ff-.js";import"./useDelayedRender-Dm4FmkeG.js";/* empty css               *//* empty css               */import"./Flex-KtZFFYRJ.js";import"./SlotComponent-B6TfUvan.js";import"./mergeRefs-BTkXnJGs.js";import"./BaseRadioButton.stories-DuoDajdy.js";import"./BaseRadioButton-Bd9VxmNi.js";import"./useId-BrnqSjXX.js";/* empty css               */import"./Label-xXV_h6bT.js";import"./SupportLabel-QkXj4P8z.js";import"./WarningIcon-CY6FJY9H.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
