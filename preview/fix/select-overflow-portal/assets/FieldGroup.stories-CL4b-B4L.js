import{r as a,j as p}from"./iframe-y1abKGuH.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cedq9kmm.js";import{H as s,m as n}from"./Help.stories-Ca-R4EAm.js";import c from"./RadioButton.stories-DvnUrL8M.js";import{F as d}from"./FieldGroup-ML8e_jCl.js";import{C as l}from"./Checkbox-PhO6nQ9n.js";import{R as u}from"./RadioButton-qdXH741v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CGNats1b.js";import"./Button-CraQGbcX.js";import"./usePreviousValue-Du8uEnEV.js";import"./Loader-CRrTdQSf.js";import"./useDelayedRender-DReiips7.js";/* empty css               *//* empty css               */import"./Flex-C5PSKSRL.js";import"./SlotComponent-CIMmFx3F.js";import"./mergeRefs-BGod737K.js";import"./BaseRadioButton.stories-BSgD2gOU.js";import"./BaseRadioButton-CVfcMTtk.js";import"./useId-Dx0IZtHf.js";/* empty css               */import"./Label-DlO7-hyP.js";import"./SupportLabel-BsPNQodd.js";import"./WarningIcon-BdBCdMjk.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
