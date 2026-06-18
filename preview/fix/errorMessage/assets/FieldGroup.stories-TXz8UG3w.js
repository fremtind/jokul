import{r as a,j as p}from"./iframe-D0NguVD0.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-hms2d4dr.js";import{H as s,m as n}from"./Help.stories-DliRAMrJ.js";import c from"./RadioButton.stories-2DALs2J9.js";import{F as d}from"./FieldGroup-Ddi8b70P.js";import{C as l}from"./Checkbox-C6N0XZcm.js";import{R as u}from"./RadioButton-B9r-1til.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Bh7HbNsV.js";import"./Button-DJH4oQJ-.js";import"./usePreviousValue-Cz8k6NbR.js";import"./Loader-C68NH9jR.js";import"./useDelayedRender-CyPQJQsZ.js";/* empty css               *//* empty css               */import"./Flex-C6GVKAWI.js";import"./SlotComponent-BMDxGeI7.js";import"./mergeRefs-DZtE3AcK.js";import"./BaseRadioButton.stories-l4gXBnLD.js";import"./BaseRadioButton-Bai45teX.js";import"./useId-nj3l-fu7.js";import"./Label-LMyFIrIY.js";import"./SupportLabel-D75GXo0H.js";import"./SuccessIcon-Bb8CEv9l.js";import"./WarningIcon-DTHTu0uj.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
