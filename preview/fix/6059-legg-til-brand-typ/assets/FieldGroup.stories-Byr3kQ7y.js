import{r as a,j as p}from"./iframe-Dbv5nwIw.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D5oCrchP.js";import{H as s,m as n}from"./Help.stories-DYvZtmJx.js";import c from"./RadioButton.stories-DX5i7CfZ.js";import{F as d}from"./FieldGroup-DUjEhIyn.js";import{C as l}from"./Checkbox-BWuT4jJ8.js";import{R as u}from"./RadioButton-DaFuk6G-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ZWZ2-tmG.js";import"./Button-C1lndK3X.js";import"./usePreviousValue-Cfdi2rUP.js";import"./Loader-cs_O8y1M.js";import"./useDelayedRender-DVQd0umD.js";/* empty css               *//* empty css               */import"./Flex-BG8fCyWX.js";import"./SlotComponent-DMUuhP9y.js";import"./mergeRefs-CTT_va66.js";import"./BaseRadioButton.stories-N4lHQiYE.js";import"./BaseRadioButton-DT2fpWnJ.js";import"./useId-CFbMANRJ.js";import"./Label-BVadcKtj.js";import"./SupportLabel-D1QYRPle.js";import"./WarningIcon-BGCWoZHU.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
