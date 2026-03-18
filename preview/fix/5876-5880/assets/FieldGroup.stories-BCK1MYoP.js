import{j as p,r as a}from"./iframe-N2gWv30c.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DABbHAQ1.js";import{H as s,m as n}from"./Help.stories-B8em3gCe.js";import c from"./RadioButton.stories-GdBAoV2X.js";import{F as d}from"./FieldGroup-CM8NMsn4.js";import{R as l}from"./RadioButton-DGK1UyZf.js";import{C as u}from"./Checkbox-Cb4vGRdN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-jP-7t-hi.js";import"./Label-BVD3VGLm.js";import"./SupportLabel-CMMHXbaf.js";import"./WarningIcon-DtW5SBR2.js";import"./Icon-DR-7kZg2.js";import"./Button-BjMblM7c.js";import"./usePreviousValue-i7O8hXD3.js";import"./Loader-DdTQLLMh.js";import"./useDelayedRender-5RJdFhEh.js";/* empty css               *//* empty css               */import"./Flex-Bo_YWjoq.js";import"./SlotComponent-Bejr3bWB.js";import"./mergeRefs-D0_1CK8D.js";import"./BaseRadioButton.stories-r9y6mca_.js";import"./BaseRadioButton-C84d-B-5.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
