import{j as p,r as a}from"./iframe-BMIei6zj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D2BxKtrh.js";import{H as s,m as n}from"./Help.stories-HXaiBX7_.js";import c from"./RadioButton.stories-DeFs3CMV.js";import{F as d}from"./FieldGroup-BPj79ng8.js";import{R as l}from"./RadioButton-CYqFurkI.js";import{C as u}from"./Checkbox-Ux6OcFeU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cjq-DDnD.js";import"./Label-C3sSGtT0.js";import"./SupportLabel-B_02ieQD.js";import"./WarningIcon-D9fZVouT.js";import"./Icon-DZBiKneE.js";import"./Button-DR_3A-ep.js";import"./usePreviousValue-BxKGeY2i.js";import"./Loader-Ckjgcm50.js";import"./useDelayedRender-CrzkgT02.js";/* empty css               *//* empty css               */import"./Flex-Cfuo7GDR.js";import"./SlotComponent-BGqEN7cn.js";import"./mergeRefs-DE5gAkyb.js";import"./BaseRadioButton.stories-yhei2FxN.js";import"./BaseRadioButton-CSm8boxj.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
