import{r as a,j as p}from"./iframe-C1ecOCXO.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bd6naaDi.js";import{H as s,m as n}from"./Help.stories-OgVbSJlL.js";import c from"./RadioButton.stories-C8gPIYwn.js";import{F as d}from"./FieldGroup-vbe_vgRG.js";import{C as l}from"./Checkbox-BxIY4nRw.js";import{R as u}from"./RadioButton-VetdYgs4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ClVmktrj.js";import"./Button-BOfSxt1D.js";import"./usePreviousValue-luHfr8zD.js";import"./Loader-Bvnuiv0M.js";import"./useDelayedRender-DTkXgdqR.js";/* empty css               *//* empty css               */import"./Flex-BQVeF9N7.js";import"./SlotComponent-KRKqAhyS.js";import"./mergeRefs-Duo39vGV.js";import"./BaseRadioButton.stories-BwTolfeX.js";import"./BaseRadioButton-BhwdeV45.js";import"./useId-CwINUHNZ.js";/* empty css               */import"./Label-CjDhtAYq.js";import"./SupportLabel-Bzv-KQyt.js";import"./WarningIcon-BQvOLsum.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
