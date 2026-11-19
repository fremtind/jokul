import{r as a,j as p}from"./iframe-Dj9xRCN8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DvZW_N2-.js";import{H as s,m as n}from"./Help.stories-iFvzNSCn.js";import c from"./RadioButton.stories-CDgxFSCU.js";import{F as d}from"./FieldGroup-tCrtwnGW.js";import{C as l}from"./Checkbox-BbjDyzZ7.js";import{R as u}from"./RadioButton-DSY8rYTK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CCLu8-5q.js";import"./Button-BYGU87GG.js";import"./usePreviousValue-BTB07WzS.js";import"./Loader-BycP0o39.js";import"./useDelayedRender-D1PkPkQJ.js";/* empty css               *//* empty css               */import"./Flex-C6n0W9jR.js";import"./SlotComponent-CtU_T8JC.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-DvXXC3sh.js";import"./BaseRadioButton-DFvDLW9d.js";import"./useId-CMtk1gaq.js";/* empty css               */import"./Label-BLHi301j.js";import"./SupportLabel-Ck1rDyQc.js";import"./WarningIcon-LiFBWbrn.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
