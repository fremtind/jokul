import{j as p,r as a}from"./iframe-DU2Z6t3V.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-JKiCNuzf.js";import{H as s,m as n}from"./Help.stories-DvllWEa2.js";import c from"./RadioButton.stories-D_8K1X7o.js";import{F as d}from"./FieldGroup-CfotPgYZ.js";import{R as l}from"./RadioButton-7Oxp1rio.js";import{C as u}from"./Checkbox-DgT-KrOL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-HXAZDHzw.js";import"./Label-o0KQWt7Q.js";import"./SupportLabel-DVMsTVDl.js";import"./WarningIcon-DkveR5_u.js";import"./Icon-atPwUoHl.js";import"./Button-B46FnWAh.js";import"./usePreviousValue-DwzywF8A.js";import"./Loader-duvjB6WM.js";import"./useDelayedRender-92bK72VV.js";/* empty css               *//* empty css               */import"./Flex-Dx95Xs-i.js";import"./SlotComponent-6WfUT7a2.js";import"./mergeRefs-DuvBdGV2.js";import"./BaseRadioButton.stories-DWavjm9Z.js";import"./BaseRadioButton-CTzcsALw.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
