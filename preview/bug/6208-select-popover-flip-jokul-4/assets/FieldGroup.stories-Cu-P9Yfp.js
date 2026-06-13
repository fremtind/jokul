import{r as a,j as p}from"./iframe-BLtMU2EU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CEcxexJD.js";import{H as s,m as n}from"./Help.stories-DZbSZmT3.js";import c from"./RadioButton.stories-B9XEVW4S.js";import{F as d}from"./FieldGroup-C-0mSiZ6.js";import{C as l}from"./Checkbox-DeVAtSEl.js";import{R as u}from"./RadioButton-20UfRwOO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-PleXr-wx.js";import"./Button-BRmn3fFf.js";import"./usePreviousValue-Uff_raa8.js";import"./Loader-C-JOEXgd.js";import"./useDelayedRender-9sG4SyP0.js";/* empty css               *//* empty css               */import"./Flex-CSVvQKuO.js";import"./SlotComponent-BWymYsTm.js";import"./mergeRefs-DY-wGz07.js";import"./BaseRadioButton.stories-H5_UQ8Zs.js";import"./BaseRadioButton-DXh5jwrm.js";import"./useId-qghCB2Yp.js";/* empty css               */import"./Label-Bm6R_yVf.js";import"./SupportLabel-C16ujpu2.js";import"./WarningIcon-B6Z1lyYj.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
