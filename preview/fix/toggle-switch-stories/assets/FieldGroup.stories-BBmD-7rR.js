import{r as a,j as p}from"./iframe-B7GIPB-S.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BhywkUv6.js";import{H as s,m as n}from"./Help.stories-CE1JCNAU.js";import c from"./RadioButton.stories-ChTP_bEZ.js";import{F as d}from"./FieldGroup-CM1GZdw1.js";import{C as l}from"./Checkbox-CApgNpsk.js";import{R as u}from"./RadioButton-DR6oOlA3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CbjxLrgk.js";import"./Button-BgrgTR3w.js";import"./usePreviousValue-D6a3jV6X.js";import"./Loader-Bqr8_TMK.js";import"./useDelayedRender-BiGNDJUY.js";/* empty css               *//* empty css               */import"./Flex-Bqc2Pr5k.js";import"./SlotComponent-D_pbcq4r.js";import"./mergeRefs-BjTv8F1i.js";import"./BaseRadioButton.stories-BZD7PNZ5.js";import"./BaseRadioButton-CT_T23Mn.js";import"./useId-oymTxlJc.js";/* empty css               */import"./Label-58AOQ-iN.js";import"./SupportLabel-mG6K6sij.js";import"./WarningIcon-CDrngDo8.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
