import{j as p,r as a}from"./iframe-HsZEnwOm.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DaKekgV1.js";import{H as s,m as n}from"./Help.stories-sYro_UKW.js";import c from"./RadioButton.stories-CVUL8nXN.js";import{F as d}from"./FieldGroup-Dal_-aEf.js";import{R as l}from"./RadioButton--1uFsmPa.js";import{C as u}from"./Checkbox-D9E66Flo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DawiDSdP.js";import"./Label-CKrqfvjy.js";import"./SupportLabel-BOLuPsKa.js";import"./WarningIcon-D6WE_xHl.js";import"./Icon-gxHBWKLO.js";import"./Button-CjQPhgZA.js";import"./usePreviousValue-DWV5dKDz.js";import"./Loader-Wb3xd_Ju.js";import"./useDelayedRender-D-VnyTeY.js";/* empty css               *//* empty css               */import"./Flex-ypMC4OQ7.js";import"./SlotComponent-mPYaXYlU.js";import"./mergeRefs-0FOgiqRG.js";import"./BaseRadioButton.stories-DpXv-Wvf.js";import"./BaseRadioButton-B8fammR9.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
