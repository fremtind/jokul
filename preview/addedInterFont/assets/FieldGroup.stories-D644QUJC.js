import{j as p,r as a}from"./iframe-ClV8r1rj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B3hCW57X.js";import{H as s,m as n}from"./Help.stories-DxiTsIyk.js";import c from"./RadioButton.stories-LkbK2oMV.js";import{F as d}from"./FieldGroup-BYOJ4tVk.js";import{R as l}from"./RadioButton-DMvtPbmb.js";import{C as u}from"./Checkbox-jzLtjxO7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CuB9eMUJ.js";import"./Label-3ydZK_fE.js";import"./SupportLabel-DYpzVXnO.js";import"./WarningIcon-Dz1LOBg9.js";import"./Icon-t4H11urd.js";import"./Button-qkUmxlV0.js";import"./usePreviousValue-D1tP5yDK.js";import"./Loader-DtYiZDU8.js";import"./useDelayedRender-Bg90r-KH.js";/* empty css               *//* empty css               */import"./Flex-Bu6Zdv4a.js";import"./SlotComponent-BHV6G1lP.js";import"./mergeRefs-D1jrm0Ny.js";import"./BaseRadioButton.stories-nEkEDsg2.js";import"./BaseRadioButton-DTo-S6uB.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
