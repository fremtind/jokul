import{r as a,j as p}from"./iframe-GA692mXG.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C1In39Bh.js";import s from"./Help.stories-l5-9P5ir.js";import n from"./RadioButton.stories-BACaNrlP.js";import{F as c}from"./FieldGroup-B8y_uJiI.js";import{C as d}from"./Checkbox-sEN7yhcK.js";import{H as l}from"./Help-DTQ2qfsj.js";import{R as u}from"./RadioButton-D8ZEK9sj.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BiC49JEf.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-tik_K_mo.js";import"./mergeRefs-BkTrlQG6.js";import"./BaseRadioButton.stories-B9LXAMjC.js";import"./BaseRadioButton-CvAAypUJ.js";import"./useId-BxRGXoch.js";/* empty css               */import"./Label-CsBLLIpj.js";import"./SupportLabel-bcgH6cGz.js";import"./WarningIcon-CI6RQvlZ.js";import"./Icon-DiondMS_.js";import"./Button-aAvRImqq.js";import"./usePreviousValue-BTc41bKa.js";import"./Loader-Dr7uk6dc.js";import"./useDelayedRender-BZ8iQH4w.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
