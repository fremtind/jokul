import{j as p,r as a}from"./iframe-PT4Cv5M4.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B7RNL0u-.js";import{H as s,m as n}from"./Help.stories-tHSm0Qrl.js";import c from"./RadioButton.stories-CBT80NBx.js";import{F as d}from"./FieldGroup-fv68hAbG.js";import{R as l}from"./RadioButton-DI6LheEU.js";import{C as u}from"./Checkbox-WtQXrxhs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-WDsUMFaS.js";import"./Label-BM9n6_Tw.js";import"./SupportLabel-Dj-ddm7i.js";import"./WarningIcon-BHaSuJXz.js";import"./Icon-C6e0SwAM.js";import"./Button-CLrhhVYa.js";import"./usePreviousValue-BKMr7lEk.js";import"./Loader-CD4X5vJy.js";import"./useDelayedRender-zBfVTQBP.js";/* empty css               *//* empty css               */import"./Flex-BLaiC7pS.js";import"./SlotComponent-C2k6AK4t.js";import"./mergeRefs-Drr_chdO.js";import"./BaseRadioButton.stories-D-dUWoN9.js";import"./BaseRadioButton-Cs5-RyAj.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
