import{r as a,j as p}from"./iframe-DqhStJCr.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B4P3o2NE.js";import{H as s,m as n}from"./Help.stories-NxISPZhi.js";import c from"./RadioButton.stories-BLaRmys8.js";import{F as d}from"./FieldGroup-BZ648apv.js";import{C as l}from"./Checkbox-DmhOSJpm.js";import{R as u}from"./RadioButton-Bo83STyI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-uYSCFOME.js";import"./Button-DTVmXxZY.js";import"./usePreviousValue-DBDh6_Hr.js";import"./Loader-CkAk7XSW.js";import"./useDelayedRender-DDGthmfF.js";/* empty css               *//* empty css               */import"./Flex-CY34fpiw.js";import"./SlotComponent-Bx6umP8N.js";import"./mergeRefs-DHCsjlxd.js";import"./BaseRadioButton.stories-Dd76JcJC.js";import"./BaseRadioButton-JsdjV5lx.js";import"./useId-DPfRMsNm.js";/* empty css               */import"./Label-BIdWnSkx.js";import"./SupportLabel-CXxHNPdT.js";import"./WarningIcon-Dg_0yvPy.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
