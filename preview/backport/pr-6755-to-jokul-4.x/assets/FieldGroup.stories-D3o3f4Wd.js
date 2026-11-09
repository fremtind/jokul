import{r as a,j as p}from"./iframe-BNyaib6N.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cg6DgaTu.js";import{H as s,m as n}from"./Help.stories-PqJqOB1E.js";import c from"./RadioButton.stories-C5eZor4P.js";import{F as d}from"./FieldGroup-DzVO9cKf.js";import{C as l}from"./Checkbox-BInlR8T6.js";import{R as u}from"./RadioButton-U2mlFKVK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BXYXLWt7.js";import"./Button-BemUwz5o.js";import"./usePreviousValue-C8XjHusv.js";import"./Loader-Cbo1OaH3.js";import"./useDelayedRender-NYXDMncM.js";/* empty css               *//* empty css               */import"./Flex-D28JlM6i.js";import"./SlotComponent-BRERNGGS.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-BNngQm--.js";import"./BaseRadioButton-DNy0MOPh.js";import"./useId--DKImA4f.js";/* empty css               */import"./Label-DFZVe-SV.js";import"./SupportLabel-Cssps0vD.js";import"./WarningIcon-BxcidHOf.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
