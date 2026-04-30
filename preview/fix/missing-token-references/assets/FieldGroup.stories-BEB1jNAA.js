import{j as p,r as a}from"./iframe-HAxjAwL1.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Ck1cAH21.js";import{H as s,m as n}from"./Help.stories-DlW2sKaL.js";import c from"./RadioButton.stories-BKIcZTc9.js";import{F as d}from"./FieldGroup-D70iEKfq.js";import{R as l}from"./RadioButton-J0r_kha-.js";import{C as u}from"./Checkbox-CM2fz5Vk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-4Eznfg0C.js";import"./Label-DmBt0gDw.js";import"./SupportLabel-DJKtAx20.js";import"./WarningIcon-C62_Qxjg.js";import"./Icon-C64mvluI.js";import"./Button-PRgB-rvP.js";import"./usePreviousValue-Blu3-xho.js";import"./Loader-DUyeaF8w.js";import"./useDelayedRender-CaIB2THf.js";/* empty css               *//* empty css               */import"./Flex-FYFZddwo.js";import"./SlotComponent-C1kxhxrt.js";import"./mergeRefs-BH-A7NLx.js";import"./BaseRadioButton.stories-DDPsOLrB.js";import"./BaseRadioButton-DmB3xSP9.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
