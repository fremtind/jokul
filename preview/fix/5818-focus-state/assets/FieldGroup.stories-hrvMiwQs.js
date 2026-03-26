import{j as p,r as a}from"./iframe-D9A9Wc60.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-NUxYZk-t.js";import{H as s,m as n}from"./Help.stories-tuKeZBmw.js";import c from"./RadioButton.stories-CAzfVQ0L.js";import{F as d}from"./FieldGroup-DfsUtxvL.js";import{R as l}from"./RadioButton-BZjg2k5B.js";import{C as u}from"./Checkbox-arfOcgvZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-LWbKQQ0Y.js";import"./Label-D1lSPQCC.js";import"./SupportLabel-iIMrgfvz.js";import"./WarningIcon-Cn2M2uMo.js";import"./Icon-1zwwOS39.js";import"./Button-FuBpwSwc.js";import"./usePreviousValue-BaWfcOMe.js";import"./Loader-bPlq8xAC.js";import"./useDelayedRender-Drul54T_.js";/* empty css               *//* empty css               */import"./Flex-Bv27qHyv.js";import"./SlotComponent-IuFF51-j.js";import"./mergeRefs-BZFkQlFh.js";import"./BaseRadioButton.stories-CE7od8BA.js";import"./BaseRadioButton-BAh2K72q.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
