import{r as a,j as p}from"./iframe-DqkTG_rX.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-JnM6qTYj.js";import{H as s,m as n}from"./Help.stories-Cy5fCZCt.js";import c from"./RadioButton.stories-DJGaJWLe.js";import{F as d}from"./FieldGroup-pMGRiPXF.js";import{C as l}from"./Checkbox-IIxJayY_.js";import{R as u}from"./RadioButton-C7j79dxy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Co5H8vON.js";import"./Button-BYmY8cYk.js";import"./usePreviousValue-DQVZ7MNl.js";import"./Loader-H9kfukvU.js";import"./useDelayedRender-CITEmZdK.js";/* empty css               *//* empty css               */import"./Flex-DghRKkvO.js";import"./SlotComponent-CDs6Tsoe.js";import"./mergeRefs-BZ8Z7An3.js";import"./BaseRadioButton.stories-DvUtLgPz.js";import"./BaseRadioButton-DLgRv7nS.js";import"./useId-CS4Wjhfi.js";/* empty css               */import"./Label-C7_1EFuv.js";import"./SupportLabel-tSFV-HoI.js";import"./SuccessIcon-DT8DvwG_.js";import"./WarningIcon-DnZbW1EY.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
