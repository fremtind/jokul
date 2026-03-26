import{j as p,r as a}from"./iframe-CpOquUsH.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DuvMQgGb.js";import{H as s,m as n}from"./Help.stories-UpxQtMTU.js";import c from"./RadioButton.stories-Zxf7oyHU.js";import{F as d}from"./FieldGroup-Cf6rR_9G.js";import{R as l}from"./RadioButton-BHbL965e.js";import{C as u}from"./Checkbox-B5FCXHi0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DGC-Cbqs.js";import"./Label-dKCAXNr_.js";import"./SupportLabel-Dr2gsHfG.js";import"./WarningIcon-BUNpCEzH.js";import"./Icon-k4U4jw2b.js";import"./Button-P_R2Stb5.js";import"./usePreviousValue-CupeNcK9.js";import"./Loader-WDYEjWKX.js";import"./useDelayedRender-CI-G3DgG.js";/* empty css               *//* empty css               */import"./Flex-Cj5C7Qg7.js";import"./SlotComponent-Dq4Y1Fdi.js";import"./mergeRefs-BGvqRfOU.js";import"./BaseRadioButton.stories-eJjmJMxZ.js";import"./BaseRadioButton-CN4bvfZD.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
