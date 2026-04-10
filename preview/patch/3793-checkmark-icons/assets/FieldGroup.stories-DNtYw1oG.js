import{j as p,r as a}from"./iframe-DwJJ3uPP.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DLZiZM0y.js";import{H as s,m as n}from"./Help.stories-TkjpILWk.js";import c from"./RadioButton.stories-CXHV8-q0.js";import{F as d}from"./FieldGroup-DhVxjou-.js";import{R as l}from"./RadioButton-BGs412yH.js";import{C as u}from"./Checkbox-BMxL5hYS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-I1nGj9IL.js";import"./Label-D3V-GGps.js";import"./SupportLabel-BholoxF8.js";import"./WarningIcon-DN7IjHp5.js";import"./Icon-DQEiygQx.js";import"./Button-kSW6aOf6.js";import"./usePreviousValue-DtoPPzYy.js";import"./Loader-5WVOZirQ.js";import"./useDelayedRender-DdjLcbik.js";/* empty css               *//* empty css               */import"./Flex-ji0fO8ZD.js";import"./SlotComponent-JS3oJAPf.js";import"./mergeRefs-BuztUV2p.js";import"./BaseRadioButton.stories-CKbmhqRo.js";import"./BaseRadioButton-CysfeBDq.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
