import{j as p,r as a}from"./iframe-CJo44aCp.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B9eCl1tv.js";import{H as s,m as n}from"./Help.stories-CSiudffB.js";import c from"./RadioButton.stories-DUNQlaCt.js";import{F as d}from"./FieldGroup-6bATOpK0.js";import{R as l}from"./RadioButton-YuWDJrh-.js";import{C as u}from"./Checkbox-BelHE2K2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BlwHD5Fj.js";import"./Label-BVZxlbzu.js";import"./SupportLabel-DlXDvwMl.js";import"./WarningIcon-Bkm3f1Uk.js";import"./Icon-woOiYawU.js";import"./Button-Dtars2lV.js";import"./usePreviousValue-BZjKlBkK.js";import"./Loader-yEtMWbGV.js";import"./useDelayedRender-DzIyB0As.js";/* empty css               *//* empty css               */import"./Flex-BdYqkfyS.js";import"./SlotComponent-D1JSCFEG.js";import"./mergeRefs-B6lNqK74.js";import"./BaseRadioButton.stories-BwlvjYdA.js";import"./BaseRadioButton-C75U0hBT.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
