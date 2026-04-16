import{j as p,r as a}from"./iframe-CTiamBwr.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-ClJwUo9m.js";import{H as s,m as n}from"./Help.stories-BfFu4BGD.js";import c from"./RadioButton.stories-CZ7zqctE.js";import{F as d}from"./FieldGroup-DC11Qwib.js";import{R as l}from"./RadioButton-UE74HrM5.js";import{C as u}from"./Checkbox-B52g7Upj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BEWbK6rF.js";import"./Label-CTeefwA3.js";import"./SupportLabel-B5QVZkcW.js";import"./WarningIcon-CunnAiU4.js";import"./Icon-BuJTr8if.js";import"./Button-UMvRjYPf.js";import"./usePreviousValue-B3huhz04.js";import"./Loader-UqRXwcNI.js";import"./useDelayedRender-C5fFYKck.js";/* empty css               *//* empty css               */import"./Flex-BHovTcl6.js";import"./SlotComponent-Dltx8DZ5.js";import"./mergeRefs-DJ70aV-T.js";import"./BaseRadioButton.stories-glY9Mz3i.js";import"./BaseRadioButton-BmcTu8CX.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
