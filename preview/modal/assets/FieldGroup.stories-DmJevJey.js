import{j as p,r as a}from"./iframe-DkHf2Bdy.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B80RPQN1.js";import{H as s,m as n}from"./Help.stories-CDCG-g5O.js";import c from"./RadioButton.stories-BlP0Y3sM.js";import{F as d}from"./FieldGroup-DoidGTt9.js";import{R as l}from"./RadioButton-DDcJBUB7.js";import{C as u}from"./Checkbox-DvJcEb5j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DJZBzhaW.js";import"./Label-Dr-qu9O1.js";import"./SupportLabel-B6tNcD-U.js";import"./WarningIcon-BHtnZc_0.js";import"./Icon-Cliz4a8t.js";import"./Button-DcKe2dLv.js";import"./usePreviousValue-DXiY1l9S.js";import"./Loader-uxIYTdht.js";import"./useDelayedRender-BY7wb8Wl.js";/* empty css               *//* empty css               */import"./Flex-mZ3-cInx.js";import"./SlotComponent-Bh6A5HRM.js";import"./mergeRefs-yYTeu-pT.js";import"./BaseRadioButton.stories-BPiFZojS.js";import"./BaseRadioButton-cPWFkBiX.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
