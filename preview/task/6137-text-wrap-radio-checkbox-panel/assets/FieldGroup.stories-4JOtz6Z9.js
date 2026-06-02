import{r as a,j as p}from"./iframe-1FKgIogW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B1FpUPXG.js";import{H as s,m as n}from"./Help.stories-C8zH_cTV.js";import c from"./RadioButton.stories-B7JP5l1F.js";import{F as d}from"./FieldGroup-Cck9BFaT.js";import{C as l}from"./Checkbox-B6RURosp.js";import{R as u}from"./RadioButton-DeTMgGTz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-LlUmCnae.js";import"./Button-WVoIwiuN.js";import"./usePreviousValue-CKQOIeUb.js";import"./Loader-BZNbLkYy.js";import"./useDelayedRender-A_UZXoL2.js";/* empty css               *//* empty css               */import"./Flex-LacntHsy.js";import"./SlotComponent-CBgADQXV.js";import"./mergeRefs-CLO39Iqd.js";import"./BaseRadioButton.stories-YLX9InWO.js";import"./BaseRadioButton-B3IPps_s.js";import"./useId-CS0y4SMC.js";/* empty css               */import"./Label-DWp7XCoB.js";import"./SupportLabel-B2BzxaPG.js";import"./WarningIcon-B1JarSqy.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
