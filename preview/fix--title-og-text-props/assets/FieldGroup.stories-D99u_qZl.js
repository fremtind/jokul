import{r as a,j as p}from"./iframe-C_o0I2zW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-AMsl5_0S.js";import{H as s,m as n}from"./Help.stories-Db1CpGvy.js";import c from"./RadioButton.stories-COU1PECw.js";import{F as d}from"./FieldGroup-CnV2ylf5.js";import{C as l}from"./Checkbox-D0tfa-YH.js";import{R as u}from"./RadioButton-xre5FAKl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CdEoHhLF.js";import"./Button-B1ec0ccx.js";import"./usePreviousValue-djvxVuOJ.js";import"./Loader-BGu1ZqAf.js";import"./useDelayedRender-CH6fs2vo.js";/* empty css               *//* empty css               */import"./Flex-BGSVDogb.js";import"./SlotComponent-Dj0MK7DQ.js";import"./mergeRefs-iDi1bs1I.js";import"./BaseRadioButton.stories-DomUK57g.js";import"./BaseRadioButton-CjhFcbUa.js";import"./useId-BDw1D1TT.js";/* empty css               */import"./Label-tBDAOycr.js";import"./SupportLabel-BujnyW5m.js";import"./WarningIcon-CG83_kEX.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
