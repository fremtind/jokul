import{r as a,j as p}from"./iframe-Bn10nHlo.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CO7JiJ3X.js";import{H as s,m as n}from"./Help.stories-DUxdWYYq.js";import c from"./RadioButton.stories-CBRuxv56.js";import{F as d}from"./FieldGroup-C44A613m.js";import{C as l}from"./Checkbox-B4jNvGfm.js";import{R as u}from"./RadioButton-BiU0e7xQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-AVUxmXTb.js";import"./Button-DKd2RJvo.js";import"./usePreviousValue-DwBgEJCf.js";import"./Loader-F5Juhns0.js";import"./useDelayedRender-x7SujLkt.js";/* empty css               *//* empty css               */import"./Flex-7ZENuNNI.js";import"./SlotComponent-D4sX8bpn.js";import"./mergeRefs-MUN-bjOE.js";import"./BaseRadioButton.stories-pBDtDK1o.js";import"./BaseRadioButton-DkkJ7wHG.js";import"./useId-Bg5Y7JUz.js";/* empty css               */import"./Label-CrVIxVMH.js";import"./SupportLabel-CYtpXEDK.js";import"./WarningIcon-P6gTrtbQ.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
