import{j as p,r as a}from"./iframe-ljwe_dWb.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D0BwE_Cx.js";import{H as s,m as n}from"./Help.stories-DvPg_n-9.js";import c from"./RadioButton.stories-BbvLh4so.js";import{F as d}from"./FieldGroup-Cwfcdxig.js";import{R as l}from"./RadioButton-DGtQjuDU.js";import{C as u}from"./Checkbox-CpG7hX9M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CJ09mLCK.js";import"./Label-DiZgKOxz.js";import"./SupportLabel-CZ4IBS6v.js";import"./WarningIcon-DMeZDSbO.js";import"./Icon-D4dTrSo7.js";import"./Button-BjfdzRut.js";import"./usePreviousValue-C8rjdYcM.js";import"./Loader-45pBrRAp.js";import"./useDelayedRender-DeEJUFED.js";/* empty css               *//* empty css               */import"./Flex-DwxeQy2K.js";import"./SlotComponent-Dr_wcmNy.js";import"./mergeRefs-CoTJ7mIc.js";import"./BaseRadioButton.stories-CI2Dp3sk.js";import"./BaseRadioButton-Ctbg5MVN.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
