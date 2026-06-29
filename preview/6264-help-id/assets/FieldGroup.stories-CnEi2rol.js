import{r as a,j as p}from"./iframe-D1MzGBjH.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bh7BTbgC.js";import s from"./Help.stories-C0QwlKkP.js";import n from"./RadioButton.stories-Bi30Hwza.js";import{F as c}from"./FieldGroup-CLJ7zs3s.js";import{C as d}from"./Checkbox-CePdGX_8.js";import{H as l}from"./Help-DcgcRwvv.js";import{R as u}from"./RadioButton-Cz2Tlvs4.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-B6LznmLd.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Casv_pAX.js";import"./mergeRefs-DrnCA9RY.js";import"./BaseRadioButton.stories-Ci7BVTUB.js";import"./BaseRadioButton-aFdken0p.js";import"./useId-DAqXhn2R.js";import"./Label-8OWqXdNQ.js";import"./SupportLabel-C7_E0lcf.js";import"./SuccessIcon-DRf5Ad0H.js";import"./Icon-B8A45j_9.js";import"./WarningIcon-Bmf2cg-P.js";import"./Button-CMtqD-YQ.js";import"./usePreviousValue-GgYJ9cGl.js";import"./Loader-Dxq1VbHm.js";import"./useDelayedRender-DYAhCluU.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
