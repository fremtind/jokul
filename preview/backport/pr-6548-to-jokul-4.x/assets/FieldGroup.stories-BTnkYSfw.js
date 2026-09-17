import{r as a,j as p}from"./iframe-CjX8HJEK.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BNRXsdvL.js";import{H as s,m as n}from"./Help.stories-CcKq6sYF.js";import c from"./RadioButton.stories-DWNwjOj3.js";import{F as d}from"./FieldGroup-BCw7qEf9.js";import{C as l}from"./Checkbox-CqitpXkk.js";import{R as u}from"./RadioButton-Bl5RbeO-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C5ZwqQdL.js";import"./Button-Dcfcc2Hr.js";import"./usePreviousValue-BTRnpxIB.js";import"./Loader-DXiXqf_j.js";import"./useDelayedRender-BJ-9BxVs.js";/* empty css               *//* empty css               */import"./Flex-B1CBRPt_.js";import"./SlotComponent-B-wiU51m.js";import"./mergeRefs-C0xQg0c5.js";import"./BaseRadioButton.stories-nJj0bfUV.js";import"./BaseRadioButton-CymBc6j5.js";import"./useId-0Bc8FeKP.js";/* empty css               */import"./Label-CWyC5fsC.js";import"./SupportLabel-DAGlIyiD.js";import"./WarningIcon-n8cUyTZX.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
