import{r as a,j as p}from"./iframe-BhFgcdO_.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BiHZdWar.js";import{H as s,m as n}from"./Help.stories-DqInEoqR.js";import c from"./RadioButton.stories-DQUy-eCl.js";import{F as d}from"./FieldGroup-xREDu4Q4.js";import{C as l}from"./Checkbox-CvoWobSB.js";import{R as u}from"./RadioButton-CfduLIye.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C8_kavR-.js";import"./Button-TOes-vNy.js";import"./usePreviousValue-Bx-Pxvc0.js";import"./Loader-DiXHQft_.js";import"./useDelayedRender-BY8zLQf3.js";/* empty css               *//* empty css               */import"./Flex-UOBL35LT.js";import"./SlotComponent-Bnb43oZH.js";import"./mergeRefs-y6NLosTO.js";import"./BaseRadioButton.stories-nVqCQe96.js";import"./BaseRadioButton-xxR74sKb.js";import"./useId-DprGHp8v.js";import"./Label-DmG0HNBP.js";import"./SupportLabel-CqEBkQWG.js";import"./WarningIcon-BwtP5vQo.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
