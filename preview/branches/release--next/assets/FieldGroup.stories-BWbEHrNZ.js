import{r as a,j as p}from"./iframe-CbVzgljb.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bg0Oy-Fr.js";import{H as s,m as n}from"./Help.stories-DjP8RBPA.js";import c from"./RadioButton.stories-BcnQIAN0.js";import{F as d}from"./FieldGroup-D9UHirs4.js";import{C as l}from"./Checkbox-DJXB6-0B.js";import{R as u}from"./RadioButton-3uP4UWMv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DYIqOKBd.js";import"./Button-CF7VLk3r.js";import"./usePreviousValue-CgNGPr-h.js";import"./Loader-DvWs7X9f.js";import"./useDelayedRender-DVw9ZQQ_.js";/* empty css               *//* empty css               */import"./Flex-Cam7XsT3.js";import"./SlotComponent-CAxTN-FV.js";import"./mergeRefs-D32Mb2jR.js";import"./BaseRadioButton.stories-DyJsLfEk.js";import"./BaseRadioButton-Dt2vr2GV.js";import"./useId-D9OZSiZI.js";import"./Label-DUOUiTPI.js";import"./SupportLabel-DbGyd2Qv.js";import"./WarningIcon-BDmw08Cz.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(u,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
