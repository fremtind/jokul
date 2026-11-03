import{r as a,j as p}from"./iframe-kg9S_bw1.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CiaKzysG.js";import{H as s,m as n}from"./Help.stories-GvA2yZWT.js";import c from"./RadioButton.stories-Ctv17QFK.js";import{F as d}from"./FieldGroup-DLat1vlR.js";import{C as l}from"./Checkbox-D4Sb6sy3.js";import{R as u}from"./RadioButton-BnTnz1Vy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BwLLaNFX.js";import"./Button-ZkimLYND.js";import"./usePreviousValue-DYCSkzz_.js";import"./Loader-QzUkKlcZ.js";import"./useDelayedRender-nvnxvS9O.js";/* empty css               *//* empty css               */import"./Flex-DTefJ4ZP.js";import"./SlotComponent-a8A3qg7n.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-Dw53MPlP.js";import"./BaseRadioButton-eogd-emD.js";import"./useId-DDxJ8xWM.js";/* empty css               */import"./Label-DDpbDdfc.js";import"./SupportLabel-D_7E-CCH.js";import"./WarningIcon-BdeQmeSx.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
