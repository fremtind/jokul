import{r as a,j as p}from"./iframe-Ct-ChUKT.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CGsjSDhN.js";import s from"./Help.stories-DygT2XGH.js";import n from"./RadioButton.stories-t8G0eLCC.js";import{F as c}from"./FieldGroup-C-ayab6h.js";import{C as d}from"./Checkbox-WjlaAWM_.js";import{H as l}from"./Help-B5pscIzR.js";import{R as u}from"./RadioButton-DEp6T6Qw.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-dDhQE35_.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Ds8nzFAF.js";import"./mergeRefs-DOkvI4FF.js";import"./BaseRadioButton.stories-CdahN9De.js";import"./BaseRadioButton-Cg_8mch4.js";import"./useId-CCcp8gKd.js";import"./Label-BRxztRXU.js";import"./SupportLabel-CK46dzxT.js";import"./SuccessIcon-rE2wq9Qw.js";import"./Icon-ED0STk-K.js";import"./WarningIcon-CP8ZF1aN.js";import"./Button-TvVRzNP-.js";import"./usePreviousValue-BH2D65dT.js";import"./Loader-C3XsQRyz.js";import"./useDelayedRender-CDSyTYZS.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
