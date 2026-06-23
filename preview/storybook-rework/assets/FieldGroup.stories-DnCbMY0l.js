import{r as a,j as p}from"./iframe-BAyTcUFD.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-8usQ2UzX.js";import s from"./Help.stories-B94w9cI4.js";import n from"./RadioButton.stories-BGKTaBRS.js";import{F as c}from"./FieldGroup-DVtS4Ivx.js";import{C as d}from"./Checkbox-BS3UHog0.js";import{H as l}from"./Help-0rQU-_No.js";import{R as u}from"./RadioButton-dcDj8BeY.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C5PWD3Qp.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-qcnu8TRx.js";import"./mergeRefs-BoKt4kve.js";import"./BaseRadioButton.stories-C2VTjPm4.js";import"./BaseRadioButton-CjSuE0FU.js";import"./useId-DWL38C75.js";/* empty css               */import"./Label-CpxcSjvp.js";import"./SupportLabel-CQeMN5Yv.js";import"./SuccessIcon-CUwhY-kr.js";import"./Icon-DLLFMaPw.js";import"./WarningIcon-CEjoXlAd.js";import"./Button-1EDBxyYo.js";import"./usePreviousValue-L1wnC9Wo.js";import"./Loader-D9xl3MLX.js";import"./useDelayedRender-C9D5U9ul.js";const A={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,D as __namedExportsOrder,A as default};
