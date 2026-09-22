import{r as a,j as p}from"./iframe-CLWaj1dQ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dh17tiIi.js";import{H as s,m as n}from"./Help.stories-47HHynSR.js";import c from"./RadioButton.stories-DMPUGAKC.js";import{F as d}from"./FieldGroup-Be26C_dp.js";import{C as l}from"./Checkbox-CpkZJqRo.js";import{R as u}from"./RadioButton-Cn3c1h2j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BERoSePB.js";import"./Button-DZlvNYBJ.js";import"./usePreviousValue-C7cO30Cx.js";import"./Loader-BObilODe.js";import"./useDelayedRender-BV7pu_fw.js";/* empty css               *//* empty css               */import"./Flex-C3T9jr_P.js";import"./SlotComponent-Cr3NUJJ8.js";import"./mergeRefs-BMfgRmvI.js";import"./BaseRadioButton.stories-O2I8z6-9.js";import"./BaseRadioButton-DtgcH2Zw.js";import"./useId-BXuyeSqm.js";/* empty css               */import"./Label-D7EaKjz1.js";import"./SupportLabel-CegxaItl.js";import"./WarningIcon-CIMjZBnN.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
