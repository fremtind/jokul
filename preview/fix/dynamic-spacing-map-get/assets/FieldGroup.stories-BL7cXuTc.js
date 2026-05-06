import{j as p,r as a}from"./iframe-GrF9Ha7L.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DSD3JQTe.js";import{H as s,m as n}from"./Help.stories-BIWgbYBX.js";import c from"./RadioButton.stories-DMwRbITV.js";import{F as d}from"./FieldGroup-BKyei_oF.js";import{R as l}from"./RadioButton-CSF_-vCO.js";import{C as u}from"./Checkbox-R-mxTgVl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D9NLSEWx.js";import"./Label-CZ0DM0Zp.js";import"./SupportLabel-DowCIyNS.js";import"./WarningIcon-BB3PYmoD.js";import"./Icon-DR1_-5OE.js";import"./Button-BS2djGIX.js";import"./usePreviousValue-BBhzk-m_.js";import"./Loader-DOQKNHP5.js";import"./useDelayedRender-_phhXIc5.js";/* empty css               *//* empty css               */import"./Flex-2ue2BBrU.js";import"./SlotComponent-dEGyH1Pr.js";import"./mergeRefs-B3LHIiYV.js";import"./BaseRadioButton.stories-BsX7YW69.js";import"./BaseRadioButton-D7pk8pLG.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
