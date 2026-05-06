import{j as p,r as a}from"./iframe-ChfTc0u3.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-klDAmeSb.js";import{H as s,m as n}from"./Help.stories-D2zBoq3Z.js";import c from"./RadioButton.stories-DBrTPk9f.js";import{F as d}from"./FieldGroup-BhXCpYMt.js";import{R as l}from"./RadioButton-Da6MJXbp.js";import{C as u}from"./Checkbox-GhGnKwxn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BNqIIP5Z.js";import"./Label-Cffwm11n.js";import"./SupportLabel-CuPkbQKk.js";import"./WarningIcon-B8rc8oPl.js";import"./Icon-39SxBotn.js";import"./Button-By5maTE6.js";import"./usePreviousValue-Dc5M6EvC.js";import"./Loader-BdlG8bDI.js";import"./useDelayedRender-BwS5n65e.js";/* empty css               *//* empty css               */import"./Flex-Cb7-si1L.js";import"./SlotComponent-BQbkV7yv.js";import"./mergeRefs-Bx9gi2UC.js";import"./BaseRadioButton.stories-DYl1pW0I.js";import"./BaseRadioButton-DpkmIRDw.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
