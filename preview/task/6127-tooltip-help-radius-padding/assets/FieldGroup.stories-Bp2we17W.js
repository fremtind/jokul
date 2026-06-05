import{r as a,j as p}from"./iframe-C-lO5Wuj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DG3Zba5E.js";import{H as s,m as n}from"./Help.stories-D57kpkuf.js";import c from"./RadioButton.stories-COmmsWWq.js";import{F as d}from"./FieldGroup-ByPQMWtp.js";import{C as l}from"./Checkbox-C75SGhOm.js";import{R as u}from"./RadioButton-Ch52cqhe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BBvjBC0N.js";import"./Button-D0iq3K2z.js";import"./usePreviousValue-g9wCxVPy.js";import"./Loader-CZNh24Zg.js";import"./useDelayedRender-HJ-qPot4.js";/* empty css               *//* empty css               */import"./Flex-DtJ5CGZW.js";import"./SlotComponent-B6Hb33Yr.js";import"./mergeRefs-6DgWbG7E.js";import"./BaseRadioButton.stories-CFnKyC8Y.js";import"./BaseRadioButton-YD25HFZX.js";import"./useId-D8qOJgyH.js";/* empty css               */import"./Label-BkdNz9yh.js";import"./SupportLabel-CPdmzptT.js";import"./WarningIcon-C-gJQZKK.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
