import{r as a,j as p}from"./iframe-CTbQ37GR.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BLuKcEXM.js";import{H as s,m as n}from"./Help.stories-CxEKJT1D.js";import c from"./RadioButton.stories-ZxNi_gxw.js";import{F as d}from"./FieldGroup-B55XFKeH.js";import{C as l}from"./Checkbox-B2-izets.js";import{R as u}from"./RadioButton-BDw5x-VB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DH3AneDh.js";import"./Button-OINcNFhT.js";import"./usePreviousValue-jMCAhOxF.js";import"./Loader-Dd5r97X1.js";import"./useDelayedRender-Cn_5O2sA.js";/* empty css               *//* empty css               */import"./Flex-CV5d1Oa-.js";import"./SlotComponent-Broje9WZ.js";import"./mergeRefs-Brrq9sk_.js";import"./BaseRadioButton.stories-DsYTFTHZ.js";import"./BaseRadioButton-C_v4rDP_.js";import"./useId-9xkqMgJy.js";/* empty css               */import"./Label-CBdtC75F.js";import"./SupportLabel-C3WxlAcS.js";import"./WarningIcon-DhbtjuSN.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
