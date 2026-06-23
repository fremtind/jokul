import{r as a,j as p}from"./iframe-DpQggxXa.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CcruLAXv.js";import s from"./Help.stories-Lzl_AE1u.js";import n from"./RadioButton.stories-CchlpnWq.js";import{F as c}from"./FieldGroup-CFCoWAAk.js";import{C as d}from"./Checkbox-bRqt9a_3.js";import{H as l}from"./Help-NgtVQyMa.js";import{R as u}from"./RadioButton-fsvBB72y.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-B9j5YFhZ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DOIGhgJZ.js";import"./mergeRefs-DdGMkPFN.js";import"./BaseRadioButton.stories-DDc1JdM_.js";import"./BaseRadioButton-BPZkiXkq.js";import"./useId-D-ZF-H-m.js";import"./Label-Vs5Mf50v.js";import"./SupportLabel-CGsCnqJl.js";import"./SuccessIcon-BUQnsImg.js";import"./Icon-TEjXvEr4.js";import"./WarningIcon-BKU0CLXQ.js";import"./Button-Cc_rcgSc.js";import"./usePreviousValue-DpuGGxXM.js";import"./Loader-CDq4qnqo.js";import"./useDelayedRender-RbPSsE_c.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
