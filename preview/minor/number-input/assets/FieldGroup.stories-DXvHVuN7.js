import{j as p,r as a}from"./iframe-CBqQfUWf.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BiQnN0kV.js";import{H as s,m as n}from"./Help.stories-C0wnIaWz.js";import c from"./RadioButton.stories-d1CcnO9M.js";import{F as d}from"./FieldGroup-CGR11tUQ.js";import{R as l}from"./RadioButton-CHiFCLBX.js";import{C as u}from"./Checkbox-tjEq7FcU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DPO7NFsF.js";import"./Label-BJurifBr.js";import"./SupportLabel-DfSGtJ9O.js";import"./WarningIcon-DE6vsrnZ.js";import"./Icon-D25eYW8c.js";import"./Button-EiEhyMNo.js";import"./usePreviousValue-CU3sKshN.js";import"./Loader-BsWbDBzq.js";import"./useDelayedRender-Dj9fWV2z.js";/* empty css               *//* empty css               */import"./Flex-KuF-0w_A.js";import"./SlotComponent-BvRBtWQU.js";import"./mergeRefs-BwPUufBx.js";import"./BaseRadioButton.stories-DQbT1n8m.js";import"./BaseRadioButton-BuATVSSw.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
