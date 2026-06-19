import{r as a,j as p}from"./iframe-Cb6gFqyv.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bz9WMNnn.js";import s from"./Help.stories-B4DeNgiB.js";import n from"./RadioButton.stories-BGpvmHFv.js";import{F as c}from"./FieldGroup-kEfb69LU.js";import{C as d}from"./Checkbox-CWBT2uBU.js";import{H as l}from"./Help-CeZXH1oP.js";import{R as u}from"./RadioButton-CpY-0gTb.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C2lVTBi9.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DYpPs2lW.js";import"./mergeRefs-Czc7lRa1.js";import"./BaseRadioButton.stories-BE0BAx7A.js";import"./BaseRadioButton-TryV1kBD.js";import"./useId-DKawYrQb.js";/* empty css               */import"./Label-Cw4ogQbY.js";import"./SupportLabel-CseQLA6O.js";import"./SuccessIcon-BVgESurb.js";import"./Icon-DoUUJJDD.js";import"./WarningIcon-CiqfiCIY.js";import"./Button-CalBW99A.js";import"./usePreviousValue-C42uI4Nu.js";import"./Loader-DpcTcQQi.js";import"./useDelayedRender-n8IOyIjZ.js";const A={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
