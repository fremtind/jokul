import{j as p,r as a}from"./iframe-CETqyr-J.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DmWzlvus.js";import{H as s,m as n}from"./Help.stories-Blx1aW6S.js";import c from"./RadioButton.stories-BNpuP1a5.js";import{F as d}from"./FieldGroup-bghREMd6.js";import{R as l}from"./RadioButton-pZB_Edzv.js";import{C as u}from"./Checkbox-medX6-LM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BhcXEBcY.js";import"./Label-DlyX3LAq.js";import"./SupportLabel-dH5xYi0s.js";import"./WarningIcon-3RQPuDqc.js";import"./Icon-DPPmB1fe.js";import"./Button-DGIJqprr.js";import"./usePreviousValue-BTj_21At.js";import"./Loader-DfaZLZPk.js";import"./useDelayedRender-Cgh9mzNv.js";/* empty css               *//* empty css               */import"./Flex-CR_1CBS8.js";import"./SlotComponent-BLM-Bx5C.js";import"./mergeRefs-0smMod0F.js";import"./BaseRadioButton.stories-W_4yWrVF.js";import"./BaseRadioButton-BGeIzpZH.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
