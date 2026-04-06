import{j as p,r as a}from"./iframe-BpjhoyPP.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CvaJvmwi.js";import{H as s,m as n}from"./Help.stories-iYnEQHIF.js";import c from"./RadioButton.stories-EM542_XT.js";import{F as d}from"./FieldGroup-0JaJHuA5.js";import{R as l}from"./RadioButton-CYcWR9Yw.js";import{C as u}from"./Checkbox-C7vdWc3F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CBlsIdei.js";import"./Label-BVpSFffN.js";import"./SupportLabel-C5Zyu2HW.js";import"./WarningIcon-zriKa5K7.js";import"./Icon-m9XCmhM-.js";import"./Button-2MrVdb5k.js";import"./usePreviousValue-inlUFY3t.js";import"./Loader-CqMJx4km.js";import"./useDelayedRender-4Z6Bs4_r.js";/* empty css               *//* empty css               */import"./Flex-Wi6Pqhu0.js";import"./SlotComponent-DF5JVhmE.js";import"./mergeRefs-DTuYtqFl.js";import"./BaseRadioButton.stories-C6xpQOj2.js";import"./BaseRadioButton-DpmAPv07.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
