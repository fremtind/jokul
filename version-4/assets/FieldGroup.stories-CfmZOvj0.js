import{r as a,j as p}from"./iframe-Deqe9RIt.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BZWa6zX9.js";import{H as s,m as n}from"./Help.stories-DZIce7cz.js";import c from"./RadioButton.stories-Br5aSHD3.js";import{F as d}from"./FieldGroup-CbGniWQA.js";import{C as l}from"./Checkbox-DXu4hHCS.js";import{R as u}from"./RadioButton-5FHYCsqJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DB5bH4mT.js";import"./Button-B9vtC5hW.js";import"./usePreviousValue-By7kPObp.js";import"./Loader-D7v7p8Fy.js";import"./useDelayedRender-Dhq2RlK1.js";/* empty css               *//* empty css               */import"./Flex-RCjigA4E.js";import"./SlotComponent-rXcba2X7.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-CU3APbX1.js";import"./BaseRadioButton-jZiM57Xf.js";import"./useId-BU95cw7k.js";/* empty css               */import"./Label-9BwRKU1x.js";import"./SupportLabel-Dn61jQmQ.js";import"./WarningIcon-BkUF6gNS.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
