import{j as p,r as a}from"./iframe-BqZ_o5Lj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B_qFZp5l.js";import{H as s,m as n}from"./Help.stories-dSuE86z-.js";import c from"./RadioButton.stories-Cl89lrkB.js";import{F as d}from"./FieldGroup-BYPIgVm_.js";import{R as l}from"./RadioButton-nJw5BPM6.js";import{C as u}from"./Checkbox-C_venj9V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DBvoSW7s.js";import"./Label-AzFW3Is0.js";import"./SupportLabel-DMefekvz.js";import"./WarningIcon-BnmQZbuf.js";import"./Icon-CmgczM0F.js";import"./Button-QQIiOnE7.js";import"./usePreviousValue-DZyMl6-A.js";import"./Loader-RGuRMeBX.js";import"./useDelayedRender-CQEmIdwh.js";/* empty css               *//* empty css               */import"./Flex-DIRsU-eq.js";import"./SlotComponent-BR-pLoML.js";import"./mergeRefs-Cr3PRICv.js";import"./BaseRadioButton.stories-afyeUkZF.js";import"./BaseRadioButton-D_j6tz_i.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
