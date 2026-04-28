import{r as a,j as p}from"./iframe-BrHQ-HPo.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DkgkkKJF.js";import{H as s,m as n}from"./Help.stories-DiNP2wAf.js";import c from"./RadioButton.stories-D0DIpzMh.js";import{F as d}from"./FieldGroup-TUaH98Yu.js";import{C as l}from"./Checkbox-DQpFcV6K.js";import{R as u}from"./RadioButton-DPiwzdVa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-uTO-_y59.js";import"./Button-BqXotbst.js";import"./usePreviousValue-BeF2YQwb.js";import"./Loader-CrOWjXo6.js";import"./useDelayedRender-DRnsHrt6.js";/* empty css               *//* empty css               */import"./Flex-B_kgdesM.js";import"./SlotComponent-Cmg4Lb_r.js";import"./mergeRefs-jjlR-mCP.js";import"./BaseRadioButton.stories-DJm65uuK.js";import"./BaseRadioButton-CJ68_OB9.js";import"./useId-BGFpyPJn.js";/* empty css               */import"./Label-DA2C0HQu.js";import"./SupportLabel-BBjkZPQC.js";import"./WarningIcon-DZgbEeE2.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
