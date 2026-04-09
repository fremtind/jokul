import{j as p,r as a}from"./iframe-BVV4LrUq.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D9vhuGqa.js";import{H as s,m as n}from"./Help.stories-BMnymqBA.js";import c from"./RadioButton.stories-GXCnuRRe.js";import{F as d}from"./FieldGroup-BDmQ7hhf.js";import{R as l}from"./RadioButton-5D-zpQHK.js";import{C as u}from"./Checkbox-D8a53eQE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CB5rypRD.js";import"./Label-BcoxwFM1.js";import"./SupportLabel-C5Ul7-7q.js";import"./WarningIcon-DMc3FsAI.js";import"./Icon-DMK-Z5AO.js";import"./Button-DVzzFbBZ.js";import"./usePreviousValue-CNZvuzUx.js";import"./Loader-BcJMqQsX.js";import"./useDelayedRender-BhOnxllK.js";/* empty css               *//* empty css               */import"./Flex-Dx-1cFs6.js";import"./SlotComponent-CzC9-jv-.js";import"./mergeRefs-CiCqUjpU.js";import"./BaseRadioButton.stories-CMgXf6rm.js";import"./BaseRadioButton-CKGbwUp-.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
