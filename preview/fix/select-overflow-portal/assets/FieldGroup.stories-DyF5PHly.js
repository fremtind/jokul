import{r as a,j as p}from"./iframe-B5-ZbgwI.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dz1x-OjS.js";import{H as s,m as n}from"./Help.stories-CLXiQ1hG.js";import c from"./RadioButton.stories-DQUaIjNd.js";import{F as d}from"./FieldGroup-DNG2Lq6X.js";import{C as l}from"./Checkbox-CVcezrEn.js";import{R as u}from"./RadioButton-D66MEbu2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-QgREyQh0.js";import"./Button-eHdFylSY.js";import"./usePreviousValue-CkzsMO04.js";import"./Loader-zHlNI-MN.js";import"./useDelayedRender-DGbsZ7__.js";/* empty css               *//* empty css               */import"./Flex-CNUjj7Lu.js";import"./SlotComponent-D36sua93.js";import"./mergeRefs-CVkCN28K.js";import"./BaseRadioButton.stories-C0fzHQAm.js";import"./BaseRadioButton-5np0bVKl.js";import"./useId-BvNPmu7j.js";/* empty css               */import"./Label-DzkzferG.js";import"./SupportLabel-CmmX3tGY.js";import"./WarningIcon-COGmFlL9.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
