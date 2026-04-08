import{j as p,r as a}from"./iframe-Cw_cXWtk.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Brc8AxkM.js";import{H as s,m as n}from"./Help.stories-n0GYjudj.js";import c from"./RadioButton.stories-IfhLY2XN.js";import{F as d}from"./FieldGroup-DP7-w6rM.js";import{R as l}from"./RadioButton-C2sY8OdI.js";import{C as u}from"./Checkbox-BEyJMu4V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-O4j-bVKQ.js";import"./Label-Cl6WyKNe.js";import"./SupportLabel-o3Rb0Ipa.js";import"./WarningIcon-CiE7w4SM.js";import"./Icon-DOEkfrNC.js";import"./Button-D_cgSgo1.js";import"./usePreviousValue-BmElpLSU.js";import"./Loader-Bc6bPkjc.js";import"./useDelayedRender-Dp6hD_aN.js";/* empty css               *//* empty css               */import"./Flex-CnlW_cM6.js";import"./SlotComponent-CdA9-D6k.js";import"./mergeRefs-Rg1Pfeqq.js";import"./BaseRadioButton.stories-BxvSQ5g2.js";import"./BaseRadioButton-BaOZyK7e.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
