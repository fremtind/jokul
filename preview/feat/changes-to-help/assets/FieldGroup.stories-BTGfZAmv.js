import{j as p,r as a}from"./iframe-D6gxZXQA.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CZPyLri_.js";import s from"./Help.stories-Dl9IpvlJ.js";import n from"./RadioButton.stories-BUxLeoGw.js";import{F as c}from"./FieldGroup-CpB8c-py.js";import{R as d}from"./RadioButton-BnPYMSEa.js";import{C as l}from"./Checkbox-CqMLQsOF.js";import{H as u}from"./Help-CAkhQNIi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BiB6JU1v.js";import"./Label-DhbsXhQ3.js";import"./SupportLabel-DjKk6OXO.js";import"./WarningIcon-C8W7bkvr.js";import"./Icon-eM4sgDhL.js";/* empty css               *//* empty css               */import"./Flex-qI3o13-R.js";import"./SlotComponent-BUjItQo4.js";import"./mergeRefs-B-NMl9Xa.js";import"./BaseRadioButton.stories-BHa1XEJ9.js";import"./BaseRadioButton-B7yFLdKU.js";import"./Button-C4hDRz8E.js";import"./usePreviousValue-CCOPQvuR.js";import"./Loader-C4kRQ-t6.js";import"./useDelayedRender-pYcCEWP7.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
