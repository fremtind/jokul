import{j as p,r as a}from"./iframe-BIT_jYWJ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D2oGNQuI.js";import{H as s,m as n}from"./Help.stories-B-u7wQkF.js";import c from"./RadioButton.stories-DmnwmwNa.js";import{F as d}from"./FieldGroup-B_95WHto.js";import{R as l}from"./RadioButton-DOJ_PU_u.js";import{C as u}from"./Checkbox-BqE69oCH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CLBWt_sO.js";import"./Label-BYfLwJAu.js";import"./SupportLabel-DA_nE9-5.js";import"./WarningIcon-BwIdCTbF.js";import"./Icon-BG8Sybp4.js";import"./Button-DVeMHVpi.js";import"./usePreviousValue-BXkt_rae.js";import"./Loader-ChrS_1Hd.js";import"./useDelayedRender-CeW_n8Bg.js";/* empty css               *//* empty css               */import"./Flex-B0D48_Br.js";import"./SlotComponent-CMUvoUmn.js";import"./mergeRefs-uV0ZfdA-.js";import"./BaseRadioButton.stories-CMgvELDa.js";import"./BaseRadioButton-Dth0zWZt.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
