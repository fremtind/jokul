import{r as a,j as p}from"./iframe-C3z1aNF2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D9nu5ZZv.js";import{H as s,m as n}from"./Help.stories-BYJ7WNES.js";import c from"./RadioButton.stories-Dqaiu5M7.js";import{F as d}from"./FieldGroup-DGHfSU6W.js";import{C as l}from"./Checkbox-Dwidb-J9.js";import{R as u}from"./RadioButton-C6Ira0hD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DaQ0XvX8.js";import"./Button-DyYuIIGK.js";import"./usePreviousValue-9J4KMoOr.js";import"./Loader-BILtJ1Kc.js";import"./useDelayedRender-DY7GxO3r.js";/* empty css               *//* empty css               */import"./Flex-Dm8KveHY.js";import"./SlotComponent-WpuWOUSN.js";import"./mergeRefs-Cu01C67F.js";import"./BaseRadioButton.stories-C9aiJsD4.js";import"./BaseRadioButton-BD1zyGOB.js";import"./useId-CHecuMvK.js";/* empty css               */import"./Label-DgtzJMgm.js";import"./SupportLabel-CGD0_wMu.js";import"./WarningIcon-C_bRQJKI.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
