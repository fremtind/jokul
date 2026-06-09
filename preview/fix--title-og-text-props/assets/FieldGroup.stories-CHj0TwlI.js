import{r as a,j as p}from"./iframe-Dotc7Kwc.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dp_vMjOv.js";import{H as s,m as n}from"./Help.stories-BZYlZZsd.js";import c from"./RadioButton.stories-Dh4gSqmf.js";import{F as d}from"./FieldGroup-zrbyj81x.js";import{C as l}from"./Checkbox-D7X0uIYL.js";import{R as u}from"./RadioButton-OLyzmVlI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-V5MTSRIS.js";import"./Button-1HGF9T-s.js";import"./usePreviousValue-Bjo1h6P4.js";import"./Loader-BTS91SXB.js";import"./useDelayedRender-ad8FVSQb.js";/* empty css               *//* empty css               */import"./Flex-BrKDLFi2.js";import"./SlotComponent-D74ArPQ4.js";import"./mergeRefs-D9w3BAdD.js";import"./BaseRadioButton.stories-CC3lH8dv.js";import"./BaseRadioButton-D2HkmK_p.js";import"./useId-BMjblqxJ.js";/* empty css               */import"./Label-CgUQeCN5.js";import"./SupportLabel-BmrYmgnO.js";import"./WarningIcon-BXohoqQI.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
