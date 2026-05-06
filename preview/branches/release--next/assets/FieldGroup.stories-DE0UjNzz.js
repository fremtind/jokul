import{j as p,r as a}from"./iframe-8hnRhoKW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C-jKRsEO.js";import{H as s,m as n}from"./Help.stories-CniPfJlK.js";import c from"./RadioButton.stories-BQD83YbU.js";import{F as d}from"./FieldGroup-BsrFc-fW.js";import{R as l}from"./RadioButton-De6ox6ux.js";import{C as u}from"./Checkbox-C2fNLxUO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D0DN8uJY.js";import"./Label-DaCBNmBf.js";import"./SupportLabel-BK1m0aNN.js";import"./WarningIcon-JNhphA6y.js";import"./Icon-CIZRZu0o.js";import"./Button-bvK69DTQ.js";import"./usePreviousValue-COU2Egnd.js";import"./Loader-DUO6AbtH.js";import"./useDelayedRender-DbTPvjI8.js";/* empty css               *//* empty css               */import"./Flex-DNnNW-VS.js";import"./SlotComponent-DwZvNvjl.js";import"./mergeRefs-C8iBCZSS.js";import"./BaseRadioButton.stories-QQIV2zZO.js";import"./BaseRadioButton-C6IcRsEY.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
