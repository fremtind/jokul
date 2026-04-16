import{j as p,r as a}from"./iframe-DCm4veI5.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BkFi7ha7.js";import{H as s,m as n}from"./Help.stories-95eNlnl-.js";import c from"./RadioButton.stories-CSSp9FTM.js";import{F as d}from"./FieldGroup-s7uuKA98.js";import{R as l}from"./RadioButton-CshjLt-9.js";import{C as u}from"./Checkbox-CbHt-BNl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-TxY30_1H.js";import"./Label-X7mjxUYB.js";import"./SupportLabel-DGsFRTtb.js";import"./WarningIcon-DGz1-lxb.js";import"./Icon-DZgNDoX_.js";import"./Button-BwCKAykM.js";import"./usePreviousValue-CMygGurw.js";import"./Loader-r-O4S6kf.js";import"./useDelayedRender-DGNcnS9T.js";/* empty css               *//* empty css               */import"./Flex-DiL1s_8H.js";import"./SlotComponent-Cfcw-XIZ.js";import"./mergeRefs-BTeTT1Tg.js";import"./BaseRadioButton.stories-DiJDHvQe.js";import"./BaseRadioButton-CZvYlPXm.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
