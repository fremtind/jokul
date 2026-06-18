import{r as a,j as p}from"./iframe-ZzwWBtT8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BJfzs9o8.js";import{H as s,m as n}from"./Help.stories-BLdAF0A9.js";import c from"./RadioButton.stories-DL0y_MG0.js";import{F as d}from"./FieldGroup-CJ06nP05.js";import{C as l}from"./Checkbox-CSl_JJe4.js";import{R as u}from"./RadioButton-D3AwJ08B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-OIzdIo2X.js";import"./Button-BuQVsAHk.js";import"./usePreviousValue-D4wUy14R.js";import"./Loader-B83r_19J.js";import"./useDelayedRender-Sd0FulaF.js";/* empty css               *//* empty css               */import"./Flex-CEVw-hsr.js";import"./SlotComponent-DudU3pqn.js";import"./mergeRefs-CHtMFw5y.js";import"./BaseRadioButton.stories-BE-Xbd1t.js";import"./BaseRadioButton-DLAnfskA.js";import"./useId-CgcJhHpv.js";/* empty css               */import"./Label-CK0K7X_n.js";import"./SupportLabel-DVbN4ZCJ.js";import"./SuccessIcon-C1ibKWid.js";import"./WarningIcon-DtcPBDgX.js";const z={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
