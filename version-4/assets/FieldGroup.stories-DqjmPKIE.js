import{r as a,j as p}from"./iframe-Cu-qZmZw.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C_Oe6D73.js";import{H as s,m as n}from"./Help.stories-BYlBSE2-.js";import c from"./RadioButton.stories-DAxlax8m.js";import{F as d}from"./FieldGroup-BOat-AH8.js";import{C as l}from"./Checkbox-YuHfuHLf.js";import{R as u}from"./RadioButton-BA-Zomgi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B8-cDUGI.js";import"./Button-DrJG44Vv.js";import"./usePreviousValue-D6-KR5Zi.js";import"./Loader-CsFunUSo.js";import"./useDelayedRender-aTVQIMZE.js";/* empty css               *//* empty css               */import"./Flex-3LuKETxW.js";import"./SlotComponent-C59EABc3.js";import"./mergeRefs-CkQCmJ7G.js";import"./BaseRadioButton.stories-_xoTV1X7.js";import"./BaseRadioButton-B0LVHbWP.js";import"./useId-DWidE3i-.js";/* empty css               */import"./Label-q7HQn_LP.js";import"./SupportLabel-bUWoqU3l.js";import"./WarningIcon-CmqQ6jlE.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
