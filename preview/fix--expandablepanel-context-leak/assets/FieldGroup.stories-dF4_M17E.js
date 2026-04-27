import{r as a,j as p}from"./iframe-C4ay2a_S.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DsWGkZxS.js";import{H as s,m as n}from"./Help.stories-B2z_hEVs.js";import c from"./RadioButton.stories-BicZ-W6B.js";import{F as d}from"./FieldGroup-BvN9asEg.js";import{C as l}from"./Checkbox-CTx6QS4K.js";import{R as u}from"./RadioButton-CLyoOAsq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DLpCJwSE.js";import"./Button-Dor7-eTU.js";import"./usePreviousValue-DZZMPfoj.js";import"./Loader-Dxe9iCOg.js";import"./useDelayedRender-CDt0-TPl.js";/* empty css               *//* empty css               */import"./Flex-CRDgAm6R.js";import"./SlotComponent-CqRyRDZz.js";import"./mergeRefs-DXg6stYF.js";import"./BaseRadioButton.stories-DSPdzBdZ.js";import"./BaseRadioButton-DPaIioVH.js";import"./useId-DBQOxrbU.js";/* empty css               */import"./Label-DH-XKJfe.js";import"./SupportLabel-Cje5P9Yv.js";import"./WarningIcon-zAKFUnxE.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
