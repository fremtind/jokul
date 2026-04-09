import{j as p,r as a}from"./iframe-B0NXgE_J.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CAlVuP4H.js";import{H as s,m as n}from"./Help.stories-yMSQyOgY.js";import c from"./RadioButton.stories-Bumentef.js";import{F as d}from"./FieldGroup-DMrp32S8.js";import{R as l}from"./RadioButton-H6cgt0nU.js";import{C as u}from"./Checkbox-VaGG1fby.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ru8KQ18-.js";import"./Label-0vl8_Gia.js";import"./SupportLabel-ClWXHbNd.js";import"./WarningIcon-DFDU5c8D.js";import"./Icon-BCqJgAbh.js";import"./Button-BMmSP7eq.js";import"./usePreviousValue-Bz0qEMdn.js";import"./Loader-DcghMqqv.js";import"./useDelayedRender-8x_z0w98.js";/* empty css               *//* empty css               */import"./Flex-Buuuu2ES.js";import"./SlotComponent-Clz7kyuM.js";import"./mergeRefs-BcAMoxOk.js";import"./BaseRadioButton.stories-DI9hLT5z.js";import"./BaseRadioButton-C_MFwVTQ.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
