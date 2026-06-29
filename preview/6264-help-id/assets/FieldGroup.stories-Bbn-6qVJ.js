import{r as a,j as p}from"./iframe-uNo2hs0L.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dq2fLllV.js";import s from"./Help.stories-D-wXhtGf.js";import n from"./RadioButton.stories-Crmxj_Vt.js";import{F as c}from"./FieldGroup-B6kjbu-G.js";import{C as d}from"./Checkbox-D8tHGnh9.js";import{H as l}from"./Help-DFLEP-n9.js";import{R as u}from"./RadioButton-DTGRGHUl.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-qgC522TQ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Bo-LmhGx.js";import"./mergeRefs-B9e-lAII.js";import"./BaseRadioButton.stories-CIKWaRi-.js";import"./BaseRadioButton-D7qKxS-O.js";import"./useId-DTBnZPEq.js";import"./Label-CrP9I0gq.js";import"./SupportLabel-o0CvJz-M.js";import"./SuccessIcon-CT2X7Ar7.js";import"./Icon-DXTyO9M5.js";import"./WarningIcon-DQdKSFyP.js";import"./Button-qa3dKnDy.js";import"./usePreviousValue-B_D9-oEd.js";import"./Loader-POH2jayb.js";import"./useDelayedRender-hifR-Rqt.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
