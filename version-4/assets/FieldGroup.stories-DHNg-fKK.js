import{r as a,j as p}from"./iframe-DqkqP8aV.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-GqbsP0Dr.js";import{H as s,m as n}from"./Help.stories-DdfyrmU9.js";import c from"./RadioButton.stories-CFuo_egB.js";import{F as d}from"./FieldGroup-Dc8L6PDv.js";import{C as l}from"./Checkbox-CC5J81z_.js";import{R as u}from"./RadioButton-BHj1w4Uj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DsJoHZQk.js";import"./Button-Pkgn3qiE.js";import"./usePreviousValue-DV6GUWVK.js";import"./Loader-DHsvI25y.js";import"./useDelayedRender-CYWj8Te4.js";/* empty css               *//* empty css               */import"./Flex-leYeSH-F.js";import"./SlotComponent-B0VFfkhJ.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-D7Jm6Afg.js";import"./BaseRadioButton-CCcLESGD.js";import"./useId-DRxI8YaO.js";/* empty css               */import"./Label-DxI5VN_z.js";import"./SupportLabel-BdMOkg_E.js";import"./WarningIcon-CBB1rqGk.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
