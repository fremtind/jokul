import{j as p,r as a}from"./iframe-QPc0IBld.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BMM3hqLU.js";import{H as s,m as n}from"./Help.stories-DLr9yEL4.js";import c from"./RadioButton.stories-5dwunDMO.js";import{F as d}from"./FieldGroup-_dtCXylP.js";import{R as l}from"./RadioButton-BE4xDsuo.js";import{C as u}from"./Checkbox-BXcfSHf7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-sPtuzADl.js";import"./Label-KZLiaYNT.js";import"./SupportLabel-Ba37nKSf.js";import"./WarningIcon-BJV8RI0b.js";import"./Icon-D51viLaQ.js";import"./Button-_y6z2yof.js";import"./usePreviousValue-B5-4XwbA.js";import"./Loader-BHMgQUC5.js";import"./useDelayedRender-TYkuBThW.js";/* empty css               *//* empty css               */import"./Flex-0jKYiax2.js";import"./SlotComponent-Dn-awriH.js";import"./mergeRefs-DBZboEgd.js";import"./BaseRadioButton.stories-qeS32MlC.js";import"./BaseRadioButton-CBGnRXrr.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
