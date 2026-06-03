import{r as a,j as p}from"./iframe-CqFs1EPX.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DoCkev6z.js";import{H as s,m as n}from"./Help.stories-GLQ7Cwpk.js";import c from"./RadioButton.stories-CvXKll5t.js";import{F as d}from"./FieldGroup-CC5LBytJ.js";import{C as l}from"./Checkbox-D1GyM29Q.js";import{R as u}from"./RadioButton-Ds1IG1Vd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D7vyOGow.js";import"./Button-DaBHs9Mc.js";import"./usePreviousValue-DYvOjTGM.js";import"./Loader-tcmKF4F_.js";import"./useDelayedRender-Cs2Hr_kK.js";/* empty css               *//* empty css               */import"./Flex-COx3SKjV.js";import"./SlotComponent-BEBI6AVB.js";import"./mergeRefs-C7DModvO.js";import"./BaseRadioButton.stories-UvRAxmHe.js";import"./BaseRadioButton-B-lvAPAa.js";import"./useId-DxSjxyo3.js";/* empty css               */import"./Label-CAD9kVjM.js";import"./SupportLabel-CHJq-S-H.js";import"./WarningIcon-C3ok6_Zq.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
