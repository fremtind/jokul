import{j as p,r as a}from"./iframe-C4Vj-L3s.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DX3eSTbW.js";import{H as s,m as n}from"./Help.stories-B3GpQncg.js";import c from"./RadioButton.stories-NRy33Skz.js";import{F as d}from"./FieldGroup-DhjBiC7w.js";import{R as l}from"./RadioButton-CTCakDpW.js";import{C as u}from"./Checkbox-DslF1W68.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BU2PyeRC.js";import"./Label-Bsr0uukM.js";import"./SupportLabel-CoqfkAzO.js";import"./WarningIcon-BVAXe9VJ.js";import"./Icon-7MjS5W0D.js";import"./Button-CIagZQvV.js";import"./usePreviousValue-DqI2AG_T.js";import"./Loader-FzFLqCji.js";import"./useDelayedRender-CXt7Rpf_.js";/* empty css               *//* empty css               */import"./Flex-BaSPuJSy.js";import"./SlotComponent-KAg_E6sQ.js";import"./mergeRefs-8RypZMry.js";import"./BaseRadioButton.stories-fGobHKCr.js";import"./BaseRadioButton-BnKriH9T.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
