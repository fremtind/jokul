import{j as p,r as a}from"./iframe-BsdzgCpt.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bhmv0mdL.js";import s from"./Help.stories-0DZVz-a1.js";import n from"./RadioButton.stories-BovQMItJ.js";import{F as c}from"./FieldGroup-KbNjZRx_.js";import{R as d}from"./RadioButton-DblHIqhc.js";import{C as l}from"./Checkbox-CZegEsgH.js";import{H as u}from"./Help-FRzwBfqn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DIIV9hVU.js";import"./Label-CfEp78j3.js";import"./SupportLabel-D5yNozdc.js";import"./WarningIcon-DeUhQ9ss.js";import"./Icon-CtA7dF1v.js";/* empty css               *//* empty css               */import"./Flex-BKqcEI_u.js";import"./SlotComponent-Hd9h36b7.js";import"./mergeRefs-CR7LbcnU.js";import"./BaseRadioButton.stories-Dl3I5AUI.js";import"./BaseRadioButton-NExZ9AwU.js";import"./Button-CSjUgTuz.js";import"./usePreviousValue-3Qt7NoXY.js";import"./Loader-B17twcAr.js";import"./useDelayedRender-DBDO8M2C.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
