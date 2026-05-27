import{r as a,j as p}from"./iframe-hCbhKfdv.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DYX-Xi28.js";import{H as s,m as n}from"./Help.stories-BPmFzyNC.js";import c from"./RadioButton.stories-5jlq2Jsg.js";import{F as d}from"./FieldGroup-BgG8Oby2.js";import{C as l}from"./Checkbox-B5DQjCH7.js";import{R as u}from"./RadioButton-eEPbSCxb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-LV3cCyoT.js";import"./Button-Bp7eRQz-.js";import"./usePreviousValue-CxuACRXk.js";import"./Loader-GgUvhn0m.js";import"./useDelayedRender-BaBiU76p.js";/* empty css               *//* empty css               */import"./Flex-yLzZXCSc.js";import"./SlotComponent-C1bHOGul.js";import"./mergeRefs-DQEo8_zF.js";import"./BaseRadioButton.stories-Btco9LGQ.js";import"./BaseRadioButton-CZ-w18lE.js";import"./useId-C8MuZq15.js";/* empty css               */import"./Label-DdjviRr1.js";import"./SupportLabel-D02Etwgt.js";import"./WarningIcon-Br_hd5AZ.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
