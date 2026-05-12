import{j as p,r as a}from"./iframe-CWa0bQ0p.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Crs9aezz.js";import{H as s,m as n}from"./Help.stories-Dwqd49qD.js";import c from"./RadioButton.stories-CsN1n399.js";import{F as d}from"./FieldGroup-DSkRlx36.js";import{R as l}from"./RadioButton-C21NgU5L.js";import{C as u}from"./Checkbox-CAEfeGKA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CyWAPCzz.js";import"./Label-CBwasMyN.js";import"./SupportLabel-CHgIgMfI.js";import"./WarningIcon-KA5PT-2w.js";import"./Icon-CFa-eXeZ.js";import"./Button-DP3teCgH.js";import"./usePreviousValue-PKKgwCeJ.js";import"./Loader-CxplfZtI.js";import"./useDelayedRender-EQG7VJ53.js";/* empty css               *//* empty css               */import"./Flex-DoxyhBLA.js";import"./SlotComponent-CPk7OiEp.js";import"./mergeRefs-Bf5yX3mB.js";import"./BaseRadioButton.stories-BPsJyNcW.js";import"./BaseRadioButton-Djf_X1qa.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
