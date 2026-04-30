import{j as p,r as a}from"./iframe-S8j4lm7c.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DLlTNgHp.js";import{H as s,m as n}from"./Help.stories-Bxk4nc1h.js";import c from"./RadioButton.stories-piihrwjK.js";import{F as d}from"./FieldGroup-q_4Ve8Sy.js";import{R as l}from"./RadioButton-BMth09fs.js";import{C as u}from"./Checkbox-Cfm81WIb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CO0xw5ws.js";import"./Label-RVbF0N9t.js";import"./SupportLabel-fFt8owYd.js";import"./WarningIcon-DbSOY1UB.js";import"./Icon-Dw7hQHVp.js";import"./Button-DCqx8TkD.js";import"./usePreviousValue-DDLVSSsJ.js";import"./Loader-Bj1kss_i.js";import"./useDelayedRender-Bnj1lvOB.js";/* empty css               *//* empty css               */import"./Flex-C4GAS__W.js";import"./SlotComponent-xp8RSOxJ.js";import"./mergeRefs-B2FVfTXs.js";import"./BaseRadioButton.stories-DVosaqw4.js";import"./BaseRadioButton-n0t6Lt75.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
