import{j as p,r as a}from"./iframe-BadzmaYM.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DvhYAnmY.js";import{H as s,m as n}from"./Help.stories-soxmtFzq.js";import c from"./RadioButton.stories-CMZQCWB8.js";import{F as d}from"./FieldGroup-C5ZZbfYz.js";import{R as l}from"./RadioButton-Y5rLz68j.js";import{C as u}from"./Checkbox-C5ydw_2g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DsdIxq41.js";import"./Label-BLsfbLVG.js";import"./SupportLabel-CAJEZLGJ.js";import"./WarningIcon-BgK2SO_V.js";import"./Icon-CFsSEQdE.js";import"./Button-D5GklSTT.js";import"./usePreviousValue-DQXzHvFs.js";import"./Loader-BJalb8fV.js";import"./useDelayedRender-B-xxjv76.js";/* empty css               *//* empty css               */import"./Flex-CMq00PW3.js";import"./SlotComponent-D-H5Iu43.js";import"./mergeRefs-Bjr0iv1-.js";import"./BaseRadioButton.stories-DdfO0Tq2.js";import"./BaseRadioButton-gd1foQdW.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
