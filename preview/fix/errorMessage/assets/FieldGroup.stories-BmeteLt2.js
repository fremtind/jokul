import{r as a,j as p}from"./iframe-urgnXIU9.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DtGEybJd.js";import{H as s,m as n}from"./Help.stories-BzeX85q7.js";import c from"./RadioButton.stories-BwbXkKNE.js";import{F as d}from"./FieldGroup-BM8pkPwf.js";import{C as l}from"./Checkbox-DG9Ds3Ju.js";import{R as u}from"./RadioButton-B5r1ZMJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CeELcob2.js";import"./Button-BsJVTkT0.js";import"./usePreviousValue-CH2Lk00_.js";import"./Loader-D75Q0nKU.js";import"./useDelayedRender-_5Lr0tLf.js";/* empty css               *//* empty css               */import"./Flex-Wglhb6Qp.js";import"./SlotComponent-BNcBdLLa.js";import"./mergeRefs-C37YOl8i.js";import"./BaseRadioButton.stories-Beb2ytfu.js";import"./BaseRadioButton-DEilXmCd.js";import"./useId-D-TcWVDC.js";import"./Label-Dz7si7u4.js";import"./SupportLabel-CPq8890n.js";import"./SuccessIcon-DhRosu-h.js";import"./WarningIcon-El9rVX5s.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
