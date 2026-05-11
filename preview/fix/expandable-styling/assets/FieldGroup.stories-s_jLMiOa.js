import{r as a,j as p}from"./iframe-DZzl33ll.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BiXkXpJE.js";import{H as s,m as n}from"./Help.stories-BwIgVSHW.js";import c from"./RadioButton.stories-D2oDMC-4.js";import{F as d}from"./FieldGroup-CSOy4k_o.js";import{C as l}from"./Checkbox-UHQjyPTf.js";import{R as u}from"./RadioButton-lo8C-Oqd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-9EAwA0se.js";import"./Button-CJXXmR_V.js";import"./usePreviousValue-DH_C1qwf.js";import"./Loader-CDm1R9tK.js";import"./useDelayedRender-B4AkRWVi.js";/* empty css               *//* empty css               */import"./Flex-Bh43LZH9.js";import"./SlotComponent-Bhwu2R_f.js";import"./mergeRefs-CRDOhxau.js";import"./BaseRadioButton.stories-K4GAYqxA.js";import"./BaseRadioButton-vTXmu4Ge.js";import"./useId-CfVX6JZy.js";/* empty css               */import"./Label-mbz_u8iU.js";import"./SupportLabel-DE6vTheF.js";import"./WarningIcon-BAlUyw1U.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
