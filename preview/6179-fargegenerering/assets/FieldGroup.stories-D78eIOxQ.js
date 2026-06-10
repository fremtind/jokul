import{r as a,j as p}from"./iframe-CEAArMPw.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BJHTozb5.js";import{H as s,m as n}from"./Help.stories-YEob1OVZ.js";import c from"./RadioButton.stories-D1cMYADL.js";import{F as d}from"./FieldGroup-CooiWCjJ.js";import{C as l}from"./Checkbox-D-rOjJPq.js";import{R as u}from"./RadioButton-CFtKMb8a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CqpPL-QZ.js";import"./Button-BlJmwTZg.js";import"./usePreviousValue-7GsyntC0.js";import"./Loader-Bw4J8Tkn.js";import"./useDelayedRender-B79bkjcA.js";/* empty css               *//* empty css               */import"./Flex-DWPKdWJi.js";import"./SlotComponent-CyUoKVwH.js";import"./mergeRefs-BR2DrZpV.js";import"./BaseRadioButton.stories-DdczG6qG.js";import"./BaseRadioButton-DXyMD54P.js";import"./useId-41ksBYTB.js";/* empty css               */import"./Label-lv7XKTPF.js";import"./SupportLabel-DdH01aVF.js";import"./WarningIcon-BoYYSoYu.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
