import{r as a,j as p}from"./iframe-D0gKF9rI.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D7HU3woF.js";import{H as s,m as n}from"./Help.stories-Cdt_DOKj.js";import c from"./RadioButton.stories-KTZdQFqC.js";import{F as d}from"./FieldGroup-CL5vB-Qo.js";import{C as l}from"./Checkbox-BzfzZCdW.js";import{R as u}from"./RadioButton-d0hKOZQC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-gndwIv-j.js";import"./Button-C_g8es5e.js";import"./usePreviousValue-kUeGmco8.js";import"./Loader-iQXg1MvB.js";import"./useDelayedRender-Dzm-aXZM.js";/* empty css               *//* empty css               */import"./Flex-C7AfX97c.js";import"./SlotComponent-BjYTspiN.js";import"./mergeRefs-DmZVddA0.js";import"./BaseRadioButton.stories-BKjakrKA.js";import"./BaseRadioButton-D7_kE7Dx.js";import"./useId-Ht_wnCZZ.js";/* empty css               */import"./Label-ClQ-tDnF.js";import"./SupportLabel-BMI9EL8N.js";import"./WarningIcon-CbaAJyMz.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
