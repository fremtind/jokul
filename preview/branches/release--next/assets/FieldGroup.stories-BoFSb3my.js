import{r as a,j as p}from"./iframe-ByRyxnc2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Jf8uI1RN.js";import{H as s,m as n}from"./Help.stories-CFGX0JiH.js";import c from"./RadioButton.stories-DMJTiDvg.js";import{F as d}from"./FieldGroup-D6cmMsNh.js";import{C as l}from"./Checkbox-B_m4_6-o.js";import{R as u}from"./RadioButton-g3TQ4u0C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-djJYefh-.js";import"./Button-D_6nTPF1.js";import"./usePreviousValue-D-yDsbob.js";import"./Loader-B9m1hk63.js";import"./useDelayedRender-DyHaZ87E.js";/* empty css               *//* empty css               */import"./Flex-B4b5Vg4E.js";import"./SlotComponent-DCS_uphv.js";import"./mergeRefs-C8VvC2tM.js";import"./BaseRadioButton.stories-CxEirrLb.js";import"./BaseRadioButton-DN1jNzEf.js";import"./useId-CYJ1ewia.js";import"./Label-D3uWAXOh.js";import"./SupportLabel-CCR3d28o.js";import"./WarningIcon-BqpOCZj6.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
