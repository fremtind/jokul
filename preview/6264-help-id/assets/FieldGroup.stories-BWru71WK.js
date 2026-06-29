import{r as a,j as p}from"./iframe-CW5h8cPs.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DnPotJOc.js";import s from"./Help.stories-B2hZfJQC.js";import n from"./RadioButton.stories-DiiWmxc1.js";import{F as c}from"./FieldGroup-CB34cobi.js";import{C as d}from"./Checkbox-PNTJpQfH.js";import{H as l}from"./Help-BFbZVe3n.js";import{R as u}from"./RadioButton-2c9T4qqA.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DMsBgbAI.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BQ1D31Ii.js";import"./mergeRefs-D1D-bA5G.js";import"./BaseRadioButton.stories-tPMLdqxs.js";import"./BaseRadioButton-MdDSQKiW.js";import"./useId-BauVx3qE.js";import"./Label-CMpa687d.js";import"./SupportLabel-B8tog-2Y.js";import"./SuccessIcon--E3VDzs2.js";import"./Icon-B7_2pJq7.js";import"./WarningIcon-_qlX2vkd.js";import"./index.browser-OxPLOBIU.js";import"./Button-CxqFQQxw.js";import"./usePreviousValue-Cqq4rCqW.js";import"./Loader-DkDDZLNK.js";import"./useDelayedRender-DUHxAa5V.js";const A={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,D as __namedExportsOrder,A as default};
