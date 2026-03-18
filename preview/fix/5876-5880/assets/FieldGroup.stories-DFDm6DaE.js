import{j as p,r as a}from"./iframe-DzdEdhGJ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BafEg6ey.js";import{H as s,m as n}from"./Help.stories-Y0Pr3Atb.js";import c from"./RadioButton.stories-BNgcKhuc.js";import{F as d}from"./FieldGroup-VAMynhT3.js";import{R as l}from"./RadioButton-JehwQbZ8.js";import{C as u}from"./Checkbox-CJhVFcZV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DV7wrzQJ.js";import"./Label-Bq1TL-py.js";import"./SupportLabel-Rx5qEMqk.js";import"./WarningIcon-BAnjDuqu.js";import"./Icon-CIyquo7v.js";import"./Button-CekJ-YDq.js";import"./usePreviousValue-HPQJB4Ob.js";import"./Loader-FKCDd8Z6.js";import"./useDelayedRender-B4f7Shc1.js";/* empty css               *//* empty css               */import"./Flex-Dgx8uUWI.js";import"./SlotComponent-DIFO0-Ux.js";import"./mergeRefs-BVcExBtn.js";import"./BaseRadioButton.stories-C1esWeuV.js";import"./BaseRadioButton-ChZbwKG-.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
