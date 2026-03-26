import{j as p,r as a}from"./iframe-B0IKRQS_.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Vy9bRcA0.js";import{H as s,m as n}from"./Help.stories-DsqIqh4k.js";import c from"./RadioButton.stories-BfK3IVfV.js";import{F as d}from"./FieldGroup-CtMI_z9j.js";import{R as l}from"./RadioButton-6l4cnriz.js";import{C as u}from"./Checkbox-fjXaQSEq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CEq4xdc9.js";import"./Label-_RhgjGEU.js";import"./SupportLabel-BWuZrzpq.js";import"./WarningIcon-B0D-nte2.js";import"./Icon-D2o_GRc_.js";import"./Button-CJbYqUx5.js";import"./usePreviousValue-CtcbFDZQ.js";import"./Loader-CvnPQXF9.js";import"./useDelayedRender-UQxI_3wX.js";/* empty css               *//* empty css               */import"./Flex-DUNCaDIM.js";import"./SlotComponent-Bqdvos9v.js";import"./mergeRefs-DIGdHh8_.js";import"./BaseRadioButton.stories-DF8pwrak.js";import"./BaseRadioButton-DNKMoczz.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
