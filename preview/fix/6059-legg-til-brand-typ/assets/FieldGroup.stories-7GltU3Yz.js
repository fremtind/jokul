import{r as a,j as p}from"./iframe-CShS9J3R.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CjMTvOhv.js";import{H as s,m as n}from"./Help.stories-DkqOCjK6.js";import c from"./RadioButton.stories-Cj_7Vb3t.js";import{F as d}from"./FieldGroup-CuYZ-4Q7.js";import{C as l}from"./Checkbox-CR7loXMg.js";import{R as u}from"./RadioButton-uvR-hyn5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-IF4dm_E1.js";import"./Button-DvTZNYe8.js";import"./usePreviousValue-CCyOqjUA.js";import"./Loader-DBu556mv.js";import"./useDelayedRender-Cv_uDxws.js";/* empty css               *//* empty css               */import"./Flex-CSDVVnmd.js";import"./SlotComponent-BBwjHs_2.js";import"./mergeRefs-CD3sw-yL.js";import"./BaseRadioButton.stories-BQ1dK17o.js";import"./BaseRadioButton-ktiox01W.js";import"./useId-KKB5ICnu.js";import"./Label-DJzRN5Eg.js";import"./SupportLabel-BVcBjf7Z.js";import"./WarningIcon-IWWYET9o.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
