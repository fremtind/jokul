import{r as a,j as p}from"./iframe-DrrEX-9p.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CBYNLrt9.js";import{H as s,m as n}from"./Help.stories-CPFkZQ2T.js";import c from"./RadioButton.stories-Ci5D2pB4.js";import{F as d}from"./FieldGroup-stsXSZXZ.js";import{C as l}from"./Checkbox-B9mRKYRS.js";import{R as u}from"./RadioButton-hVsteoS3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Cw2w7T3t.js";import"./Button-3VccX0zx.js";import"./usePreviousValue-DyrwEGUM.js";import"./Loader-D_YpCV5a.js";import"./useDelayedRender-B_ujafSU.js";/* empty css               *//* empty css               */import"./Flex-4KLHCqLE.js";import"./SlotComponent-B1uLOgAt.js";import"./mergeRefs-L3_km1pb.js";import"./BaseRadioButton.stories-DC26VATA.js";import"./BaseRadioButton-CAapTtP8.js";import"./useId-B3DqQoGg.js";/* empty css               */import"./Label-D452hEVR.js";import"./SupportLabel-B65P_6G2.js";import"./WarningIcon-CDEziEpe.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
