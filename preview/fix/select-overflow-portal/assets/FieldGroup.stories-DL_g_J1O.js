import{r as a,j as p}from"./iframe-NOxM-eWo.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BuLT-FS_.js";import{H as s,m as n}from"./Help.stories-CRU0vzg0.js";import c from"./RadioButton.stories-B8pSKtqs.js";import{F as d}from"./FieldGroup-BtZBpbkv.js";import{C as l}from"./Checkbox-FzvKaI7m.js";import{R as u}from"./RadioButton-BN6xCLoO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B-6k230B.js";import"./Button-DaUhm_ox.js";import"./usePreviousValue-CqcPxyh9.js";import"./Loader-B-f2BHhD.js";import"./useDelayedRender-B9K_PD8o.js";/* empty css               *//* empty css               */import"./Flex-DCf0oGEi.js";import"./SlotComponent-C_I0X6XY.js";import"./mergeRefs-I3fEmYba.js";import"./BaseRadioButton.stories-B1mGvbXU.js";import"./BaseRadioButton-BolOXZfx.js";import"./useId-DvkgHI7q.js";/* empty css               */import"./Label-2uTYkmMg.js";import"./SupportLabel-DG5vLbcD.js";import"./WarningIcon-TYp9A3pn.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
