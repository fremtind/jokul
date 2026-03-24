import{j as p,r as a}from"./iframe-B67jShvb.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BfbLLXf8.js";import{H as s,m as n}from"./Help.stories-YqSkSRvj.js";import c from"./RadioButton.stories-C8ITazyQ.js";import{F as d}from"./FieldGroup-DMK4tBMO.js";import{R as l}from"./RadioButton-C5dS61NW.js";import{C as u}from"./Checkbox-DnhrUADh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-qH4CTEI1.js";import"./Label-D9PCbA5k.js";import"./SupportLabel-BpN03H-G.js";import"./WarningIcon-C1jz9dZL.js";import"./Icon-vVHd69x3.js";import"./Button-B17nY_bI.js";import"./usePreviousValue-D56tOl5R.js";import"./Loader-Dy9w3ucq.js";import"./useDelayedRender-BgPsK3hG.js";/* empty css               *//* empty css               */import"./Flex-D32g19Tm.js";import"./SlotComponent-Dl6wrRr6.js";import"./mergeRefs-H0ztzD_s.js";import"./BaseRadioButton.stories-DJoABifA.js";import"./BaseRadioButton-BfYNUY_r.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
