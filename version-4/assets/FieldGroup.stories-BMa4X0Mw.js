import{r as a,j as p}from"./iframe-m95GvDsE.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dh64MHLj.js";import{H as s,m as n}from"./Help.stories-FzIGvblM.js";import c from"./RadioButton.stories-BaIw4lTO.js";import{F as d}from"./FieldGroup-Bwb6WU4D.js";import{C as l}from"./Checkbox-DrDAeWUX.js";import{R as u}from"./RadioButton-Dr9RDE73.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BwH18hxG.js";import"./Button-Bj7BYyRt.js";import"./usePreviousValue-BoGL3_0x.js";import"./Loader-B6QhWixT.js";import"./useDelayedRender-CHL_TOmg.js";/* empty css               *//* empty css               */import"./Flex-MzfdY0tS.js";import"./SlotComponent-CULeKoMz.js";import"./mergeRefs-CQ9BFK56.js";import"./BaseRadioButton.stories-CCWfKLcE.js";import"./BaseRadioButton-Cuk8w6rK.js";import"./useId-CFMOkjDo.js";/* empty css               */import"./Label-Cpl8e-Ot.js";import"./SupportLabel-Ccc6oy19.js";import"./WarningIcon-D4rKdcDX.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
