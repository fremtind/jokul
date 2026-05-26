import{r as a,j as p}from"./iframe-4Rf48sKL.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-AIS5g1rp.js";import{H as s,m as n}from"./Help.stories-BMWNZ4s5.js";import c from"./RadioButton.stories-GmkxERW0.js";import{F as d}from"./FieldGroup-CuW6IEU1.js";import{C as l}from"./Checkbox-_PCMmdKT.js";import{R as u}from"./RadioButton-Vcq4bmwn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-T8iHAH9c.js";import"./Button-oCjxdFeY.js";import"./usePreviousValue-CZnjcC-W.js";import"./Loader-BVJgAUpM.js";import"./useDelayedRender-C7JuOEXU.js";/* empty css               *//* empty css               */import"./Flex-BNm8-von.js";import"./SlotComponent-DPqrszAu.js";import"./mergeRefs-DSgIV-NV.js";import"./BaseRadioButton.stories-D6TIMRUQ.js";import"./BaseRadioButton-D4b7k7o8.js";import"./useId-DklJ9YWp.js";/* empty css               */import"./Label-CCzX39Ix.js";import"./SupportLabel-B32g9ERK.js";import"./WarningIcon-DvE5EMRk.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
