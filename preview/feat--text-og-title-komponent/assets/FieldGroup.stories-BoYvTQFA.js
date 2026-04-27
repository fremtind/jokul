import{j as p,r as a}from"./iframe-zTb1wYgu.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CW4qYt9W.js";import{H as s,m as n}from"./Help.stories-C3TzV4mp.js";import c from"./RadioButton.stories-BUbhkDj6.js";import{F as d}from"./FieldGroup-q1tB4h2T.js";import{R as l}from"./RadioButton-Dyrh3k1C.js";import{C as u}from"./Checkbox-ClZV_qfx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CcFj2Hdl.js";import"./Label-CvZFZIXV.js";import"./SupportLabel-cqiKS8Qh.js";import"./WarningIcon-BTh9YEm7.js";import"./Icon-rpkwJiQf.js";import"./Button-DJr3ofXj.js";import"./usePreviousValue-CYtPl_Zo.js";import"./Loader-DVcCIXf7.js";import"./useDelayedRender-CDGQnTMG.js";/* empty css               *//* empty css               */import"./Flex-BVVYt-vG.js";import"./SlotComponent-CihSAJMw.js";import"./mergeRefs-DGyYW4N7.js";import"./BaseRadioButton.stories-CX-1dA6u.js";import"./BaseRadioButton-pl3D8CVe.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
