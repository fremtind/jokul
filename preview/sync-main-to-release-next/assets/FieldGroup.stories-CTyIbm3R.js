import{j as p,r as a}from"./iframe-CIWrPPej.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CprJ5Q6s.js";import{H as s,m as n}from"./Help.stories-BhpHhHcF.js";import c from"./RadioButton.stories-DgpfVTnQ.js";import{F as d}from"./FieldGroup-Djg73Bg2.js";import{R as l}from"./RadioButton-DZNz-qdG.js";import{C as u}from"./Checkbox-7Amp5HNt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B4yIElMN.js";import"./Label-Ctr9zR1G.js";import"./SupportLabel-B8Z1rDEA.js";import"./WarningIcon-D1w8Us-g.js";import"./Icon-3ZICRJM0.js";import"./Button-CEaOpgpk.js";import"./usePreviousValue-Bo3heLKp.js";import"./Loader-CCSpyY7R.js";import"./useDelayedRender-AYbATF63.js";/* empty css               *//* empty css               */import"./Flex-BqowO9R5.js";import"./SlotComponent-BRlVEEIH.js";import"./mergeRefs-D0frwoqB.js";import"./BaseRadioButton.stories-BlBweHGz.js";import"./BaseRadioButton-DQ6ybeLc.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
