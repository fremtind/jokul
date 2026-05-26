import{r as a,j as p}from"./iframe-DH0OByB-.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-SWOROlzJ.js";import{H as s,m as n}from"./Help.stories-nN-4RmZU.js";import c from"./RadioButton.stories-ZRXwFNTy.js";import{F as d}from"./FieldGroup-f64oo9RH.js";import{C as l}from"./Checkbox-CvdUiUfL.js";import{R as u}from"./RadioButton-9MAC0e-X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Drx_Lw6b.js";import"./Button-CocEq6E6.js";import"./usePreviousValue-2duvE3t4.js";import"./Loader-CPyFVzTN.js";import"./useDelayedRender-D80RFHdd.js";/* empty css               *//* empty css               */import"./Flex-CVIxuDLX.js";import"./SlotComponent-DQaGaHOH.js";import"./mergeRefs-BlfeyroE.js";import"./BaseRadioButton.stories-Cv8FFZBU.js";import"./BaseRadioButton-C8Am20rA.js";import"./useId-BGvKdR2_.js";/* empty css               */import"./Label-DSfI0tg3.js";import"./SupportLabel-DRiLAgGl.js";import"./WarningIcon-CSWMSOy_.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
