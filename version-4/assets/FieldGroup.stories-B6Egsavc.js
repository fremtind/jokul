import{r as a,j as p}from"./iframe-DR7yGEhU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cyhq3HuN.js";import{H as s,m as n}from"./Help.stories-CjlmTpun.js";import c from"./RadioButton.stories-Bma3CGaN.js";import{F as d}from"./FieldGroup-fm7yNqUJ.js";import{C as l}from"./Checkbox-DSbznfaR.js";import{R as u}from"./RadioButton-C0dTrEIU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-1-zj4suy.js";import"./Button-DNh48U8Q.js";import"./usePreviousValue-D05I6gYC.js";import"./Loader-C6pIt5Qm.js";import"./useDelayedRender-B_0KGY7F.js";/* empty css               *//* empty css               */import"./Flex-BuHAqA1i.js";import"./SlotComponent-BKDdF-c4.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-CedrhXXQ.js";import"./BaseRadioButton-COallTYT.js";import"./useId-CZRNCofc.js";/* empty css               */import"./Label-IsfHYsxJ.js";import"./SupportLabel-C2w44MUa.js";import"./WarningIcon-D9qWg_IM.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
