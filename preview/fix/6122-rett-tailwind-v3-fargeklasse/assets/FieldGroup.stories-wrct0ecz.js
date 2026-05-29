import{r as a,j as p}from"./iframe-gJY_3UHz.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cy34mYaJ.js";import{H as s,m as n}from"./Help.stories-B0dhE4ml.js";import c from"./RadioButton.stories-CpRcqM10.js";import{F as d}from"./FieldGroup-BV8QoTCa.js";import{C as l}from"./Checkbox-C_WXzWoy.js";import{R as u}from"./RadioButton-DE_r2fdy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BzTBtfl_.js";import"./Button-C7QSCk9G.js";import"./usePreviousValue-BC7KIZdk.js";import"./Loader-CAAPNXSH.js";import"./useDelayedRender-DjcapiKd.js";/* empty css               *//* empty css               */import"./Flex-h87a1GZd.js";import"./SlotComponent-CQWgUKrQ.js";import"./mergeRefs-BAooqnpW.js";import"./BaseRadioButton.stories-lwyXUNXU.js";import"./BaseRadioButton-C1SxDQH4.js";import"./useId-Cm1Vi_PO.js";/* empty css               */import"./Label-7rISvre5.js";import"./SupportLabel-CeAo9B-X.js";import"./WarningIcon-BfvJKAZJ.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
