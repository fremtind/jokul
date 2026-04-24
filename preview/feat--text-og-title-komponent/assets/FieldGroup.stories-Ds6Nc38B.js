import{j as p,r as a}from"./iframe-Bq_zWpjG.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D0mF0scC.js";import{H as s,m as n}from"./Help.stories-BPvO0c_G.js";import c from"./RadioButton.stories-eSyDcFX1.js";import{F as d}from"./FieldGroup-_L8Hshyl.js";import{R as l}from"./RadioButton-C4VxNWU9.js";import{C as u}from"./Checkbox-CDM2eoCL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CCRC9UYz.js";import"./Label-BgPIeJu5.js";import"./SupportLabel-C9BsNJpA.js";import"./WarningIcon-4ILhv2et.js";import"./Icon-Coo_j_Hx.js";import"./Button-D5mXiKL4.js";import"./usePreviousValue-BPVqKOK-.js";import"./Loader-D9On2dXD.js";import"./useDelayedRender-C8nCpKC1.js";/* empty css               *//* empty css               */import"./Flex-BA8tadIs.js";import"./SlotComponent-M1yRGOM-.js";import"./mergeRefs-BTmdILdX.js";import"./BaseRadioButton.stories-Deq4t2Lr.js";import"./BaseRadioButton-CJNR_wVv.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
