import{r as a,j as p}from"./iframe-CeBuZ173.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-4p8dCY7e.js";import{H as s,m as n}from"./Help.stories-Bd2hz2rQ.js";import c from"./RadioButton.stories-B5q-5oBC.js";import{F as d}from"./FieldGroup-CfhXo8A9.js";import{C as l}from"./Checkbox-CUSvYDgu.js";import{R as u}from"./RadioButton-Bjuj_UIu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Cwt2byyX.js";import"./Button-i8U2bMoD.js";import"./usePreviousValue-fNSo4Wen.js";import"./Loader-BU80y3Jq.js";import"./useDelayedRender-Bt9hX0xd.js";/* empty css               *//* empty css               */import"./Flex-Dr-mKyxc.js";import"./SlotComponent-CruTlZf2.js";import"./mergeRefs-ClGN0tz1.js";import"./BaseRadioButton.stories-Ce9i25q1.js";import"./BaseRadioButton-DamFHtw4.js";import"./useId-2ZMxD3q-.js";import"./Label-Bi7Vhflv.js";import"./SupportLabel-d2pbHFoz.js";import"./SuccessIcon-Lh32IGwX.js";import"./WarningIcon-DrYwL1ga.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
