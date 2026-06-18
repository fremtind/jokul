import{r as a,j as p}from"./iframe-BIRCofEu.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-mD8zrDMH.js";import{H as s,m as n}from"./Help.stories-P1_vx4gQ.js";import c from"./RadioButton.stories-H0iTgrrL.js";import{F as d}from"./FieldGroup-CTpItwj7.js";import{C as l}from"./Checkbox-mkL3gcBb.js";import{R as u}from"./RadioButton-BOFJ6SMo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BFmXdsOK.js";import"./Button-sGVMFEBV.js";import"./usePreviousValue-D5ojGPeB.js";import"./Loader-BaMhXgP2.js";import"./useDelayedRender-BR7OchVN.js";/* empty css               *//* empty css               */import"./Flex-CAqYxNHG.js";import"./SlotComponent-CdmIkLKs.js";import"./mergeRefs-IThJ0Gpd.js";import"./BaseRadioButton.stories-O8DgaAiG.js";import"./BaseRadioButton-NkSo65RQ.js";import"./useId-CURndpk8.js";import"./Label-B0DKykiW.js";import"./SupportLabel-CGlAz5yK.js";import"./SuccessIcon-B7rGBX8s.js";import"./WarningIcon-Dm9fxrCk.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
