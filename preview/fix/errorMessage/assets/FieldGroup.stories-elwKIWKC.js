import{r as a,j as p}from"./iframe-B0fcqpyd.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DISIOvzJ.js";import s from"./Help.stories-CAvDA_c8.js";import n from"./RadioButton.stories-CskPXzu5.js";import{F as c}from"./FieldGroup-CFSFZfxj.js";import{C as d}from"./Checkbox-l3vk6LuD.js";import{H as l}from"./Help-mloUcbbs.js";import{R as u}from"./RadioButton-7ldeG3Qm.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-JmY5dnA9.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BCHk_PVJ.js";import"./mergeRefs-7-GU-Az7.js";import"./BaseRadioButton.stories-B3ud8Sdr.js";import"./BaseRadioButton-CwJ7GGMy.js";import"./useId-CbbC4IvS.js";import"./Label-CVloYJmn.js";import"./SupportLabel-Bro1Wh-M.js";import"./SuccessIcon-CPAf22p0.js";import"./Icon-ClOHImp5.js";import"./WarningIcon-HHeldzH5.js";import"./Button-BF4CNhOa.js";import"./usePreviousValue-DcNwFstF.js";import"./Loader-B5fPGnH6.js";import"./useDelayedRender-BOHNsg8k.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
