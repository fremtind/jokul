import{r as a,j as p}from"./iframe-V2Wyp4xM.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Cz19sQur.js";import{H as s,m as n}from"./Help.stories-DPh9dzZ2.js";import c from"./RadioButton.stories-I1Jqts39.js";import{F as d}from"./FieldGroup-CUMAZef9.js";import{C as l}from"./Checkbox-B0-6GFqF.js";import{R as u}from"./RadioButton-BFhRDc8l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DRBvMYRR.js";import"./Button-CP0IS9Iu.js";import"./usePreviousValue-CIoy7LJQ.js";import"./Loader-jy4TTXaB.js";import"./useDelayedRender-ByME3fG8.js";/* empty css               *//* empty css               */import"./Flex--VjB5Znk.js";import"./SlotComponent-iQpwsBah.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-Bi_x2p71.js";import"./BaseRadioButton-CkZHwhoQ.js";import"./useId-B-UHUOJ0.js";/* empty css               */import"./Label-BuiFYH4H.js";import"./SupportLabel-FL1FCUFh.js";import"./WarningIcon-BBuzsZfd.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}},z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
