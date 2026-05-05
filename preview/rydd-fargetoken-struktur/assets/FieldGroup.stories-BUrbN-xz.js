import{j as p,r as a}from"./iframe-BkJwXC90.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DzG6EZ7z.js";import{H as s,m as n}from"./Help.stories-BN5ts8Ku.js";import c from"./RadioButton.stories-P1hLWlL3.js";import{F as d}from"./FieldGroup-w0_XR6xc.js";import{R as l}from"./RadioButton-CTI67Mfv.js";import{C as u}from"./Checkbox-BG2-5y4Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CfCc8g0w.js";import"./Label-CNidJdtV.js";import"./SupportLabel-DJD9z5PT.js";import"./WarningIcon-BZ7RFEH1.js";import"./Icon-B6gu0yRf.js";import"./Button-CDs2mtot.js";import"./usePreviousValue-_wi5NZWG.js";import"./Loader-BN8CAWqZ.js";import"./useDelayedRender-BPEbulRF.js";/* empty css               *//* empty css               */import"./Flex-DqufivvU.js";import"./SlotComponent-C2KV7I27.js";import"./mergeRefs-Ckh-oAUX.js";import"./BaseRadioButton.stories-CJqQOAFt.js";import"./BaseRadioButton-Drz-0ZsE.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
