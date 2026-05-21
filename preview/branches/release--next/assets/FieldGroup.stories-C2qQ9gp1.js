import{r as a,j as p}from"./iframe-CkyTt8ht.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-HykpE2Qb.js";import{H as s,m as n}from"./Help.stories-D7zy3IV3.js";import c from"./RadioButton.stories-eL0IKGU_.js";import{F as d}from"./FieldGroup-D2aw_hST.js";import{C as l}from"./Checkbox-Yo3NzmFi.js";import{R as u}from"./RadioButton-Ba_I8yqX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DKSFJicx.js";import"./Button-BuT6iCSO.js";import"./usePreviousValue-B1zRh8Cg.js";import"./Loader-DJOxTXHF.js";import"./useDelayedRender-BEDenruH.js";/* empty css               *//* empty css               */import"./Flex-B9K096Jj.js";import"./SlotComponent-CwdD2PU4.js";import"./mergeRefs-DzNHacE-.js";import"./BaseRadioButton.stories-C_zyqIwJ.js";import"./BaseRadioButton-C6VfE6p9.js";import"./useId-DX9Wy9sW.js";import"./Label-Ba_2O1yB.js";import"./SupportLabel-DvwgCOpD.js";import"./WarningIcon-B9xzQhsW.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
