import{r as a,j as p}from"./iframe-W15xCes2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Ddh1fx-2.js";import s from"./Help.stories-DkzQBu6n.js";import n from"./RadioButton.stories-B6ZO05Ni.js";import{F as c}from"./FieldGroup-DFO9nrXl.js";import{C as d}from"./Checkbox-BKOP0PRx.js";import{H as l}from"./Help-Bw0DxD22.js";import{R as u}from"./RadioButton-DMx-k-Vz.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CT-pRSRR.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BLMbytm0.js";import"./mergeRefs-K3is11jf.js";import"./BaseRadioButton.stories-C5Sieh6c.js";import"./BaseRadioButton-BUdfYoBl.js";import"./useId-DSZZTfAa.js";import"./Label-CUk2OfHs.js";import"./SupportLabel-B9YUdPWQ.js";import"./SuccessIcon-DH-wJ1GD.js";import"./Icon-DaoKULiV.js";import"./WarningIcon-BuAAP4hM.js";import"./Button-C_nycmKl.js";import"./usePreviousValue-BHCYXLnd.js";import"./Loader-D9RUAxSq.js";import"./useDelayedRender-BpTMIk1U.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
