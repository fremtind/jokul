import{j as p,r as a}from"./iframe-BcwoBERN.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bay61ErV.js";import{H as s,m as n}from"./Help.stories-B_-j6h_R.js";import c from"./RadioButton.stories-CQxywe0k.js";import{F as d}from"./FieldGroup-BZYOok3v.js";import{R as l}from"./RadioButton-CDxevnHn.js";import{C as u}from"./Checkbox-tGz3H8XJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dp-V325Z.js";import"./Label-CePIVG3W.js";import"./SupportLabel-DyqdZE9f.js";import"./WarningIcon-Bo0FhlYn.js";import"./Icon-D36DSUa1.js";import"./Button-C8CYHVBm.js";import"./usePreviousValue-DBeyG-HA.js";import"./Loader-CIagCf6E.js";import"./useDelayedRender-x8O7Q4cb.js";/* empty css               *//* empty css               */import"./Flex-BB1PynCk.js";import"./SlotComponent-DLwTUGBN.js";import"./mergeRefs-CUQtMukT.js";import"./BaseRadioButton.stories-COKr_sSY.js";import"./BaseRadioButton-xV4it99s.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
