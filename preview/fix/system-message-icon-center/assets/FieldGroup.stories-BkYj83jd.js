import{j as p,r as a}from"./iframe-JousdF1p.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BdAlsCSg.js";import{H as s,m as n}from"./Help.stories-DonPG93F.js";import c from"./RadioButton.stories-DdljEGLT.js";import{F as d}from"./FieldGroup-BsqRx5IZ.js";import{R as l}from"./RadioButton-DrihEhCV.js";import{C as u}from"./Checkbox-B7Nx8vbA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-bwfT0AS3.js";import"./Label-B-GnZEp8.js";import"./SupportLabel-BJLfzXQ1.js";import"./WarningIcon-DI63WPvu.js";import"./Icon-BVzSC_Eq.js";import"./Button-D_M-2YCM.js";import"./usePreviousValue-3IbzrHV5.js";import"./Loader-BB5WmrKn.js";import"./useDelayedRender-C484ZOKg.js";/* empty css               *//* empty css               */import"./Flex-0XdXoBy7.js";import"./SlotComponent-BSSCkifK.js";import"./mergeRefs-DQrDsgal.js";import"./BaseRadioButton.stories-Bj-1UC9T.js";import"./BaseRadioButton-Dyiy2Kiw.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
