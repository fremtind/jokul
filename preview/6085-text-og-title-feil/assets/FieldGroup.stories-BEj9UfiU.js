import{r as a,j as p}from"./iframe-rUzoYszu.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-enkFOx2N.js";import{H as s,m as n}from"./Help.stories-DV8ptyXw.js";import c from"./RadioButton.stories-B01GyGG9.js";import{F as d}from"./FieldGroup-CGJLP0zN.js";import{C as l}from"./Checkbox-szRf5jH2.js";import{R as u}from"./RadioButton-DnUPfZSw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CjhvSEcL.js";import"./Button-B_sMxaJk.js";import"./usePreviousValue-CWvxVZIY.js";import"./Loader-BePrvDTe.js";import"./useDelayedRender-BrCDS9_k.js";/* empty css               *//* empty css               */import"./Flex-DdFGj322.js";import"./SlotComponent-OUEyGYRz.js";import"./mergeRefs-C31zlI6m.js";import"./BaseRadioButton.stories-CykDZr2L.js";import"./BaseRadioButton-CfvXwKp6.js";import"./useId-zPDKAUZc.js";/* empty css               */import"./Label-H33MR7rm.js";import"./SupportLabel-CJbjQU19.js";import"./WarningIcon-BHg7OFZo.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
