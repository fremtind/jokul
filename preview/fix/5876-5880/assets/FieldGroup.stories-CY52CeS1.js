import{j as p,r as a}from"./iframe-BHanZNHf.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CeQPJREn.js";import{H as s,m as n}from"./Help.stories-CumEa3WJ.js";import c from"./RadioButton.stories-DZU8lOEE.js";import{F as d}from"./FieldGroup-B809_EGV.js";import{R as l}from"./RadioButton-ClAbjuTy.js";import{C as u}from"./Checkbox-eVkDgghf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dlpf33gm.js";import"./Label-BhxZRB-7.js";import"./SupportLabel-DjAwP0Su.js";import"./WarningIcon-CFB0ODQ5.js";import"./Icon-3SmRXZEX.js";import"./Button-BvewUOl8.js";import"./usePreviousValue-CP1Y0qOy.js";import"./Loader-ptbOnOHY.js";import"./useDelayedRender-DfnYjEci.js";/* empty css               *//* empty css               */import"./Flex-C8hhOzba.js";import"./SlotComponent-DcvSKkHy.js";import"./mergeRefs-CDzaJv6g.js";import"./BaseRadioButton.stories-8qkD3w6i.js";import"./BaseRadioButton-BrAEWKTU.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
