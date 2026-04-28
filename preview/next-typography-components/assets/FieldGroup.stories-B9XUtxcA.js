import{j as p,r as a}from"./iframe-Bytarb_x.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dx11Qsq7.js";import{H as s,m as n}from"./Help.stories-_7FWlhpf.js";import c from"./RadioButton.stories-BjO8mzkB.js";import{F as d}from"./FieldGroup-XOsCaOQ2.js";import{R as l}from"./RadioButton-7qguN45w.js";import{C as u}from"./Checkbox-O0gCwB7F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ed5AFp6u.js";import"./Label-C544P062.js";import"./SupportLabel-HEIgEDCv.js";import"./WarningIcon-B1jomRO8.js";import"./Icon-CHBlijIw.js";import"./Button-Er0qVzBn.js";import"./usePreviousValue-BFHoD71S.js";import"./Loader-BnXRhOYN.js";import"./useDelayedRender-C-foweIv.js";/* empty css               *//* empty css               */import"./Flex-C3GwwikO.js";import"./SlotComponent-D0GI_nSj.js";import"./mergeRefs-DhZToldK.js";import"./BaseRadioButton.stories-BYxccnyO.js";import"./BaseRadioButton-COQK_VE6.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
