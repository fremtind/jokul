import{r as a,j as p}from"./iframe-C-q4W1uV.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DD3co3w8.js";import{H as s,m as n}from"./Help.stories-CNuGnwk8.js";import c from"./RadioButton.stories-CllGfG8P.js";import{F as d}from"./FieldGroup-KXwhL1UJ.js";import{C as l}from"./Checkbox-BtRJBYnw.js";import{R as u}from"./RadioButton-D2uxvXc_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BZ-YwhYA.js";import"./Button-DeKevaSA.js";import"./usePreviousValue-BQ7jUrdp.js";import"./Loader-F4nZps0S.js";import"./useDelayedRender-DdnRa28u.js";/* empty css               *//* empty css               */import"./Flex-9cqGB6Hq.js";import"./SlotComponent-B84XQA_0.js";import"./mergeRefs-BsgKUJJL.js";import"./BaseRadioButton.stories-DfV8rkcz.js";import"./BaseRadioButton-DuxbrWIF.js";import"./useId-462Tmhdp.js";/* empty css               */import"./Label-Djx8IsMW.js";import"./SupportLabel-B-aQp0b1.js";import"./SuccessIcon-BcKcx9wk.js";import"./WarningIcon-0owJ2ynl.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
