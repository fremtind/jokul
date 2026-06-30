import{r as a,j as p}from"./iframe-1tUr5mgK.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C5umwu0k.js";import s from"./Help.stories-Baq3dwQE.js";import n from"./RadioButton.stories-D26UG103.js";import{F as c}from"./FieldGroup-CDajrAD4.js";import{C as d}from"./Checkbox-BcJrQ3QR.js";import{H as l}from"./Help-zavp7_ea.js";import{R as u}from"./RadioButton-B_9lbvW1.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DEU5y-Pn.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DJUmxspH.js";import"./mergeRefs-BgAV5XGt.js";import"./BaseRadioButton.stories-DIrBBrQr.js";import"./BaseRadioButton-DW5Mns1K.js";import"./useId-DMUqC9BW.js";import"./Label-DZhg4ssr.js";import"./SupportLabel-BpSUYV2D.js";import"./SuccessIcon-Bjv1CtFk.js";import"./Icon-CxVeaU6g.js";import"./WarningIcon-CYFI13PT.js";import"./Button-CH59skmG.js";import"./usePreviousValue-BzJI5LNG.js";import"./Loader-COZHyvtT.js";import"./useDelayedRender-BX9XP9Uq.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
