import{j as p,r as a}from"./iframe-avKYKh7M.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-KfCQpi_r.js";import{H as s,m as n}from"./Help.stories-D0uFUYom.js";import c from"./RadioButton.stories-BZl4Itl8.js";import{F as d}from"./FieldGroup-hjMGtDZz.js";import{R as l}from"./RadioButton-DGaOcy9Q.js";import{C as u}from"./Checkbox-DAcYQ-Rz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BQQzMqp_.js";import"./Label-CI7wY1XO.js";import"./SupportLabel-CI-dqdjz.js";import"./WarningIcon-BfWy8gbP.js";import"./Icon-C8Azg-2m.js";import"./Button-D1IPzQNm.js";import"./usePreviousValue-B0oIMihv.js";import"./Loader-C7CbQavQ.js";import"./useDelayedRender-C0JDyZnD.js";/* empty css               *//* empty css               */import"./Flex-DimaLlwO.js";import"./SlotComponent-BdrIGYsU.js";import"./mergeRefs-92IEbYuk.js";import"./BaseRadioButton.stories-Dij15muT.js";import"./BaseRadioButton-BfrRCAyw.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
