import{j as p,r as a}from"./iframe-DZiLrAfY.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C_IUozqt.js";import{H as s,m as n}from"./Help.stories-kPEY0Baw.js";import c from"./RadioButton.stories-CvBMWpv4.js";import{F as d}from"./FieldGroup-F8y8IH9z.js";import{R as l}from"./RadioButton-D3ZVxXLA.js";import{C as u}from"./Checkbox-DfO5XRQh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DykgLnlP.js";import"./Label-BXFdEh-I.js";import"./SupportLabel-Dm0t3OBh.js";import"./WarningIcon-CNHsHS4W.js";import"./Icon-DcPc9iMC.js";import"./Button-DbHt7aX0.js";import"./usePreviousValue-C3Gb3RLP.js";import"./Loader-DeUI-WnB.js";import"./useDelayedRender-DVxDjFrl.js";/* empty css               *//* empty css               */import"./Flex-B7RZOEk4.js";import"./SlotComponent-CbOD0IJT.js";import"./mergeRefs-BrNZg4sA.js";import"./BaseRadioButton.stories-Cq9THUwn.js";import"./BaseRadioButton-WdnQ99M4.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
