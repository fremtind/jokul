import{r as a,j as p}from"./iframe-Nvp5l-ln.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BOqQiGjl.js";import s from"./Help.stories-IA7XL1VZ.js";import n from"./RadioButton.stories-DzqT-Hmd.js";import{F as c}from"./FieldGroup-C6PIsj8P.js";import{C as d}from"./Checkbox-CQPcqJYD.js";import{H as l}from"./Help-BUmIcI7Q.js";import{R as u}from"./RadioButton-D-mAO3qk.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BhOF3WfX.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B4qlzBvZ.js";import"./mergeRefs-Dk_E6CgW.js";import"./BaseRadioButton.stories-Dd7--U1o.js";import"./BaseRadioButton-BGkpArOh.js";import"./useId-tu3xuOch.js";/* empty css               */import"./Label-DenBK_Wi.js";import"./SupportLabel-B0qFR3Yu.js";import"./WarningIcon-CiIMDh8K.js";import"./Icon-DJVK3AMz.js";import"./Button-kl2ccHLg.js";import"./usePreviousValue-CkKQlogx.js";import"./Loader-DCtEeZ5J.js";import"./useDelayedRender-CMhepQJh.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
