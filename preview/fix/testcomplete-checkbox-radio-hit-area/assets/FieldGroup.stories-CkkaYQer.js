import{j as p,r as a}from"./iframe-DIfcPc2U.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CGpCpvm3.js";import{H as s,m as n}from"./Help.stories-DWQSt_kY.js";import c from"./RadioButton.stories-DLHDcnSh.js";import{F as d}from"./FieldGroup-7aRYQO1d.js";import{R as l}from"./RadioButton-DDweaPra.js";import{C as u}from"./Checkbox-ucuuhhyP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-9YVcqFFs.js";import"./Label-B1hVH-ut.js";import"./SupportLabel-aT7N09fh.js";import"./WarningIcon-DMgeUR35.js";import"./Icon-BkBljnZt.js";import"./Button-oGf1P_vU.js";import"./usePreviousValue-DUz4SArf.js";import"./Loader-DhnlPI3z.js";import"./useDelayedRender-DNTvbDv8.js";/* empty css               *//* empty css               */import"./Flex-D-cycr2e.js";import"./SlotComponent-ALXI8RZL.js";import"./mergeRefs-BrSeZ4Yr.js";import"./BaseRadioButton.stories-B5dRBjIF.js";import"./BaseRadioButton-Cf6diw13.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
