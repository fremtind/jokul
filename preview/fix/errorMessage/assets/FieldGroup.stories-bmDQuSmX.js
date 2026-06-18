import{r as a,j as p}from"./iframe-3p9zfVXH.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BaCTJJ4h.js";import{H as s,m as n}from"./Help.stories-DV3UREKt.js";import c from"./RadioButton.stories-B2oMN9bU.js";import{F as d}from"./FieldGroup-lMNgWsbq.js";import{C as l}from"./Checkbox-VzGZoIlo.js";import{R as u}from"./RadioButton-C-XtyVUo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DMa3FIy5.js";import"./Button-HHDCCVab.js";import"./usePreviousValue-DIeav-4f.js";import"./Loader-BvAWfF4F.js";import"./useDelayedRender-CSryCHA3.js";/* empty css               *//* empty css               */import"./Flex-Cwqerjcs.js";import"./SlotComponent-BAb8l5Ef.js";import"./mergeRefs-UCSHaBAj.js";import"./BaseRadioButton.stories-Df8xCjX6.js";import"./BaseRadioButton-tKKP-HqV.js";import"./useId-D_41UfNC.js";import"./Label-CZ0rxUJ1.js";import"./SupportLabel-C8rEIFyy.js";import"./SuccessIcon-Cwc12gM8.js";import"./WarningIcon-_LFytsEk.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
