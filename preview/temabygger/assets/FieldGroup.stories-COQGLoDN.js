import{j as p,r as a}from"./iframe-12qmskAU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D749uFpb.js";import{H as s,m as n}from"./Help.stories-BATaFiyM.js";import c from"./RadioButton.stories-BIEftJPc.js";import{F as d}from"./FieldGroup-BpsidCau.js";import{R as l}from"./RadioButton-CWu2RLni.js";import{C as u}from"./Checkbox-CYW6IhV-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId--3OYPIyW.js";import"./Label-CdrRb7Ks.js";import"./SupportLabel-WGTG0BKp.js";import"./WarningIcon-BTsf84e5.js";import"./Icon-D3C3pe5k.js";import"./Button-BOcUAu4y.js";import"./usePreviousValue-fx-vYKiD.js";import"./Loader-DYMa7xR3.js";import"./useDelayedRender-BWys0yEY.js";/* empty css               *//* empty css               */import"./Flex-U5_ckPwK.js";import"./SlotComponent-CypuZTZI.js";import"./mergeRefs-ILtHoCvN.js";import"./BaseRadioButton.stories-CYYTF70-.js";import"./BaseRadioButton-D4lFl5vs.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
