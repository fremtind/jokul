import{j as p,r as a}from"./iframe-Di8xP12O.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D48jnv9_.js";import{H as s,m as n}from"./Help.stories-Db222H27.js";import c from"./RadioButton.stories-BaO0AFdj.js";import{F as d}from"./FieldGroup-CSuL8A8X.js";import{R as l}from"./RadioButton-Cz_TeTGu.js";import{C as u}from"./Checkbox-C5N2GQ4z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B1otdQ2D.js";import"./Label-D0_ODwp8.js";import"./SupportLabel-PyU0Ye50.js";import"./WarningIcon-C1c0pYaU.js";import"./Icon-BgPs3Juh.js";import"./Button-BSTahIl3.js";import"./usePreviousValue-Cm6Gs_1-.js";import"./Loader-CMR1p1jJ.js";import"./useDelayedRender-Dd_CqfM1.js";/* empty css               *//* empty css               */import"./Flex-BUrKAbe2.js";import"./SlotComponent-CWnKPEG9.js";import"./mergeRefs-C8S3V2Ld.js";import"./BaseRadioButton.stories-7wQhJc8V.js";import"./BaseRadioButton-BXp8FH1C.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
