import{j as p,r as a}from"./iframe-T23mdjuL.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CmEM2f7B.js";import{H as s,m as n}from"./Help.stories-Dnnusge2.js";import c from"./RadioButton.stories-B2DAzs42.js";import{F as d}from"./FieldGroup-DPthHXLj.js";import{R as l}from"./RadioButton-BMovd2lj.js";import{C as u}from"./Checkbox-Cdcwmnd_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Csw23UKE.js";import"./Label-CgWob-kP.js";import"./SupportLabel-kkGv9zRu.js";import"./WarningIcon-BnqZCwcb.js";import"./Icon-n9CxozG4.js";import"./Button-Bgb66bVp.js";import"./usePreviousValue-q5cBSili.js";import"./Loader-C9OYn6Cx.js";import"./useDelayedRender-D3NBYSBc.js";/* empty css               *//* empty css               */import"./Flex-BpSmumhu.js";import"./SlotComponent-B15PDqP-.js";import"./mergeRefs-dEb1y5DC.js";import"./BaseRadioButton.stories-CZYj_0v_.js";import"./BaseRadioButton-BKtTQGHK.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
