import{r as a,j as p}from"./iframe-DCydWJ6E.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-te0cMOhw.js";import{H as s,m as n}from"./Help.stories-CzSAHZ3F.js";import c from"./RadioButton.stories-D7FjTlpK.js";import{F as d}from"./FieldGroup-CaD_vHId.js";import{C as l}from"./Checkbox-C-h_Y1PG.js";import{R as u}from"./RadioButton-CW1iXvl4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D6t8aUEa.js";import"./Button-CJ5vyf5T.js";import"./usePreviousValue-BKdFP4Oq.js";import"./Loader-DD9gOYY7.js";import"./useDelayedRender-4Irinw_8.js";/* empty css               *//* empty css               */import"./Flex-DYoaYsZu.js";import"./SlotComponent-YDj6RV_T.js";import"./mergeRefs-DSkCcucw.js";import"./BaseRadioButton.stories-TBU9sTBu.js";import"./BaseRadioButton-DPn11rjC.js";import"./useId-Dnqj7KQu.js";import"./Label-DCErbsoe.js";import"./SupportLabel-B23W8zc6.js";import"./WarningIcon-Cep8lE3M.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
