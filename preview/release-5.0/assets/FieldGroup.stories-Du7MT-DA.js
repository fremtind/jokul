import{r as a,j as p}from"./iframe-SGr4X-zv.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CyMrTxMh.js";import{H as s,m as n}from"./Help.stories-BRX5DvGO.js";import c from"./RadioButton.stories-CDvy3LOI.js";import{F as d}from"./FieldGroup-Y6z61S7n.js";import{C as l}from"./Checkbox-BTqklkD9.js";import{R as u}from"./RadioButton-CWchzMKL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-XDBcUabC.js";import"./Button-BzqzwHZP.js";import"./usePreviousValue-rhtQBL7l.js";import"./Loader-C280-sDQ.js";import"./useDelayedRender-pVNJk0RI.js";/* empty css               *//* empty css               */import"./Flex-IyXMeU-X.js";import"./SlotComponent-CPsR7u7S.js";import"./mergeRefs-1b9q0vYF.js";import"./BaseRadioButton.stories-BxI3fXRi.js";import"./BaseRadioButton-BTURgxgw.js";import"./useId-D1cW4ZKh.js";/* empty css               */import"./Label-BYV3Khz_.js";import"./SupportLabel-DGkTUNEm.js";import"./WarningIcon-CR6_khJy.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
