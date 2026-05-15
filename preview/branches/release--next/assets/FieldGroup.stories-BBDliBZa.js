import{r as a,j as p}from"./iframe-C_WQXW_A.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bj3nmO0d.js";import{H as s,m as n}from"./Help.stories-B7dlVz1Y.js";import c from"./RadioButton.stories-DeP8jXiq.js";import{F as d}from"./FieldGroup-rmWjGZh9.js";import{C as l}from"./Checkbox-B7vK-89O.js";import{R as u}from"./RadioButton-CYerL4D2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Bi58p3e-.js";import"./Button-DtwDaEiu.js";import"./usePreviousValue-Dyw-_qrk.js";import"./Loader-DgKaqOIX.js";import"./useDelayedRender-o023YWPh.js";/* empty css               *//* empty css               */import"./Flex-DQkJh1a6.js";import"./SlotComponent-Dr6bva_y.js";import"./mergeRefs-Cowregqd.js";import"./BaseRadioButton.stories-B-7Sv3EC.js";import"./BaseRadioButton-DLVkstyj.js";import"./useId-BXs3DG-a.js";import"./Label-I9ucDCuJ.js";import"./SupportLabel-D8hAHZyj.js";import"./WarningIcon-gCEspP9G.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
