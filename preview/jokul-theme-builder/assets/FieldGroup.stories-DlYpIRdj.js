import{j as p,r as a}from"./iframe-Clzw-ql_.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-IDuc0_aF.js";import{H as s,m as n}from"./Help.stories-xp9lmRU7.js";import c from"./RadioButton.stories-DI59hQSE.js";import{F as d}from"./FieldGroup-BiMwpvSf.js";import{R as l}from"./RadioButton-CQjop-W9.js";import{C as u}from"./Checkbox-C5bCA_ry.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DjL0N4r2.js";import"./Label-CkyJYEB-.js";import"./SupportLabel-CP0Zk4BO.js";import"./WarningIcon-C6CxT110.js";import"./Icon-Co2HVDIa.js";import"./Button-D8USlseK.js";import"./usePreviousValue-BvGpwQBs.js";import"./Loader-C_k-T4rM.js";import"./useDelayedRender-CqLIr_dM.js";/* empty css               *//* empty css               */import"./Flex-5yfTjwaw.js";import"./SlotComponent-CKFDMLof.js";import"./mergeRefs-DuHN8Oib.js";import"./BaseRadioButton.stories-Cv5dss1_.js";import"./BaseRadioButton-57xOOaUk.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
