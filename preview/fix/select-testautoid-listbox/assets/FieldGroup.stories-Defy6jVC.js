import{r as a,j as p}from"./iframe-C-6dUzrk.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DMX4VW4i.js";import{H as s,m as n}from"./Help.stories-qbSPoD-d.js";import c from"./RadioButton.stories-DSRA29hk.js";import{F as d}from"./FieldGroup-c0QtDG0N.js";import{C as l}from"./Checkbox-Dj45n0L9.js";import{R as u}from"./RadioButton-BM30s84L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Cxd3B0hj.js";import"./Button-DY0r-59g.js";import"./usePreviousValue-L4fT30a8.js";import"./Loader-DfCgUDWX.js";import"./useDelayedRender-DrElXzWm.js";/* empty css               *//* empty css               */import"./Flex-NDLW2PIJ.js";import"./SlotComponent-9Esg1e6Y.js";import"./mergeRefs-BB50QmVj.js";import"./BaseRadioButton.stories-CoquMy6Q.js";import"./BaseRadioButton-DuCgzP15.js";import"./useId-D9my0YO8.js";/* empty css               */import"./Label-COyaHIf5.js";import"./SupportLabel-Ct-MpkXL.js";import"./WarningIcon-B47msko2.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
