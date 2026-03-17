import{j as p,r as a}from"./iframe-CFjl-NK5.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BF0jqoo0.js";import{H as s,m as n}from"./Help.stories-axt2Ung8.js";import c from"./RadioButton.stories-jOQPvmBZ.js";import{F as d}from"./FieldGroup-BYWOG3df.js";import{R as l}from"./RadioButton-eED_OEN_.js";import{C as u}from"./Checkbox-c6NxpXJk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CgkwdTow.js";import"./Label-DqqABxmt.js";import"./SupportLabel-MjaeEj-E.js";import"./WarningIcon-yCYLc5al.js";import"./Icon-wLhIYsIH.js";import"./Button-BrUDkk2c.js";import"./usePreviousValue-DMFkw55J.js";import"./Loader-BCzgtSv8.js";import"./useDelayedRender-B-vJJoy6.js";/* empty css               *//* empty css               */import"./Flex-Zx6yozat.js";import"./SlotComponent-BCq0RT5a.js";import"./mergeRefs-Dze4Vj3J.js";import"./BaseRadioButton.stories-D7dnwbX4.js";import"./BaseRadioButton-C_ZM0kMe.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
