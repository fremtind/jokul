import{r as a,j as p}from"./iframe-CajLcGSS.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CaPR9vqu.js";import{H as s,m as n}from"./Help.stories-Ds3T9z6l.js";import c from"./RadioButton.stories-BQszy-D3.js";import{F as d}from"./FieldGroup-B2mqKQHb.js";import{C as l}from"./Checkbox-BocofyjI.js";import{R as u}from"./RadioButton-DkK1lheN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D5GqpPAQ.js";import"./Button-Ca477XEo.js";import"./usePreviousValue-D4TRPBtL.js";import"./Loader-D7p2bn-u.js";import"./useDelayedRender-Dfos8vCj.js";/* empty css               *//* empty css               */import"./Flex-De3xoB5q.js";import"./SlotComponent-B-S8TQ7K.js";import"./mergeRefs-SZnpp5Du.js";import"./BaseRadioButton.stories-2wAaH_bn.js";import"./BaseRadioButton-DCt1fgI_.js";import"./useId-B6XdMXoC.js";/* empty css               */import"./Label-BaDxOr6j.js";import"./SupportLabel-ChLpiwUd.js";import"./WarningIcon-BnN7-65l.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
