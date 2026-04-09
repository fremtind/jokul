import{j as p,r as a}from"./iframe-DIACKsDt.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D7mEqfl7.js";import{H as s,m as n}from"./Help.stories-CSuXN9g5.js";import c from"./RadioButton.stories-CFLX5mFr.js";import{F as d}from"./FieldGroup-DUbHZW8L.js";import{R as l}from"./RadioButton-BB1xI_vk.js";import{C as u}from"./Checkbox-BOIj6qQS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ljHbtrZN.js";import"./Label-SZ3LrI5r.js";import"./SupportLabel-D4SyjSf_.js";import"./WarningIcon-DMay_XJg.js";import"./Icon-CuQYNHek.js";import"./Button-DwKRRGGN.js";import"./usePreviousValue-BgORUFVK.js";import"./Loader-CCYDi_N4.js";import"./useDelayedRender-BJskW2ZD.js";/* empty css               *//* empty css               */import"./Flex-BISIhF-d.js";import"./SlotComponent-B074hf0R.js";import"./mergeRefs-CSKudx36.js";import"./BaseRadioButton.stories-BGqBeeyp.js";import"./BaseRadioButton-AWcmGjBV.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
