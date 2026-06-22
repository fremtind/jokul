import{r as a,j as p}from"./iframe-DECrqAgD.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-ChAqY8HT.js";import s from"./Help.stories-B9h7EDnd.js";import n from"./RadioButton.stories-B48GRFG8.js";import{F as c}from"./FieldGroup-DRVrmMGR.js";import{C as d}from"./Checkbox-CpkqmrrH.js";import{H as l}from"./Help-O0kCf7o-.js";import{R as u}from"./RadioButton-BOFlZhZ_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CMfKobtR.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BxSRokoB.js";import"./mergeRefs-DSG6Atq-.js";import"./BaseRadioButton.stories-Dmjt9QHW.js";import"./BaseRadioButton-DDrZwjn5.js";import"./useId-v0YU8Q5R.js";/* empty css               */import"./Label-CxnBLO9q.js";import"./SupportLabel-CBt7kgVR.js";import"./SuccessIcon-Bzqc9ZZ6.js";import"./Icon-BCQk59Ds.js";import"./WarningIcon-BE_0lku-.js";import"./Button-BE-hsX-8.js";import"./usePreviousValue-DBKqodMP.js";import"./Loader-wlf3OyO3.js";import"./useDelayedRender-Cc7pmPzg.js";const A={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,D as __namedExportsOrder,A as default};
