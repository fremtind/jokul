import{r as a,j as p}from"./iframe-p3V30akr.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BI3cP4ec.js";import{H as s,m as n}from"./Help.stories-vBpV0OZ3.js";import c from"./RadioButton.stories-DiCzilpU.js";import{F as d}from"./FieldGroup-gJLJtFRg.js";import{C as l}from"./Checkbox-BRRaEGAs.js";import{R as u}from"./RadioButton-D897RP3I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CL7M2OKq.js";import"./Button-DvYTofqK.js";import"./usePreviousValue-TSE_WKLl.js";import"./Loader-DnaBfOM7.js";import"./useDelayedRender-iviIhsM_.js";/* empty css               *//* empty css               */import"./Flex-B-J051tI.js";import"./SlotComponent-C6bJQOX8.js";import"./mergeRefs-CF_uAONJ.js";import"./BaseRadioButton.stories-2ctKKjuR.js";import"./BaseRadioButton-DjDBs7OS.js";import"./useId-BpcBnnFX.js";/* empty css               */import"./Label-B9vUyytR.js";import"./SupportLabel-B2G2sb4c.js";import"./WarningIcon-CDkJcwQk.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
