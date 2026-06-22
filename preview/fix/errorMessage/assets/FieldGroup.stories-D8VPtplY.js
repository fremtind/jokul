import{r as a,j as p}from"./iframe-4uiQUciM.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-COV04Z4G.js";import s from"./Help.stories-DUncXT5l.js";import n from"./RadioButton.stories-C0ZzHJSp.js";import{F as c}from"./FieldGroup-DveMEe9c.js";import{C as d}from"./Checkbox-bgSQleDd.js";import{H as l}from"./Help-DoXZGvwZ.js";import{R as u}from"./RadioButton-ppPykYXJ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BUWv5xVk.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-YH0WCT-L.js";import"./mergeRefs-Di6KSsjE.js";import"./BaseRadioButton.stories-yX-qUHi2.js";import"./BaseRadioButton-Di5EhZxb.js";import"./useId-CVxm4vuw.js";import"./Label-DBOAlTlD.js";import"./SupportLabel-41QTmV9Z.js";import"./SuccessIcon-Lzub0YU_.js";import"./Icon-DPIZnM2t.js";import"./WarningIcon-D5lKyH8H.js";import"./Button-C7NM8CPS.js";import"./usePreviousValue-NEVZONIi.js";import"./Loader-bvyp6-Vz.js";import"./useDelayedRender-1FHiaeb9.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
