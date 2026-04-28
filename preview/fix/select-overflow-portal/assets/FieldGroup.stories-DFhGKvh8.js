import{r as a,j as p}from"./iframe-D1ROidGQ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-3-E02T_f.js";import{H as s,m as n}from"./Help.stories-CphbPIRO.js";import c from"./RadioButton.stories-BJyqk5qI.js";import{F as d}from"./FieldGroup-Bdy9a1V-.js";import{C as l}from"./Checkbox-BKMOfXgg.js";import{R as u}from"./RadioButton-DYoxZtHa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ByjZa2rb.js";import"./Button-Cul8bnxx.js";import"./usePreviousValue-BSQsiRav.js";import"./Loader-DJQGFVsd.js";import"./useDelayedRender-BTvAGnGJ.js";/* empty css               *//* empty css               */import"./Flex-CYro_m8J.js";import"./SlotComponent-DTXgBjuK.js";import"./mergeRefs-DaFNAOOC.js";import"./BaseRadioButton.stories-DC1G5s2O.js";import"./BaseRadioButton-BOJ7J7xH.js";import"./useId-C_m_Zn_5.js";/* empty css               */import"./Label-B3disoqE.js";import"./SupportLabel-C0bqZsdK.js";import"./WarningIcon-ljFryeig.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
