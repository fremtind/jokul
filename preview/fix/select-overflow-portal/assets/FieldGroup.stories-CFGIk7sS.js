import{r as a,j as p}from"./iframe-WXv0fpCY.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dbn0E80v.js";import{H as s,m as n}from"./Help.stories-PpwS92vm.js";import c from"./RadioButton.stories-3D0johYl.js";import{F as d}from"./FieldGroup-CBcV_XD8.js";import{C as l}from"./Checkbox-432tvv_o.js";import{R as u}from"./RadioButton-D48LL2bm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DT8HZc9V.js";import"./Button-BqyLCGX1.js";import"./usePreviousValue-B2DCiGRj.js";import"./Loader-CO5tEnpp.js";import"./useDelayedRender-Y8vAvZai.js";/* empty css               *//* empty css               */import"./Flex-Co6uTuuX.js";import"./SlotComponent-R2WaiFdM.js";import"./mergeRefs-By5EQYg9.js";import"./BaseRadioButton.stories-KH70cFR-.js";import"./BaseRadioButton-C3eDQc1U.js";import"./useId-DVWsPhen.js";/* empty css               */import"./Label-B4miLtxc.js";import"./SupportLabel-CV4iQbDB.js";import"./WarningIcon-DxWWTx50.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
