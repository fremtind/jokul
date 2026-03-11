import{j as p,r as a}from"./iframe-BCWpal4A.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-pmSbZcUW.js";import s from"./Help.stories-DiLcuj3i.js";import n from"./RadioButton.stories-DlxLQ6I2.js";import{F as c}from"./FieldGroup-BDGQuVD0.js";import{R as d}from"./RadioButton-DVEl8bx3.js";import{C as l}from"./Checkbox-D9ScgyCh.js";import{H as u}from"./Help-C1zPuK1N.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ChvfsANx.js";import"./Label-Ku_A31Kd.js";import"./SupportLabel-DGvaJqhY.js";import"./WarningIcon-mpDBCjpR.js";import"./Icon-DkiQWG3k.js";/* empty css               *//* empty css               */import"./Flex-C0iYgjdy.js";import"./SlotComponent-C47hL0-w.js";import"./mergeRefs--U_bgZXx.js";import"./BaseRadioButton.stories-Kjn1oJ2L.js";import"./BaseRadioButton-3dXl9o0b.js";import"./Button-DzVqxUCC.js";import"./usePreviousValue-DC8mB-8h.js";import"./Loader-Ci9CB3hs.js";import"./useDelayedRender-CgjaPse-.js";const w={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(d,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(u,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
