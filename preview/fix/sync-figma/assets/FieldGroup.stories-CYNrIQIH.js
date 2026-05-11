import{j as p,r as a}from"./iframe-C6weljUM.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CGDWV3eL.js";import{H as s,m as n}from"./Help.stories-BGVJw1Kt.js";import c from"./RadioButton.stories-9hurD6Oz.js";import{F as d}from"./FieldGroup-Ch5AtPYR.js";import{R as l}from"./RadioButton-DImyYMqu.js";import{C as u}from"./Checkbox-CzcrasaC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BPqpNW7Z.js";import"./Label-BPYhvNBQ.js";import"./SupportLabel-BLPEgtC6.js";import"./WarningIcon-BrzUJtA3.js";import"./Icon-CPZQzywW.js";import"./Button-Cwf61NCe.js";import"./usePreviousValue-qCe8BnHb.js";import"./Loader-A2aPWjIq.js";import"./useDelayedRender-B_qvPb3k.js";/* empty css               *//* empty css               */import"./Flex-D8mWT22N.js";import"./SlotComponent-CWOmVuxk.js";import"./mergeRefs-CEtgXnFX.js";import"./BaseRadioButton.stories-BkaJTcWZ.js";import"./BaseRadioButton-BZ1kXanh.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
