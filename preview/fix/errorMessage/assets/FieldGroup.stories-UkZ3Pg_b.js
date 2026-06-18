import{r as a,j as p}from"./iframe-DlWmKjDn.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bw7xXS-l.js";import{H as s,m as n}from"./Help.stories-Bg4q5Yu1.js";import c from"./RadioButton.stories-CYCdfDLf.js";import{F as d}from"./FieldGroup-COnW4MFb.js";import{C as l}from"./Checkbox-CcVw8Kxl.js";import{R as u}from"./RadioButton-CGieBBOk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CfDCEJrt.js";import"./Button-JcKOe2YA.js";import"./usePreviousValue-Cw1_A9zN.js";import"./Loader-Do4qq9Gv.js";import"./useDelayedRender-DL6OhDHs.js";/* empty css               *//* empty css               */import"./Flex-Dq4RULsU.js";import"./SlotComponent-C9aiWfd_.js";import"./mergeRefs-DEi_WI5h.js";import"./BaseRadioButton.stories-GBw0FFlj.js";import"./BaseRadioButton-zyRW5yWo.js";import"./useId-HA2S6j5e.js";import"./Label-DxgzhtHf.js";import"./SupportLabel-qHcV-8SK.js";import"./SuccessIcon-CljYjetG.js";import"./WarningIcon-7FGWtw0g.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
