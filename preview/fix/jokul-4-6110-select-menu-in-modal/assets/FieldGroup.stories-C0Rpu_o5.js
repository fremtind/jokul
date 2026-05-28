import{r as a,j as p}from"./iframe-Bfjf-9vw.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-lkVFI4qM.js";import{H as s,m as n}from"./Help.stories-uFd9Yqvb.js";import c from"./RadioButton.stories-Pj49LxmA.js";import{F as d}from"./FieldGroup-Cdwmiyp8.js";import{C as l}from"./Checkbox-CaOvLVA9.js";import{R as u}from"./RadioButton-DL9up7Bk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-yRZ2Ll9y.js";import"./Button-9Wmhfai7.js";import"./usePreviousValue-D8tqwjb2.js";import"./Loader-DB5qbfqH.js";import"./useDelayedRender-PFTaXMUI.js";/* empty css               *//* empty css               */import"./Flex-BhFytTZK.js";import"./SlotComponent-GxBX4Fmk.js";import"./mergeRefs-DQhiGyla.js";import"./BaseRadioButton.stories-CFsakCIy.js";import"./BaseRadioButton-YNLahEBM.js";import"./useId-BdRPkL4w.js";/* empty css               */import"./Label-CMw6caem.js";import"./SupportLabel-BnR_vhph.js";import"./WarningIcon-BCILEco1.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
