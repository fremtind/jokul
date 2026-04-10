import{j as p,r as a}from"./iframe-B3tFkJrC.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DvJERR_c.js";import{H as s,m as n}from"./Help.stories-DLiKDhWm.js";import c from"./RadioButton.stories-LBA-rUkg.js";import{F as d}from"./FieldGroup-CeS10f2h.js";import{R as l}from"./RadioButton-DgwSGUdX.js";import{C as u}from"./Checkbox-CmjCvsjf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-97pb19Ec.js";import"./Label-BbU5Wg3a.js";import"./SupportLabel-OvcNQVel.js";import"./WarningIcon-DVbYzvwH.js";import"./Icon-BjfSOHKD.js";import"./Button-C726JH__.js";import"./usePreviousValue-CCu09ez4.js";import"./Loader-B_ZUCy3H.js";import"./useDelayedRender-qHzJKHE8.js";/* empty css               *//* empty css               */import"./Flex-BPDb_xAz.js";import"./SlotComponent-DlSgrisY.js";import"./mergeRefs-BXOH4toD.js";import"./BaseRadioButton.stories-DExcPWtt.js";import"./BaseRadioButton-B_Zk6nO6.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
