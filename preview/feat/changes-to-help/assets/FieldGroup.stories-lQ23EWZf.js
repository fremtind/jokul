import{j as p,r as a}from"./iframe-DfW9cJKP.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-1lFn8uib.js";import s from"./Help.stories-Rs1yXoVq.js";import n from"./RadioButton.stories-D-4Svd82.js";import{F as c}from"./FieldGroup-8mSY9I0n.js";import{R as d}from"./RadioButton-CTOTbWC1.js";import{C as l}from"./Checkbox-Dc0vIIuL.js";import{H as u}from"./Help-Dl0Owtme.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Ds-Qzrvb.js";import"./Label-R_qJvIG4.js";import"./SupportLabel-CJCkv5SX.js";import"./WarningIcon-CZSJ9Q8z.js";import"./Icon-DNTsqUX2.js";/* empty css               *//* empty css               */import"./Flex-BE1nwhKg.js";import"./SlotComponent-CPaAuafJ.js";import"./mergeRefs-BNEbydFq.js";import"./BaseRadioButton.stories-BYiezUcG.js";import"./BaseRadioButton-CqRnwhrW.js";import"./Button-C_mgjBq6.js";import"./usePreviousValue-C9-dcbV6.js";import"./Loader-CRuOj7_2.js";import"./useDelayedRender-DuPNSOeZ.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
