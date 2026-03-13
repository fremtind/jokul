import{j as p,r as a}from"./iframe-DmB4tOtU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BTH5_6Ax.js";import{H as s,m as n}from"./Help.stories-BEinrOp8.js";import c from"./RadioButton.stories-DqvgqUGy.js";import{F as d}from"./FieldGroup-DL4q_Hhb.js";import{R as l}from"./RadioButton-CRjgPBHs.js";import{C as u}from"./Checkbox-CKrZnRWL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BULXlfvn.js";import"./Label-CyRm-IeW.js";import"./SupportLabel-DdF3LMuH.js";import"./WarningIcon-CQN4XZU2.js";import"./Icon-b7MplHOl.js";import"./Button-DKarDv5j.js";import"./usePreviousValue-CwiRmhnv.js";import"./Loader-BfqomI82.js";import"./useDelayedRender-nF3n4rsu.js";/* empty css               *//* empty css               */import"./Flex-Cmlc2Tzs.js";import"./SlotComponent-BiJ6Yix8.js";import"./mergeRefs-ClKEdXU3.js";import"./BaseRadioButton.stories-DRtTZQYL.js";import"./BaseRadioButton-Bt4--5Hp.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
