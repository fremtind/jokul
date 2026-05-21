import{r as a,j as p}from"./iframe-BcWBBkWW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B7jwUIB1.js";import{H as s,m as n}from"./Help.stories-CFl5pfZk.js";import c from"./RadioButton.stories-BELt-pIW.js";import{F as d}from"./FieldGroup-C3uVfo3w.js";import{C as l}from"./Checkbox-3KOihJcM.js";import{R as u}from"./RadioButton-DU9X_QgX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C_cgTqSN.js";import"./Button-MChkLKkN.js";import"./usePreviousValue-CKyCnSRA.js";import"./Loader-C7_2NwAc.js";import"./useDelayedRender-BR6p43Fo.js";/* empty css               *//* empty css               */import"./Flex-CI1hu971.js";import"./SlotComponent-BgXl1T9v.js";import"./mergeRefs-BFk5GKrB.js";import"./BaseRadioButton.stories-DC90mm-1.js";import"./BaseRadioButton-DW-2OAtg.js";import"./useId-CXwkjj0-.js";import"./Label-BHCb5mCF.js";import"./SupportLabel-CBu4Y3Q4.js";import"./WarningIcon-BMj_Z0qE.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
