import{r as a,j as p}from"./iframe-Bqzj8zOK.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-tZq9y_7f.js";import{H as s,m as n}from"./Help.stories-2CrEXfju.js";import c from"./RadioButton.stories-Cg1p626P.js";import{F as d}from"./FieldGroup-CA_Uq6LV.js";import{C as l}from"./Checkbox-CJIHeK6w.js";import{R as u}from"./RadioButton-CpI4wrdA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Cz4eVeln.js";import"./Button-DCq_N01P.js";import"./usePreviousValue-jzF1PpBy.js";import"./Loader-B2vGj2wu.js";import"./useDelayedRender-Df1midex.js";/* empty css               *//* empty css               */import"./Flex-DKvMVpJz.js";import"./SlotComponent-CNEkfxiH.js";import"./mergeRefs-BCpJeiE9.js";import"./BaseRadioButton.stories-Bf3UxNV8.js";import"./BaseRadioButton-Dcn8zFs3.js";import"./useId-D8_DN6hK.js";/* empty css               */import"./Label-DB-LA338.js";import"./SupportLabel-CmOHArzn.js";import"./WarningIcon-CcLNVbWK.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
