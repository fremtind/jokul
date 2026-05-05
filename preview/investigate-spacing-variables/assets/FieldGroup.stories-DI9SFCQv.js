import{j as p,r as a}from"./iframe-DbktFGcM.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BnAlmxeo.js";import{H as s,m as n}from"./Help.stories-1nzFgC84.js";import c from"./RadioButton.stories-BBwIqr7W.js";import{F as d}from"./FieldGroup-H641UosW.js";import{R as l}from"./RadioButton-CfwjQKNq.js";import{C as u}from"./Checkbox-CR8EPm2u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cc-GnFTY.js";import"./Label-eMkRcbeE.js";import"./SupportLabel-Bk5VfIZ5.js";import"./WarningIcon-De3mmF3n.js";import"./Icon-C6eFiTKK.js";import"./Button-2EPcOnNH.js";import"./usePreviousValue-DWPnWzRo.js";import"./Loader-B0RNhM95.js";import"./useDelayedRender-BqUXaojg.js";/* empty css               *//* empty css               */import"./Flex-BD61vgTJ.js";import"./SlotComponent-Dm20u6ak.js";import"./mergeRefs-DqzIScGF.js";import"./BaseRadioButton.stories-Dc9wDmJ3.js";import"./BaseRadioButton-jdg-oMDP.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
