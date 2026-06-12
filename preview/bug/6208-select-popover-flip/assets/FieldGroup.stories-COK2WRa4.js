import{r as a,j as p}from"./iframe-BpZEeNb5.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DNCIUJbB.js";import{H as s,m as n}from"./Help.stories-C35tn682.js";import c from"./RadioButton.stories-D5I4X35X.js";import{F as d}from"./FieldGroup-D1AKqchu.js";import{C as l}from"./Checkbox-B4FV0op_.js";import{R as u}from"./RadioButton-Bzt4Ph9Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DhmglqNl.js";import"./Button-D1ixvXW-.js";import"./usePreviousValue-DqhzpnbS.js";import"./Loader-DnINOfTC.js";import"./useDelayedRender-BpudQyJb.js";/* empty css               *//* empty css               */import"./Flex-Bx8wCHiQ.js";import"./SlotComponent-DiwMqPNE.js";import"./mergeRefs-CiQ5T2Ku.js";import"./BaseRadioButton.stories-CzMiTcD-.js";import"./BaseRadioButton-CQ5WckMF.js";import"./useId-OVbAPh3N.js";/* empty css               */import"./Label-jLKXtv_7.js";import"./SupportLabel-B1-DCGeB.js";import"./WarningIcon-DomqFSK5.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
