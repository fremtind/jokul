import{r as a,j as p}from"./iframe-Bjv_KgzE.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CRv5C5NX.js";import s from"./Help.stories-BfLvpd4Y.js";import n from"./RadioButton.stories-DFr9VWOc.js";import{F as c}from"./FieldGroup-CtaUiKCO.js";import{C as d}from"./Checkbox-xCTjzLq0.js";import{H as l}from"./Help-CHTw_a5H.js";import{R as u}from"./RadioButton-PruW2PZw.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-IKYgYkYl.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BlRy8pQq.js";import"./mergeRefs-1hgjy6af.js";import"./BaseRadioButton.stories-BaP3CUKT.js";import"./BaseRadioButton-om0f2qIX.js";import"./useId-Dufhz9ey.js";/* empty css               */import"./Label-unL0otln.js";import"./SupportLabel-DZdi5IeT.js";import"./SuccessIcon-CCmZzOHD.js";import"./Icon-7NrcGDwC.js";import"./WarningIcon-CVIKJ5dl.js";import"./Button-KU6L4M8q.js";import"./usePreviousValue-CVuRAxUZ.js";import"./Loader-BVqZjxLh.js";import"./useDelayedRender-Dy1gIxmU.js";const A={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,D as __namedExportsOrder,A as default};
