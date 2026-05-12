import{j as p,r as a}from"./iframe-BsCCLx4O.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CHShs-PC.js";import{H as s,m as n}from"./Help.stories-BxxKMQV7.js";import c from"./RadioButton.stories-BHuUkZAN.js";import{F as d}from"./FieldGroup-CGjZBfNj.js";import{R as l}from"./RadioButton-RrwDE9UW.js";import{C as u}from"./Checkbox-CuT2dldv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DPDv3qMY.js";import"./Label-KlZJZufd.js";import"./SupportLabel-Ch2dhJWX.js";import"./WarningIcon-BRuhnhO2.js";import"./Icon-Cs0HyjYn.js";import"./Button-CJcABnxy.js";import"./usePreviousValue-DHnsuAQA.js";import"./Loader-CQNjDH1X.js";import"./useDelayedRender-B74BUOKu.js";/* empty css               *//* empty css               */import"./Flex-4vtig__p.js";import"./SlotComponent-CxlQ9I40.js";import"./mergeRefs-ClJw6vL1.js";import"./BaseRadioButton.stories-B7R-EJF0.js";import"./BaseRadioButton-B0D5tLfA.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
