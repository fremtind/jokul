import{j as p,r as a}from"./iframe-Dqvwbyjp.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BOl3CGWb.js";import{H as s,m as n}from"./Help.stories-Cl7246z0.js";import c from"./RadioButton.stories-DMIlIoza.js";import{F as d}from"./FieldGroup-DgXVITm_.js";import{R as l}from"./RadioButton-CjqFpo5V.js";import{C as u}from"./Checkbox-7YK-KEDf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B6g5pRrS.js";import"./Label-QCFtjzwZ.js";import"./SupportLabel-DXcI0mRI.js";import"./WarningIcon-DgIjs8X5.js";import"./Icon-BLEG48Hq.js";import"./Button-Co0Bvj_H.js";import"./usePreviousValue-df8Jo7ck.js";import"./Loader-DHk0OjUH.js";import"./useDelayedRender-MLKaVkd9.js";/* empty css               *//* empty css               */import"./Flex-HszDLyYS.js";import"./SlotComponent-DqntewOu.js";import"./mergeRefs-BNBQPToP.js";import"./BaseRadioButton.stories-BALD67uH.js";import"./BaseRadioButton-C0JFwR6F.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
