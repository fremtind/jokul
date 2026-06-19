import{r as a,j as p}from"./iframe-6RHYNS26.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BXOlI0Gy.js";import s from"./Help.stories-BDBDk5DV.js";import n from"./RadioButton.stories-BGdIrLkl.js";import{F as c}from"./FieldGroup-K7ZfLZad.js";import{C as d}from"./Checkbox-BoZkeKm5.js";import{H as l}from"./Help-B-ZnbnIA.js";import{R as u}from"./RadioButton-CGrB0whb.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-WLw83xgd.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BA2WFuWP.js";import"./mergeRefs-CMxuK3au.js";import"./BaseRadioButton.stories-FeR8RxGN.js";import"./BaseRadioButton-CCv8HDH6.js";import"./useId-BqE05kCo.js";/* empty css               */import"./Label-BQtpRQJn.js";import"./SupportLabel-Cir8bMW7.js";import"./SuccessIcon-De6syDOa.js";import"./Icon-1aO4zp42.js";import"./WarningIcon-BUylynMV.js";import"./Button-D92be31T.js";import"./usePreviousValue-vlv9V51J.js";import"./Loader-BI4nLMyf.js";import"./useDelayedRender-BeGtrt8Z.js";const A={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,D as __namedExportsOrder,A as default};
