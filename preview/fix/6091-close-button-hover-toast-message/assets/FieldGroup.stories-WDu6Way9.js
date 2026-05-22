import{r as a,j as p}from"./iframe-Bo6z-5Rt.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-ru_RdkZi.js";import{H as s,m as n}from"./Help.stories-k7Oa2dcp.js";import c from"./RadioButton.stories-Cikppi_z.js";import{F as d}from"./FieldGroup-D9lx1sC_.js";import{C as l}from"./Checkbox-BN8IsM8h.js";import{R as u}from"./RadioButton-BtoQLVuv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CZxChvRw.js";import"./Button-DBetrIpN.js";import"./usePreviousValue-DR2yB-x9.js";import"./Loader-C3xIa_eO.js";import"./useDelayedRender-C5FmHg02.js";/* empty css               *//* empty css               */import"./Flex-mR8GVCfu.js";import"./SlotComponent-Hk8n8fej.js";import"./mergeRefs-JcKZmQWy.js";import"./BaseRadioButton.stories-a4Uvm4ks.js";import"./BaseRadioButton-BrlLwZHY.js";import"./useId-Cxd8w2Or.js";/* empty css               */import"./Label-CzVjbhaM.js";import"./SupportLabel-GsyVjU3Q.js";import"./WarningIcon-yr6QGKZO.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
