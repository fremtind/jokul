import{j as p,r as a}from"./iframe-DB1jMN_e.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BIbsrnJD.js";import{H as s,m as n}from"./Help.stories-CNLKI0Ex.js";import c from"./RadioButton.stories-D74d-pSj.js";import{F as d}from"./FieldGroup-C1B3pmpl.js";import{R as l}from"./RadioButton-CaYAs2mE.js";import{C as u}from"./Checkbox-FVhlK8NH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DcT5Fmvy.js";import"./Label-JTPUwp6c.js";import"./SupportLabel-DwLObKy7.js";import"./WarningIcon-D43_W-v_.js";import"./Icon-D469adgb.js";import"./Button-CoLAMBt-.js";import"./usePreviousValue-Ctj_4K2e.js";import"./Loader-DnCVoGPd.js";import"./useDelayedRender-Dv5ML3Fh.js";/* empty css               *//* empty css               */import"./Flex-D-VLFEpI.js";import"./SlotComponent-C71w6FIP.js";import"./mergeRefs-B8WkKB65.js";import"./BaseRadioButton.stories-DBuTFE-E.js";import"./BaseRadioButton-M3Czhr2R.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
