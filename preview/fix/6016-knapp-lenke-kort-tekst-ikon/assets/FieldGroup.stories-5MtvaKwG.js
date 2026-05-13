import{r as a,j as p}from"./iframe-C_jnypGb.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Deo7A22A.js";import{H as s,m as n}from"./Help.stories-BCZQZA61.js";import c from"./RadioButton.stories-BzPNjop6.js";import{F as d}from"./FieldGroup-BZamiipg.js";import{C as l}from"./Checkbox-CBak0wrw.js";import{R as u}from"./RadioButton-DSqmWrIG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C35aMim2.js";import"./Button-CQMcpk5p.js";import"./usePreviousValue-BfJU4kPV.js";import"./Loader-BmaFj-z-.js";import"./useDelayedRender-BDAUSEGF.js";/* empty css               *//* empty css               */import"./Flex-BB3Fu13V.js";import"./SlotComponent-Cg-gVxH9.js";import"./mergeRefs-CWSmcqEq.js";import"./BaseRadioButton.stories-DUbdkXc9.js";import"./BaseRadioButton-BTItJkvF.js";import"./useId-CBPEHCpT.js";/* empty css               */import"./Label-qhE3BUQL.js";import"./SupportLabel-DuRnDI1p.js";import"./WarningIcon-BJFsy4VN.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
